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
--group grplist                  #按有效组ID(EGID)或名称选择。有效组ID描述进程使用其文件访问权限的组。
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
···
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
root         5  0.0  0.0      0     0 ?        S<   23:02   0:00 [kworker/0:0H]
root         6  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/u2:0]
root         7  0.0  0.0      0     0 ?        S    23:02   0:00 [migration/0]
root         8  0.0  0.0      0     0 ?        S    23:02   0:00 [rcu_bh]
root         9  0.2  0.0      0     0 ?        R    23:02   0:00 [rcu_sched]
root        10  0.0  0.0      0     0 ?        S<   23:02   0:00 [lru-add-drain]
root        11  0.0  0.0      0     0 ?        S    23:02   0:00 [watchdog/0]
root        12  0.0  0.0      0     0 ?        S    23:02   0:00 [kdevtmpfs]
root        13  0.0  0.0      0     0 ?        S<   23:02   0:00 [netns]
root        14  0.0  0.0      0     0 ?        S    23:02   0:00 [khungtaskd]
root        15  0.0  0.0      0     0 ?        S<   23:02   0:00 [writeback]
root        16  0.0  0.0      0     0 ?        S<   23:02   0:00 [kintegrityd]
root        17  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root        18  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root        19  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root        20  0.0  0.0      0     0 ?        S<   23:02   0:00 [kblockd]
root        21  0.0  0.0      0     0 ?        S<   23:02   0:00 [md]
root        22  0.0  0.0      0     0 ?        S<   23:02   0:00 [edac-poller]
root        23  0.0  0.0      0     0 ?        R    23:02   0:00 [kworker/0:1]
root        28  0.0  0.0      0     0 ?        S    23:02   0:00 [kswapd0]
root        29  0.0  0.0      0     0 ?        SN   23:02   0:00 [ksmd]
root        30  0.0  0.0      0     0 ?        SN   23:02   0:00 [khugepaged]
root        31  0.0  0.0      0     0 ?        S<   23:02   0:00 [crypto]
root        39  0.0  0.0      0     0 ?        S<   23:02   0:00 [kthrotld]
root        40  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/u2:1]
root        41  0.0  0.0      0     0 ?        S<   23:02   0:00 [kmpath_rdacd]
root        42  0.0  0.0      0     0 ?        S<   23:02   0:00 [kaluad]
root        43  0.0  0.0      0     0 ?        S<   23:02   0:00 [kpsmoused]
root        44  0.0  0.0      0     0 ?        S<   23:02   0:00 [ipv6_addrconf]
root        45  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/0:2]
root        58  0.0  0.0      0     0 ?        S<   23:02   0:00 [deferwq]
root        90  0.0  0.0      0     0 ?        S    23:02   0:00 [kauditd]
root        91  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/0:3]
root       697  0.0  0.0      0     0 ?        S<   23:02   0:00 [ata_sff]
root      1155  0.0  0.0      0     0 ?        S    23:02   0:00 [scsi_eh_0]
root      1158  0.0  0.0      0     0 ?        S<   23:02   0:00 [scsi_tmf_0]
root      1161  0.0  0.0      0     0 ?        S    23:02   0:00 [scsi_eh_1]
root      1162  0.0  0.0      0     0 ?        S<   23:02   0:00 [scsi_tmf_1]
root      1165  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/u2:2]
root      1166  0.0  0.0      0     0 ?        S<   23:02   0:00 [ttm_swap]
root      1167  0.0  0.0      0     0 ?        S    23:02   0:00 [irq/18-vmwgfx]
root      1168  0.0  0.0      0     0 ?        S    23:02   0:00 [kworker/u2:3]
root      1352  0.0  0.0      0     0 ?        S<   23:02   0:00 [kdmflush]
root      1353  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root      1366  0.0  0.0      0     0 ?        S<   23:02   0:00 [kdmflush]
root      1367  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root      1372  0.0  0.0      0     0 ?        S<   23:02   0:00 [kworker/0:1H]
root      1406  0.0  0.0      0     0 ?        S    23:02   0:00 [jbd2/dm-0-8]
root      1413  0.0  0.0      0     0 ?        S<   23:02   0:00 [ext4-rsv-conver]
root      1487  0.3  0.1  39432  5008 ?        Ss   23:02   0:00 /usr/lib/systemd/syste
root      1506  0.0  0.0 125272  4104 ?        Ss   23:02   0:00 /usr/sbin/lvmetad -f
root      1520  0.1  0.1  47776  5232 ?        Ss   23:02   0:00 /usr/lib/systemd/syste
root      1996  0.0  0.0      0     0 ?        S<   23:02   0:00 [iprt-VBoxWQueue]
root      2368  0.0  0.0      0     0 ?        S<   23:02   0:00 [kdmflush]
root      2374  0.0  0.0      0     0 ?        S<   23:02   0:00 [bioset]
root      2540  0.0  0.0      0     0 ?        S    23:02   0:00 [jbd2/sda1-8]
root      2548  0.0  0.0      0     0 ?        S<   23:02   0:00 [ext4-rsv-conver]
root      2747  0.0  0.0      0     0 ?        S    23:02   0:00 [jbd2/dm-2-8]
root      2748  0.0  0.0      0     0 ?        S<   23:02   0:00 [ext4-rsv-conver]
root      2800  0.0  0.0      0     0 ?        S<   23:02   0:00 [rpciod]
root      2801  0.0  0.0      0     0 ?        S<   23:02   0:00 [xprtiod]
root      2806  0.0  0.0  62052   896 ?        S<sl 23:02   0:00 /sbin/auditd
root      2808  0.0  0.0  84568  1012 ?        S<sl 23:02   0:00 /sbin/audispd
root      2810  0.0  0.0  53540  1652 ?        S<   23:02   0:00 /usr/sbin/sedispatch
root      2835  0.0  0.1 440724  6800 ?        Ssl  23:02   0:00 /usr/libexec/udisks2/u
rpc       2848  0.0  0.0  71544  1156 ?        Ss   23:02   0:00 /sbin/rpcbind -w
root      2852  0.0  0.0  16900  1408 ?        SNs  23:02   0:00 /usr/sbin/alsactl -s -
libstor+  2853  0.0  0.0   8592   816 ?        Ss   23:02   0:00 /usr/bin/lsmd -d
dbus      2863  0.4  0.0  68052  4040 ?        Ssl  23:02   0:00 /usr/bin/dbus-daemon -
root      2910  0.0  0.0  24352  1764 ?        Ss   23:02   0:00 /usr/lib/systemd/syste
root      2911  0.0  0.0  13232   796 ?        Ss   23:02   0:00 /sbin/rngd -f
rtkit     2919  0.0  0.0 196700  1812 ?        SNsl 23:02   0:00 /usr/libexec/rtkit-dae
root      2924  0.0  0.0  24512  2444 ?        Ss   23:02   0:00 /usr/sbin/smartd -n -q
root      2934  0.0  0.1 221732  5672 ?        Ss   23:02   0:00 /usr/sbin/abrtd -d -s
root      2935  0.0  0.1 219408  4876 ?        Ss   23:02   0:00 /usr/bin/abrt-watch-lo
root      2939  0.0  0.1 219408  4880 ?        Ss   23:02   0:00 /usr/bin/abrt-watch-lo
root      2942  0.0  0.0 207844  1440 ?        Ssl  23:02   0:00 /usr/sbin/gssproxy -D
root      2944  0.0  0.1 394700  4404 ?        Ssl  23:02   0:00 /usr/libexec/accounts-
root      2947  0.0  0.1 426488  7500 ?        Ssl  23:02   0:00 /usr/sbin/ModemManager
root      2989  0.0  0.0   7140   288 ?        Ss   23:02   0:00 /usr/sbin/mcelog --ign
root      3002  0.0  0.0 166964   600 ?        Ssl  23:02   0:00 /usr/bin/sysalarm
polkitd   3044  0.6  0.3 540520 14904 ?        Ssl  23:02   0:01 /usr/lib/polkit-1/polk
root      3060  0.0  0.0 115384   868 ?        S    23:02   0:00 /bin/bash /usr/sbin/ks
root      3096  0.3  0.7 356068 31148 ?        Ssl  23:02   0:00 /usr/bin/python -Es /u
root      3146  0.0  0.0 677072  1880 ?        Ssl  23:02   0:00 /usr/bin/sysmonitor --
root      3180  0.0  0.1 129892  4920 ?        S    23:02   0:00 python /usr/libexec/sy
root      3225  0.0  0.0 115380  1760 ?        S    23:02   0:00 /bin/bash /usr/sbin/io
root      3647  0.0  0.2 698192 11828 ?        Ssl  23:02   0:00 /usr/sbin/NetworkManag
root      4413  0.0  0.1 105272  5452 ?        S    23:02   0:00 /sbin/dhclient -d -q -
root      5002  0.1  0.4 569608 19192 ?        Ssl  23:02   0:00 /usr/bin/python -Es /u
root      5006  0.1  0.1 218596  7464 ?        Ssl  23:02   0:00 /usr/sbin/rsyslogd -n
root      5008  0.0  0.0 110660  4256 ?        Ss   23:02   0:00 /usr/sbin/sshd -D
root      5017  0.1  0.4 693664 21500 ?        Ssl  23:02   0:00 /usr/sbin/libvirtd
root      5020  0.2  0.0 126300  1704 ?        Ss   23:02   0:00 /usr/sbin/crond -n
root      5022  0.0  0.0  25920   944 ?        Ss   23:02   0:00 /usr/sbin/atd -f
root      5404  0.0  0.1 479340  4728 ?        Ssl  23:03   0:00 /usr/sbin/gdm
root      5422  0.0  0.0 435172  1792 ?        Sl   23:03   0:00 /usr/sbin/VBoxService 
root      5432  0.8  0.7 317020 34380 tty1     Rsl+ 23:03   0:01 /usr/bin/X :0 -backgro
nobody    5546  0.0  0.0  51796   976 ?        S    23:03   0:00 /usr/sbin/dnsmasq --co
root      5548  0.0  0.0  51768   368 ?        S    23:03   0:00 /usr/sbin/dnsmasq --co
root      5640  0.0  0.1 426200  5204 ?        Ssl  23:03   0:00 /usr/libexec/upowerd
root      5701  0.0  0.1 408620  5520 ?        Ssl  23:03   0:00 /usr/libexec/packageki
root      5705  0.0  0.0  76464  3352 ?        Ss   23:03   0:00 /usr/sbin/wpa_supplica
colord    5797  0.0  0.1 413388  6364 ?        Ssl  23:03   0:00 /usr/libexec/colord
root      5869  0.0  0.1 394720  5932 ?        Sl   23:03   0:00 gdm-session-worker [pa
setroub+  5931  9.0  1.4 372164 63136 ?        Sl   23:03   0:18 /usr/bin/python -Es /u
sogrey    6062  0.0  0.0 317528  3444 ?        Sl   23:03   0:00 /usr/bin/gnome-keyring
sogrey    6159  0.0  0.2 840780  9252 ?        Ssl  23:03   0:00 /usr/libexec/gnome-ses
sogrey    6173  0.0  0.0  56800   704 ?        S    23:03   0:00 dbus-launch --sh-synta
sogrey    6174  0.1  0.0  67216  2344 ?        Ssl  23:03   0:00 /usr/bin/dbus-daemon -
sogrey    6234  0.0  0.0 389684  4220 ?        Sl   23:03   0:00 /usr/libexec/imsetting
sogrey    6238  0.0  0.0 388820  4072 ?        Sl   23:03   0:00 /usr/libexec/gvfsd
sogrey    6243  0.0  0.1 417804  5524 ?        Sl   23:03   0:00 /usr/libexec/gvfsd-fus
sogrey    6344  0.0  0.0 144752   340 ?        S    23:03   0:00 /usr/bin/VBoxClient --
sogrey    6346  0.0  0.0 279060  1632 ?        Sl   23:03   0:00 /usr/bin/VBoxClient --
sogrey    6357  0.0  0.0 144752   336 ?        S    23:03   0:00 /usr/bin/VBoxClient --
sogrey    6358  0.0  0.0 277004  1064 ?        Sl   23:03   0:00 /usr/bin/VBoxClient --
sogrey    6361  0.0  0.0 144752   336 ?        S    23:03   0:00 /usr/bin/VBoxClient --
sogrey    6363  0.0  0.0 277520  1312 ?        Sl   23:03   0:00 /usr/bin/VBoxClient --
sogrey    6367  0.0  0.0 144752   340 ?        S    23:03   0:00 /usr/bin/VBoxClient --
sogrey    6370  0.0  0.0 281188  1384 ?        Sl   23:03   0:00 /usr/bin/VBoxClient --
sogrey    6380  0.0  0.0  72324   756 ?        Ss   23:03   0:00 /usr/bin/ssh-agent /bi
sogrey    6405  0.0  0.0 346764  3600 ?        Sl   23:03   0:00 /usr/libexec/at-spi-bu
sogrey    6410  0.0  0.0  66304  2464 ?        Sl   23:03   0:00 /bin/dbus-daemon --con
sogrey    6416  0.0  0.0 230984  3968 ?        Sl   23:03   0:00 /usr/libexec/at-spi2-r
sogrey    6446  3.8  4.4 3025164 196668 ?      Rl   23:03   0:07 /usr/bin/gnome-shell
sogrey    6456  0.0  0.1 1281356 7184 ?        S<l  23:03   0:00 /usr/bin/pulseaudio --
sogrey    6581  0.0  0.6 913812 27928 ?        Sl   23:03   0:00 /usr/libexec/gnome-she
sogrey    6604  0.0  0.6 928108 28320 ?        Sl   23:03   0:00 /usr/libexec/evolution
sogrey    6606  0.0  0.1 407384  7700 ?        Sl   23:03   0:00 /usr/libexec/mission-c
sogrey    6609  0.0  0.1 557360  5980 ?        Sl   23:03   0:00 /usr/libexec/gvfs-udis
sogrey    6626  0.0  0.5 915908 24996 ?        Sl   23:03   0:00 /usr/libexec/goa-daemo
sogrey    6627  0.0  0.0 396604  3660 ?        Sl   23:03   0:00 /usr/libexec/gvfs-gpho
sogrey    6642  0.0  0.0 371632  3224 ?        Sl   23:03   0:00 /usr/libexec/gvfs-goa-
sogrey    6654  0.0  0.1 549564  8556 ?        Sl   23:03   0:00 /usr/libexec/goa-ident
sogrey    6691  0.0  0.1 478588  4548 ?        Sl   23:03   0:00 /usr/libexec/gvfs-afc-
sogrey    6710  0.0  0.0 387512  3432 ?        Sl   23:03   0:00 /usr/libexec/gvfs-mtp-
sogrey    6754  0.0  0.1 529504  6940 ?        Sl   23:03   0:00 /usr/libexec/gsd-mouse
sogrey    6755  0.0  0.3 718916 14596 ?        Sl   23:03   0:00 /usr/libexec/gsd-power
sogrey    6759  0.0  0.1 558816  8596 ?        Sl   23:03   0:00 /usr/libexec/gsd-print
sogrey    6765  0.0  0.1 674720  6800 ?        Sl   23:03   0:00 /usr/libexec/gsd-rfkil
sogrey    6770  0.0  0.1 527160  6612 ?        Sl   23:03   0:00 /usr/libexec/gsd-scree
sogrey    6776  0.0  0.1 563492  5140 ?        Sl   23:03   0:00 /usr/libexec/gsd-shari
sogrey    6779  0.0  0.3 634440 13656 ?        Sl   23:03   0:00 /usr/libexec/gsd-wacom
sogrey    6793  0.0  0.3 632916 16748 ?        Sl   23:03   0:00 /usr/libexec/gsd-xsett
sogrey    6796  0.0  0.2 631900  8896 ?        Sl   23:03   0:00 /usr/libexec/gsd-smart
sogrey    6800  0.0  0.2 571836  9836 ?        Sl   23:03   0:00 /usr/libexec/gsd-sound
sogrey    6812  0.0  0.1 605536  7036 ?        Sl   23:03   0:00 /usr/libexec/gsd-accou
sogrey    6828  0.0  0.1 529496  6944 ?        Sl   23:03   0:00 /usr/libexec/gsd-a11y-
sogrey    6829  0.0  0.3 564936 13532 ?        Sl   23:03   0:00 /usr/libexec/gsd-a11y-
sogrey    6832  0.0  0.3 727564 14444 ?        Sl   23:03   0:00 /usr/libexec/gsd-color
sogrey    6838  0.0  0.3 482324 13176 ?        Sl   23:03   0:00 /usr/libexec/gsd-clipb
sogrey    6840  0.0  0.2 612084  9700 ?        Sl   23:03   0:00 /usr/libexec/gsd-house
sogrey    6842  0.0  0.2 569996  9032 ?        Sl   23:03   0:00 /usr/libexec/gsd-datet
sogrey    6849  0.0  0.3 1027932 15348 ?       Sl   23:03   0:00 /usr/libexec/gsd-media
sogrey    6853  0.0  0.3 636568 13728 ?        Sl   23:03   0:00 /usr/libexec/gsd-keybo
sogrey    6854  0.0  0.1 421208  6452 ?        Sl   23:03   0:00 /usr/libexec/gsd-disk-
sogrey    6885  0.0  0.1 628060  7744 ?        Sl   23:03   0:00 /usr/libexec/gsd-print
sogrey    6919  0.1  1.4 1118600 62932 ?       Sl   23:03   0:00 /usr/libexec/evolution
sogrey    7010  0.0  1.4 1062360 61332 ?       Sl   23:03   0:00 /usr/libexec/evolution
sogrey    7061  0.0  0.0 187516  2916 ?        Sl   23:03   0:00 /usr/libexec/dconf-ser
sogrey    7062  0.0  1.4 1224964 61456 ?       Sl   23:03   0:00 /usr/libexec/evolution
sogrey    7110  0.0  0.6 1073248 28084 ?       Sl   23:03   0:00 /usr/libexec/evolution
sogrey    7135  0.2  0.7 1182804 31804 ?       Sl   23:03   0:00 /usr/libexec/evolution
sogrey   10071  0.3  0.7 1043520 34276 ?       Sl   23:05   0:00 nautilus-desktop --for
sogrey   10077  0.0  0.1 464904  4604 ?        Sl   23:05   0:00 /usr/libexec/gvfsd-tra
sogrey   10083  0.1  0.3 543436 16380 ?        Sl   23:05   0:00 abrt-applet
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
    2     8     0     0 ?           -1 S        0   0:00  \_ [rcu_bh]
    2     9     0     0 ?           -1 R        0   0:00  \_ [rcu_sched]
    2    10     0     0 ?           -1 S<       0   0:00  \_ [lru-add-drain]
    2    11     0     0 ?           -1 S        0   0:00  \_ [watchdog/0]
    2    12     0     0 ?           -1 S        0   0:00  \_ [kdevtmpfs]
    2    13     0     0 ?           -1 S<       0   0:00  \_ [netns]
    2    14     0     0 ?           -1 S        0   0:00  \_ [khungtaskd]
    2    15     0     0 ?           -1 S<       0   0:00  \_ [writeback]
    2    16     0     0 ?           -1 S<       0   0:00  \_ [kintegrityd]
    2    17     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2    18     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2    19     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2    20     0     0 ?           -1 S<       0   0:00  \_ [kblockd]
    2    21     0     0 ?           -1 S<       0   0:00  \_ [md]
    2    22     0     0 ?           -1 S<       0   0:00  \_ [edac-poller]
    2    23     0     0 ?           -1 S        0   0:00  \_ [kworker/0:1]
    2    28     0     0 ?           -1 S        0   0:00  \_ [kswapd0]
    2    29     0     0 ?           -1 SN       0   0:00  \_ [ksmd]
    2    30     0     0 ?           -1 SN       0   0:00  \_ [khugepaged]
    2    31     0     0 ?           -1 S<       0   0:00  \_ [crypto]
    2    39     0     0 ?           -1 S<       0   0:00  \_ [kthrotld]
    2    40     0     0 ?           -1 S        0   0:00  \_ [kworker/u2:1]
    2    41     0     0 ?           -1 S<       0   0:00  \_ [kmpath_rdacd]
    2    42     0     0 ?           -1 S<       0   0:00  \_ [kaluad]
    2    43     0     0 ?           -1 S<       0   0:00  \_ [kpsmoused]
    2    44     0     0 ?           -1 S<       0   0:00  \_ [ipv6_addrconf]
    2    58     0     0 ?           -1 S<       0   0:00  \_ [deferwq]
    2    90     0     0 ?           -1 S        0   0:00  \_ [kauditd]
    2    91     0     0 ?           -1 S        0   0:00  \_ [kworker/0:3]
    2   697     0     0 ?           -1 S<       0   0:00  \_ [ata_sff]
    2  1155     0     0 ?           -1 S        0   0:00  \_ [scsi_eh_0]
    2  1158     0     0 ?           -1 S<       0   0:00  \_ [scsi_tmf_0]
    2  1161     0     0 ?           -1 S        0   0:00  \_ [scsi_eh_1]
    2  1162     0     0 ?           -1 S<       0   0:00  \_ [scsi_tmf_1]
    2  1166     0     0 ?           -1 S<       0   0:00  \_ [ttm_swap]
    2  1167     0     0 ?           -1 S        0   0:00  \_ [irq/18-vmwgfx]
    2  1168     0     0 ?           -1 S        0   0:00  \_ [kworker/u2:3]
    2  1352     0     0 ?           -1 S<       0   0:00  \_ [kdmflush]
    2  1353     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2  1366     0     0 ?           -1 S<       0   0:00  \_ [kdmflush]
    2  1367     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2  1372     0     0 ?           -1 S<       0   0:00  \_ [kworker/0:1H]
    2  1406     0     0 ?           -1 S        0   0:00  \_ [jbd2/dm-0-8]
    2  1413     0     0 ?           -1 S<       0   0:00  \_ [ext4-rsv-conver]
    2  1996     0     0 ?           -1 S<       0   0:00  \_ [iprt-VBoxWQueue]
    2  2368     0     0 ?           -1 S<       0   0:00  \_ [kdmflush]
    2  2374     0     0 ?           -1 S<       0   0:00  \_ [bioset]
    2  2540     0     0 ?           -1 S        0   0:00  \_ [jbd2/sda1-8]
    2  2548     0     0 ?           -1 S<       0   0:00  \_ [ext4-rsv-conver]
    2  2747     0     0 ?           -1 S        0   0:00  \_ [jbd2/dm-2-8]
    2  2748     0     0 ?           -1 S<       0   0:00  \_ [ext4-rsv-conver]
    2  2800     0     0 ?           -1 S<       0   0:00  \_ [rpciod]
    2  2801     0     0 ?           -1 S<       0   0:00  \_ [xprtiod]
    0     1     1     1 ?           -1 Ss       0   0:04 /usr/lib/systemd/systemd --switched-
    1  1487  1487  1487 ?           -1 Ss       0   0:01 /usr/lib/systemd/systemd-journald
    1  1506  1506  1506 ?           -1 Ss       0   0:00 /usr/sbin/lvmetad -f
    1  1520  1520  1520 ?           -1 Ss       0   0:00 /usr/lib/systemd/systemd-udevd
    1  2806  2806  2806 ?           -1 S<sl     0   0:00 /sbin/auditd
 2806  2808  2808  2808 ?           -1 S<sl     0   0:00  \_ /sbin/audispd
 2808  2810  2808  2808 ?           -1 S<       0   0:00      \_ /usr/sbin/sedispatch
    1  2835  2835  2835 ?           -1 Ssl      0   0:00 /usr/libexec/udisks2/udisksd
    1  2848  2848  2848 ?           -1 Ss      32   0:00 /sbin/rpcbind -w
    1  2852  2852  2852 ?           -1 SNs      0   0:00 /usr/sbin/alsactl -s -n 19 -c -E ALS
    1  2853  2853  2853 ?           -1 Ss     998   0:00 /usr/bin/lsmd -d
    1  2863  2863  2863 ?           -1 Ssl     81   0:01 /usr/bin/dbus-daemon --system --addr
    1  2910  2910  2910 ?           -1 Ss       0   0:00 /usr/lib/systemd/systemd-logind
    1  2911  2911  2911 ?           -1 Ss       0   0:00 /sbin/rngd -f
    1  2919  2919  2919 ?           -1 SNsl   172   0:00 /usr/libexec/rtkit-daemon
    1  2924  2924  2924 ?           -1 Ss       0   0:00 /usr/sbin/smartd -n -q never
    1  2934  2934  2934 ?           -1 Ss       0   0:00 /usr/sbin/abrtd -d -s
    1  2935  2935  2935 ?           -1 Ss       0   0:00 /usr/bin/abrt-watch-log -F Backtrace
    1  2939  2939  2939 ?           -1 Ss       0   0:00 /usr/bin/abrt-watch-log -F BUG: WARN
    1  2942  2942  2942 ?           -1 Ssl      0   0:00 /usr/sbin/gssproxy -D
    1  2944  2944  2944 ?           -1 Ssl      0   0:00 /usr/libexec/accounts-daemon
    1  2947  2947  2947 ?           -1 Ssl      0   0:00 /usr/sbin/ModemManager
    1  2989  2989  2989 ?           -1 Ss       0   0:00 /usr/sbin/mcelog --ignorenodev --dae
    1  3002  3002  3002 ?           -1 Ssl      0   0:00 /usr/bin/sysalarm
    1  3044  3044  3044 ?           -1 Ssl    999   0:01 /usr/lib/polkit-1/polkitd --no-debug
    1  3060  3034  3034 ?           -1 S        0   0:00 /bin/bash /usr/sbin/ksmtuned
 3060 16340  3034  3034 ?           -1 S        0   0:00  \_ sleep 60
    1  3096  3096  3096 ?           -1 Ssl      0   0:00 /usr/bin/python -Es /usr/sbin/firewa
    1  3146  3146  3146 ?           -1 Ssl      0   0:00 /usr/bin/sysmonitor --daemon
 3146  3180  3180  3146 ?           -1 S        0   0:00  \_ python /usr/libexec/sysmonitor/c
 3146  3225  3225  3146 ?           -1 S        0   0:00  \_ /bin/bash /usr/sbin/iomonitor_da
 3225 17744  3225  3146 ?           -1 S        0   0:00  |   \_ sleep 1
 3146 17772 17772  3146 ?           -1 S        0   0:00  \_ /bin/bash /usr/libexec/sysmonito
    1  3647  3647  3647 ?           -1 Ssl      0   0:00 /usr/sbin/NetworkManager --no-daemon
 3647  4413  4413  3647 ?           -1 S        0   0:00  \_ /sbin/dhclient -d -q -sf /usr/li
    1  5002  5002  5002 ?           -1 Ssl      0   0:00 /usr/bin/python -Es /usr/sbin/tuned 
    1  5006  5006  5006 ?           -1 Ssl      0   0:00 /usr/sbin/rsyslogd -n
    1  5008  5008  5008 ?           -1 Ss       0   0:00 /usr/sbin/sshd -D
    1  5017  5017  5017 ?           -1 Ssl      0   0:00 /usr/sbin/libvirtd
    1  5020  5020  5020 ?           -1 Ss       0   0:00 /usr/sbin/crond -n
    1  5022  5022  5022 ?           -1 Ss       0   0:00 /usr/sbin/atd -f
    1  5404  5404  5404 ?           -1 Ssl      0   0:00 /usr/sbin/gdm
 5404  5432  5432  5432 tty1      5432 Rsl+     0   0:05  \_ /usr/bin/X :0 -background none -
 5404  5869  5404  5404 ?           -1 Sl       0   0:00  \_ gdm-session-worker [pam/gdm-pass
 5869  6159  6159  6159 ?           -1 Ssl   1000   0:00      \_ /usr/libexec/gnome-session-b
 6159  6380  6380  6380 ?           -1 Ss    1000   0:00          \_ /usr/bin/ssh-agent /bin/
 6159  6754  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-mouse
 6159  6755  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-power
 6159  6759  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-print-n
 6159  6765  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-rfkill
 6159  6770  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-screens
 6159  6776  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-sharing
 6159  6779  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-wacom
 6159  6793  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-xsettin
 6159  6796  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-smartca
 6159  6800  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-sound
 6159  6812  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-account
 6159  6828  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-a11y-se
 6159  6829  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-a11y-ke
 6159  6832  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-color
 6159  6838  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-clipboa
 6159  6840  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-houseke
 6159  6842  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-datetim
 6159  6849  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-media-k
 6159  6853  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-keyboar
 6159  6854  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/libexec/gsd-disk-ut
 6159 10071  6159  6159 ?           -1 Sl    1000   0:00          \_ nautilus-desktop --force
 6159 10083  6159  6159 ?           -1 Sl    1000   0:00          \_ abrt-applet
 6159 10084  6159  6159 ?           -1 Sl    1000   0:00          \_ /usr/bin/seapplet
 6159 10088  6159  6159 ?           -1 SNl   1000   0:00          \_ /usr/libexec/tracker-min
 6159 10091  6159  6159 ?           -1 SNl   1000   0:00          \_ /usr/libexec/tracker-min
 6159 10106  6159  6159 ?           -1 SNl   1000   0:00          \_ /usr/libexec/tracker-min
 6159 10126  6159  6159 ?           -1 SNl   1000   0:00          \_ /usr/libexec/tracker-ext
 6159 14145  6159  6159 ?           -1 Rl    1000   0:07          \_ /usr/bin/gnome-shell
    1  5422  5420  5420 ?           -1 Sl       0   0:00 /usr/sbin/VBoxService --pidfile /var
    1  5546  5544  5544 ?           -1 S       99   0:00 /usr/sbin/dnsmasq --conf-file=/var/l
 5546  5548  5544  5544 ?           -1 S        0   0:00  \_ /usr/sbin/dnsmasq --conf-file=/v
    1  5640  5640  5640 ?           -1 Ssl      0   0:00 /usr/libexec/upowerd
    1  5701  5701  5701 ?           -1 Ssl      0   0:00 /usr/libexec/packagekitd
    1  5705  5705  5705 ?           -1 Ss       0   0:00 /usr/sbin/wpa_supplicant -u -f /var/
    1  5797  5797  5797 ?           -1 Ssl    997   0:00 /usr/libexec/colord
    1  5931  2863  2863 ?           -1 Sl     991   0:28 /usr/bin/python -Es /usr/sbin/setrou
 5931 17770  2863  2863 ?           -1 Z      991   0:00  \_ [rpm] <defunct>
    1  6062  6058  6058 ?           -1 Sl    1000   0:00 /usr/bin/gnome-keyring-daemon --daem
    1  6173  6159  6159 ?           -1 S     1000   0:00 dbus-launch --sh-syntax --exit-with-
    1  6174  6174  6174 ?           -1 Ssl   1000   0:00 /usr/bin/dbus-daemon --fork --print-
    1  6234  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/imsettings-daemon
 6234 10557 10557  6174 ?           -1 Sl    1000   0:00  \_ /usr/bin/ibus-daemon -r --xim
10557 10562 10557  6174 ?           -1 Sl    1000   0:00      \_ /usr/libexec/ibus-dconf
10557 10564 10557  6174 ?           -1 Sl    1000   0:00      \_ /usr/libexec/ibus-ui-gtk3
10557 10586 10557  6174 ?           -1 Sl    1000   0:00      \_ /usr/libexec/ibus-engine-sim
10557 11679 10557  6174 ?           -1 Sl    1000   0:00      \_ /usr/libexec/ibus-engine-lib
    1  6238  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfsd
    1  6243  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/gvfsd-fuse /run/user/10
    1  6344  6342  6342 ?           -1 S     1000   0:00 /usr/bin/VBoxClient --clipboard
 6344  6346  6342  6342 ?           -1 Sl    1000   0:00  \_ /usr/bin/VBoxClient --clipboard
    1  6357  6352  6352 ?           -1 S     1000   0:00 /usr/bin/VBoxClient --seamless
 6357  6358  6352  6352 ?           -1 Sl    1000   0:00  \_ /usr/bin/VBoxClient --seamless
    1  6361  6359  6359 ?           -1 S     1000   0:00 /usr/bin/VBoxClient --draganddrop
 6361  6363  6359  6359 ?           -1 Sl    1000   0:00  \_ /usr/bin/VBoxClient --draganddro
    1  6367  6364  6364 ?           -1 S     1000   0:00 /usr/bin/VBoxClient --vmsvga
 6367  6370  6364  6364 ?           -1 Sl    1000   0:00  \_ /usr/bin/VBoxClient --vmsvga
    1  6405  6174  6174 ?           -1 Sl    1000   0:00 /usr/libexec/at-spi-bus-launcher
 6405  6410  6174  6174 ?           -1 Sl    1000   0:00  \_ /bin/dbus-daemon --config-file=/
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
 6243 ?        00:00:00 gvfsd-fuse
 6344 ?        00:00:00 VBoxClient
 6346 ?        00:00:00 VBoxClient
 6357 ?        00:00:00 VBoxClient
 6358 ?        00:00:00 VBoxClient
 6361 ?        00:00:00 VBoxClient
 6363 ?        00:00:00 VBoxClient
 6367 ?        00:00:00 VBoxClient
 6370 ?        00:00:00 VBoxClient
 6380 ?        00:00:00 ssh-agent
 6405 ?        00:00:00 at-spi-bus-laun
 6410 ?        00:00:00 dbus-daemon
 6416 ?        00:00:00 at-spi2-registr
 6456 ?        00:00:00 pulseaudio
 6581 ?        00:00:00 gnome-shell-cal
 6604 ?        00:00:00 evolution-sourc
 6606 ?        00:00:00 mission-control
 6609 ?        00:00:00 gvfs-udisks2-vo
 6626 ?        00:00:00 goa-daemon
 6627 ?        00:00:00 gvfs-gphoto2-vo
 6642 ?        00:00:00 gvfs-goa-volume
 6654 ?        00:00:00 goa-identity-se
 6691 ?        00:00:00 gvfs-afc-volume
 6710 ?        00:00:00 gvfs-mtp-volume
 6754 ?        00:00:00 gsd-mouse
 6755 ?        00:00:00 gsd-power
 6759 ?        00:00:00 gsd-print-notif
 6765 ?        00:00:00 gsd-rfkill
 6770 ?        00:00:00 gsd-screensaver
 6776 ?        00:00:00 gsd-sharing
 6779 ?        00:00:00 gsd-wacom
 6793 ?        00:00:00 gsd-xsettings
 6796 ?        00:00:00 gsd-smartcard
 6800 ?        00:00:00 gsd-sound
 6812 ?        00:00:00 gsd-account
 6828 ?        00:00:00 gsd-a11y-settin
 6829 ?        00:00:00 gsd-a11y-keyboa
 6832 ?        00:00:00 gsd-color
 6838 ?        00:00:00 gsd-clipboard
 6840 ?        00:00:00 gsd-housekeepin
 6842 ?        00:00:00 gsd-datetime
 6849 ?        00:00:00 gsd-media-keys
 6853 ?        00:00:00 gsd-keyboard
 6854 ?        00:00:00 gsd-disk-utilit
 6885 ?        00:00:00 gsd-printer
 6919 ?        00:00:00 evolution-calen
 7010 ?        00:00:00 evolution-calen
 7061 ?        00:00:00 dconf-service
 7062 ?        00:00:00 evolution-calen
 7110 ?        00:00:00 evolution-addre
 7135 ?        00:00:00 evolution-addre
10071 ?        00:00:00 nautilus-deskto
10077 ?        00:00:00 gvfsd-trash
10083 ?        00:00:00 abrt-applet
10084 ?        00:00:00 seapplet
10088 ?        00:00:00 tracker-miner-f
10091 ?        00:00:00 tracker-miner-u
10106 ?        00:00:00 tracker-miner-a
10121 ?        00:00:00 tracker-store
10126 ?        00:00:00 tracker-extract
10158 ?        00:00:00 nautilus
10269 ?        00:00:00 gvfsd-metadata
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