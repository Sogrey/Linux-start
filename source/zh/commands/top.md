# top - 显示或管理执行中的程序
top命令 可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。

top指令用来显示Linux的进程信息，这是一个动态显示的过程。top提供运行系统的动态实时视图。它可以显示系统摘要信息以及当前由Linux内核管理的任务列表。所显示的系统摘要信息的类型以及为任务显示的信息的类型、顺序和大小都是用户可配置的，并且可以在重新启动期间使配置持久。

该程序为进程操作提供了有限的交互界面，也为个人配置提供了更广泛的界面-包括其操作的每个方面。虽然TOP是在整个文档中引用的，但您可以随意命名该程序。这个新的名称(可能是别名)将反映在top的显示器上，并在读取和写入配置文件时使用。

当操作top时，最重要的两个键是Help(“h”或“？”)并退出(‘q’)键。或者，您可以简单地使用传统的中断键(‘^C’)。当您第一次启动top时，您将看到传统的屏幕元素：1)摘要区域；2)消息/提示行；3)列标题；4)任务区域。然而，与之前的top相比，会有一些不同之处。

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
top  -hv | -abcHimMsS  -d  delay  -n  iterations  -p  pid  [, pid ...]
```

## 选项

``` bash
-a                  # 按照内存使用排序
-b                  # 批处理模式操作。以“批处理模式”启动top，这对于将输出从top发送到其他程序或文件可能很有用。在这种模式下，top将不接受输入并运行，直到使用‘-n’命令行选项设置的迭代限制或直到终止为止。
-c                  # 以最后一个记忆中的‘c’状态反转开始。因此，如果top正在显示命令行，那么现在该字段将显示程序名，而Visa则相反。
-d ss.tt            # 设置top监视的时间间隔，默认5s。可以使用小数秒，但是负数却不行
-h                  # 显示帮助信息
-H                  # 线程取反。从最后一个记忆中的“H”状态开始。当此切换打开时，将显示所有单独的线程。否则，top将显示进程中所有线程的总和。
-i                  # 不显示僵尸进程。从最后一个记忆中的“I”状态开始。当此切换关闭时，将不会显示闲置或僵尸的任务。
-m                  # 使用的报告(进程RSS和交换总计数之和)，而不是VIRT
-M                  # 显示内存单元
-n                  # 设置监控更新次数
-p                  # 仅监视指定pid的信息。这个选项可以被给予最多20次，或者您可以提供一个逗号分隔列表和最多20个PIDS。这两种方法都是允许的。
-s                  # 安全模式。以强制的安全模式启动top，即使对于root用户也是如此。通过系统配置文件更好地控制这种模式(参见主题5)。档案)
-S                  # 累积时间模式切换。从最后一个记忆中的‘S’状态反转开始。当“累积模式”打开时，每个进程都会列出它及其死子进程使用的CPU时间。有关此模式的其他信息，请参见“S”交互式命令。
-u                  # 只监视具有有效UID或用户名匹配的进程
-U                  # 只监视具有给定UID或用户名匹配的进程。这与实际的、有效的、保存的和文件系统UID匹配。
-v                  # 显示库版本和使用提示，然后退出。
```
## 字段/列

### 字段描述

下面列出了top的可用字段。它们总是与所显示的字母相关联，无论您为它们设置的位置是‘o’(Order字段)交互命令。任何字段都可以选择为排序字段，您可以控制它们是按高低排序还是从低到高排序。

| 字段        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| **PID**     | 任务的唯一进程ID，它定期包装，但从不在零重新启动             |
| **PPID**    | 进程的父ID                                                   |
| **RUSER**   | 任务所有者的真实用户名                                       |
| **UID**     | 任务所有者的有效用户ID                                       |
| **USER**    | 任务所有者的有效用户名                                       |
| **GROUP**   | 任务所有者的有效组名称                                       |
| **TTY**     | 控制终端的名称。这通常是设备(串口，pty等)。从其中启动进程，并将其用于输入或输出。但是，任务不需要与终端相关联，在这种情况下，您会看到‘？’显示 |
| **PR**      | 任务优先级                                                   |
| **NI**      | 任务的nice值。负的好值意味着更高的优先级，而正的好值则意味着较低的优先级。该字段中的零只意味着在确定任务的可调度性时不会调整优先级。 |
| **P**       | 表示最后一次使用的处理器的数字。在真正的SMP环境中，由于内核有意使用弱亲和力，这很可能经常发生变化。此外，运行top的行为可能会打破这种微弱的亲和力，导致更多进程更频繁地更改CPU(因为对CPU时间的额外需求)。 |
| **%CPU**    | 自上次屏幕更新以来，任务在经过的CPU时间中所占的份额，表示为总CPU时间的百分比。在真正的SMP环境中，如果“Irix模式”关闭，top将在“Solaris模式”中操作，其中任务的CPU使用量将除以CPU总数。使用“i”交互命令切换“Irix/Solaris”模式 |
| **TIME**    | 任务自启动以来使用的总CPU时间。当“累积模式”打开时，每个进程都会列出它及其死子进程使用的CPU时间。使用“S”切换“累积模式”，这是命令行选项和交互式命令。有关此模式的其他信息，请参见“S”交互式命令 |
| **TIME+**   | 与“TIME”相同，但通过百分之一秒反映出更多的粒度。             |
| **%MEME**   | 任务当前使用的可用物理内存共享                               |
| **VIRT**    | 任务使用的虚拟内存总量。它包括所有代码、数据和共享库以及已被交换的页面。(注意：您可以定义STATSIZE=1环境变量，并且VIRT将从/proc/#/state VmSize字段中计算。) |
| **SWAP**    | 每个进程交换值现在从/proc/#/Status VmABP字段中获取。         |
| **RES**     | 任务使用的非交换物理内存。                                   |
| **CODE**    | 用于可执行代码的物理内存量，也称为“文本驻留集”大小或TRS。    |
| **DATA**    | 用于可执行代码以外的物理内存量，也称为“数据驻留集”大小或DRS。 |
| **SHR**     | 任务使用的共享内存量。它只是反映了可能与其他进程共享的内存。 |
| **nFLT**    | 任务发生的主要页面错误数。当进程试图读取或写入当前不在其地址空间中的虚拟页时，会发生页错误。一个主要的页面错误是当磁盘访问涉及到使该页可用时。 |
| **nDRT**    | 自上次写入磁盘以来已修改的页数。脏页必须写入磁盘，才能将相应的物理内存位置用于其他虚拟页。 |
| **S**       | 任务的状态，可以是**D**，不间断睡眠**R**，运行**S**，睡眠**T**，追踪或停止**Z**，僵尸 |
| **Command** | 显示用于启动任务的命令行或关联程序的名称。使用‘c’在命令行和名称之间切换，这既是命令行选项，也是交互式命令。当您选择显示命令行时，没有命令行的进程(如内核线程)将仅以括号中的程序名显示，如本例所示( mdrecoveryd )如果显示的长度太长，无法适应该字段的当前宽度，则这两种显示形式都会受到潜在截断的影响。该宽度取决于所选的其他字段、其顺序和当前屏幕宽度。 |
| **WCHAN**   | 根据内核链接映射(‘System.map’)的可用性，该字段将显示任务当前处于休眠状态的内核函数的名称或地址。正在运行的任务将在本列中显示一个‘-’。 |
| **Flags**   | 此列表示任务的当前调度标志，这些标志以十六进制表示法表示，零被抑制。这些标志正式记录在<linux/disk.h>中。 |

### 选择和排序列

在按下交互命令‘f’(字段选择)或‘o’(顺序字段)后，将显示一个屏幕，其中包含当前字段字符串，后面跟着所有字段的名称和说明。下面是来自TOP的四个窗口/字段组之一的示例字段字符串，以及对所使用的约定的解释：

示例字段字符串：

ANOPQRSTUVXbcdefgjlmyzWHIK

显示字段的顺序对应于该字符串中字母的顺序。

如果字母大写，则相应字段本身将显示为任务显示的一部分(屏幕宽度允许)。这也将用一个领先的星号(‘*’)来表示，如以下摘录所示：

```
...``* K: %CPU    = CPU usage``l: TIME    = CPU Time``m: TIME+   = CPU Time, hundredths``* N: %MEM    = Memory usage (RES)``* O: VIRT    = Virtual Image (kb)``...
```

字段选择屏幕---‘f’交互式命令：只需按相应的字母，就可以切换字段的显示。

命令字段屏幕---“o”交互命令：通过按相应的大写字母向左移动一个字段，用小写字母向右移动一个字段。

### 汇总区域字段

描述CPU统计信息的汇总区域字段被缩写。它们提供了关于在下列方面花费的时间的信息：

**us**，用户模式。

**sy**，系统模式。

**ni**，低级别用户模式

**id**，空闲任务。

**wa**，IO等待。

**hi**，服务中断。

**si**，服务软中断。

**st**，偷窃(给其他Domu实例的时间。

 

## 交互命令

下面列出的是类别中命令的简短索引。有些命令不止一次出现-它们的含义或范围可能因发出命令的上下文而异。

### 全局命令

全局交互命令始终可以在全屏模式和交替显示模式下使用.但是，在“安全模式”下运行时，这些交互命令中有些是不可用的。如果您希望预先知道您的顶部是否已被保护，只需请求帮助并查看第二行的系统摘要。

| 命令                   | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `<Enter>` or `<Space>` | 刷新显示  这些命令什么也不做，它们只是被忽略了。但是，它们将唤醒顶部，在接收到任何输入后，整个显示将被重新绘制。如果您有较大的延迟间隔并希望看到当前状态，请使用这些键中的任何一个。 |
| ? or h          | 帮助  有两个帮助级别可用。第一个命令将提醒您注意所有基本的交互命令。如果顶部是安全的，屏幕就会缩写。输入“h”或“？”在“帮助”屏幕上，将为那些适用于交替显示模式的交互式命令提供帮助。 |
| =                | 退出任务限制  移除显示哪些任务的限制。此命令将反转所有可能处于活动状态的‘i’(空闲任务)和‘n’(最大任务)命令。它还提供了从PID监控中的“退出”。有关PID监视的讨论，请参见‘-p’命令行选项。在交替显示模式下操作时，此命令的含义稍宽一些。 |
| A                | 交替显示模式开关  此命令将在全屏模式和交替显示模式之间切换。交替显示模式和“G”交互命令，以洞察“当前”窗口和字段组。 |
| B                | 粗体禁用/启用切换  此命令将影响“粗体”终端功能的使用，并更改当前窗口的摘要区域和任务区域。虽然它主要是用于哑巴终端，但它可以在任何时候应用。注意：当这个按钮在单色模式下运行时，整个显示将显示为正常文本。因此，除非‘x’和/或‘y’切换是用相反的强调，就不会有视觉确认他们是均匀的。 |
| d or s       | 改变延迟时间间隔  系统将提示您在显示更新之间输入延迟时间(以秒为单位)。不允许使用小数秒，但不允许使用负数。输入0导致(几乎)不断更新，显示不令人满意，因为系统和TTY驱动程序试图跟上TOP的要求。延迟值与系统负载成反比，因此要小心设置。如果您想知道当前的延迟时间，只需请求帮助并查看第二行的系统摘要。 |
| G                | 选择另一个窗口/字段组  您将被提示输入一个介于1到4之间的数字，指定应该成为“当前”窗口的窗口/字段组。你很快就会对这4个窗口感到舒服，特别是在尝试了交替显示模式之后。 |
| I                | Irix/Solaris模式切换  当在“Solaris”模式下操作(“I”切换关闭)时，任务的CPU使用量将除以CPU总数。发出此命令后，您将被告知此切换的新状态 |
| u               | 选择用户  将提示您输入UID或用户名。只显示属于选定用户的进程。此选项与有效UID匹配。 |
| U                | 选择用户  将提示您输入UID或用户名。只显示属于选定用户的进程。此选项与实际的、有效的、保存的和文件系统UID匹配。 |
| k              | 杀死任务  系统会提示您输入PID，然后再发送信号。在提示符中反映的默认信号是SIGTERM。但是，您可以通过号码或名称发送任何信号。如果希望中止终止进程，请根据进度执行以下操作之一：  1）在PID提示符下，只需按<Enter>  2）在信号提示处，键入0 |
| q                | 退出                                                         |
| r              | 重新设置任务优先级  系统会提示您输入PID，然后将值设置为NICE。输入一个正值将导致进程失去优先级。相反，负值将导致内核更好地查看进程。 |
| W              | 写入配置文件  这将节省您的所有选项和切换加上当前显示模式和延迟时间。通过在退出top之前发出此命令，您将能够在以后完全相同的状态下重新启动。 |
| Z               | 改变颜色映射  这个键将带你到一个单独的屏幕，在那里你可以改变“当前”窗口的颜色，或者所有窗口的颜色。有关此交互式命令的详细信息。 |
| *                  | 以星号(‘*’)显示的命令在“安全模式”中不可用，也不会显示在第1级帮助屏幕上。 |

### 摘要区域命令

摘要区域交互命令始终可以在全屏模式和交替显示模式下使用.它们会影响显示的起始行，并将决定消息和提示的位置。这些命令总是只影响“当前”窗口/字段组。如果整个摘要区域已切换到任何窗口，则只剩下消息行。这样，您就可以最大限度地使用可用的任务行，但是(暂时)在全屏模式下牺牲了程序名，或者在交替显示模式下牺牲了当前的窗口名。

| 命令    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| **´l´** | 切换负载平均/正常运行时间  这也是在全屏模式下操作时包含程序名称(可能是别名)的行，或者在交替显示模式下操作时包含“当前”窗口名称的行。 |
| **´m´** | 切换内存/交换使用  此命令影响两个摘要区域行。                |
| **´t´** | 切换任务/CPU状态  此命令会影响从2到多个摘要区域行，这取决于“1”切换的状态以及top是否在真正的SMP下运行。 |
| **´1´** | 切换单个/分离CPU状态  此命令影响“t”命令的CPU状态部分的显示方式。虽然这种切换主要是为了服务大规模并行的SMP机器，但它并不仅限于SMP环境。 |

### 任务区域命令

任务区域交互命令总是在全屏模式下可用.如果“当前”窗口的任务显示已关闭，则任务区域交互命令在交替显示模式下是不可用的。

Ⅰ）任务窗口的外观

以下命令也将受到全局‘B’(粗体禁用)切换状态的影响。

| 命令    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| **´b´** | 粗体/反向切换  此命令将影响“x”和“y”切换的显示方式。此外，它将只有在这些开关中至少有一个是可用的。 |
| **´x´** | 列高亮切换  当前排序字段的高亮显示更改。您可能不需要一个持续的视觉提醒，排序字段和顶希望，您总是运行‘列高亮’关闭，因为成本在路径长度。如果忘记正在排序的字段，则此命令可用作快速的可视化提醒。 |
| **´y´** | 行高亮切换  为“运行”任务突出显示的更改。有关此任务状态的更多信息，请参见主题2a。字段描述，进程状态。使用这一规定为您的系统健康提供了重要的洞察。唯一的成本将是一些额外的TTY转义序列。 |
| **´z´** | 多色/单色切换  切换“当前”窗口之间的最后一次使用的配色方案和旧形式的黑白或白色对黑色。此命令将同时更改摘要区域和任务区域，但不影响“x”、“y”或“b”切换的状态。 |

Ⅱ）任务窗口内容

| 命令             | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| **´c´**          | 命令行/程序名称切换  无论“命令”列当前是否可见，此命令都将得到响应。稍后，如果出现该字段，则将看到您应用的更改。 |
| **´f´**  **‘o’** | 字段选择或排序字段  这些键显示单独的屏幕，您可以在其中更改显示的字段及其顺序。 |
| **´H´**          | 线程切换  当此切换打开时，将显示所有单独的线程。否则，top将显示进程中所有线程的总和。 |
| **´S´**          | 累积时间模式开关  当“累积模式”打开时，每个进程都会列出它及其死子进程使用的CPU时间。当关闭时，分得多个任务的程序看起来就不那么苛刻了。对于像‘init’或shell这样的程序来说，这是合适的，但是对于其他程序，比如编译器，也许不是。尝试使用两个任务窗口共享相同的排序字段，但使用不同的‘S’状态，并查看您喜欢哪种表示形式。发出此命令后，您将被告知此切换的新状态。如果您希望预先知道“累积模式”是否有效，只需请求帮助并查看第二行的窗口摘要即可。 |
| **´u´**          | 只显示特定用户  将提示您输入要显示的用户的名称。此后，在该任务窗口中，只会显示匹配的用户ID，或者可能不会显示任务。稍后，如果希望再次监视所有任务，请重新发出此命令，但只需在提示符处按<Enter>，而不提供名称。 |

Ⅲ）任务窗口大小

| 命令         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| **´i´**      | 空闲进程切换  显示所有任务或仅显示活动任务。当此切换关闭时，将不会显示闲置或僵尸进程。如果在交替显示模式下将此命令应用于最后一个任务显示，那么它将不会影响窗口的大小，因为所有以前的任务显示都已经绘制过了。 |
| **´n´  ´#´** | 设置最大任务系统将提示您输入要显示的任务数。您的编号和可用屏幕行的出租人将被使用。当在交替显示模式中使用时，这是一个命令，它使您能够精确地控制每个当前可见任务显示的大小，但最后一个任务显示除外。它不会影响最后一个窗口的大小，因为以前的所有任务显示都已经绘制过了如果您希望在交替显示模式下增加最后一个可见任务显示的大小，只需缩小上面任务显示的大小。 |

Ⅳ）任务窗口排序

为了兼容性，此顶支持大多数以前的顶级排序键。由于这主要是为前顶级用户提供的服务，因此这些命令不会出现在任何帮助屏幕上。

command   sorted field         supported

A       start time (non-display)     No

M       %MEM             Yes

N       PID               Yes

P       %CPU             Yes

T       TIME+             Yes

在使用以下任何排序条款之前，top建议您使用“x”交互式命令暂时打开突出显示列。这将有助于确保实际的排序环境与您的意图相匹配。只有在当前排序字段可见时，才会执行以下交互命令。排序字段可能不可见，因为：屏幕宽度不足；“f”交互命令将其关闭。

| 命令    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| **´<´** | 左移排序字段  将排序列移到左侧，除非当前排序字段是要显示的第一个字段。 |
| **´>´** | 右移排序字段  将排序列移到右侧，除非当前排序字段是显示的最后一个字段。 |

无论当前排序字段是否可见，都将始终执行以下交互命令

| 命令         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| **´F´  ´O´** | 选择排序字段  这些键显示一个单独的屏幕，您可以在其中更改使用哪个字段作为排序列。如果选择了以前未显示的字段，则将在返回到顶部显示时强制打开该字段。但是，根据屏幕宽度和字段的顺序，此排序字段可能无法显示。当在关闭列高亮显示的情况下运行top时，这个交互式命令可以方便地简单地验证当前的排序字段。 |
| **´R´**      | 反向/正常排序字段切换  使用这个交互式命令，您可以在高到低和低到高的排序之间进行交替。 |

注意：字段排序使用的是内部值，而不是列显示中的值。因此，TTY和WCHAN字段将违反严格的ASCII排序序列。

### 颜色映射

当您发出“Z”交互命令时，将显示一个单独的屏幕。该屏幕可以用来在“当前”窗口或所有四个窗口中更改颜色，然后再返回到顶部显示。可用交互命令：

4个大写字母选择目标

8个数字选择颜色

正常切换到可用规则

**‘b’**，运行任务“粗体”/反转

**‘B’**，禁用/启用粗体

**‘z’**，颜色/单色

其他可用命令

**‘a’/‘w’**，应用，然后转到下一个/优先

**<Enter>**，应用并退出。

**‘q’**，放弃当前的变化并退出。

如果您使用‘a’或‘w’循环目标窗口，您将应用离开该窗口时显示的配色方案。当然，您可以轻松地返回到任何窗口并重新应用不同的颜色，或者使用“z”按钮完全关闭颜色。颜色映射屏幕还可以用于在全屏模式或交替显示模式中更改“当前”窗口/字段组。当‘q’或<Enter>被按下时，任何目标都将在返回到顶部显示时被设置为当前。

 

## 交替显示模式

### Windows概述

Groups/Windows字段

在全屏模式下，只有一个窗口由整个屏幕表示.该单一窗口仍然可以更改为显示4个不同字段组中的一个(请参见‘G’交互式命令，重复如下)。四个字段组中的每一个都有一个独特的可单独配置的摘要区域和它自己的可配置任务区域。在交替显示模式下，这4个底层字段组现在可以同时显示，也可以在您的命令下单独关闭。摘要区域将始终存在，即使它只是消息行。在任何给定时间，只能显示一个摘要区域。但是，根据您的命令，屏幕上可能会显示从零到四个单独的任务显示。

当前窗口

“当前”窗口是与摘要区域相关联的窗口，也是任务相关命令始终指向的窗口。由于在交替显示模式下，您可以将任务显示关闭，因此某些命令可能被限制在“当前”窗口中。一个更复杂的情况是，当你已经切换了第一个摘要区域线。随着窗口名称(“l”切换行)的丢失，您将很难知道“当前”窗口是哪个窗口。

### 窗口命令

| 命令                     | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| **´-´** 或者 **´_´**     | 显示或者隐藏窗口。  **“-”**键打开和关闭“当前”窗口的任务显示。打开时，该任务区域将显示使用“f”和“o”命令建立的列标题的最小值。它还将反映您应用的任何其他任务区域选项/切换，从而产生零或多个任务。  **“_”**键对所有任务显示都执行相同的操作。换句话说，它在当前可见的任务显示和您切换掉的任何任务显示之间切换。如果当前所有4个任务显示都是可见的，则此交互式命令将摘要区域保留为唯一的显示元素。 |
| *** ´=´** 或者 *** ´+´** | 均衡化_(再平衡)窗口**“=”**键强制“当前”窗口的任务显示为可见的。它还会逆转任何可能处于活动状态的‘i’(空闲任务)和‘n’(最大任务)命令。**‘+’**键对所有窗口都是一样的。四项任务显示将重新显示，均衡平衡。它们还保留了以前应用过的任何自定义，除了‘i’(空闲任务)和‘n’(最大任务)命令。 |
| * ´A´                    | 交替显示模式开关。  此命令将在全屏模式和交替显示模式之间切换。第一次发出此命令时，将显示所有四个任务显示。此后，当您切换模式时，您将只看到您选择的任务显示以使其可见。 |
| *** ´a´** 或者 *** ´w´** | 下一个窗口向前/向后。  这将改变“当前”窗口，而“当前”窗口又会更改命令指向的窗口。这些键以循环的方式工作，这样你就可以使用任意一个键达到任何想要的“当前”窗口。假设窗口名称是可见的(没有切换“l”OFF)，每当“当前”窗口名称失去其强调/颜色时，这就提醒任务显示关闭，许多命令将受到限制。 |
| *** ´G´**                | 选择另一个窗口/字段组  系统将提示您输入介于1到4之间的数字，指定应将其设置为“当前”窗口的窗口/字段组。在全屏模式下，此命令是更改“当前”窗口所必需的。在交替显示模式下，它只是“a”和“w”命令的一种不太方便的替代方式。 |
| *** ´g´**                | 更改窗口/字段组名称  系统将提示您将一个新名称应用于“当前”窗口。它不要求窗口名称是可见的(“l”切换到打开)。 |
| *****                    | 使用星号(‘*’)显示的交互式命令已经超出了交替显示模式。‘=’，‘A’，‘G’总是可用的。‘a’，‘w’在颜色映射时作用相同。 |

 

## 文件

### 系统配置文件

该文件的存在将影响“帮助”屏幕的哪个版本显示给普通用户。更重要的是，它将限制普通用户在运行top时可以做的事情。他们将无法发出以下命令:

**k**，杀死任务

**r**，重新安排任务优先级。

**d****，s**，改变睡眠或者延迟时间。

系统配置文件不是由top创建的。相反，您可以手动创建这个文件，并将其放在/etc目录中。它的名字必须是“toprc”，不能有前导‘.’。(期间)它肯定只有两行。下面提供一个“/etc/toprc”文件的实例：

```
s     # line 1: ’secure’ mode switch``5.0    # line 2: ’delay’ interval in seconds
```

### 个人配置文件

这个文件被写成’**$HOME/.your-name-4-top**’+’**rc**’。使用‘W’交互式命令创建或更新它。如果$HOME变量不存在，top将根据权限尝试将个人配置文件写入当前目录。

```
global  # line 1: the program name/alias notation``"    # line 2: id,altscr,irixps,delay,curwin``per ea  # line a: winname,fieldscur``window  # line b: winflags,sortindx,maxtasks``"    # line c: summclr,msgsclr,headclr,taskclr
```

 

## 愚蠢的诡计采样器

### 内核魔术

-*-，用户界面通过提示和帮助有意地暗示延迟间隔限制在十分之一秒。但是，您可以随意设置任何期望的延迟。如果您想在他的日程安排中最好地看到Linux，请尝试延迟0.09秒或更短的时间。对于这个实验，在x-windows下打开一个xTerm并使其最大化。然后执行以下操作：

通过以下方式提供调度助推和微小延迟：“**nice -n -10 top -d.09**”

保持排序列高亮显示以最小化路径长度

打开反行突出显示以强调

尝试各种排序列(time/mem运行良好)，并进行常规或反向排序，以使最活跃的进程进入视图。

您将看到一个非常繁忙的Linux在做他一直为您做的事情，但是没有可用的程序来说明这一点。

-*-，在使用“白色对黑色”颜色的xTerm下，尝试将顶部的任务颜色设置为黑色，并确保任务高亮设置为粗体，而不是相反。然后将延迟间隔设置为大约3秒，在将最活跃的进程引入视图之后，您将看到当前正在运行的任务的幽灵图像。

-*-，删除现有的rcfile，或创建一个新的符号链接。启动这个新版本，然后键入‘T’(一个秘密密钥，参见主题3c)。任务区域命令，排序)后面跟着‘W’和‘Q’。最后，用-d0(零延迟)重新启动程序。您的显示将刷新三倍于前顶部的速度，一个300%的速度优势。当顶端爬上时间阶梯的时候，你要尽可能地耐心，同时猜测顶端是否会到达顶端。

### 弹跳窗口

-*-，在显示3或4个任务时，选择除最后一个窗口之外的任何窗口，然后关闭空闲进程。根据应用“I”的位置，有时有几个任务显示在弹跳，有时就像手风琴，因为top尽力分配空间。

-*-，以不同的方式设置每个窗口的摘要行：一个没有内存；另一个没有状态；可能一个没有任何信息，只有消息行。然后按住“a”或“w”，观察跳窗风的变化。

-*-，显示所有4个窗口，然后依次将空闲进程设置为OFF。你刚刚进入了“极限反弹”区域

### 大鸟窗

显示所有4个窗口，并确保1：def是“当前”窗口。然后，继续增加窗口大小，直到所有其他任务显示被“推出巢”为止。当它们都被移动时，在所有可见的/不可见的窗口之间切换。

## 举例
显示所有进程信息
``` bash
[sogrey@bogon ~]$ top

top - 00:00:24 up 14 min,  2 users,  load average: 1.85, 1.73, 1.26
Tasks: 190 total,   1 running, 189 sleeping,   0 stopped,   0 zombie
%Cpu(s): 77.0 us, 17.0 sy,  0.0 ni,  5.7 id,  0.0 wa,  0.0 hi,  0.3 si,  0.0 st
KiB Mem :  4380724 total,  2835072 free,   832132 used,   713520 buff/cache
KiB Swap:  4587516 total,  4587516 free,        0 used.  3307992 avail Mem 

  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND      
 7042 sogrey    20   0 3024960 197116  57720 S 15.6  4.5   0:13.61 gnome-shell  
 5932 setroub+  20   0  372296  63124  11580 S 10.6  1.4   1:21.78 setroublesh+ 
 5582 root      20   0  321420  37864  13600 S  4.3  0.9   0:03.71 X            
13287 sogrey    20   0  868620  32968  19116 S  1.7  0.8   0:01.64 gnome-termi+ 
    1 root      20   0  128380   6852   4064 S  0.3  0.2   0:07.67 systemd      
 1488 root      20   0   39424   8608   7984 S  0.3  0.2   0:02.46 systemd-jou+ 
 1536 sogrey    20   0  159920   2308   1588 R  0.3  0.1   0:00.08 top          
    2 root      20   0       0      0      0 S  0.0  0.0   0:00.00 kthreadd     
    3 root      20   0       0      0      0 S  0.0  0.0   0:00.26 ksoftirqd/0  
    5 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 kworker/0:0H 
    6 root      20   0       0      0      0 S  0.0  0.0   0:00.01 kworker/u
    ...
```
监视指定进程
``` bash
[sogrey@bogon ~]$ top -p 7042 # 指定监视的进程id(7042)，其他进程不监视

top - 00:02:03 up 16 min,  2 users,  load average: 2.23, 1.86, 1.35
Tasks:   1 total,   0 running,   1 sleeping,   0 stopped,   0 zombie
%Cpu(s): 66.7 us, 14.5 sy,  0.0 ni, 18.9 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  4380724 total,  2832772 free,   832692 used,   715260 buff/cache
KiB Swap:  4587516 total,  4587516 free,        0 used.  3307360 avail Mem 

  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND      
 7042 sogrey    20   0 3024960 197288  57720 S 12.0  4.5   0:16.61 gnome-shell  
```