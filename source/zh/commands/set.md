# set - 显示或设置shell特性及shell变量

set指令用来修改shell变量的显示和执行方式，没有任何选项和参数的时候，显示所有的变量名字和值。

set命令 作用主要是显示系统中已经存在的shell变量，以及设置shell变量的新变量值。使用set更改shell特性时，符号"+"和"-"的作用分别是打开和关闭指定的模式。set命令不能够定义新的shell变量。如果要定义新的变量，可以使用declare命令以变量名=值的格式进行定义即可。

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
set    [OPTION] [参数]
```

## 选项

``` bash
-a                   # 自动标记已经创建或者修改的变量，以供输出到环境变量
-b                   # 使被终止的后台程序立刻汇报状态
-e                   # 如果指令执行的退出值不是0，那么立刻退出
-f                   # 取消使用通配符
-h                   # 自动记录函数所在的位置
-k                   # 指令的参数都会被看作是指令的环境变量
-m                   # 使用监视模式
-n                   # 只读模式，不执行
-p                   # 启动优先顺序模式
-t                   # 当读取执行命令之后退出
-u                   #  
-v                   # 显示shell读取的输入值
-x                   # 执行指令后显示该指令和其参数
-o option            # 打开指定的特性。如果没有指定option，那么就打印当前的选项值
+o                   # 关闭指定的特性。如果没有指定option，则在标准输出中显示一系列用于重新创建当前选项设置的SET命令。
-B                   # shell执行支撑扩展(请参阅上面的Braces扩展)。默认情况下这是打开的。
-C                   # 如果设置，bash不会用’>’、’>&’和’<>’重定向操作符覆盖现有文件。当使用重定向运算符”>|”而不是”>”创建输出文件时，可能会重写此操作。
-E                   # 如果设置了，Err上的任何陷阱都由shell函数、命令替换和在子shell环境中执行的命令继承。在这种情况下，错误陷阱通常不会被继承。
-H                   # 启用！风格历史替代。默认情况下，当shell是交互式的时，此选项是打开的。
-P                   # 如果已设置，则在执行更改当前工作目录的命令(如CD)时，shell不会遵循符号链接。它使用物理目录结构。默认情况下，bash在执行更改当前目录的命令时遵循目录逻辑链。
-T                   # 如果设置，任何调试和返回的陷阱都由shell函数、命令替换和在子shell环境中执行的命令继承。在这种情况下，通常不会继承调试和返回陷阱。
--                   # 如果在此选项之后没有参数，那么位置参数将被取消设置。否则，位置参数将被设置为args，即使其中一些参数以‘-’开头。
-                    # 向选项的结束发出信号，使所有剩余的args被分配到位置参数。关闭-x和-v选项。如果没有args，则位置参数保持不变。
```

其中选项o的特征：
``` bash
allexport            # 等价于“-a”
braceexpand          # 等价于“-B”
emacs                # 使用emacs风格的命令行编辑界面。默认情况下，当shell是交互式的时，这是启用的，除非shell是用“--noediting”选项启动的。
errexit              # 等价于“-e”
errtrace             # 等价于“-E”
functrace            # 等价于“-T”
hashall              # 等价于“-h”
histexpand           # 等价于“-H”
history              # 启用命令历史记录，如上文在“历史记录”下所述。默认情况下，此选项在交互式shell中打开。
ignoreeof            # 其效果似乎是执行了shell命令‘IGNOREEOF=10’(参见上面的Shell变量)。
keyword              # 等价于“-k”
monitor              # 等价于“-m”
noclobber            # 等价于“-C”
noexec               # 等价于“-n”
noglob               # 等价于“-f”
nolog                # 忽略
notify               # 等价于“-b”
nounset              # 等价于“-u”
onecmd               # 等价于“-t”
physical             # 等价于“-P”
pipefail             # 如果已设置，则管道的返回值是在非零状态下退出的最后一个(最右边)命令的值，如果管道中的所有命令都成功退出，则为零。默认情况下，此选项被禁用。
posix                # 将默认操作与POSIX标准不同的bash行为更改为与标准(POSIX模式)匹配。
privileged           # 等价于“-p”
verbose              # 等价于“-v”
vi                   # 使用vi样式的命令行编辑界面.这也会影响用于读-e的编辑界面。
xtrace               # 等价于“-x”
```
## 举例
显示所有的变量
``` bash
[root@localhost ~]$ set
BASH=/bin/bash
BASHOPTS=cdspell:checkwinsize:cmdhist:expand_aliases:extquote:force_fignore:hostcomplete:
interactive_comments:progcomp:promptvars:sourcepath
BASH_ALIASES=()
BASH_ARGC=()
BASH_ARGV=()
BASH_CMDS=()
BASH_LINENO=()
…
```
显示shell的输出值
``` bash
[root@localhost ~]$ set -v
printf "\033]0;%s@%s:%s\007" "${USER}" "${HOSTNAME%%.*}" "${PWD/#$HOME/~}"
```


使用declare命令定义一个新的环境变量"mylove"，并且将其值设置为"Visual C++"，输入如下命令：
``` bash
declare mylove='Visual C++'   #定义新环境变量
```
再使用set命令将新定义的变量输出为环境变量，输入如下命令：
``` bash
set -a mylove                 #设置为环境变量
```
执行该命令后，将会新添加对应的环境变量。用户可以使用env命令和grep命令分别显示和搜索环境变量"mylove"，输入命令如下：
``` bash
env | grep mylove             #显示环境变量值
```
此时，该命令执行后，将输出查询到的环境变量值。
