# expand - 将文件的制表符转换为空白字符 

expand命令 用于将文件的制表符（TAB）转换为空白字符（space），将结果显示到标准输出设备。

将文件中的tab转换成空格，结果送到标准输出。如果没有指定文件，那么从标准输入读取。

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
expand  [选项]  file
```

## 选项

``` bash
-i, --initial                    # 不转换空白行的tab
-t, --tabs                       # 指定tab代表的字符数，默认8个

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ ll
总用量 16
-rw-------. 1 sogrey sogrey  38 1月  24 22:46 1.txt
-rw-------. 1 sogrey sogrey  62 1月  24 01:03 students.txt
-rw-------. 1 sogrey sogrey  11 1月  24 01:08 test2.txt
-rw-------. 1 sogrey sogrey 135 1月  24 01:05 test.txt
[sogrey@bogon newDir3]$ cat 1.txt
hello	world,
i	love	linux,
love	code.
[sogrey@bogon newDir3]$ expand -t 1 1.txt # 将tab用1个空格代替
hello world,
i love linux,
love code.
[sogrey@bogon newDir3]$ 
```
