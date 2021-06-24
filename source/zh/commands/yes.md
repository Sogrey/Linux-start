# yes - 重复打印指定字符串
yes命令 在命令行中输出指定的字符串，直到yes进程被杀死。不带任何参数输入yes命令默认的字符串就是y。

反复的输出指定的字符串，直到手动停止。
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
yes  [STRING]...
yes  OPTION
```
如果不指定字符串，那么输出字符“y”

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
输出hello world
``` bash
[sogrey@bogon ~]$ yes hello world
hello world
hello world
hello world
hello world
hello world
hello world^C      //使用ctrl+c强制停止
```
输出字符y
``` bash
[sogrey@bogon ~]$ yes hello world
y
y
y
y
y
y^C      //使用ctrl+c强制停止
```