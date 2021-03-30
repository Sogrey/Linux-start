# find - 在指定目录下查找文件
chown命令 改变某个文件或目录的所有者和所属的组，该命令可以向某个用户授权，使该用户变成指定文件的所有者或者改变文件所属的组。用户可以是用户或者是用户D，用户组可以是组名或组id。文件名可以使由空格分开的文件列表，在文件名中可以包含通配符。

只有文件主和超级用户才可以便用该命令。

在指定的目录下查找文件，并可对找到的文件执行指定的操作。Find指定会从指定的目录向下递归搜索各个子目录。GNUf ind根据优先级规则从左到右计算给定表达式，从而搜索根植于每个给定文件名的目录树，直到找到结果，此时find移到下一个文件名。如果在安全很重要的环境中使用find(例如，如果您使用它搜索其他用户可写的目录)，则应阅读findutils文档中的“Security Considerations”一章。

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
find  [-H]  [-L]  [-P]  [-D debugopts]  [-Olevel]  [path...]  [expression]
```

## 选项

``` bash
-P                       # 找到符号链接的时候，所有的属性都来自符号链接。这是默认选项
-L                       # 找到符号链接的时候，所有的属性来自文件本身，而不是符号链接
-H                       # 找到符号链接的时候，所有的属性都来自符号链接。
-D debugoptions          # 打印诊断信息；这可能有助于诊断问题，为什么查找不做您想做的事情。调试选项列表应以逗号分隔。可以有一下选项：
                         #  - help，解释调试选项
                         #  - tree，以其原始和优化的形式显示表达式树
                         #  - stat，使用stat和lstat系统调用检查作为文件的打印消息。find程序试图将此类调用最小化。
                         #  - opt，打印有关表达式树优化的诊断信息；请参见-O选项。
                         #  - rates，打印一个摘要，指示每个谓词成功或失败的频率。
-Olevel                  # 启用查询优化。Find程序重新排序测试以加快执行速度，同时保持总体效果；也就是说，具有副作用的谓词不会相对于其他谓词重新排序。在每个优化级别上执行的优化如下：
                         # - 0，相当于优化级别1
                         # - 1，这是默认的优化级别，与传统行为相对应。表达式被重新排序，以便首先执行仅基于文件名(例如-name和-regex)的测试。
                         # - 2，任何-type或-xtype的测试都是在只基于文件名的任何测试之后，而是在需要inode提供信息的任何测试之前执行的。在许多Unix的现代版本上，readdir()返回文件类型，因此这些谓词比需要先统计文件的谓词计算速度更快
                         # - 3，在此优化级别上，启用了完全基于成本的查询优化器。对测试顺序进行了修改，以便首先执行廉价(即快速)测试，并在必要时执行更昂贵的测试。在每个成本范围内，谓词将根据它们是否可能成功而更早或更晚地进行评估。对于-o，有可能成功的谓词会更早地进行评估，而对于-a，可能会失败的谓词将更早地进行评估。

-help, --help                    # 显示帮助文档
-version, --version              # 显示命令版本信息
```
## 说明
-H，-L和-P选项控制符号链接的处，。后面的命令行参数被视为要检查的文件或目录的名称，直到以‘-’或‘(’或‘！’开头的第一个参数为止。该参数和随后的任何参数都被视为描述要搜索的内容的表达式。如果没有提供路径，则使用当前目录。如果没有给出表达式，则使用表达式“-print”。

这些选项控制find的行为，但在上一个路径名之后立即指定。五个“实”选项-H，-L，-P，-D和-O必须出现在第一个路径名之前，如果有的话。“--”也可以用来表示任何剩余的参数都不是选项(但如果在起始点列表中使用通配符，则确保所有起始点都以“./”或“/”开头通常更安全)。

如果指定了-H、-L和-P中的一个，最后一个出现在命令行上的操作将生效。由于-P选项是默认的，因此，除非指定了-H或-L，否则-P选项应视为有效。在命令行本身的处理过程中，在搜索开始之前，GNU经常查找stats文件。当-H或-L选项生效时，列出的任何作为-newer参数的符号链接将被取消引用，并且时间戳将从符号链接指向的文件中提取。同样的考虑也适用于-newerxy，-anewer和-cnewer。
## 表达式
表达式由OPTION(这些选项影响整体操作而不是处理特定文件，并且始终返回true)、TEST(返回真或假值)和ACTION(有副作用并返回真或假值)组成，所有这些选项都由操作符‘-’分隔。如果表达式不包含“-prune”以外的操作，则对表达式为true的所有文件执行“-print”。

1.**OPTION**

所有选项总是返回true。除了-daystart、-follow和-regextype之外，这些选项会影响所有测试，包括在选项之前指定的测试。这是因为这些选项是在分析命令行时处理的，而测试在检查文件之前不会执行任何操作。在这方面，-daystart、-follow和-regextype选项是不同的，并且只对稍后出现在命令行中的测试有影响。因此，为了清晰起见，最好将它们放在表达式的开头。如果不这样做，就会发出警告。
``` bash
-d               # depth的同义词，与FreeBSD、NetBSD、MacOSX和OpenBSD兼容.
-daystart        # 测量时间(用于-amin，-atime，-cmin，-ctime，-mmin和-mtime)从今天开始，而不是从24小时前开始。此选项仅影响稍后出现在命令行中的测试。
-depth           # 在目录本身之前处理每个目录的内容。
-follow          # 使用-L选项代替。解除引用符号链接。“follow”选项只影响在命令行中出现的测试。
-help, --help    # 打印出帮助信息，并且退出
-ignore_readdir_race # 通常情况下，Find将在无法统计文件时发出错误消息。如果您提供了此选项，并且在find从目录中读取文件的名称和它试图统计该文件的时间之间删除了一个文件，则不会发出错误消息。这也适用于命令行中给出其名称的文件或目录。此选项在读取命令行时生效，这意味着您不能在打开此选项的情况下搜索文件系统的一个部分，并在关闭该选项时搜索其中的一部分(如果需要这样做，则需要发出两个find命令，一个带有该选项，另一个没有)。
-maxdepth levels   # 查找的最大深度，“-maxdepth 0”只对命令行出现的TEST和ACTION有效
-mindepth levels   # 不要在低于levels的级别上应用任何测试或操作，“-maxdepth 1”意味着处理除命令行参数以外的所有文件。
-mount             # 不要将目录降到其他文件系统上。-xdev的替代名称，用于与find的其他版本兼容。
-noignore_readdir_race   # 关闭-ignore_readdir_race.
-noleaf             # 不要通过假设目录包含的子目录比硬链接数少两个来进行优化。在搜索不遵循Unix目录链接约定的文件系统(如CD-ROM或MS-DOS文件系统或AFS卷挂载点)时，需要此选项。普通Unix文件系统上的每个目录至少有两个硬链接：name和“.”。此外，它的子目录(如果有的话)都有一个“.”链接到该目录的条目。当find检查一个目录时，在它声明了比目录的链接数少两个子目录之后，它知道目录中的其余条目是非目录的(目录树中的“leaf”文件)。如果只需要检查文件的名称，就不需要对它们进行统计；这就大大提高了搜索速度。
-regextype type        # 更改命令行后面发生的-regex和-iregex测试所理解的正则表达式语法。
-version, --version   # 打印find命令的版本信息，并且退出
-warn, -nowarn        # 关闭或者打开警告信息
-xautofs              # 不要降低autofs文件系统上的目录
-xdev                 # 不要降低其他文件系统上的目录
```
2.**TEST**

有些测试，例如newerXY和-samefile，允许比较当前正在检查的文件和命令行上指定的引用文件。当使用这些测试时，引用文件的解释由选项H、-L和-P以及前面的任何选项决定，但是在解析命令行时，只检查一次引用文件。如果无法检查引用文件(例如，stat(2)系统调用失败)，则会发出错误消息，并查以非0状态退出。

``` bash
+n               # 大于n
-n               # 小于n
n                # n
-amin m          # 查找m分钟之前被访问过的文件
-anewer file     # 最近被访问的文件，而不是最近被修改的文件
-atime m         # 最近m天前被访问的文件
-cmin m          # 查找m分钟之前被修改过文件状态的文件
-cnewer file     # 最近被未改过文件状态的文件，而不是最近被修改的文件
-ctime m         # 最近m天前被修改文件状态的文件
-mmin m          # 查找最近m分钟前被修改过内容的文件
-mtime m         # 查找最近m天前被修改过内容的文件
-empty           # 查找大小为0的目录和文件
-executable      # 查找可以被执行的文件，或者可以被搜索的目录
-fstype type     # 查找在指定文件系统上的文件
-gid id          # 查找属于指定组id的文件
-group name      # 查找属于指定组的文件
-ilname pattern  # 和“-lname”一样，但匹配是不区分大小写的。如果-L选项或-follow选项生效，则除非符号链接中断，否则此测试返回false。
-iname pattern   # 和“-name”一样，但匹配是不区分大小写的
-inum n          # 文件inode编号n。通常情况下，使用-samefile测试更容易。
-ipath pattern   # 和“-iwholename”一样，不建议使用
-iregex pattern  # 和“-regex”一样，但是匹配不区分大小写
-iwholename pattern  # 和“-wholename”一样，但是匹配不区分大小写
-links n         # 有n个链接的文件
-lname pattern   # 找找符合指定匹配模式的符号链接文件
-name pattern    # 文件名的基(删除了前导目录的路径)与shell模式匹配。元字符(“*”、“？”和“[]”)与“.”匹配。
-newer file      # 比file更近修改的文件
-newerXY reference  # 将当前文件的时间戳与引用进行比较。引用参数通常是文件的名称(其中一个时间戳用于比较)，但也可能是描述绝对时间的字符串。X和Y是其他字母的占位符，这些字母选择属于如何使用引用进行比较的时间。
                        # a，文件的访问时间。
                        # B，文件的产生时间
                        # c，文件inode状态改变的时间
                        # m，文件的修改时间
                        # t，引用被直接解释为时间。
-nogroup            # 没有组对应于文件的组ID
-nouser             # 没有用户对应于文件的用户ID。
-path pattern       # 文件名与shell模式匹配。元字符不处理“/”或‘.’，例如“find  .  -path  ’./sr*sc‘”为名为“./src/misc”的目录打印一个条目。若要忽略整个目录树，请使用-prune而不是检查树中的每个文件。例如，要跳过目录“src/emacs”及其下的所有文件和目录，并打印找到的其他文件的名称，请执行如下操作“find  .  -path  ./src/emacs  -prune  -o  –print”
-perm  –mode        # 为文件设置了所有权限位模式。符号模式以这种形式被接受，这通常是想要使用它们的方式。如果使用符号模式，则必须指定“u”、“g”或“o”
-perm  /mode        # 为该文件设置任何权限位模式。符号模式以这种形式被接受。如果使用符号模式，则必须指定“u”、“g”或“o”。有关一些说明性示例，请参见示例部分。如果没有在模式中设置权限位，此测试将匹配任何文件(这里的想法是与-perm-000的行为一致)。
-perm +mode          # 不推荐使用这种模式集中任何权限位搜索文件的旧方法。你应该改用“-perm /mode”。例如，‘+u+x’是一个有效的符号模式(等效于+u,+x，即0111)。
-size  n[cwbkMG]     # 查找指定大小的文件。文件单位默认是块，512字节。有以下单位：
                         # - ‘b’，521字节的块，默认
                         # - ‘c’，bytes
                         # - ‘w’，2个字节
                         # - ‘k’，1024字节
                         # - ‘M’，1048576字节
                         # - ‘G’，1073741824字节
-type 类型           # 查找指定类型的文件。c，字符设备；d，目录文件；p，有名管道；f，普通文件；l，符号链接；s，socket文件
-uid n               # 指定文件的uid
-used n              # 最后一次访问文件是在最后一次更改状态后的n天。
-user name           # 查找属于指定用户的文件
-wholename pattern   # 等价于“-path”
-writable            # 匹配可写的文件。
-xtype c             # 和“-type”相同，除非文件是符号链接。对于符号链接，-xtype检查-type不检查的文件的类型。
-context pattern     # 文件的安全上下文与GLOB模式相匹配。
```
3.**ACTIONS**

```bash
-delete              # 删除文件；如果删除成功，则为true。如果删除失败，则发出错误消息。如果“-delete”失败，find的退出状态将为非零
-exec command        # 执行命令；如果返回0状态，则为true。以下所有要查找的参数都被视为命令的参数，直到遇到由‘；’组成的参数为止。字符串“{}”被当前文件名替换，当前文件名在命令的参数中出现在任何地方，而不仅仅是在只有它的参数中，就像在find的某些版本中那样。这两个构造可能都需要转义(用‘\’)或引用，以保护它们不受外壳的扩展。有关使用-exec选项的示例，请参阅示例部分。指定的命令对每个匹配的文件运行一次。该命令在启动目录中执行。在使用-exec操作时存在不可避免的安全问题；您应该使用-execdir选项。
-exec command {} +   # -exec操作的这个变体在选定的文件上运行指定的命令，但是命令行是通过在末尾追加每个选定的文件名来构建的；命令的调用总数将比匹配的文件数少得多。命令行的构建方式与xargs构建其命令行的方式大致相同。命令中只允许“{}”的一个实例。命令在起始目录中执行。
-execdir command ;     #
-execdir command {} +  # 类似-exec，但指定的命令是从包含匹配文件的子目录运行的，该子目录通常不是您开始查找的目录。
-fls file              # 真，类似“-ls”，但是写文件类似“-fprint”。输出文件总是被创建，即使谓词永远不匹配。
-fprint file           # 真，将完整的文件名打印到文件中。如果运行find时文件不存在，则创建文件；如果文件存在，则截断文件。文件名‘/dev/stdout’和‘/dev/stderr’是专门处理的；它们分别引用标准输出和标准错误输出。输出文件总是被创建，即使谓词永远不匹配
-fprint0 file          # 真，类似“-print0”，但是写文件类似“-fprint”。输出文件总是被创建，即使谓词永远不匹配。
-fprintf file format    # 真，类似“-printf”但是写到文件类似“-fprint”。输出文件总是被创建，即使谓词永远不匹配。
-ls                    # 真，在标准输出上以“ls -dils”格式列出当前文件。块计数为1K块，除非设置了环境变量POSIXLY_TRIDER，在这种情况下使用了512字节块。
-ok command ;          # 类似“-exec”，但是先问用户。如果用户同意，运行命令。否则只会返回FALSE。如果运行该命令，它的标准输入将从/dev/null重定向。
-okdir command ;       # 类似“-execdir”，但是和“-ok”一样先询问用户。如果用户不同意，只需返回false。如果运行该命令，它的标准输入将从/dev/null重定向。
-print                 # 真，在标准输出上打印完整的文件名，然后是换行符。
-print0                # 真，在标准输出上打印完整的文件名，然后是空字符
-printf format         # 真，在标准输出上打印格式，解释‘\’转义和‘%’指令。字段宽度和精度可以用“printf  C“函数指定。请注意，许多字段是以%s而不是%d的形式打印的。与-print不同，-printf不会在字符串末尾添加换行符。
-prune                 # 如果该文件是一个目录，则不要下降到它
-quit                  # 马上退出。不会继续运行子进程，但不会处理命令行上指定的路径。
```
4.**操作符，按优先次序排列**

``` bash
( expr )              # 强制优先
! expr                # 取反
-not expr             # 取反，但不适合POSIX
expr1 expr2           # 隐含的“与“操作
expr1 -a expr2        # 和“expr1 expr2“一样
expr1 -and expr2      # 和“expr1 expr2“一样，但是不适合POSIX
expr1 -o expr2        # “或“操作
expr1 -or expr2       # “或“操作，不适合POSIX
expr1 , expr2         # 始终对expr1和expr2进行计算。expr1的值被丢弃；列表的值是expr2的值。逗号运算符对于搜索几种不同类型的东西很有用，但是只遍历文件系统层次结构一次
```
 

## 环境变量
- `LANG`为未设置或空的全局变量提供默认值。
- `LC_ALL`如果设置为非空字符串值，则重写所有其他全局变量的值。
- `LC_COLLATE`POSIX标准指定此变量影响用于-name选项的模式匹配。对‘LC_COLLATE’的支持取决于系统库。这个变量还会影响对“-ok“的响应的解释；当‘LC_MESSAGES’变量选择用于将响应解释为”-ok“的实际模式时，模式中任何括号表达式的解释都会受到‘LC_COLLATE’的影响。
- `LC_CTYPE`如果系统的fnmatch (3)库函数支持该变量，则此变量将影响正则表达式中使用的字符类的处理以及名称测试。此变量还会影响用于解释“-ok“发出的提示的响应的正则表达式中任何字符类的解释。当打印文件名时，‘LC_CTYPE’环境变量还将影响哪些字符被认为是不可打印的；
- `LC_MESSAGES`确定要用于全局消息的区域设置。如果设置了‘POSIXLY_RETERT’环境变量，这还将确定对“-ok“操作所作提示的响应的解释
- `NLSPATH`确定全局信息目录的位置。
- `PATH`影响搜索以查找-exec、-execdir、-ok和-okdir调用的可执行文件的目录。
- `POSIXLY_CORRECT`确定-ls和-fls使用的块大小。如果设置了POSIXLY_RIDERT，则块是512字节的单位。否则，它们是1024字节的单位。
- `TZ`影响用于-printf和-fprintf的一些与时间相关的格式指令的时区。
## 返回值
如果成功，返回0；如果失败，返回大于0的数。
## 举例
``` bash
find  /tmp  -name  core  -type f  -print, xargs  /bin/rm  -f
```
在/tmp目录中或下面查找名为core的文件并删除它们。请注意，如果存在包含换行符、单引号或双引号或空格的文件名，则此操作将不正确。
``` bash
find  /tmp  -name  core  -type  f  -print0, xargs  -0  /bin/rm  -f
```
在目录/tmp中或下面查找名为core的文件，并删除它们，处理文件名，以便正确处理包含单引号或双引号、空格或换行符的文件或目录名称。名称测试出现在-type测试之前，以避免对每个文件调用stat(2)。
``` bash
find  .  –type  f  -exec  file  '{}'  \;
```
对当前目录中或当前目录下的每个文件运行“file”。注意，大括号被用单引号括起来，以保护它们不被解释为shell脚本标点符号。分号同样受到反斜杠的保护，尽管在这种情况下也可以使用单引号。
``` bash
find  /  \( -perm -4000 -fprintf /root/suid.txt '%#m %u %p\n' \) ,  \( -size +100M -fprintf /root/big.txt '%-10s %p\n' \)
```
只遍历文件系统一次，将setuid文件和目录列出到/root/suid.txt，并将大型文件列出到/root/big.txt
``` bash
find  $HOME  -mtime 0
```
在您的主目录中搜索在过去24小时内已经修改的文件。此命令的工作方式是这样的，因为每个文件上次修改后的时间被除以24小时，其余部分被丢弃。这意味着要匹配-mtime 0，文件必须在过去进行修改，而修改时间不到24小时前。
``` bash
find  /sbin  /usr/sbin  -executable  \!  -readable –print
```
搜索可执行但不可读的文件
``` bash
find  .  –perm  664
```
搜索所有者和组有读写权限，但其他用户可以读取但不能写入的文件。满足这些条件但设置了其他权限的文件(例如，如果有人可以执行该文件)将不匹配。
``` bash
find  .  -perm  -664
```
搜索所有者和组有读写权限的文件，以及其他用户可以读取的文件，而不考虑是否存在任何额外的权限位(例如可执行位)。例如，这将匹配具有模式0777的文件。
``` bash
find  .  –perm  /222
```
搜索可写的文件
``` bash
find  .  -perm  /220
find  .  –perm  /u+w,g+w
find  .  -perm  /u=w,g=w
```
所有这三个命令都执行相同的操作，但是第一个命令使用文件模式的八进制表示，另外两个命令使用符号形式。这些命令都搜索其所有者或组可写的文件。文件不必由所有者和组同时写入才能匹配，两者都可以。
``` bash
find  .  –perm  -220
find  .  -perm  -g+w,u+w
```
这两个命令执行相同的操作；搜索它们的所有者和组都可以写的文件。
``` bash
find  .  -perm  -444  -perm  /222  !  -perm  /111
find  .  –perm  -a+r  -perm  /a+w  !  -perm  /a+x
```
这两个命令都搜索每个人都可读的文件(-perm -444或-perm -a+r)，至少设置了一个写入位集(-perm /222或-perm /a+w)，但任何人都不能执行(！-perm /111和！-perm /a+x)。
``` bash
cd  /source-dir
find  .  -name  .snapshot  -prune  -o  \( \! -name *~ -print0 \)|
cpio  -pmd0  /dest-dir
```
此命令将/source-dir的内容复制到/dest-dir，但省略了名为“.snapshot “的文件和目录(以及其中的任何内容)。它还省略了名称以~结尾的文件或目录，而不是其内容。
``` bash
find  repo/  -exec  test  -d  {}/.svn  -o  -d  {}/.git  -o  -d  {}/CVS  ;  -print  –prune
```
给定以下项目目录及其相关的SCM管理目录，高效地搜索项目的根
```
repo/project1/CVS
repo/gnu/project2/.svn
repo/gnu/project3/.svn
repo/gnu/project3/src/.svn
repo/project4/.git
```

---

在根目录下查找doc后缀的文件
``` bash
[sogrey@bogon 文档]$  find / -name *.doc
find: 探测到文件系统循环；“/var/named/chroot/var/named” 是与 “/var/named” 相同的文件系统循环的一部分。
/usr/share/cvs/contrib/intro.doc
/usr/lib/python2.6/pdb.doc
/lib/kbd/keymaps/i386/qwerty/no-latin1.doc
```
2）将查找到的内容输出到res.txt
```bash
[sogrey@bogon 文档]$  find / -name *.doc -fprint res.txt  # 找到文件，输出到res.txt
find: 探测到文件系统循环；“/var/named/chroot/var/named” 是与 “/var/named” 相同的文件系统循环的一部分。
[sogrey@bogon 文档]$  cat res.txt    #查看输出结果
/usr/share/cvs/contrib/intro.doc
/usr/lib/python2.6/pdb.doc
/lib/kbd/keymaps/i386/qwerty/no-latin1.doc
```
3）查找属于指定用户的文件
``` bash
[sogrey@bogon 文档]$  find / -user david -perm 777 #查找属于用户david，并且权利是777的文件
find: 探测到文件系统循环；“/var/named/chroot/var/named” 是与 “/var/named” 相同的文件系统循环的一部分。
/wj/._主页logo魏杰it教育.jpg
find: “/proc/7990/task/7990/fd/5”: 没有那个文件或目录
find: “/proc/7990/task/7990/fdinfo/5”: 没有那个文件或目录
find: “/proc/7990/fd/5”: 没有那个文件或目录
find: “/proc/7990/fdinfo/5”: 没有那个文件或目录
```