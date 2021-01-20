# wc - 统计文件的字节数、字数、行数

wc命令 统计指定文件中的字节数、字数、行数，并将统计结果显示输出。利用wc指令我们可以计算文件的Byte数、字数或是列数，若不指定文件名称，或是所给予的文件名为“-”，则wc指令会从标准输入设备读取数据。wc同时也给出所指定文件的总统计数。


## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
<div class="svg debian">Debian</div>
<div class="svg deepin">Deepin</div>
<div class="svg suse">SUSE</div>
<div class="svg opensuse">openSUSE</div>
<div class="svg fedora">Fedora</div>
<div class="svg linuxmint">Linux Mint</div>
<!-- <div class="svg mxlinux">MX Linux</div> -->
<div class="svg alpinelinux">Alpine Linux</div>
<div class="svg archlinux">Arch Linux</div>

## 语法

``` bash
wc  [选项]  file
```

## 选项

``` bash
-c, --bytes                      # 仅显示字节数
-m, --chars                      # 仅显示字符数
-l, --lines                      # 仅显示行数
-L, --max-line-length            # 显示文件中最长行的字符数
-w, words                        # 显示单词数

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon demos]$ ls
diff.txt  test2.txt  test3.txt  test4.txt  test.c  test.txt
[sogrey@bogon demos]$ cat test.txt
石家庄今日新增16例确诊病例
中国留美博士遇害 美驻华使馆慰问
特朗普夫人发文谴责国会暴乱
理塘文旅公司回应丁真抽烟
北京一确诊者隐瞒行程不配合流调
山西晋中新增2例无症状感染者
[sogrey@bogon demos]$ wc -c test.txt # 显示字节数
250 test.txt
[sogrey@bogon demos]$ wc -l test.txt # 显示行数
6 test.txt
```
