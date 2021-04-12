# restore - 所进行的操作和dump指令相反
restore命令 是dump命令的逆过程，用于还原dump命令生成的备份文件。倾倒操作可用来备份文件，而还原操作则是写回这些已备份的文件。

RESTORE命令执行dump(8)的逆功能。文件系统的完全备份可以被恢复，随后的增量备份可以在其之上分层。可以通过全部或部分备份恢复单个文件和目录子树。还原可以跨网络工作；要做到这一点，请参阅下面描述的-f标志。命令的其他参数是指定要还原的文件名或目录名。除非指定了-h标志(见下文)，目录名的外观是指该目录的文件和(递归)子目录。

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
restore  -C  [-cdHklMvVy]  [-b blocksize]  [-D filesystem]  [-f file]  [-F script]  [-L limit]  [-s fileno]  [-T directory]

restore  -i  [-acdhHklmMNouvVy]  [-A file]  [-b blocksize]  [-f file]  [-F  script]  [-Q file]  [-s fileno]  [-T directory]

restore  -P  file [-acdhHklmMNuvVy]  [-b blocksize]  [-f file]  [-F script]  [-s fileno]  [-T directory]  [-X filelist]  [ file ... ]

restore  -R  [-cdHklMNuvVy]  [-b blocksize]  [-f file]  [-F  script]  [-s  fileno]  [-T directory]

restore  -r  [-cdHklMNuvVy]  [-b  blocksize]  [-f file]  [-F script]  [-s fileno]  [-T directory]

restore  -t  [-cdhHklMNuvVy]  [-A file]  [-b blocksize]  [-f file]  [-F script]  [-Q file]  [-s fileno]  [-T directory]  [-X filelist]  [ file ... ]

restore  -x  [-adchHklmMNouvVy]  [-A file]  [-b blocksize]  [-f file]  [-F script]  [-Q file]  [-s fileno]  [-T directory]  [-X filelist]  [ file ... ]
```
## 模式
``` bash
-C                   # 此模式允许比较转储中的文件。还原读取备份并将其内容与磁盘上的文件进行比较。它首先将其工作目录更改为已转储的文件系统的根目录，并将磁带与其新的当前目录中的文件进行比较。还请参阅下面描述的-L标志。
-i                   # 此模式允许从转储中交互式地恢复文件。在从转储中读取目录信息之后，RESTORE提供了一个类似shell的界面，允许用户在选择要提取的文件的目录树周围移动。下面给出了可用的命令；对于那些需要参数的命令，默认的是当前目录。
                     # add  [arg]，将当前目录或指定的参数添加到要提取的文件列表中。如果指定了目录，则将其及其所有后代添加到提取列表中(除非在命令行上指定了-h标志)。解压缩列表中的文件在ls列出时会加上“*”。
                     # cd  arg，Arg将当前工作目录更改为指定的参数。
                     # delete  [arg]，从要提取的文件列表中删除当前目录或指定的参数。如果指定了目录，则从提取列表中删除它及其所有子程序(除非在命令行上指定了-h标志)。从目录中提取大部分文件的最佳方法是将目录添加到提取列表中，然后删除不需要的文件。
                     # extract，提取列表中的所有文件都是从dump中提取的。还原将询问用户希望挂载哪个卷。提取f ew文件的最快方法是从最后一个卷开始，并向第一个卷工作。
                     # help，列出可用命令的摘要。
                     # list  [arg]，列出当前或指定的目录。作为目录的条目附加了“/”。标记为提取的条目在前面加上“*”。如果设置了详细标志，则还列出每个条目的inode编号。
                     # pwd，打印当前工作目录的完整路径名。
                     # quit，RESTORE立即退出，即使提取列表不是空的。
                     # setmodes，添加到提取列表中的所有目录都有它们的所有者、模式和时间设置；没有从转储中提取任何内容。这对于在还原过早中止后进行清理非常有用。
                     # verbose，切换-v标志的感觉。设置时，详细标志将导致ls命令列出所有条目的inode编号，还会导致还原在提取每个文件时打印出有关每个文件的信息。
-P file              # 还原从现有转储文件中创建新的快速文件访问文件，而不还原其内容
-R                   # RESTORE请求一个多卷集的特定磁带，在该磁带上重新启动完全恢复(请参阅下面的-r标志)。如果恢复已被中断，则此操作非常有用。
-r                   # 恢复(重建)文件系统。目标文件系统应该以mke2fs(8)作为原始文件系统，并在恢复初始0级备份之前将用户CD安装到原始文件系统中。如果级别0成功恢复，则可以使用-r标志在级别0之上还原任何必要的增量备份。-r标志禁止交互式文件提取，如果不小心使用，可能会损害个人的健康(更不用说磁盘了)。例如：
                     # - mke2fs /dev/sda1
                     # - mount /dev/sda1 /mnt
                     # - cd /mnt
                     # - restore rf /dev/st0
                     # 注意，restore会在根目录中留下一个文件restoresymable，以便在增量恢复传递之间传递信息。当最后一次增量恢复时，应删除此文件。
-t                   # 如果指定文件发生在备份上，则列出指定文件的名称。如果没有给出文件参数，则列出根目录，这将导致列出备份的全部内容，除非指定了-h标志。旧的dumpdir(8)程序。也见下面的-X选项。
-x                   # 命名文件从给定媒体中读取。如果指定的文件匹配内容位于备份上且未指定-h标志的目录，则将递归提取该目录。恢复所有者、修改时间和模式(如果可能的话)。如果没有提供文件参数，则提取根目录，这将导致提取备份的全部内容，除非指定了-h标志。
```
## 选项

``` bash
-a                    # 在-i或-x模式下，RESTORE要求用户提供要提取的文件的卷号(目的是通过只读取有趣的卷来减少时间)。“-a”选项禁止这种行为，并从1开始读取所有卷。当运算符不知道要提取的文件在哪个卷上或当他喜欢较长的无人值守模式而不是较短的交互模式时，此选项非常有用。
-A archive_file       # 从ARCHIVE_FILE而不是媒体读取目录。这个选项可以与-t、-i或-x选项结合使用，这样就可以检查文件是否在媒体上，而不必挂载媒体。
-b blocksize          # 每个转储记录的千字节数。如果未指定-b选项，还原将尝试动态确定媒体块大小
-c                    # 通常，RESTORE将尝试动态地确定转储是从旧的(预-4.4)文件系统还是从新的格式文件系统生成的。-c标志禁用此检查，并且只允许以旧格式读取转储。
-d                    # 打印调试信息
-D filesystem         # -D标志允许用户在使用RESTORE和-C选项检查备份时指定文件系统名称。
-f file               # 从文件中读取备份；文件可能是一个特殊的设备文件，如/dev/st0(磁带驱动器)、/dev/sda 1(磁盘驱动器)、普通文件或-(标准输入)。如果文件的名称“host:file or user@host:file”，则使用rmt(8)还原远程主机上的指定文件。
-F script             # 在每个磁带的开头运行脚本。设备名称和当前卷号将在命令行上传递。如果恢复应该继续而不要求用户更改磁带，则脚本必须返回0；如果恢复应该继续，则返回1，但要求用户更改磁带。任何其他退出代码都将导致还原中止。出于安全考虑，在运行脚本之前，还原返回到实际用户ID和真实组ID。
-h                    # 提取实际目录，而不是它引用的文件。这将防止从转储中恢复完整子树的层次结构。
-H hashzize           # 使用具有指定数目的条目的哈希表来存储目录条目，而不是链接列表。这个哈希表将大大加快inode查找速度(在从还原列表中添加/删除文件时，在交互模式下尤其可见)，但代价是使用更多的内存。默认值为1，意味着不使用散列表。
-k                    # 与远程磁带服务器联系时使用Kerberos身份验证。(只有在编译还原时启用此选项时才可用。)
-l                    # 在进行远程还原时，假设远程文件是常规文件(而不是磁带设备)。如果要还原远程压缩文件，则需要指定此选项，否则还原将无法正确访问它。
-L limit              # -L标志允许用户在使用RESTORE和-C选项检查备份时指定最大错误比较数。如果达到此限制，RESTORE将以错误消息中止。值0(默认值)禁用检查。
-m                    # 按inode编号而不是按文件名提取。如果只提取几个文件，并且希望避免重新生成文件的完整路径名，这是非常有用的。
-M                    # 启用多卷功能(用于读取使用-M选项转储的转储)。使用-f指定的名称被视为前缀，并尝试按顺序读取<prefix>001、<prefix>002等
-N                    # -N标志使RESTORE按照-i，-R，-r，t或x命令之一的请求执行完全执行，而不实际在磁盘上写入任何文件。
-o                    # -o标志使RESTORE自动恢复当前目录权限，而无需询问操作符是在-i或-x模式中这样做。
-Q file               # 使用文件，以便在-i、-x或-t模式中使用转储快速文件访问模式读取磁带位置。建议将st驱动程序设置为在调用带参数的转储/还原之前返回逻辑磁带位置，而不是物理磁带位置。因为并非所有磁带设备都支持物理磁带位置，所以当st驱动程序设置为默认物理设置时，这些磁带设备在转储/还原期间返回一个错误。关于如何设置驱动程序返回逻辑磁带位置，请参见st(4)手册页、MTSETDRVBUFFER选项或mt(1)手册页。在使用参数-q调用RESTORE之前，始终确保st驱动程序被设置为返回调用Dump期间使用的相同类型的磁带位置。否则可能会混淆此选项。从本地或远程磁带(见上文)或从本地或远程文件。
-s fileno             # 从多文件磁带上指定的文件读取。文件编号从1开始
-T dir                # -T标志允许用户指定用于存储临时文件的目录。默认值为/tmp。此标志在从软盘启动后恢复文件时最有用。软盘文件系统上可能很少或没有空间，但可能存在另一个空间来源。
-u                    # 在创建某些类型的文件时，如果目标目录中已经存在RESTORE，则RESTORE可能会生成警告诊断。为了防止这种情况，-u(Unlink)标志导致还原在尝试创建新条目之前删除旧条目。
-v                    # 正常情况下，RESTORE会默默地完成它的工作。-v(详细)标志导致它键入它所处理的每个文件的名称，并在其文件类型之前进行处理。
-V                    # 启用读取多卷非磁带介质(如cdrom)。
-X filelist           # 读取除命令行中指定的文件外，还要从文本文件列表中列出或提取的文件列表。这可以与-t或-x命令一起使用。文件列表应该包含由换行符分隔的文件名。文件列表可以是普通文件或“-”(标准输入)
-y                    # 不要问用户是否在发生错误时中止还原。始终尝试跳过坏块并继续
--tmpdir=[dir]        # 指定临时文件的路径，如果tmpdir后面没有路径，那么临时文件创建在/tmp目录下
TEMPLATE              # 临时文件名，名字中必须包含至少3个字母X。如果没有指定，那么默认是tmp. XXXXXXXXXX

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 说明
如果得到读取错误，则进行抱怨。如果指定了y，或者用户响应y，RESTORE将尝试继续还原。如果使用多个磁带卷进行备份，还原将在安装下一个卷时通知用户。如果指定了-x或-i标志，RESTORE还将询问用户希望挂载哪个卷。提取几个文件的最快方法是从最后一个卷开始，然后开始第一个卷。

有许多一致性检查可以通过RESTORE列出。大多数检查都是不言自明的，或者“永远不会发生”。常见错误如下：

1. Converting to new file system format，从旧文件系统创建的转储磁带已经加载。它将自动转换为新的文件系统格式。
2. <filename>: not found on tape，指定的文件名列在磁带目录中，但没有在磁带上找到。这是由于查找文件时磁带读取错误以及使用在活动文件系统上创建的转储磁带造成的。
3. expected next file <inumber>, got <inumber>，出现了一个未在目录中列出的文件。这可能发生在使用在活动文件系统上创建的转储时。
4. Incremental dump too low，在执行增量恢复时，加载了在上一次增量转储之前写入的转储，或者加载了增量级别过低的转储。
5. Incremental dump too high，当执行增量恢复时，当先前的增量转储停止时，或者加载的增量级别过高时，不开始覆盖的转储。
6. Tape read error while restoring <filename>
7. Tape read error while skipping over inode <inumber>
8. Tape read error while trying to resynchronize，已发生磁带(或其他媒体)读取错误。如果指定了文件名，其内容可能是部分错误。如果正在跳过inode或磁带试图重新同步，则未将提取的文件损坏，但可能无法在磁带上找到文件。
9. resync restore, skipped <num> blocks，转储读取错误后，还原可能必须重新同步自身。此消息列出跳过的块数。
## 退出码
“restore”退出，成功时状态为零。磁带错误用退出代码1表示。在对转储文件进行比较时，退出代码为2表示自转储后某些文件已被修改或删除。
## 环境变量

如果存在以下环境变量，则restore将使用该变量;

1. TAPE，如果没有指定“-f“选项，restore将使用通过磁带指定的设备作为转储设备。TAPE的形式可以是tapename、host：tapename或user@host：tapename。
2. TMPDIR，TMPDIR中给出的目录将用于存储临时文件，而不是“/tmp“。
3. RMT，环境变量RMT将用于确定远程RMT(8)程序的路径名。
4. RSH，RESTORE使用这个变量的内容来确定在进行网络恢复时要使用的远程shell命令的名称(rsh、ssh等)。如果未设置此变量，则将使用rcmd(3)，但只有root用户才能进行网络恢复。

## 文件
- `/dev/st0`默认磁带设备。
- `/tmp/rstdir`包含磁带上目录的文件。
- `/tmp/rstmode*`目录的所有者、模式和时间戳。
- `./restoresymtable`增量还原之间传递的信息。
## 举例
``` bash
dump -9 -u -f /dev/hda3 /home/frank/
```
用restore命令来恢复备份：
``` bash
restore rf /dev/hda3 /home/frank
```
用restore命令来查看备份文件里的文件列表：
``` bash
restore ft /dev/hda3
```
