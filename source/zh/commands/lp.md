# lp - 打印文件或修改排队的打印任务

lp命令 用于打印文件，或者修改排队的打印任务。与lpr命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点）的参数选项设置。

lp指令用来打印文件，也可以修改存在的打印任务。使用该指令可以指定打印的页码、副本等。

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
lp  [ -E ]  [ -U username ]  [ -c ]  [ -d destination[/instance] ]  [ -h hostname[:port] ]  [ -m ]  [ -n num-copies ]
[ -o option[=value] ]  [ -q priority ]  [ -s ] [ -t title ]  [-H handling ]  [ -P page-list ]  [ -- ]  [ file(s) ]

lp  [ -E ] [ -U username ] [ -c ] [ -h hostname[:port] ] [ -i job-id ] [ -n num-copies] [ -o option[=value] ]
[ -q priority ]  [ -t title ]  [ -H handling ]  [ -P page-list ]
```

## 选项

``` bash
--             # 标记选项的结尾；使用它打印以(-)开头的文件。
-E             # 使用加密模式
-U username    # 设置用户名
-c             # 向后提供兼容
-d destination # 目标打印机
-h hostname[:port] # 远程打印机
-i job-id      # 指定要修改的打印任务
-n             # 设置打印副本的次数1~100
-m             # 打印完成之后发送邮件
-o  "name=value [name=value ...]" # 设置打印选项
-q priority    # 设置打印级别1~100，100最大，默认50
-s             # 静默模式
-t “name”      # 设置打印任务名字
-u username    # 以指定的名字提交作业。
-H hh:mm       # 设置打印开始时间。可以是时间格式，也可以是hold，等待打印；immediate，立即打印；restart，重新启动打印任务；resume，挂载打印任务。
```
## 举例
打印指定的文件
``` bash
[root@localhost /]$ lpq            #查看当前打印队列
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
active  root    2       5.c                             1024 字节
1st     root    3       P1                              1024 字节
[root@localhost /]$ lp -H 10:00 -q 100 /weijie/4.c  #打印文件，指定最高级别和时间
请求 id 是 printer01-4（1 个文件）
You have new mail in /var/spool/mail/root
[root@localhost /]$ lpq         #查看打印队列，可以看到刚才的任务是第一个要打印的
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
1st     root    4       4.c                             1024 字节
active  root    2       5.c                             1024 字节
2nd     root    3       P1                              1024 字节
[root@localhost /]$  
```

