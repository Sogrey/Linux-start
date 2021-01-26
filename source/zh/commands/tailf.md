# tailf - 在屏幕上显示指定文件的末尾若干行内容，通常用于日志文件的跟踪输出

tailf命令几乎等同于tail -f，严格说来应该与tail --follow=name更相似些。当文件改名之后它也能继续跟踪，特别适合于日志文件的跟踪（follow the growth of a log file）。与tail -f不同的是，如果文件不增长，它不会去访问磁盘文件。tailf特别适合那些便携机上跟踪日志文件，因为它能省电，因为减少了磁盘访问。tailf命令不是个脚本，而是一个用C代码编译后的二进制执行文件，某些Linux安装之后没有这个命令。

tailf和tail -f的区别

- tailf 总是从文件开头一点一点的读， 而tail -f 则是从文件尾部开始读
- tailf check文件增长时，使用的是文件名， 用stat系统调用；而tail -f 则使用的是已打开的文件描述符； 注：tail 也可以做到类似跟踪文件名的效果； 但是tail总是使用fstat系统调用，而不是stat系统调用；结果就是：默认情况下，当tail的文件被偷偷删除时，tail是不知道的，而tailf是知道的。

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
tailf logfile # 动态跟踪日志文件logfile，最初的时候打印文件的最后10行内容。
```

## 选项

``` bash
-n, --lines NUMBER  # 输出最后数行
-NUMBER             # 与NUMBER相同 `-n NUMBER'

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon newDir3]$ tailf test2.txt
123
23
212

^C
[sogrey@bogon newDir3]$ tailf -n 1 test2.txt
212
```
