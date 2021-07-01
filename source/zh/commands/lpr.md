# lpr - 将文件发送给指定打印机进行打印

lpr命令 用于将文件发送给指定打印机进行打印，如果不指定目标打印机，则使用默认打印机。

lpr指令从来打印文件，如果没有指定文件名，那么从标准输入读取内容。CUPS提供了许多设置默认目标的方法。首先查询“LPDEST”和“PRINTER”环境变量。如果没有设置，则使用lpoptions(1)命令的当前默认集，然后使用lpadmin(8)命令进行默认设置。

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
lpr  [  -E  ]  [ -H server[:port] ]  [ -U username ]  [ -P destination[/instance] ]  [ -# num-copies [ -h ] [ -l ] [ -m ] [ -o option[=value] ] [ -p]  [ -q ]  [ -r  ]  [  -C/J/T title ]  [ file(s) ]
```

## 选项

``` bash
-E             # 使用加密模式
-H             # 指定远程打印服务器
-C | -J | -T “name” # 设置打印任务名字
-P destination[/instance] # 指定打印机名字
-U username    # 设置别名           
-# copies      # 将要打印的副本数量从1份设置为100份。
-h             # 关闭标语打印
-l             # 指定文件已经被格式化，发送的时候不应该过滤
-m             # 打印完成之后发送邮件
-o option[=value] # 设置job的选项
-p             # 指定文件应该被格式化
-q             # 等待打印
-r             # 打印之后，文件被删除
```
## 举例
打印指定的文件
``` bash
[root@localhost /]$ lpr -C P1 /weijie/4.c      #打印文件，设置打印的名字
[root@localhost /]$ lpq                        #查看打印队列
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
active  root    2       5.c                             1024 字节
1st     root    3       P1                              1024 字节
[root@localhost /]$  
```

