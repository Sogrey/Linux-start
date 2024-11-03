https://www.cnblogs.com/leetao94/p/10840552.html
执行：  python vuepress2pdf.py



报错： ModuleNotFoundError: No module named ‘requests’
```
pip install requests
```

报错：ModuleNotFoundError: No module named 'bs4'
```
pip install beautifulsoup4
```

报错：ModuleNotFoundError: No module named 'pdfkit'

pip install pdfkit

修改脚本最后两行 wkhtmltopdf 的值为你本地安装位置 (https://wkhtmltopdf.org/downloads.html)

安装完成之后可以 Windows 下可以将安装路径添加到系统环境变量中

~~~~~~~~~~~~~~~~~

https://github.com/qoda/python-wkhtmltopdf
https://github.com/JazzCore/python-pdfkit

···

可从微软商店安装python