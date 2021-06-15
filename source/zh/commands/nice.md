# nice  - 改变程序执行的优先权等级

nice命令 用于以指定的进程调度优先级启动其他的程序。

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
nice  [OPTION] [参数]
```

## 选项

``` bash
-n, --adjustment=N               # 指定进程的优先级（整数）。

--help                           # 显示帮助文档
--version                        # 显示命令版本
```
## 举例

新建一个进程并设置优先级，将当前目录下的documents目录打包，但不希望tar占用太多CPU：
``` bash
nice -19 tar zcf pack.tar.gz documents
```
方法非常简单，即在原命令前加上nice -19。很多人可能有疑问了，最低优先级不是19么？那是因为这个“-19”中的“-”仅表示参数前缀；所以，如果希望将当前目录下的documents目录打包，并且赋予tar进程最高的优先级：
``` bash
nice --19 tar zcf pack.tar.gz documents
```
设置指令wc优先级
``` bash
[root@localhost ~]$ nice -n 19 wc   # 设置wc的优先级最低
^Z                                # 按下组合键ctrl+z
[2]+  Stopped                 nice -n 19 wc
[root@localhost ~]$
```
查看进程优先级
``` bash
[root@localhost ~]$ ps -ao "%p%y%x%c%n"  # 查看进程等级，wc的等级是19
  PID TTY          TIME COMMAND          NI
 8321 pts/0    00:00:00 wc               19
 8370 pts/0    00:00:00 ps                0
 ```