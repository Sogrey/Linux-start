# kill - 发送信号到进程

kill指令用来向指定的进程发送一个信号

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

## 内建命令
### 语法

``` bash
kill  [-s sigspec | -n signum | -sigspec]  [pid | jobspec] ...
kill  -l  [sigspec | exit_status]
```

### 选项

``` bash
-s     # 指定信号名称，如果不指定信号名称，默认的是SIGTERM
-n     # 指定信号编号
-l     # 列出信号
```
下面是常用的信号。

只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略。

``` bash
HUP     1    终端挂断
INT     2    中断（同 Ctrl + C）
QUIT    3    退出（同 Ctrl + \）
KILL    9    强制终止
TERM   15    终止
CONT   18    继续（与STOP相反，fg/bg命令）
STOP   19    暂停（同 Ctrl + Z）
```


### 返回值
如果成功的发送了一个信息，那么就返回真。如果出现了错误或者指定了无效的选项，那么久返回假。
### 举例

查看信号列表
``` bash
[root@localhost ~]$ kill -l
 1) SIGHUP 2) SIGINT 3) SIGQUIT   4) SIGILL 5) SIGTRAP
 6) SIGABRT   7) SIGBUS 8) SIGFPE 9) SIGKILL   10) SIGUSR1
11) SIGSEGV   12) SIGUSR2   13) SIGPIPE   14) SIGALRM   15) SIGTERM
16) SIGSTKFLT 17) SIGCHLD   18) SIGCONT   19) SIGSTOP   20) SIGTSTP
21) SIGTTIN   22) SIGTTOU   23) SIGURG 24) SIGXCPU   25) SIGXFSZ
26) SIGVTALRM 27) SIGPROF   28) SIGWINCH  29) SIGIO  30) SIGPWR
31) SIGSYS 34) SIGRTMIN  35) SIGRTMIN+1    36) SIGRTMIN+2    37) SIGRTMIN+3
38) SIGRTMIN+4    39) SIGRTMIN+5    40) SIGRTMIN+6    41) SIGRTMIN+7    42) SIGRTMIN+8
43) SIGRTMIN+9    44) SIGRTMIN+10   45) SIGRTMIN+11   46) SIGRTMIN+12   47) SIGRTMIN+13
48) SIGRTMIN+14   49) SIGRTMIN+15   50) SIGRTMAX-14   51) SIGRTMAX-13   52) SIGRTMAX-12
53) SIGRTMAX-11   54) SIGRTMAX-10   55) SIGRTMAX-9    56) SIGRTMAX-8    57) SIGRTMAX-7
58) SIGRTMAX-6    59) SIGRTMAX-5    60) SIGRTMAX-4    61) SIGRTMAX-3    62) SIGRTMAX-2
63) SIGRTMAX-1    64) SIGRTMAX 
```
``` bash
[root@localhost ~]$ sleep 90 &
[1] 178420

# 终止作业标识符为1的作业。
[root@localhost ~]$ kill -9 %1

[root@localhost ~]$ jobs -l
[1]+ 178420 KILLED                  ssh 192.168.1.4

[root@localhost ~]$ sleep 90 &
[1] 181357

# 发送停止信号。
[root@localhost ~]$ kill -s STOP 181357

[root@localhost ~]$ jobs -l
[1]+ 181537 Stopped (signal)        sleep 90

# 发送继续信号。
[root@localhost ~]$ kill -s CONT 181357

[root@localhost ~]$ jobs -l
[1]+ 181537 Running                 sleep 90 &
```

## 外部命令
- 发送信号到进程（可以为多个）。
- 列出信号。

该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 kill或info coreutils 'kill invocation'。

启动或关闭内建命令请查看enable命令，关于同名优先级的问题请查看builtin命令的例子部分的相关讨论。

与kill命令类似的有xkill，pkill,killall等，用于不同的目的和场景。


### 语法

``` bash
kill [-signal|-s signal|-p] [-q value] [-a] [--] pid|name...
kill -l [number] | -L
```

### 选项

``` bash
-s, --signal signal    # 要发送的信号，可能是信号名称或信号对应的数字。
-l, --list [number]    # 打印信号名称或转换给定数字到信号名称。信号名称可参考文件（/usr/include/linux/signal.h）。
-L, --table            # 和'-l'选项类似，但是输出信号名称以及信号对应的数字。
-a, --all              # 不要限制“命令名到pid”的转换为具有与当前进程相同的UID的进程。
-p, --pid              # 打印目标进程的PID而不发送信号。
--verbose              # 打印信号以及接收信号的PID。
-q, --queue value      # 使用sigqueue(3)而不是kill(2)。参数value是信号对应的数字。
                       # 如果接收进程已为此信号安装了处理程序将SA_SIGINFO标记为sigaction(2)，则可以获取
                       # 该数据通过siginfo_t结构的si_sigval字段。
--help                 # 显示帮助信息并退出。
--version              # 显示版本信息并退出。
```
### 参数
```
n	当n大于0时，PID为n的进程接收信号。
0	当前进程组中的所有进程均接收信号。
-1	PID大于1的所有进程均接收信号。
-n	当n大于1时，进程组n中的所有进程接收信号。当给出了一个参数的形式为“-n”，想要让它表示一个进程组，那么必须首先指定一个信号，或参数前必须有一个“--”选项，否则它将被视为发送的信号。
```

### 返回值
- 0 成功。
- 1 失败。
- 64 部分成功（当指定了多个进程时）。
### 举例
杀死进程
``` bash
[root@localhost ~]$ ps –a    #查看活动进程
  PID TTY          TIME CMD
 3629 pts/0    00:00:00 mysqld_safe
 3737 pts/0    00:00:11 mysqld
11092 pts/1    00:00:00 man
11095 pts/1    00:00:00 sh
11096 pts/1    00:00:00 sh
11100 pts/1    00:00:00 less
11602 pts/0    00:00:00 ps
[root@localhost ~]$ kill -s SIGKILL 11100  # 杀死进程11100
[root@localhost ~]$ ps –a                  # 查看活动进程，已经杀死
  PID TTY          TIME CMD
 3629 pts/0    00:00:00 mysqld_safe
 3737 pts/0    00:00:11 mysqld
11603 pts/0    00:00:00 ps
```
