import requests
from bs4 import BeautifulSoup
import pdfkit
import platform
import os
from urllib.parse import urlparse

DEFAULT_PDFKIT_OPTIONS = {
    'encoding': "UTF-8",
    'custom-header': [
        ('Accept-Encoding', 'gzip')
    ],
    'quiet': ''
}


def get_domain_from_url(url):
    """Return domain from url"""
    prase_result = urlparse(url)
    return "{}://{}".format(prase_result.scheme, prase_result.netloc)


def get_options(options):
    if options is None:
        return DEFAULT_PDFKIT_OPTIONS
    else:
        return dict(DEFAULT_PDFKIT_OPTIONS, options)


def check_wkhtmltopdf_instal(wkhtmltopdf):
    """Return pdfkit configuration, if wkhtmltopdf was set correctly"""
    if wkhtmltopdf is not None:
        command = "{} -V".format(wkhtmltopdf)
    else:
        command = "wkhtmltopdf -V"

    code = os.system(command)

    if code == 0:
        return pdfkit.configuration(
            wkhtmltopdf=wkhtmltopdf)
    else:
        raise ValueError("wkhtmltopdf is not instal correctly in this system")


class DownloadVuePress2Pdf:

    def __init__(self, source_url, pdf_name, **kwargs):
        self.source_url = source_url
        self.url_list_dict = {}
        self.pdf_name = pdf_name
        self.domain = get_domain_from_url(source_url)

        self.save_html_path = kwargs.get("save_html_path", ".")
        assert os.path.exists(self.save_html_path) == True

        self.save_pdf_path = kwargs.get("save_pdf_path", ".")
        assert os.path.exists(self.save_pdf_path) == True

        self.config = check_wkhtmltopdf_instal(kwargs.get("wkhtmltopdf", None))
        self.options = get_options(kwargs.get("options", None))
        self.css_domain = kwargs.get("css_domain", self.domain)

    def down_all_page_to_pdf(self):
        if isinstance(self.source_url, list) and isinstance(self.pdf_name, list):
            assert len(self.source_url) == len(self.pdf_name)
            for i in range(len(self.source_url)):
                self.save_page_to_pdf(self.source_url[i], self.pdf_name[i])
        else:
            self.save_page_to_pdf(self.source_url, self.pdf_name)

    def save_page_to_pdf(self, url, name):
        self.url_list_dict[name] = []

        if self.download_page(url, name):
            try:
                pdfkit.from_file([("{}/{}-{}.html".format(self.save_html_path, name, str(i))) for i in range(len(
                    self.url_list_dict[name]))], "{}/{}.pdf".format(self.save_pdf_path, name), options=self.options, configuration=self.config)
            except OSError as e:
                pass
        return "{} download successfully".format(name)

    def download_page(self, url, name):

        page_content = self.get_page_content(url)

        content, next_page_url = self.get_content_and_next_url(page_content)

        self.save_content(content, len(self.url_list_dict[name]), name)

        self.url_list_dict[name].append(url)

        if next_page_url is not None:
            if self.domain in next_page_url:
                self.download_page(next_page_url, name)
            else:
                self.download_page(self.domain + next_page_url, name)
        return True

    def get_page_content(self, current_url):
        response = requests.get(current_url)
        return response.text

    def save_content(self, content, order_index, name):
        path = "{}/{}-{}.html".format(self.save_html_path,
                                      name, str(order_index))
        with open(path, 'w', encoding="utf-8") as f:
            f.write(content)

    def get_content_and_next_url(self, content):
        soup = BeautifulSoup(content, "html.parser")

        # replace local css to remote css
        links = soup.find_all(rel="stylesheet")

        css_domain = self.domain if self.css_domain is None else self.css_domain

        for link in links:
            if not link['href'].startswith("http"):
                link['href'] = css_domain + link['href']

        # decompose navbar,sidebar, page-edit, page-nav
        # get next url before decompose page-nav

        navbar = soup.select('.navbar')
        if len(navbar):
            navbar[0].decompose()

        sidebar = soup.select('.sidebar')
        if len(sidebar):
            sidebar[0].decompose()

        page_edit = soup.select('.page-edit')
        if len(page_edit):
            page_edit[0].decompose()

        next_span = soup.select(".next")
        if len(next_span):
            next_span_href = next_span[0].a['href']
        else:
            next_span_href = None

        page_nav = soup.select('.page-nav')
        if len(page_nav):
            page_nav[0].decompose()

        return soup.prettify(), next_span_href


down = DownloadVuePress2Pdf("https://sogrey.github.io/VuepressBlogTemplate/zh/guide/", "VuepressBlogTemplate",
                            wkhtmltopdf="D:\\wkhtmltopdf\\bin\\wkhtmltopdf.exe", save_html_path="./files", save_pdf_path='./')
down.down_all_page_to_pdf()