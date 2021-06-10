# ps - 报告当前系统的进程状态

ps命令 用于报告当前系统的进程状态。可以搭配kill指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。

ps指令可以显示系统中当前进程的信息，它的输出结果是高度可定制的。如果您希望重复更新所选内容和显示的信息，请使用top(1)代替。

请注意，“ps-aux”与“ps aux”不同。POSIX和UNIX标准要求“ps-aux”打印名为“x”的用户拥有的所有进程，以及打印由-a选项选择的所有进程。如果名为“x”的用户不存在，此ps可以将命令解释为“ps aux”，并打印警告。此行为旨在帮助转换旧脚本和习惯。它是脆弱的，随时可能发生变化，因此不应依赖它。

默认情况下，ps选择所有具有相同有效用户ID(EUID=EUID)的进程作为当前用户，并与调用方相关联的终端。它显示进程ID(PID=PID)、与进程关联的终端(tname=TTY)、[dd-]hh：mm：SS格式的累计CPU时间(time=TIME)和可执行名称(ucmd=CMD)。默认情况下输出未排序。

使用BSD样式的选项将向默认显示中添加进程状态(stat=STAT)，并显示命令args(args=命令)而不是可执行名称。您可以使用PS_FORMAT环境变量重写此操作。使用BSD样式的选项还将更改流程选择，以包括您拥有的其他终端(TTY)上的进程；或者，这可以描述为将选择设置为筛选的所有进程的集合，以排除其他用户拥有的进程或终端上的进程。当选项被描述为“相同”时，不考虑这些影响，所以-M将被认为与Z相同等等。

这个ps通过读取“/proc”中的虚拟文件来工作。这个ps不需要是setuid kmem，也不需要有任何特权来运行。不要给这个ps任何特殊的权限。此ps需要访问名称列表数据以获得正确的WCHAN显示。对于2.6之前的内核，必须安装System.map文件。

CPU使用率当前表示为进程在整个生命周期中运行的时间百分比。CPU使用率不太可能达到100%。

SIZE和RSS字段不计算进程的某些部分，包括页表、内核堆栈、结构体thread_info和task_struct。这通常是至少20kb的内存大小。SIZE是进程的虚拟大小(代码数据堆栈)。

标记为“defunct”的进程是死进程(所谓的“僵尸”)，因为它们的父进程没有正确地销毁它们。如果父进程退出，则init(8)将销毁这些进程。

如果用户名的长度大于显示列的长度，则将显示数字用户ID。

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
ps  [OPTION]
```

## 选项

``` bash
--info                           # 显示调试信息
L                                # 列出所有的格式

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
``` bash
-A, -e                           # 选择所有进程
-N, --deselect                   # 反向选择不符合条件的
T                                # 选择符合的终端
-a                               # 选择除会话进程和与终端无关的进程以外的所有进程。
a                                # 此选项导致ps列出带有终端(TTY)的所有进程，或在与x选项一起使用时列出所有进程。
-d                               # 选择所有进程，忽略进程所有者
g                                # 全部的进程，包含会话领导
r                                # 将选择限制为仅运行进程。
x                                # 此选项导致ps列出您拥有的所有进程(与ps相同的EUID)，或者在与a选项一起使用时列出所有进程。
```

``` bash
-C cmdlist                       # 按命令名选择。这将选择在cmdlist中给出可执行名称的进程。
-G grplist                       # 选择进程所属的组id与给定list匹配的进程             
U userlist                       # 按有效用户ID(EUID)或名称选择。有效用户ID描述进程使用其文件访问权限的用户
-U userlist                      # 按实际用户ID(RUID)或名称进行选择。真正的用户ID标识创建进程的用户，
-g grplist                       # 按会话或有效组名选择。
p pidlist                        # 按进程ID选择。
-p pidlist                       # 按进程ID选择。
-s sesslist                      # 按照会话ID选择
t ttylist                        # 通过tty选择。与-t和--tty几乎相同，但也可以与空ttylist一起使用，以指示与ps关联的终端。
-t ttylist                       # 选择指定的tty
-u userlist                      # 按有效用户ID(EUID)或名称选择，等价于“U”和“--user”
--Group grplist                  # 等价于“-G”
--User userlist                  # 等价于“-U”
--group grplist                  # 按有效组ID(EGID)或名称选择。有效组ID描述进程使用其文件访问权限的组。
--pid pidlist                    # 等价于“-p”和“p”
-ppid ppidlist                   # 选择父进程id匹配的进程
--sid sesslist                   # 等价于“-s”
--tty ttylist                    # 等价于“-t”和“t”
--user userlist                  # 等价于“-u”和“U”
-123                             # 等价于“--sid 123”
123                              # 等价于“—pid 123”
```
## 输出格式控制
``` bash
-f, -F                        # 输出完整的格式。它还会导致输出命令参数。当与-L一起使用时，将添加NLWP(线程数)和LWP(线程ID)列。
-O format                     # 类似-o，但预加载了一些默认列。等价于“-o pid,format,state,tname,time,command”或者“-o pid,format,tname,time,cmd”
O format                       # 预加载的o。当用作格式设置选项时，它与-O完全相同，具有BSD个性。
-M                            # 添加一列安全数据。
X                             # 寄存器格式
Z                             # 等价于“-M”
-c                            # 显示-l选项的不同调度程序信息。
j                             # BSD作业控制格式
-j                            # 作业格式
l                             # BSD长格式
-l                            # 长格式，经常和“-y”一起使用
o format                      # 等价于“-o”和“--format”
-o format                     # 用户定义格式。format是以空格分隔或逗号分隔的列表形式的单个参数，它提供了一种指定单个输出列的方法。标头可以按需要重命名(ps -o pid,ruser=RealUser -o comm=Command)。如果所有列标题都是空的(ps -o pid= -o comm=)，那么标题行将不会被输出。宽标头所需的列宽度将增加；这可用于扩展诸如WCHAN之类的列(ps -o pid,wchan=WIDE-WCHAN-COLUMN -o comm)。显式宽度控制(ps opid,wchan:42,cmd)也被提供。ps -o pid=X,comm=Y的行为随个性而变化，输出可能是一个名为“X，comm=Y”的列，也可以是两个名为“X”和“Y”的列。使用PS_FORMAT环境变量按需要指定默认值；DefSysV和DefBSD是可用于选择默认UNIX或BSD列的宏。
s                              # 显示信号格式
u                              # 以用户为主的模式
v                              # 以虚拟内存为主的模式
-y                             # 不显示标志位
-Z                             # 显示安全上下文格式
--format format                # 和“-o”一样
--context                      # 显示安全上下文格式
```

## 输出修饰符
``` bash
-H                # 显示进程层次结构
O order           # 排序，过时的操作
S                 # 总结一些信息，如CPU使用情况，从死子进程到父进程。
c                 # 显示真正的命令名。这是从可执行文件的名称派生出来的，而不是从argv值派生的。因此，没有显示命令参数和对它们的任何修改
e                 # 在命令之后显示环境
f, --forest       # ASCII格式的进程层次结构
h                 # 没有头
k spec            # 指定排序顺序，等价于“--sort”
-n namelist,  N namelist # 正确的WCHAN显示需要名称列表文件，并且必须与当前Linux内核完全匹配才能得到正确的输出。如果没有此选项，则名称列表的默认搜索路径是：             
                    # $PS_SYSMAP
                    # $PS_SYSTEM_MAP
                    # /proc/*/wchan
                    # /boot/System.map-`uname -r`
                    # /boot/System.map
                    # /lib/modules/`uname -r`/System.map
                    # /usr/src/linux/System.map
                    # /System.map
n                   # WCHAN和User的数字输出。(包括所有类型的UID和GID)
-w, w               # 宽输出，对无限宽度使用此选项两次
--cols n,  --columns n,  --width n # 设置屏幕宽度
--cumulative        # 包括一些死子进程数据(作为父进程的和)
--headers           # 重复头行，每页输出一行
--no-headers        # 根本不打印标题行
--lines n,  --rows n # 设置屏幕高度
--sort spec          # 排序。语法是“[+|-]key[,[+|-]key[,...]]”，例如，ps jax --sort=uid,-ppid,+pid
```

## 线程模式
``` bash
H        # 把线程当做进程显示
-L       # 显示线程的LWP NLWP
-T       # 显示线程的SPID
m, -m    # 在进程之后显示线程
```

## 进程标志
这些值的和显示在“F”列中，该列由标志输出说明符提供。
``` bash
1   已经fork，但是没有执行。
4   使用超级用户权限。
```
## 进程状态码
下面是s、stat和state输出说明符(标头“stat”或“S”)将显示的用于描述进程状态的不同值：
``` bash
D   不间断睡眠(通常为IO)。
R   正在运行或可运行(在运行队列上)。
S   可中断睡眠(等待事件完成)。
T   停止，要么是被作业控制信号阻止，要么是因为它正在被跟踪。
W   分页(自2.6.xx内核以来无效)。
X   死了(不应该被看见)。
Z   已停止(“僵尸”)进程，终止但未由其父进程收获。
```
对于bsd格式和当使用stat关键字时，可能会显示其他字符：
``` bash
<   高优先级(对其他用户不好)。
N   低优先级(对其他用户很好)。
L   将页面锁定在内存中(用于实时和自定义IO)。
s   是会话。
l   是多线程的。
+   在前台进程组中。
```
## AIX格式描述符
这个ps支持AIX格式描述符，它们的工作方式有点像printf(1)和printf(3)的格式代码。例如，正常的默认输出可以这样产生：ps -eo "%p %y %x %c
``` bash
CODE     NORMAL     HEADER
%C       pcpu         %CPU
%G       group        GROUP
%P       ppid          PPID
%U       user          USER
%a       args          COMMAND
%c       comm        COMMAND
%g       rgroup       RGROUP
%n       nice          NI
%p       pid          PID
%r       pgid         PGID
%t       etime        ELAPSED
%u       ruser        RUSER
%x       time         TIME
%y       tty           TTY
%z       vsz          VSZ
```
## 标准格式说明符
以下是用于控制输出格式(例如，使用选项-o)或使用GNU样式的“--sort”序选项对所选进程进行排序的不同关键字。例如，“ps -eo pid,user,args --sort user”。这个版本的ps试图识别大多数在ps的其他实现中使用的关键字。以下用户定义的格式说明符可能包含空格：args, cmd, comm,command, fname, ucmd, ucomm, lstart, bsdstart, start。某些关键字可能无法用于排序。
| CODE           | HEADER  | 说明                                                         |
| -------------- | ------- | ------------------------------------------------------------ |
| **%cpu**       | %CPU    | 进程的CPU利用率为“#.#”格式。当前，它是CPU时间除以进程运行的时间(cputime/realtime比率)，表示为百分比。除非你是幸运的，否则它不会达到100%。(别名**pcpu**) |
| **%mem**       | %MEM    | 进程的驻留集大小与机器上物理内存的比率，以百分比表示。(别名**PMEM**) |
| **args**       | COMMAND | 命令，它的所有参数都是字符串。可以显示对参数的修改。该列中的输出可能包含空格。标记为“已失效”的进程部分死亡，等待其父进程完全销毁。有时进程args将不可用；当发生这种情况时，ps将可执行文件的名称打印在括号中。(别名cmd，命令)。当最后指定该列时，该列将扩展到显示的边缘。如果ps不能确定显示宽度，例如当输出被重定向(管道)到一个文件或另一个命令时，输出宽度是未定义的。(它可以是80，无限，TERM等决定)环境变量COLUMNS或-cols选项可以用于精确地确定这种情况下的宽度。**w**或**-w**选项也可用于调整宽度。 |
| **blocked**    | BLOCKED | blocked信号掩码。根据字段的宽度，以十六进制格式显示32位或64位掩码。(别名sig_block, sigmask)。 |
| **bsdstart**   | START   | 命令开始的时间。如果进程在24小时前启动，则输出格式为“hh：mm”，否则为“mmm dd”(其中mmm是月份的三个字母)。 |
| **bsdtime**    | TIME    | 用户和系统的累积CPU时间，。显示格式通常为“mmm：ss”，但如果进程占用的cpu时间超过999分钟，则可以移到右边。 |
| **c**          | C       | 处理器利用率当前，这是进程生存期内使用百分比的整数值。(见%cpu)。 |
| **caught**     | CAUGHT  | 捕获信号的掩码，见信号(7)。根据字段的宽度，以十六进制格式显示32或64位掩码。(别名**sig_catch**, **sigcatch**) |
| **cgroup**     | CGROUP  | 显示进程所属的控制组。                                       |
| **class**      | CLS     | 进程的调度类。(别名**policy**, **cls**)。字段的可能值是：-    not reportedTS SCHED_OTHERFF SCHED_FIFORR SCHED_RRB  SCHED_BATCHISO SCHED_ISOIDL SCHED_IDLE?  unknown value |
| **cls**        | CLS     | 同**class**                                                  |
| **cmd**        | CMD     | 同**args**                                                   |
| **comm**       | COMMAND | 命令名(只有可执行的名称)。将不会显示对命令名的修改。标记为“已失效”的进程部分死亡，等待其父进程完全销毁。该列中的输出可能包含空格。(别名**ucmd**，**ucomm**)。当最后指定该列时，该列将扩展到显示的边缘。如果ps不能确定显示宽度，例如当输出被重定向(管道)到一个文件或另一个命令时，输出宽度是未定义的(它可以是80，无限，TERM)。**COLUMNS**环境变量或**--cols**选项可以用于精确地确定这种情况下的宽度。**w**或**-w**选项也可用于调整宽度。 |
| **command**    | COMMAND | 同args                                                       |
| **cp**         | CP      | CPU使用率/ms                                                 |
| **cputime**    | TIME    | 累计CPU时间，"[DD-]HH:MM:SS"格式。(别名**time**)。           |
| **egid**       | EGID    | 进程的有效组ID数为十进制整数。(别名**gid**)。                |
| **egroup**     | EFROUP  | 进程的有效组ID。如果可以获得并且字段宽度允许，这将是文本组ID，否则将是十进制表示。(别名**group**)。 |
| **eip**        | EIP     | 指令指针                                                     |
| **esp**        | ESP     | 栈指针                                                       |
| **etime**      | ELAPSED | 自进程启动以来，以[dd-]hh：]mm：SS形式运行的时间。           |
| **euid**       | EUID    | 有效用户ID，别名**uid**                                      |
| **euser**      | EUSER   | 有效用户名。如果可以获得并且字段宽度允许，这将是文本用户ID，否则将是十进制表示。**n**选项可用于强制十进制表示。(别名**uname**，**user**)。 |
| **f**          | F       | 与进程关联的标志，请参阅流程标志部分。(别名**flag**, **flags**)。 |
| **fgid**       | FGID    | 文件系统访问组ID。(别名**fsgid**)。                          |
| **fgroup**     | FGROUP  | 文件系统访问组ID。如果可以获得并且字段宽度允许，这将是文本用户ID，否则将是十进制表示。(别名**fsgroup**) |
| **flag**       | F       | 同**f**                                                      |
| **flags**      | F       | 同**f**                                                      |
| **fname**      | COMMAND | 进程可执行文件的基名的前8个字节。该列中的输出可能包含空格。  |
| **fuid**       | FUID    | 文件系统访问用户ID。(别名**fsuid**)。                        |
| **fuser**      | FUSER   | 文件系统访问用户ID。如果可以获得并且字段宽度允许，这将是文本用户ID，否则将是十进制表示。 |
| **gid**        | GID     | 同**egid**                                                   |
| **group**      | GROUP   | 同**egroup**                                                 |
| **ignored**    | IGNORED | 被忽略的信号的掩码，根据字段的宽度，以十六进制格式显示32位或64位掩码。(别名**sig_ignore**, **sigignore**) |
| **label**      | LABEL   | 安全标签，最常用于SELinux上下文数据。这是针对在高安全系统上发现的强制访问控制(“MAC”)。 |
| **lstart**     | STARTED | 命令开始的时间。                                             |
| **lwp**        | LWP     | 正在报告的LWP(轻量过程或线程)ID。(别名**spid**，**tid**)     |
| **ni**         | NI      | nice值，范围从19(最好)到-20(对他人不友好)。 (别名**nice**)。 |
| **nice**       | NI      | 同**ni**                                                     |
| **nlwp**       | NLWP    | 进程中的lwps(线程)数。(别名**thcount**)。                    |
| **nwchan**     | WCHAN   | 进程处于休眠状态的内核函数的地址(如果需要内核函数名称，请使用wchan)。正在运行的任务将在本列中显示一个破折号(‘-’)。 |
| **pcpu**       | %CPU    | 同**%cpu**                                                   |
| **pending**    | PENDING | 挂起信号的掩码。进程上挂起的信号不同于单个线程上的待决信号。使用**m**选项或**-m**选项查看两者。根据字段的宽度，以十六进制格式显示32位或64位掩码。(别名**sig**)。 |
| **pgid**       | PGID    | 进程组ID或相应的流程组领导的进程ID。(别名**pgrp**)。         |
| **pgrp**       | PGRP    | 同**pgid**                                                   |
| **pid**        | PID     | 进程的进程ID号                                               |
| **pmem**       | %MEM    | 同**%mem**                                                   |
| **policy**     | POL     | 同**cls**                                                    |
| **ppid**       | PPID    | 父进程id                                                     |
| **psr**        | PSR     | 进程当前分配给的处理器。                                     |
| **rgid**       | RGID    | 真实的组id                                                   |
| **rgroup**     | RGROUP  | 真正的组名。如果可以获得并且字段宽度允许，这将是文本组ID，否则将是十进制表示。 |
| **rip**        | RIP     | 64位指令指针。                                               |
| **rsp**        | RSP     | 64位栈指针。                                                 |
| **rss**        | RSS     | 驻留集大小，任务使用的非交换物理内存(以千字节为单位)。(别名**rssize**，**rsz**)。 |
| **rssize**     | RSS     | 同rss                                                        |
| **rsz**        | RSZ     | 同rss                                                        |
| **rtprio**     | RTPRIO  | 实时优先级                                                   |
| **ruid**       | RUID    | 实际用户ID                                                   |
| **ruser**      | RUSER   | 真实的用户ID。如果可以获得并且字段宽度允许，这将是文本用户ID，否则将是十进制表示。 |
| **s**          | S       | 最小状态显示(一个字符)。                                     |
| **sched**      | SCH     | 进程的调度策略。策略SCHED_OTHER(SCHED_Normal)、SCHED_FIFO、SCHED_RR、SCHED_BATCH、SCHED_ISO和SCHED_IDELL分别显示为0、1、2、3、4和5。 |
| **sess**       | SESS    | 会话ID或等效的会话领导的进程ID。(别名**session**，**sid**)。 |
| **sgi_p**      | P       | 进程当前正在执行的处理器。如果进程当前未运行或无法运行，则显示“*”。 |
| **sgid**       | SGID    | 保存的组ID。(别名**svgid**)                                  |
| **sgroup**     | SGROUP  | 保存的组名。如果可以获得并且字段宽度允许，这将是文本组ID，否则将是十进制表示。 |
| **sid**        | SID     | 同**sess**                                                   |
| **sig**        | PENDING | 同**pending**                                                |
| **sigcatch**   | CAUGHT  | 同**caught**                                                 |
| **sigignore**  | IGNORED | 同**ignored**                                                |
| **sigmask**    | BLOCKED | 同**blocked**                                                |
| **size**       | SZ      | 如果进程要脏所有可写页，然后交换掉，则需要交换大约的交换空间。这个数字很粗糙！ |
| **spid**       | SPID    | 同lwp                                                        |
| **stackp**     | STACKP  | 进程堆栈的底部(开始)地址                                     |
| **start**      | STARTED | 命令开始的时候。如果进程在24小时前启动，则输出格式为“hh：mm：ss”，否则为“mmm dd”(其中mmm是三个字母的月份名称)。 |
| **start_time** | START   | 进程的开始时间或日期。只有进程未启动的年份(即调用ps的年份)或“mmmdd”(如果进程未在同一天启动)或“hh：mm”将显示。 |
| **stat**       | STAT    | 多字符进程状态。有关不同值的含义，请参见处理状态代码一节。如果只希望显示第一个字符，请参见**s**和**state**。 |
| **state**      | S       | 同s                                                          |
| **suid**       | SUID    | 保存的用户ID。(别名**svuid**)。                              |
| **suser**      | SUSER   | 保存的用户名。如果可以获得并且字段宽度允许，这将是文本用户ID，否则将是十进制表示。(别名**svuser**) |
| **svgid**      | SVGID   | 同**sgid**                                                   |
| **svuid**      | SVUID   | 同**suid**                                                   |
| **sz**         | SZ      | 进程核心图像的物理页面大小。这包括文本、数据和堆栈空间。当前排除了设备映射；这可能会发生更改。参见**vsz**和**rss**。 |
| **thcount**    | THCNT   | 同**nlwp**                                                   |
| **tid**        | TID     | 同**lwp**                                                    |
| **time**       | TIME    | 统计CPU时间,"[DD-]HH:MM:SS"格式。(别名**cputime**)。         |
| **tname**      | TTY     | 控制TY(终端)(别名**tt**，**tty**)。                          |
| **tpgid**      | TPGID   | 进程连接到的TTY(终端)上的前台进程组的ID，如果进程没有连接到TTY，则为-1。 |
| **tt**         | TT      | 同**tname**。                                                |
| **tty**        | TT      | 同**tname**。                                                |
| **ucmd**       | CMD     | 同**comm**。                                                 |
| **ucomm**      | COMMAND | 同**comm**。                                                 |
| **uid**        | UID     | 同**euid**。                                                 |
| **uname**      | USER    | 同**euser**。                                                |
| **user**       | USER    | 同**euser**。                                                |
| **vsize**      | VSZ     | 同**vsz**。                                                  |
| **vsz**        | VSZ     | 进程的虚拟内存大小(1024字节单位)。当前排除了设备映射；这可能会发生更改。(别名**vsize**)。 |
| **wchan**      | WHAN    | 进程处于休眠状态的内核函数的名称，如果进程正在运行，则为“-”，如果进程是多线程且ps不显示线程，则为“*”。 |

 

## 环境变量

下面的环境变量会影响ps的行为：

- COLUMNS，覆盖默认的宽度。
- LINES，覆盖默认的高度。
- PS_PERSONALITY，设置为POSIX中的一个，old，linux，bsd，sun，digital。
- CMD_ENV，设置为POSIX中的一个，old，linux，bsd，sun，digital。
- I_WANT_A_BROKEN_PS，解释过时命令。
- LC_TIME，日期格式。
- PS_COLORS，现在还不支持。
- PS_FORMAT，默认输出格式覆盖。
- PS_SYSMAP，默认名称列表(System.map)位置。
- PS_SYSTEM_MAP，默认名称列表(System.map)位置。
- POSIXLY_CORRECT，不要找借口忽视不好的“特性”。
- POSIX2，当设置为“on”时，充当POSIXLY_TRIDER。
- UNIX95，不要找借口忽视不好的“特性”。
- _XPG，取消CMD_ENV=irix非标准行为。

一般来说，设置这些变量是个坏主意。一个例外是CMD_ENV或PS_PERSONALITY，对于正常系统，可以将它们设置为Linux。如果没有这种设置，PS就会遵循Unix 98标准中无用的和坏的部分。
## 举例

``` bash
ps axo pid,comm,pcpu # 查看进程的PID、名称以及CPU 占用率
ps aux | sort -rnk 4 # 按内存资源的使用量对进程进行排序
ps aux | sort -nk 3  # 按 CPU 资源的使用量对进程进行排序
ps -A # 显示所有进程信息
ps -u root # 显示指定用户信息
ps -efL # 查看线程数
ps -e -o "%C : %p :%z : %a"|sort -k5 -nr # 查看进程并按内存使用大小排列
ps -ef # 显示所有进程信息，连同命令行
ps -ef | grep ssh # ps 与grep 常用组合用法，查找特定进程
ps -C nginx # 通过名字或命令搜索进程
ps aux --sort=-pcpu,+pmem # CPU或者内存进行排序,-降序，+升序
ps -f --forest -C nginx # 用树的风格显示进程的层次关系
ps -o pid,uname,comm -C nginx # 显示一个父进程的子进程
ps -e -o pid,uname=USERNAME,pcpu=CPU_USAGE,pmem,comm # 重定义标签
ps -e -o pid,comm,etime # 显示进程运行的时间
ps -aux | grep named # 查看named进程详细信息
ps -o command -p 91730 | sed -n 2p # 通过进程id获取服务名称
```


若要使用标准语法查看系统上的每个进程，请执行以下操作：
``` bash
ps -e
ps -ef
ps -eF
ps –ely
```
若要使用BSD语法查看系统上的每个进程，请执行以下操作：
``` bash
ps ax
ps ax
```
打印进程树
``` bash
ps -ejH
ps axjf
```
获取线程信息
``` bash
ps -eLf
ps axm
```
获取安全信息
``` bash
ps -eo euser,ruser,suser,fuser,f,comm,label
ps axZ
ps –eM
```
若要以用户格式将每个进程作为根进程运行(实际有效ID)，请执行以下操作：
``` bash
ps -U root -u root
```
要使用用户定义的格式查看每个进程：
``` bash
ps -eo pid,tid,class,rtprio,ni,pri,psr,pcpu,stat,wchan:14,comm
ps axo stat,euid,ruid,tty,tpgid,sess,pgrp,ppid,pid,pcpu,comm
ps -eopid,tt,user,fname,tmout,f,wchan
```
只打印进程sislogd的PID
``` bash
ps -C syslogd -o pid=
```
只打印PID为42的进程名字
``` bash
ps -p 42 -o comm=
```
---
将目前属于您自己这次登入的 PID 与相关信息列示出来
``` bash
[sogrey@bogon 文档]$ ps -l
F S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 S  1000 10957 10939  1  80   0 - 29205 do_wai pts/0    00:00:00 bash
0 R  1000 11131 10957  0  80   0 - 37793 -      pts/0    00:00:00 ps
[sogrey@bogon 文档]$ 
```
- F 代表这个程序的旗标 (flag)， 4 代表使用者为 super user
- S 代表这个程序的状态 (STAT)，关于各 STAT 的意义将在内文介绍
- UID 程序被该 UID 所拥有
- PID 就是这个程序的 ID ！
- PPID 则是其上级父程序的ID
- C CPU 使用的资源百分比
- PRI 这个是 Priority (优先执行序) 的缩写，详细后面介绍
- NI 这个是 Nice 值，在下一小节我们会持续介绍
- ADDR 这个是 kernel function，指出该程序在内存的那个部分。如果是个 running的程序，一般就是 "-"
- SZ 使用掉的内存大小
- WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作
- TTY 登入者的终端机位置
- TIME 使用掉的 CPU 时间。
- CMD 所下达的指令为何

> 在预设的情况下， ps 仅会列出与目前所在的 bash shell 有关的 PID 而已，所以， 当我使用 ps -l 的时候，只有三个 PID。

---
列出目前所有的正在内存当中的程序
``` bash
[sogrey@bogon 文档]$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  1.4  0.1 128244  6860 ?        Ss   23:02   0:03 /usr/lib/systemd/syste
root         2  0.0  0.0      0     0 ?        S    23:02   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        S    23:02   0:00 [ksoftirqd/0]
root         4  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/0:0]
...
sogrey   10084  0.0  0.2 477752 10524 ?        Sl   23:05   0:00 /usr/bin/seapplet
sogrey   10088  0.0  0.2 661556 12020 ?        SNl  23:05   0:00 /usr/libexec/tracker-m
sogrey   10091  0.0  0.2 557860 10104 ?        SNl  23:05   0:00 /usr/libexec/tracker-m
sogrey   10106  0.0  0.2 702096 10728 ?        SNl  23:05   0:00 /usr/libexec/tracker-m
sogrey   10121  0.1  0.3 525492 14708 ?        Sl   23:05   0:00 /usr/libexec/tracker-s
sogrey   10126  0.0  0.3 656656 13616 ?        SNl  23:05   0:00 /usr/libexec/tracker-e
sogrey   10158  0.5  0.7 1046924 32948 ?       Sl   23:05   0:00 /usr/bin/nautilus --ga
sogrey   10269  0.0  0.0 313740  3416 ?        Sl   23:05   0:00 /usr/libexec/gvfsd-met
sogrey   10557  0.0  0.1 526932  5588 ?        Sl   23:05   0:00 /usr/bin/ibus-daemon -
sogrey   10562  0.0  0.1 376060  5756 ?        Sl   23:05   0:00 /usr/libexec/ibus-dcon
sogrey   10564  0.0  0.4 580512 19332 ?        Sl   23:05   0:00 /usr/libexec/ibus-ui-g
sogrey   10568  0.0  0.3 482280 13228 ?        Sl   23:05   0:00 /usr/libexec/ibus-x11 
sogrey   10576  0.0  0.0 376028  3444 ?        Sl   23:05   0:00 /usr/libexec/ibus-port
sogrey   10586  0.0  0.0 302388  3572 ?        Sl   23:05   0:00 /usr/libexec/ibus-engi
sogrey   10939  0.5  0.7 869080 30724 ?        Sl   23:05   0:00 /usr/libexec/gnome-ter
sogrey   10955  0.0  0.0   8548   720 ?        S    23:05   0:00 gnome-pty-helper
sogrey   10957  0.0  0.0 116820  3396 pts/0    Ss   23:05   0:00 bash
sogrey   11679  0.0  0.1 320008  4656 ?        Sl   23:05   0:00 /usr/libexec/ibus-engi
root     12250  0.0  0.0 107968   620 ?        S    23:05   0:00 sleep 60
sogrey   13773  0.0  0.0 153296  1908 pts/0    R+   23:06   0:00 ps aux
[sogrey@bogon 文档]$ 
```

- USER：该 process 属于那个使用者账号的
- PID ：该 process 的号码
- %CPU：该 process 使用掉的 CPU 资源百分比
- %MEM：该 process 所占用的物理内存百分比
- VSZ ：该 process 使用掉的虚拟内存量 (Kbytes)
- RSS ：该 process 占用的固定的内存量 (Kbytes)
- TTY ：该 process 是在那个终端机上面运作，若与终端机无关，则显示 ?，另外， tty1-tty6 是本机上面的登入者程序，若为 pts/0 等等的，则表示为由网络连接进主机的程序。
- STAT：该程序目前的状态，主要的状态有
- R ：该程序目前正在运作，或者是可被运作
- S ：该程序目前正在睡眠当中 (可说是 idle 状态)，但可被某些讯号 (signal) 唤醒。
- T ：该程序目前正在侦测或者是停止了
- Z ：该程序应该已经终止，但是其父程序却无法正常的终止他，造成 zombie (疆尸) 程序的状态
- START：该 process 被触发启动的时间
- TIME ：该 process 实际使用 CPU 运作的时间
- COMMAND：该程序的实际指令

---
列出类似程序树的程序显示
``` bash
[sogrey@bogon 文档]$ ps -axjf
 PPID   PID  PGID   SID TTY      TPGID STAT   UID   TIME COMMAND
    0     2     0     0 ?           -1 S        0   0:00 [kthreadd]
    2     3     0     0 ?           -1 S        0   0:00  \_ [ksoftirqd/0]
    2     4     0     0 ?           -1 S        0   0:00  \_ [kworker/0:0]
    2     5     0     0 ?           -1 S<       0   0:00  \_ [kworker/0:0H]
    2     6     0     0 ?           -1 S        0   0:00  \_ [kworker/u2:0]
    2     7     0     0 ?           -1 S        0   0:00  \_ [migration/0]
    ...
    1  6416  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/at-spi2-registryd --use
    1  6456  6455  6455 ?           -1 S<l   1000   0:00 /usr/bin/pulseaudio --start --log-ta
    1  6581  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gnome-shell-calendar-se
    1  6604  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/evolution-source-regist
    1  6606  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/mission-control-5
    1  6609  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfs-udisks2-volume-mon
    1  6626  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/goa-daemon
    1  6627  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfs-gphoto2-volume-mon
    1  6642  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfs-goa-volume-monitor
    1  6654  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/goa-identity-service
    1  6691  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfs-afc-volume-monitor
    1  6710  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfs-mtp-volume-monitor
    1  6885  6159  6159 ?           -1 Sl    1000   0:00 /usr/libexec/gsd-printer
    1  6919  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/evolution-calendar-fact
 6919  7010  6174  6174 ?           -1 Sl    1000   0:00  \_ /usr/libexec/evolution-calendar-
 6919  7062  6174  6174 ?           -1 Sl    1000   0:00  \_ /usr/libexec/evolution-calendar-
    1  7061  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/dconf-service
    1  7110  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/evolution-addressbook-f
 7110  7135  6174  6174 ?           -1 Sl    1000   0:00  \_ /usr/libexec/evolution-addressbo
    1 10077  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfsd-trash --spawner :
    1 10121  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/tracker-store
    1 10158  6174  6174 ?           -1 Sl    1000   0:00 /usr/bin/nautilus --gapplication-ser
    1 10269  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfsd-metadata
    1 10568 10557  6174 ?           -1 Sl    1000   0:00 /usr/libexec/ibus-x11 --kill-daemon
    1 10576  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/ibus-portal
    1 10939  6174  6174 ?           -1 Sl    1000   0:01 /usr/libexec/gnome-terminal-server
10939 10955  6174  6174 ?           -1 S     1000   0:00  \_ gnome-pty-helper
10939 10957 10957 10957 pts/0    17771 Ss    1000   0:00  \_ bash
10957 17771 17771 10957 pts/0    17771 R+    1000   0:00      \_ ps -axjf
    1 14389  2863  2863 ?           -1 Sl       0   0:00 /usr/sbin/abrt-dbus -t133
[sogrey@bogon 文档]$
```
--- 
找出与 cron 与 syslog 这两个服务有关的 PID 号码
``` bash
[sogrey@bogon 文档]$ ps aux | egrep '(cron|syslog)'
root      2989  0.0  0.0   7140   288 ?        Ss   23:02   0:00 /usr/sbin/mcelog --ignorenodev --daemon --syslog
root      5006  0.0  0.1 218596  8520 ?        Ssl  23:02   0:00 /usr/sbin/rsyslogd -n
root      5020  0.1  0.0 126300  1704 ?        Ss   23:02   0:00 /usr/sbin/crond -n
sogrey    6456  0.0  0.1 1281356 7160 ?        S<l  23:03   0:00 /usr/bin/pulseaudio --start --log-target=syslog
root     20412  0.0  0.0 115380  1592 ?        S    23:09   0:00 /bin/bash /usr/libexec/sysmonitor/check_cron.sh
sogrey   20417  0.0  0.0 112744  1032 pts/0    S+   23:09   0:00 grep -E --color=auto (cron|syslog)
[sogrey@bogon 文档]$ 
```
---
把所有进程显示出来，并输出到ps001.txt文件
``` bash
ps -aux > ps001.txt
```
---
显示用户Sogrey的进程信息
``` bash
[sogrey@bogon 文档]$ ps -u sogrey
  PID TTY          TIME CMD
 6062 ?        00:00:00 gnome-keyring-d
 6159 ?        00:00:00 gnome-session-b
 6173 ?        00:00:00 dbus-launch
 6174 ?        00:00:00 dbus-daemon
 6234 ?        00:00:00 imsettings-daem
 6238 ?        00:00:00 gvfsd
...
10557 ?        00:00:00 ibus-daemon
10562 ?        00:00:00 ibus-dconf
10564 ?        00:00:00 ibus-ui-gtk3
10568 ?        00:00:00 ibus-x11
10576 ?        00:00:00 ibus-portal
10586 ?        00:00:00 ibus-engine-sim
10939 ?        00:00:02 gnome-terminal-
10955 ?        00:00:00 gnome-pty-helpe
10957 pts/0    00:00:00 bash
11679 ?        00:00:00 ibus-engine-lib
14145 ?        00:00:17 gnome-shell
23460 pts/0    00:00:00 ps
[sogrey@bogon 文档]$ 
```