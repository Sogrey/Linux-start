# fmt - 读取文件后优化处理并输出

fmt命令 读取文件的内容，根据选项的设置对文件格式进行简单的优化处理，并将结果送到标准输出设备。

将指定文件的内容，按照指定的格式重新排版，结果送到标准输出。

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
fmt  [width]  [选项]  file
```

## 选项

``` bash 
-c,  --crown-margin     # 每段前两行缩排
-p,  --prefix=STRING    # 重新排版以指定字符串开头的行
-s,  --split-only       # 将长行分割开
-t,  --tagged-paragraph # 将第一行缩进
-u,  --uniform-spacing  # 字与字之间一个空白，句子后两个空白
-w,  --width=WIDTH      # 设置每行字符数，默认75]

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ ll
总用量 16
-rw-------. 1 sogrey sogrey  38 1月  27 23:42 1.txt
-rw-------. 1 sogrey sogrey  62 1月  24 01:03 students.txt
-rw-------. 1 sogrey sogrey  11 1月  24 01:08 test2.txt
-rw-------. 1 sogrey sogrey 135 1月  24 01:05 test.txt
[sogrey@bogon newDir3]$ cat 1.txt
Hello linux,
I'm Sogrey.
Hello world!
[sogrey@bogon newDir3]$ fmt 1.txt # 直接格式化，将所有的内容合并成行
Hello linux, I'm Sogrey.  Hello world!
[sogrey@bogon newDir3]$ cat 1.txt
Hello linux,
I'm Sogrey.
Hello world!
[sogrey@bogon newDir3]$ fmt -5 -t 1.txt # 每行5个字符，第一行缩进
Hello
   linux,
I'm
   Sogrey.
Hello
   world!
[sogrey@bogon newDir3]$ 
```
