# dirs - 显示目录堆栈
bind命令用来显示或者设置当前的键盘设置，可以通过bind了解当前组合按键功能，也可以自己设置。

bind命令 用于显示和设置命令行的键盘序列绑定功能。通过这一命令，可以提高命令行中操作效率。您可以利用bind命令了解有哪些按键组合与其功能，也可以自行指定要用哪些按键组合。


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
bind  [-m keymap]  [-lpsvPSV]
bind  [-m keymap]  [-q function]  [-u function]  [-r keyseq]
bind  [-m keymap]  -f  filename
bind  [-m keymap]  -x  keyseq:shell-command
bind  [-m keymap]  keyseq:function-name
bind  readline-command
```

## 选项

``` bash
-m keymap         # 使用键盘设置，可以使用的按键：emacs,  emacs-standard, emacs-meta, emacs-ctlx, vi, vi-move, vi-command, vi-insert
-l                # 显示所有的readline函数
-p                # 以可以重读的方式列出readline函数名和绑定情况
-P                # 列出当前readline函数和绑定情况
-s                # 列出可被重复读取的宏和字符串
-S                # 列出正在使用的宏和字符串
-v                # 以重读的方式列出readline变量名和数值
-V                # 列出正在使用的readline变量名和数值
-f                # 从文件中读取按键配置
-q                # 查询函数的唤醒按键
-u                # 接触函数的所有按键绑定
```
## 举例

显示当前所有的readline函数
``` bash
[root@localhost ~]$ bind –l    # 显示当前所有的readline函数
abort
accept-line
alias-expand-line
arrow-key-prefix
backward-byte
backward-char
backward-delete-char
backward-kill-line
backward-kill-word
backward-word
beginning-of-history
…
```
查看清屏函数的组合键
``` bash
[root@localhost ~]$ bind -q clear-screen   # 查看清屏函数的组合键
clear-screen can be invoked via "\C-l".
```
 