# init - init进程是所有Linux进程的父进程

init命令 是Linux下的进程初始化工具，init进程是所有Linux进程的父进程，它的进程号为1。init命令是Linux操作系统中不可缺少的程序之一，init进程是Linux内核引导运行的，是系统中的第一个进程。

init是所有进程的父进程，它由内核执行，可以启动其他所有的进程。init指令在启动时会参考/etc/inittab文件的配置，完成其他进程的启动。init通常不会由用户进程执行，并且期望进程id为1。如果不是这样，它将实际执行telinit(8)并将所有参数传递给它。

init管理的进程称为作业，并由/etc/init目录中的文件定义。init(8)是一个基于事件的init守护进程。这意味着作业将通过系统状态发生的更改自动启动和停止，包括作业的启动和停止。这与基于依赖项的init守护进程不同，后者启动一组指定的目标作业，并通过迭代它们的依赖项来解决它们应该启动的顺序和其他作业所需的顺序。主要事件是startup (7)事件，在守护进程加载完其配置后发出。其他有用的事件是以作业更改状态发出的starting (7)、started (7)、stopping (7)和stopped (7)事件。

init有7种运行等级:

- 0 关机
- 1 单用户模式
- 2 多用户模式，不启动nfs
- 3 多用户模式，有网络功能
- 4 保留
- 5 图形界面
- 6 重启

Upstart init(8)守护进程不跟踪运行级别本身，而是完全由用户空间工具实现。为表示运行级的更改而发出的事件是runlevel(7)事件。

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
init  [选项]  [参数]
```

## 选项

``` bash
--verbose                        # 将有关作业状态更改和事件释放的详细消息输出到系统控制台或日志，这对于调试引导非常有用。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
