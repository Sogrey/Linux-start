# unexpand - 将文件的空白字符转换为制表符

将文件中的空白字符转换为控制字符tab，将结果送到标准输出。空格数大于8才能被替换。如果没有指定文件，那么从标准输入读取。

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
unexpand  [选项]  file
```

## 选项

``` bash
-a                          # 转换所有的空格
--first-only                # 仅转换开头的空格
-t, --tabs                  # 指定tab代表的字符数，默认是8

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ ll
总用量 16
-rw-------. 1 sogrey sogrey  27 1月  27 23:37 1.txt
-rw-------. 1 sogrey sogrey  62 1月  24 01:03 students.txt
-rw-------. 1 sogrey sogrey  11 1月  24 01:08 test2.txt
-rw-------. 1 sogrey sogrey 135 1月  24 01:05 test.txt
[sogrey@bogon newDir3]$ cat 1.txt # 查看内容，有16个空格
nihao                linux
[sogrey@bogon newDir3]$ unexpand -a -t 16 1.txt # 替换16个空格，变为tab
nihao	     linux
[sogrey@bogon newDir3]$ 
```
