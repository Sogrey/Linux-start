# shopt - 显示和设置shell操作选项

shopt命令 用于显示和设置shell中的行为选项，通过这些选项以增强shell易用性。shopt命令若不带任何参数选项，则可以显示所有可以设置的shell操作选项。

shopt指令可以设置控制shell行为特性的变量的开关值。没有任何选项的时候，显示由shopt控制的变量以及值。

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
shopt  [-pqsu]  [-o]  [optname ...]
```
如果使用-s或-u中没有optname参数，则显示仅限于分别设置或未设置的选项。除非另有说明，否则Shop选项在默认情况下将被禁用(未设置)。如果启用了所有选项，则列表选项时的返回状态为零，否则为非零。设置或取消设置选项时，返回状态为零，除非optname不是有效的shell选项。
## 选项

``` bash
-s        # 不带参数时，显示所有打开的变量；带参数时，打开变量
-u        # 不带参数时，显示所有关闭的变量；带参数时，关闭变量
-p        # 显示所有变量
-q        # 静默模式
-o        # 限制变量的值必须是使用-o选项定义的set内置变量
```
## 举例

显示shpot控制的变量
``` bash
[root@localhost ~]$ shopt
autocd         off
cdable_vars       off
cdspell        on
checkhash          off
checkjobs          off
```
打开变量
``` bash
[root@localhost ~]$ shopt -s autocd    #打开变量
[root@localhost ~]$ shopt autocd      #查看变量状态，已经打开
autocd         on
```
关闭变量
``` bash
[root@localhost ~]$ shopt -u autocd    #关闭变量
[root@localhost ~]$ shopt autocd       #查看变量，已经关闭
autocd         off
```

