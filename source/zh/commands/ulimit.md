# ulimit - 控制shell程序的资源
ulimit命令 用来限制系统用户对shell资源的访问。如果不懂什么意思，下面一段内容可以帮助你理解：

假设有这样一种情况，当一台 Linux 主机上同时登陆了 10 个人，在系统资源无限制的情况下，这 10 个用户同时打开了 500 个文档，而假设每个文档的大小有 10M，这时系统的内存资源就会受到巨大的挑战。

而实际应用的环境要比这种假设复杂的多，例如在一个嵌入式开发环境中，各方面的资源都是非常紧缺的，对于开启文件描述符的数量，分配堆栈的大 小，CPU 时间，虚拟内存大小，等等，都有非常严格的要求。资源的合理限制和分配，不仅仅是保证系统可用性的必要条件，也与系统上软件运行的性能有着密不可分的联 系。这时，ulimit 可以起到很大的作用，它是一种简单并且有效的实现资源限制的方式。

ulimit 用于限制 shell 启动进程所占用的资源，支持以下各种类型的限制：所创建的内核文件的大小、进程数据块的大小、Shell 进程创建文件的大小、内存锁住的大小、常驻内存集的大小、打开文件描述符的数量、分配堆栈的最大大小、CPU 时间、单个用户的最大线程数、Shell 进程所能使用的最大虚拟内存。同时，它支持硬资源和软资源的限制。

作为临时限制，ulimit 可以作用于通过使用其命令登录的 shell 会话，在会话终止时便结束限制，并不影响于其他 shell 会话。而对于长期的固定限制，ulimit 命令语句又可以被添加到由登录 shell 读取的文件中，作用于特定的 shell 用户。

ulimit指令用来设置shell或者shell启动的进程可用资源的限制，当选项后面没有参数的时候，显示当前选项的限制。如果给定限制，则为指定资源的新值(-a选项仅显示)。如果没有提供任何选项，则假定为“-f”。

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
ulimit  [-HSTabcdefilmnpqrstuvx [limit]]
```

## 选项

``` bash
-a             # 显示当前资源显示情况
-b             # 最大socket缓冲区
-c             # core文件最大值，单位为区块
-d             # 程序数据段最大值，单位kb
-e             # 最大调度级别
-f             # shell创建文件最大值，单位区块
-i             # 悬挂信号的最大值
-l             # 内存锁定的最大值
-m             # 可使用内存最大值，单位kb
-n             # 打开文件最大数目
-p             # 管道缓冲区大小，单位512B
-q             # posix队列最大值
-s             # 栈的最大值
-r             # 实际调度时间
-r             # 使用CPU上限，单位s
-u             # 一个用户最大运行程序数目
-v             # 虚拟内存上限，单位kb
-x             # 文件锁最大值
-T             # 最大线程数
```
## 举例
显示当前所有的限制
``` bash
[sogrey@bogon ~]$ ulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 16969
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited
open files                      (-n) 1024
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 4096
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
[sogrey@bogon ~]$ 
```


修改设置
``` bash
[root@localhost ~]$ ulimit -s     #查看栈的限制
10240
[root@localhost ~]$ ulimit -s 10241  #设置栈的限制
[root@localhost ~]$ ulimit -s        #查看栈的限制，已经修改
10241
```
