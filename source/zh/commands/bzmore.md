# bzmore - 查看bzip2压缩过的文本文件的内容

bzmore命令 用于查看bzip2压缩过的文本文件的内容，当下一屏显示不下时可以实现分屏显示。

将bzip压缩过的文件解压到标准输出，同时也可以将普通文件显示到标准输出。该指令可以实现分屏显示，并且不会删除压缩包。bzmore是一个过滤器，它允许在软拷贝终端上一次检查压缩或纯文本文件。bzmore可以处理使用bzip2压缩的文件，也可以处理未压缩的文件。如果文件不存在，bzmore将查找同名文件，并添加.bz2后缀。Bzmore通常在每个屏幕后暂停，打印-更多-在屏幕底部。如果用户然后键入回车，则会显示多一行。如果用户点击一个空格，则会显示另一个屏幕。其他可能性将在后面列举。

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
bzmore  文件
```

## 选项

Bzmore在文件“/etc/Tercap”中查找以确定终端特性，并确定默认窗口大小。在能够显示24行的终端上，默认窗口大小为22行。在bzmore暂停时可能键入的其他序列及其效果如下(i是可选的整数参数，默认为1)：

``` bash
i<space>         # 多显示i行(或另一个屏幕，如果没有给出参数)
ctrl+D           # 多显示11行(“滚动”)。如果给定i，则滚动大小设置为i。
d                # 同上
iz               # 与键入空格相同，但如果有i，则会成为新的窗口大小。请注意，窗口大小将恢复到当前文件末尾的默认值。
is               # 跳过i行，然后打印出满屏幕
if               # 跳过i屏幕，打印一整行的屏幕
q, Q             # 停止读取当前文件；继续下一个文件(如果有的话)
e, q             # 当输出提示符--More-- (Next  file:  file时，此命令将导致bzmore退出。
s                # 当输出提示符--More-- (Next  file:  file时，此命令将导致bzmore跳过下一个文件，然后继续
=                # 显示当前的行号
i/expr           # 搜索正则表达式expr的第i次出现。如果找不到模式，bzmore将继续到下一个文件(如果有的话)。否则，会显示一个屏幕，在找到表达式的位置之前开始两行。用户的擦除和删除字符可用于编辑正则表达式。通过第一列的擦除将取消搜索命令。
in               # 搜索输入的最后一个正则表达式的第i次出现
!command         # 使用命令唤醒shell。字符‘！’在“命令”中，将替换为前面的shell命令。序列“\！”改为“！”
:q, :Q           # 停止读取当前文件；转到下一个文件(如果有的话)(与q或Q相同)。
.                # 重复前面的命令
```
这些命令立即生效，即不需要键入回车。在给出命令字符本身的时间之前，用户可以点击行终止字符来取消正在形成的数值参数。此外，用户还可以点击擦除字符来重新显示-更多的消息。

在任何时候，当输出被发送到终端时，用户可以按退出键(通常是Control-\)。Bzmore将停止发送输出，并显示通常的“--More--”提示。然后，用户可以正常方式输入上述命令之一。不幸的是，当这样做时，会丢失一些输出，因为当退出信号发生时，终端输出队列中等待的任何字符都会被刷新。

该程序将终端设置为noecho模式，以便输出可以连续。因此，您键入的内容将不会显示在您的终端上，除了‘/’和‘！’命令。

如果标准输出不是teletype，那么bzmore就像bzcat一样，只是在每个文件之前打印一个头。
## 举例

1）解压bz2文件
``` bash
[root@localhost weijie]# bzmore 2.c.bz2 //将内容解压到标准输出，不删除压缩包
------> 2.c.bz2 <------
123
23
212
```
2）显示普通文件
``` bash
[root@localhost weijie]# bzmore 1.c //直接显示普通文件
------> 1.c <------
hello world,
i am david.
i love linux,
love code.
```