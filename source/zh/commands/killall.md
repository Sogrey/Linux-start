# killall - 使用进程的名称来杀死一组进程

killall命令 使用进程的名称来杀死进程，使用此指令可以杀死一组同名进程。我们可以使用kill命令杀死指定进程PID的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用ps等命令再配合grep来查找进程，而killall把这两个过程合二为一，是一个很好用的命令。

killall可以根据名字来杀死进程，它会给指定名字的所有进程发送信息。如果没有指定信号名，则发送SIGTERM。信号可以通过名称(例如-HUP或-SIGHUP)或数字(例如-1)或选项-s来指定。如果命令名不是正则表达式(选项-r)，并且包含斜杠(/)，则将选择执行该特定文件的进程，与其名称无关。如果每个列出的命令至少有一个进程被杀死，或者没有列出命令，并且至少有一个进程符合-u和-Z搜索条件，则KILLALL返回一个零返回代码。否则KILLALL返回非零。KILLALL进程永远不会杀死自己(但可能会杀死其他KILLALL进程)。

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
killall [OPTION] [name]
```

## 选项

``` bash
-e, --exact              # 进程需要和名字完全相符
-I, --ignore-case        # 忽略大小写
-g, --process-group      # 结束进程组
-i, --interactive        # 结束之前询问
-l, --list               # 列出所有的信号名称
-q, --quite              # 进程没有结束时，不输出任何信息
-r, --regexp             # 将进程名模式解释为扩展的正则表达式。
-s, --signal             # 发送指定信号
-u, --user               # 结束指定用户的进程
-v, --verbose            # 显示详细执行过程
-w, --wait               # 等待所有的进程都结束

--help                           # 显示帮助文档
-V, --version                    # 显示命令版本信息
```
## 举例
结束所有进程
``` bash

[root@localhost ~]$ ps      #查看进程，有3个wc进程
  PID TTY          TIME CMD
 8266 pts/0    00:00:00 bash
 9781 pts/0    00:00:00 wc
 9784 pts/0    00:00:00 wc
 9785 pts/0    00:00:00 wc
 9786 pts/0    00:00:00 ps

[root@localhost ~]$ killall -9 wc     #结束所有的wc进程

[root@localhost ~]$ ps                #查看进程，wc都被杀死
  PID TTY          TIME CMD
 8266 pts/0    00:00:00 bash
 9788 pts/0    00:00:00 ps
[1]   已杀死               nice -n 19 wc
[2]-  已杀死               nice -n 19 wc
[3]+  已杀死               nice -n 19 wc
```
