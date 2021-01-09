#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo -e "\033[32;40m [1/2] \033[0m init..."

pip install requests 
pip install beautifulsoup4 
pip install pdfkit

echo -e "\033[32;40m [2/2] \033[0m create pdf..."

cd vuepress2pdf 
python vuepress2pdf.py

echo -e "\033[32;40m [done] \033[0m "

cd -