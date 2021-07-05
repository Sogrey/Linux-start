# echo - 输出指定的字符串或者变量

echo命令 用于在shell中打印shell变量的值，或者直接输出指定的字符串。linux的echo命令，在shell编程中极为常用, 在终端下打印变量value的时候也是常常用到的，因此有必要了解下echo的用法echo命令的功能是在显示器上显示一段文字，一般起到一个提示的作用。

echo指令可以输出内容到标准输出，以空白分割字符串，并且后面增加换行。

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
echo  [-neE]  [arg ...]
```

## 选项

``` bash
-n             # 输出字符串不换行
-e             # 处理某些特殊字符
               # \a 蜂鸣器警报
               # \b 删除前一个字符
               # \c 最后不加换行
               # \e 输出esc字符
               # \f 换行，光标停在原处
               # \n 换行
               # \r 光标移动到首行，不换行
               # \t 水平tab
               # \v 垂直tab
               # \\ 输出\
               # \0nnn 八进制nnn代表的ASCII字符
               # \xHH 十六进制数HH代表的ASCII字符
-E             # 禁用转义解释
```
## 举例

使用“\f”换行
``` bash
[root@localhost ~]$ echo -e "hello\fworld"     #必须使用-e选项，\f换行之后，光标还在结尾
hello
     world
[root@localhost ~]$
```
使用“\n”换行
``` bash
[root@localhost ~]$ echo -e "hello\nworld"    # 必须使用-e选项，\n换行之后，光标在开头
hello
world
[root@localhost ~]$
```
输出ascii字符
``` bash
[root@localhost ~]$ echo -e "\x31"   # 十六进制的31，换算成49，代表的ascii字符就是1
1
[root@localhost ~]$
```