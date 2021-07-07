# fc - 显示历史列表中的命令或修改指定的历史命令并执行
fc指令用来显示、编辑、执行历史命令。
## 主要用途
- 显示历史列表中的命令。
- 编辑并重新执行历史列表的命令。

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
fc  [-e ename]  [-lnr]  [first]  [last]
fc  -s  [pat=rep]  [cmd]
```

## 选项

``` bash
-l        # 显示到标准输出
-n        # 不显示行号
-r        # 反序显示
-e        # 编辑命令的文本编辑器，默认vi
-s        # 找到命令并执行
```
## 说明

修正命令。在第一种形式中，从历史记录列表中选择从第一到最后的一系列命令。可以将“first”和“last”指定为字符串(查找以该字符串开头的最后一个命令)或作为一个数字(历史列表中的索引，其中负数用作当前命令号的偏移)。如果未指定“last”，则将其设置为当前命令。如果没有指定“first”，则将其设置为用于编辑的前一个命令，并且列出16个记录“-l 16”。

在第二种形式中，在每个PAT实例被REP替换后，重新执行命令。

如果使用第一个形式，则返回值为0，除非遇到无效选项或第一次或最后一次指定超出范围的历史记录线。如果提供了-e选项，则返回值是最后执行的命令的值，如果临时命令文件出现错误，则返回失败。如果使用第二种形式，则返回状态是重新执行的命令的状态，除非cmd没有指定有效的历史记录行，在这种情况下，fc返回失败。
## 举例

显示最后5条历史命令
``` bash
[root@localhost ~]$ fc -l -5             #-l指明到标准输出，-5指明显示最后5条
51  fc -l 1 10
52  fc -l 1 4
53  fc -l 1 3
54  fc -l 0 3
55  fc -l 5
[root@localhost ~]$
```
显示最后5条历史命令
``` bash
[root@localhost ~]$ fc -l 51 55      #将51到55条历史命令显示
51  fc -l 1 10
52  fc -l 1 4
53  fc -l 1 3
54  fc -l 0 3
55  fc -l 5
You have new mail in /var/spool/mail/root
[root@localhost ~]$
```
找到命令并执行
``` bash
[root@localhost ~]$ fc -s ps           #找到以ps开头的命令，并执行
ps
  PID TTY          TIME CMD
12137 pts/0    00:00:00 bash
12965 pts/0    00:00:00 ps
```
