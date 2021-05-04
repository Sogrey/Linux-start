# mount - 用于挂载Linux系统外的文件
mount命令 Linux mount命令是经常会使用到的命令，它用于挂载Linux系统外的文件。

将指定设备的文件系统挂载到系统目录下，设备挂载之后就可以访问了。在Unix系统中可访问的所有文件都排列在一个大树中，即文件层次结构，根植于/。这些文件可以分布在多个设备上。挂载命令用于将在某个设备上找到的文件系统附加到大文件树上。相反，umount(8)命令将再次分离它。

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
mount  [选项]  [src]  [dst]
mount  [-lhV]
mount  -a  [-fFnrsvw]  [-t vfstype]  [-O optlist]
mount  [-fnrsvw]  [-o option[,option]...]  device|dir
mount  [-fnrsvw]  [-t vfstype]  [-o options]  device  dir
```

## 选项
**命令行选项**

调用mount所使用的全部挂载选项集是通过首先从fstab表中提取文件系统的挂载选项，然后应用“-o“参数指定的任何选项，然后在出现时应用”-r“或”-w“选项来确定的。
``` bash
-a, --all              # 挂载/etc/fstab中的所有文件系统
-f, --fake             # 除了系统调用外，执行挂载的所有过程，一般和“-v”一起使用。这是一个模拟挂载过程
-F, --fork             # 和“-a”一起使用，并行挂载多个设备，加快挂载速度。一个缺点是挂载是以未定义的顺序完成的。因此，如果您想同时挂载/usr和/usr/spool，则不能使用此选项。
-i,  --internal-only   # 即使存在/sbin/mount，也不要调用/sbin/mount.<filesystem>Helper
-l                     # 在mount输出中添加标签。mount必须具有读取磁盘设备(例如，suid root)的权限，才能工作。我们可以使用e2label(8)实用程序为ext2、ext3或ext4设置这样的标签，也可以使用xfs_admin(8)为XFS设置这样的标签，也可以使用reiserfstune(8)为reiserfs设置这样的标签。
-n, --no-mtab          # 不在/etc/mtab中记录挂载信息，在/etc只读的系统中，这个选项很重要
--no-canonicalize      # 不要把路径规范化。挂载命令将所有路径(从命令行或fstab)规范化，并存储到”/etc/mtab”文件的规范化路径。此选项可与已规范化的绝对路径的”-f”标志一起使用。
-p, --pass-fd num      # 在使用加密的循环挂载情况下，从文件描述符num读取密码短语，而不是从终端读取密码。
-s                     # 容忍草率的mount选项而不是失败。这将忽略文件系统类型不支持的挂载选项。并非所有文件系统都支持此选项。此选项用于支持基于linux的自动报警器。
-r, --read-only        # 只读的方式挂载，同义词是“-o ro“。请注意，根据文件系统类型、状态和内核行为，系统仍然可以写入设备。例如，如果文件系统是脏的，ext3或ext4将重播它的日志。为了防止这种写访问，您可能希望使用“ro，noload”挂载选项挂载ext3或ext4文件系统，或者将块设备设置为只读模式，请参阅命令块dev。
-w l -rw               # 以读写的方式挂载，默认选项。同义词是“-o rw“。
-L label               # 挂载指定label的分区
-U uuid                # 挂载指定UUID的分区，这两个选项要求文件“/proc/partitions “(自Linux2.1.116以来)存在。
-t type                # 指定挂载的文件系统类型。目前支持的系统有：adfs, affs, autofs, cifs, coda, coherent, cramfs, debugfs, devpts, efs, ext, ext2,  ext3,  ext4,  hfs,  hfsplus,  hpfs, iso9660, jfs, minix, msdos, ncpfs, nfs, nfs4, ntfs, proc, qnx4, ramfs, reiserfs, romfs,  squashfs, smbfs,  sysv, tmpfs, ubifs, udf, ufs, umsdos, usbfs, vfat, xenix, xfs, xiafs。请注意，coherent、sysv和xenix是等价的，xenix和coherent在将来的某个时候会被删除-改用sysv。因为内核版本2.1.21，ext和xiafs类型已经不存在了。更早的时候，usbfs被称为usbdevfs。
                       # 程序mount和umount支持文件系统子类型。子类型由‘.subtype’后缀定义。例如‘fuse.sshfs’。建议使用子类型表示法，而不是向挂载源添加任何前缀(例如‘sshfs#example.com’是去预置的)。
                       # 对于大多数类型，挂载程序所要做的就是发出一个简单的挂载(2)系统调用，而不需要详细了解文件系统类型。但是，对于少数类型(如nfs、nfs4、cifs、smbfs、ncpfs)，需要有特殊代码。nfs、nfs4、cifs、smbfs和ncpfs文件系统有一个单独的挂载程序。为了使以统一的方式处理所有类型成为可能，挂载将执行程序“/sbin/mount.type“(如果存在的话)时调用类型。由于不同版本的smb装入程序有不同的调用约定，因此“/sbin/mount.smbfs“可能必须是设置所需调用的shell脚本。
                       # 如果没有给出“-t“选项，或者指定了auto类型，那么挂载将尝试猜测所需的类型。挂载使用blchild或volume_id库来猜测文件系统类型；如果没有显示任何熟悉的内容，挂载将尝试读取文件”/etc/filesystems“，或者如果不存在，则会尝试读取”/proc/filesystems“。这里列出的文件系统类型将被尝试，除了标记为“nodev”的文件系统(例如devpt、proc和nfs)。如果”/etc/filesystems“在一行中以单一的”*“结束，那么挂载将它在之后读取“/proc/filesystems”。
                       # auto类型对于用户安装的软盘可能很有用。创建一个文件“/etc/ filesystems“可以帮助更改探测顺序(例如，在MSDOS或ext2之前尝试vFAT)，或者如果您使用内核模块自动加载器。
                       # 可以在逗号分隔的列表中指定多个类型。文件系统类型列表可以no作为前缀，以指定不应该采取任何操作的文件系统类型。(使用-a选项可以有意义。)例如，命令“mount  -a  -t  nomsdos,ext“，挂载所有文件系统，MSDOS和ext类型的文件系统除外。

-O, --test-opts opts

与“-a‘一起使用，以限制应用“-a”的一组文件系统。除了在“-a”的上下文中，它是无用的。例如命令“mount  -a –O  no_netdev”，挂载所有文件系统，但那些在“/etc/fstab”文件的options字段中指定了“_netdev”的文件系统除外。它与“-t”的不同之处在于，每个选项都是完全匹配的；一个选项开头的前导no不会否定其余选项。-t和-o选项实际上是累积的；也就是说，命令“mount  -a  -t  ext2  -O  _netdev”，使用“_netdev”选项挂载所有ext2文件系统，而不是指定ext2或指定了“_netdev“选项的所有文件系统。

-o, --options opts

选项使用“-o“标志指定，后面是逗号分隔的选项字符串。例如”mount  LABEL=mydisk  -o  noatime,nouser “

-B,  --bind

在其他地方重新装入子树(以便其内容在两个地方都可用)

-R, --rbind

重新装入子树，并将所有可能的子树放到其他地方(以便其内容在两个地方都可用)

-M, --move

将子树移到其他地方

-v

显示详细执行过程

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
**文件系统独立安装选项**

只有当这些选项出现在“/etc/fstab“文件中时，这些选项才会有用。其中一些选项可以在默认情况下在系统内核中启用或禁用。要检查当前设置，请参阅”/proc/mount“中的选项。以下选项适用于正在挂载的任何文件系统(但并不是每个文件系统实际上都符合它们-例如，现在的sync选项只对ext 2、ext 3、fat、vfat和ufs有效)。

``` bash
async

文件系统的所有I/O都应该异步完成

atime

不要使用noatime特性，那么inode访问时间由内核缺省值控制。

noatime

不要更新此文件系统上的inode访问时间(例如，为了更快地访问新闻线轴以加快新闻服务器的速度)。

auto

使用“-a“选项挂载

noauto

只能显式挂载(即-a选项不会导致安装文件系统)

context=context

fscontext=context

defcontext=context

rootcontext=context

当安装不支持扩展属性的文件系统(如用VFAT格式化的软盘或硬盘)或通常不在SELinux下运行的系统(如非SELinux工作站上的ext 3格式化磁盘)时，“context=“选项非常有用。您还可以在不信任的文件系统(如软盘)上使用”context=“。它还有助于与早期2.4.<x>内核版本中支持xattr的文件系统兼容。即使在支持xatts的地方，也可以通过为整个磁盘分配一个安全上下文来节省时间，而不必对每个文件进行标记。可移动介质的一个常用选项是”context=system_u:object_r:removable_t“。另外两个选项是“fscontext=”和“defcontext=”，这两个选项都是context选项的相互排斥。这意味着您可以相互使用fscontext和defcontext，但这两者都不能与context一起使用。

“fstcontext=”选项适用于所有文件系统，而不管它们对xattr的支持如何，fstext选项将总体文件系统标签设置为特定的安全上下文。这个文件系统标签与文件上的各个标签是分开的。它代表了某些类型的权限检查的整个文件系统，例如在挂载或文件创建期间。单个的文件标签仍然是从文件本身的xatts获取的。context选项除了为单个文件提供相同的标签外，实际上还设置了fscontext提供的聚合上下文。

可以使用“defcontext= option”为未标记的文件设置默认的安全上下文。这将重写策略中未标记文件的值集，并需要支持xattr标记的文件系统。

“rootcontext=  option”允许您显式地标记在FS或inode之前挂载的FS的根inode，因为可以访问用户空间。

defaults

使用默认的选项：rw, suid, dev, exec, auto, nouser, async,relatime

dev

在文件系统上解释字符或阻塞特殊设备

nodev

不在在文件系统上解释字符或阻塞特殊设备

diratime

更新此文件系统上的目录inode访问时间。这是默认的

nodiratime

不要更新此文件系统上的目录inode访问时间。

dirsync

文件系统中的所有目录更新都应该同步进行，这会影响以下系统调用：creat、link、unlink、symlink、mkdir、rmdir、mnod和rename。

exec

允许执行二进制文件

noexec

不允许在安装的文件系统上直接执行任何二进制文件。

group

如果普通用户的组与设备组匹配，则允许普通用户(即非root用户)挂载文件系统。此选项意味着选项nosuid和nodev(除非被后续选项覆盖，如选项group，dev，suid)。

iversion

每次修改inode时，i_version字段都会递增

noiversion

每次修改inode时，i_version字段不变

mand

允许此文件系统上的强制锁

nomand

不允许此文件系统上的强制锁

_netdev

文件系统驻留在需要网络访问的设备上(用于防止系统试图在系统上启用网络之前安装这些文件系统)。

nofail

如果此设备不存在，请不要报告它的错误

relatime

更新inode访问时间相对于修改或更改时间。只有在上一次访问时间早于当前修改或更改时间时，才会更新访问时间。(类似于noatime，但它不会破坏那些需要知道文件自上次修改后是否已被读取的应用程序。)

由于Linux2.6.30，内核默认使用此选项提供的行为(除非指定了noatime)，因此需要严格的选项才能获得传统的语义。此外，从Linux2.6.30开始，如果文件的历史超过1天，那么文件的最后一次访问时间总是更新的。

norelatime

不使用relatime

strictatime

允许显式请求完整的atime更新。这使得内核可以默认为relatime或noatime，但仍然允许用户空间覆盖它。有关默认系统挂载选项的详细信息，请参阅/proc/mount。

nostrictatime

使用内核的默认行为进行inode访问时间更新

suid

允许设置用户标识符或组标识符位生效

nosuid

不允许设置用户标识符或组标识符位生效

owner

允许普通用户(即非root用户)在设备所有者的情况下挂载文件系统。

remount

试图重新挂载已经挂载的文件系统。这通常用于更改文件系统的挂载标志，特别是使只读文件系统可写。它不改变设备或安装点。remount功能遵循mount命令如何使用fstab中的选项的标准方式。这意味着只有当device和dir完全指定时，挂载命令才不会读取fstab(或mtab)，例如命令“mount  -o  remount,rw  /dev/foo  /dir”，在这个调用之后，所有旧的挂载选项都被替换了，并且忽略了fstab中的任意内容，但“loop= option”除外，这个选项是内部生成的，并由挂载命令维护。命令“mount  -o  remount,rw  /dir”，在此调用之后，挂载读取fstab(或mtab)，并将这些选项与命令行(-o)中的选项合并。

ro

以只读方式挂载

_rnetdev

类似于“_netdev”，除了“fsck-a”在rc.sysinit期间检查这个文件系统。

rw

以读写的方式挂载

sync

对文件系统的I/O应该同步执行。如果媒体的写入周期有限(例如，一些闪存驱动器)，“同步”可能会导致生命周期缩短。

user

允许普通用户挂载文件系统。将挂载用户的名称写入mtab，以便他可以再次卸载文件系统。

nouser

禁止普通用户(即非根用户)挂载文件系统，这是默认的。

users

允许每个用户挂载和卸载文件系统。
```
**adfs选项**

``` bash
uid=value
gid=value       # 设置文件系统中文件的所有者和组(默认值：uid=gid=0)

ownmask=value
othmask=value   # 分别为ADFS“所有者”权限和“其他”权限设置权限掩码(默认值分别为0700和0077)。
```

**affs选项**

``` bash
uid=value

gid=value

设置文件系统根目录的所有者和组(默认值：uid=gid=0，但如果使用uid或gid选项而没有指定的值，则采用当前进程的uid和gid)

setuid=value

setgid=value

设置所有文件的所有者和组

mode=value

将所有文件的模式设置为值&0777(不考虑原始权限)。向具有读取权限的目录添加搜索权限。该值以八进制表示。

protect

不允许对文件系统上的保护位进行任何更改。

usemp

在第一次同步或umount时，将文件系统根的uid和gid设置为挂载点的uid和gid，然后清除此选项。

verbose

打印每个成功安装的信息消息。

prefix=string

在跟随链接时，在卷名之前使用的前缀

volume=string

前缀(长度最多为30)，在符号链接后面时使用在‘/’之前。

reserved=value

(默认：2.)设备开始时未使用的块数

root=value

显式地给出根块的位置。

bs=value

设置块大小。允许值为512，1024，2048，4096。

grpquota|noquota|quota|usrquota

这些选项被接受，但被忽略。(但是，配额实用程序可以对/etc/fSTAB中的此类字符串作出反应。)
```

cifs选项

参考mount.cifs。

6）coherent选项：

没有

7）debugfs选项

调试器文件系统是一个伪文件系统，传统上安装在“/sys/kernel/debug”上。没有选项

8）devpts选项：

devpt文件系统是一个伪文件系统，传统上安装在“/dev/pts”上。为了获得伪终端，进程打开“/dev/ptmx”；然后将伪终端的数量提供给进程，伪终端从站可以作为“/dev/pt/<number>”访问。

选项

说明

uid=value

gid=value

这将新创建的PTY的所有者或组设置为指定的值。当未指定任何内容时，它们将被设置为创建过程的UID和GID。例如，如果存在带有GID 5的TTY组，那么gid=5将导致新创建的PTY属于TTY组。

mode=value

将新创建的PTY的mode设置为指定的值。默认值为0600。mode=620和gid=5的值使“mesgy”成为新创建的PTY的默认值。

newinstance

创建devpt文件系统的私有实例，以便在这个新实例中分配的ptys索引独立于在其他devpt实例中创建的索引。所有没有此newinstance选项的devpt都共享相同的Pty索引集(即遗留模式)，每个带有newinstance选项的devpt都有一组私有的Pty索引。

ptmxmode=value

在devpt文件系统中为新的ptmx设备节点设置mode。随着对devpt的多个实例的支持(请参阅上面的newinstance选项)，每个实例在devpt文件系统的根目录中都有一个私有的ptmx节点(通常是/dev/pt/ptmx)。

为了与较早版本的内核兼容，新ptmx节点的默认模式是0000。“ptmxmode=value“为ptmx节点指定了更有用的模式，并在指定newinstance选项时强烈推荐。

9）ext选项

没有选项。请注意，“ext”文件系统已经过时。不要使用它，因为Linux2.1.21版本的extfs不再是内核源代码的一部分。

10）ext2选项

‘ext2’文件系统是标准的Linux文件系统，从Linux2.5.46开始，对于大多数挂载选项，默认是由文件系统超级块决定的。

选项

说明

acl, noacl

支持POSIX的访问权限，或者不支持

bsddf|minixdf

设置statfs系统调用的行为。minxdf行为是在f_block字段中返回文件系统的块总数，而bsddf行为(这是默认的)是减去ext 2文件系统使用的、不可用于文件存储的开销块。

% mount /k -o minixdf; df /k; umount /k

Filesystem   1024-blocks  Used Available Capacity Mounted on

/dev/sda6      2630655   86954  2412169      3%   /k

% mount /k -o bsddf; df /k; umount /k

Filesystem   1024-blocks  Used Available Capacity Mounted on

/dev/sda6      2543714      13  2412169      0%   /k

check={none|nocheck}

在挂载时不进行检查。这是默认的。这是快速的。明智的做法是时不时地调用e2fsck(8)，例如在启动时调用e2fsck(8)。

debug

在每个(重新)挂载上打印调试信息

errors={continue|remount-ro|panic}

定义遇到错误时的行为。(要么忽略错误，标记文件系统错误并继续，要么重新装入文件系统只读，或者恐慌和停止系统。)默认设置在文件系统超级块中，可以使用tune2fs(8)进行更改。

grpid|bsdgroups

nogrpid|sysvgroups

这些选项定义了新创建的文件所获得的组id。当设置grpid时，它接受创建它的目录的组id；否则(默认)它接受当前进程的fsgid，除非目录设置了setgid位，在这种情况下，它从父目录获取gid，如果setgid位本身是一个目录，也会获得它的设置。

grpquota|noquota|quota|usrquota

这些选项被接受，但被忽略

nobh

不要将buffer_heads附加到文件分页缓存

nouid32

禁用32位UID和GID。这是为了与只存储和期望16位值的旧内核的互操作性。

oldalloc, orlov

对新节点使用旧分配器或Orlov分配器。Orlov是默认的。

resgid=n

resuid=n

ext 2文件系统保留一定比例的可用空间(默认为5%，参见mke2fs(8)和tune2fs(8)，这些选项决定谁可以使用保留块。(粗略地说，无论谁拥有指定的uid，或属于指定的组。)

sb=n

使用块n作为超级块，而不是块1。当文件系统被损坏时，这可能很有用。(早些时候，超级块的副本将每8192个块进行一次：在块1，8193，16385，.(在一个大型文件系统上有数千个副本)。自从1.08版本以来，mke2fs就有了一个-s(稀疏超级块)选项来减少备份超级块的数量，而且由于1.15版本，这是默认的。请注意，这可能意味着最近的mke2fs创建的ext 2文件系统不能在Linux2.0.*下挂载r/w。)这里的块号使用1k单位。因此，如果要在具有4k块的文件系统上使用逻辑块32768，请使用“sb=131072”。

user_xattr|nouser_xattr

支持“用户”扩展属性

11）ext3选项

ext3文件系统是ext2文件系统的一个版本，它通过日志记录得到了增强。它支持与ext 2相同的选项以及以下额外内容

选项

说明

journal=update

显示帮助信息

journal=inum

将ext3文件系统日志更新为当前格式

journal_dev=devnum

当外部日志设备的主要/次要数字发生更改时，此选项允许用户指定新的日志位置。日志设备通过其以devnum编码的新的主/小数字来标识。

norecovery/noload

不要在挂载时加载日志。请注意，如果文件系统没有干净地卸载，跳过日志重播将导致文件系统中包含可能导致大量问题的不一致。

data={journal|ordered|writeback}

指定文件数据的日志记录模式。元数据总是日志记录。若要使用根文件系统上排序之外的其他模式，请将模式作为引导参数传递给内核，例如rootflags=data=journal。

journal，在写入主文件系统之前，所有数据都提交到日志中。

ordered，这是默认模式。在将所有数据的元数据提交到日志之前，所有数据都直接被强制输出到主文件系统。

writeback，数据排序没有被保留-在将数据元数据提交到日志之后，可以将数据写入主文件系统。据说这是最高吞吐量的选择，它保证了内部文件系统的完整性，但是它可以允许旧数据在崩溃和日志恢复后出现在文件中。

barrier=0 / barrier=1

启用/禁用了障碍。barrier =0禁用了它，barrier =1启用了它。写屏障强制在磁盘上对日志提交进行适当的排序，使易失性磁盘写入缓存安全地使用，并造成了一定的性能损失。ext 3文件系统默认启用写屏障。确保启用屏障，除非您的磁盘以某种方式支持电池。否则，在发生电源故障时，您将面临文件系统损坏的风险。

commit=nrsec

每nrsec秒同步所有数据和元数据。默认值为5秒。零代表默认。

user_xattr

启用扩展用户属性

acl

启用POSIX访问控制列表

12）ext4选项

ext4文件系统是ext3文件系统的高级级别，它结合了支持大型文件系统的可伸缩性和可靠性增强功能。下面这些选项向后兼容ext3或ext2

选项

说明

journal_checksum

启用日记账事务的校验和。这将允许e2fsck中的恢复代码和内核检测内核中的损坏。这是一个兼容的更改，将被较老的内核忽略。

journal_async_commit

提交块可以写入磁盘，而无需等待描述符块。如果启用，旧内核无法挂载设备。

journal=update

将ext4文件系统的日志更新为当前格式

barrier=0

barrier=1

barrier

nobarrier

这允许/禁止在JBD代码中使用写屏障。barrier =0禁用，barrier =1启用。这还需要一个IO堆栈，它可以支持障碍，如果JBD在写障碍时出错，它将再次禁用，并发出警告。写障碍强制在磁盘上正确排序日志提交，使易失性磁盘写入缓存安全使用，在某些性能上的损失。如果您的磁盘是以某种方式支持电池，禁用障碍可以安全地提高性能。挂载选项“barrier”和“nobarrier”也可用于启用或禁用屏障，以与其他ext4安装选项保持一致。ext4文件系统默认启用写屏障

inode_readahead_blks=n

此调优参数控制最大数目的inode表块，ext4的inode表ReadAhead算法将预读到缓冲区缓存中。值必须是2的幂。默认值为32个块。

stripe=n

mbalc将尝试用于分配、大小和对齐的文件系统块的数目。对于RAID 5/6系统，这应该是数据磁盘的数量*RAID块大小

delalloc

将块分配推迟到写入时间。

nodelalloc

禁用延迟分配。块是在数据从用户复制到页缓存时分配的。

max_batch_time=usec

ext 4应该等待额外的文件系统操作与同步写入操作一起批处理最大时间。由于同步写入操作将强制提交，然后等待I/O完成，因此它的开销并不大，而且可以获得巨大的吞吐量胜利，因此我们等待少量的时间来查看是否有任何其他事务可以在同步写入上恢复。所使用的算法旨在通过测量完成事务提交所需的时间(平均)来自动调整磁盘的速度。这一次称为“提交时间”。如果transactoin运行的时间少于提交时间，ext 4将尝试休眠提交时间，以查看其他操作是否将加入事务。提交时间以max_batch_time为上限，默认为15000 us(15 Ms)。通过将max_batch_time设置为0，可以完全关闭此优化

min_batch_time=usec

此参数将提交时间(如上所述)设置为至少min_batch_time。默认为零微秒。增加此参数可能会提高高速磁盘上多线程同步工作负载的吞吐量，而代价是增加延迟。

journal_ioprio=prio

I/O优先级(从0到7，其中0是最高优先级)，在提交操作期间，应该使用它来执行kJournal 2提交的I/O操作。这默认为3，这比默认的I/O优先级略高一些。

abort

为了调试目的，模拟调用ext 4_abort()的效果。这通常是在重新安装已经挂载的文件系统时使用的。

auto_da_alloc|noauto_da_alloc

当noautoda_alloc通过以下模式替换现有文件时，许多损坏的应用程序不使用fsync()。例如“fd = open("foo.new")/write(fd,..)/close(fd)/ rename("foo.new", "foo")”或者更坏的“fd = open("foo", O_TRUNC)/write(fd,..)/close(fd)”。

如果启用了auto_da_alloc，ext 4将检测replace-via-rename和replace-via-truncate模式，并强制分配任何延迟分配块，以便在下一次日志提交时，在默认的Data=Order模式下，新文件的数据块在重命名()操作完成之前被强制放入磁盘。这提供了与ext 3大致相同的保证级别，并避免了系统在延迟分配块被迫进入磁盘之前崩溃时可能出现的“零长度”问题

discard/nodiscard

控制在释放块时ext4是否应该向基础块设备发出discard/TRIM命令。这对于ssd设备和稀疏/稀疏配置的LUN很有用，但是默认情况下，在完成足够的测试之前，它是关闭的。

nouid32

禁用32位UID和GID。这是为了与只存储和期望16位值的旧内核的互操作性。

resize

允许将文件系统的大小调整到上一个现有块组的末尾，必须通过在线或脱机的regze2fs进一步调整大小。它只能与重装一起使用。

block_validity/noblock_validity

         该选项允许启用或禁用内核中的工具，用于跟踪内部数据结构中的文件系统元数据块。这允许多块分配器和其他例程快速定位可能与文件系统元数据块重叠的区段。此选项用于调试，并且由于它对性能产生负面影响，默认情况下是关闭的。

dioread_lock/dioread_nolock

控制ext4是否应该使用DIO读取锁定。如果指定dioread_nolock选项，ext4将在缓冲区写入之前分配未初始化的范围，并在IO完成后将范围转换为初始化范围。这种方法允许ext4代码避免使用inode互斥，从而提高了高速存储的可伸缩性。然而，这不适用于势利选项，安装将失败。它也不适用于数据日志记录和dioread_nolock选项，内核警告将忽略它们。注意，dioread_nolock代码路径仅用于基于范围的文件。由于限制，此选项默认为OFF(例如dioread_lock)

i_version

启用64位inode版本支持。默认情况下，此选项已关闭。

13）fat选项

选项

说明

blocksize={512|1024|2048}

设置块大小(默认512)。这一选择已经过时。

uid=value   

gid=value

设置所有文件的所有者和组。(默认值：当前进程的uid和gid。)

umask=value

设置umask(不存在的权限的位掩码)。默认的是当前进程的umask。这个数值是以八进制表示的。

dmask=value

设置仅应用于目录的umask。默认的是当前进程的umask。这个数值是以八进制表示的。

fmask=value

设置仅应用于常规文件的umask。默认的是当前进程的umask。这个值是以八进制表示的。

allow_utime=value

此选项控制mtime/atime的权限检查。20，如果当前进程位于文件组ID组中，则可以更改时间戳；2，其他用户可以更改时间戳。默认设置来自于“dmask”选项。(如果目录是可写的，utime(2)也是允许的。即。~dmask&022)。通常，utime(2)检查当前进程是否是文件的所有者，或者它具有CAP_FOWNER功能。但是FAT文件系统在磁盘上没有uid/gid，所以常规检查太不灵活了。有了这个选项，你可以放松一下。

check=value

三种不同程度的级别是可以选择的：

r[elaxed]，大小写被接受并等效，长名称部分被截断(例如verylongname.foobar变成verylong.foo)，在每个名称部分(名称和扩展名)中接受前导和嵌入空格。

n[ormal]，像“relaxed”，但许多特殊的字符(*，？，<，空格等)都被拒绝了。这是默认的。

s[trict]，像“normal”，但名称可能不包含长的部分和特殊字符，有时使用的Linux，但不被MS-DOS接受。(+, =, spaces)

codepage=value

设置用于在FAT和VFAT文件系统上转换为短名字符的代码页。默认情况下，使用代码页437。

conv={b[inary]|t[ext]|a[uto]}

FAT文件系统可以在内核中执行“CRLF<->NL”(MS-DOS文本格式到UNIX文本格式)的转换。以下转换模式可用：

binary，不执行转换。这是默认的。

text，对所有文件执行“CRLF<->NL”。

auto，CRLF<->NL”翻译是对所有没有“众所周知的二进制”扩展名的文件执行的。已知扩展列表可以在“fs/fat/misc.c”开头找到(从2.0开始，列表是：exe、com、bin、app、sys、drv、OVL、ovr、obj、lib、DLL、PIF、ARC、zip、LHA、Lzh、Zoo、tar、z、ARJ、tz、taz、tzp、tpz，gz，tgz，deb，gif，bmp，tif，gl，jpg，pcx，tfm，vf，gf，pk，pxl，dvi)。

cvf_format=module

强制驱动程序使用CVF(压缩卷文件)模块cvf_module而不是自动检测。如果内核支持KMOD，则cvf_format=xxx选项还控制按需加载CVF模块。此选项已过时。

cvf_option=option

选项传递给cvf_module。这一选择已经过时。

debug

打开调试标志。将打印版本字符串和文件系统参数列表(如果参数看起来不一致，也会打印这些数据)。

fat={12|16|32}

指定12、16或32位fat。这将覆盖自动FAT类型检测例程。谨慎使用

iocharset=value

用于转换8位字符和16位Unicode字符之间的字符集。默认为iso 8859-1。长文件名以unicode格式存储在磁盘上。

tz=UTC

此选项禁止在本地时间(Windows在FAT上使用)和UTC(Linux内部使用)之间的时间戳转换。当将设备(如数码相机)设置为UTC以避免本地时间的陷阱时，这尤其有用。

quiet

打开quiet标志。尝试chown或chmod文件虽然失败，但不会返回错误。小心使用！

showexec

如果设置了，只有当扩展名的扩展名为.exe、.com或.bat时，文件的执行权限位才会被允许。

sys_immutable

如果设置，FAT上的ATTR_SYS属性将作为Linux上的不变标志处理。默认情况下未设置

flush

如果设置了，文件系统将比正常情况下更早地尝试刷新到磁盘。默认情况下未设置。

usefree

使用FSINFO上存储的“空闲群集”值。它将用于在不扫描磁盘的情况下确定空闲集群的数量。但是默认情况下不使用它，因为最近的Windows在某些情况下没有正确地更新它。如果您确信FSINFO上的“空闲群集”是正确的，则可以通过此选项避免扫描磁盘。

dots, nodots, dotsOK=[yes|no]

将Unix或DOS约定强加于FAT文件系统的各种错误尝试

14）hfs选项

选项

说明

creator=cccc

type=cccc

设置创建者/类型值，如用于创建新文件的MacOS查找器所示。默认值：“？？？？”

uid=n, gid=n

设置所有文件的所有者和组。(默认值：当前进程的uid和gid。)

dir_umask=n,

file_umask=n,

umask=n

设置用于所有目录、所有常规文件或所有文件和目录的umask。默认为当前进程的umask。

session=n

选择要挂载的CDROM会话。默认情况下，将该决定留给CDROM驱动程序处理。除了CDROM作为底层设备之外，此选项将失败。

part=n

从设备中选择分区号n。只对CDROMS有意义。默认情况下根本不解析分区表

quiet

静默模式，不要抱怨挂载选项无效

15）hpfs选项

选项

说明

uid=value  

gid=value

设置所有文件的所有者和组。(默认值：当前进程的uid和gid。)

umask=value

设置umask(不存在的权限的位掩码)。默认的是当前进程的umask。这个值是以八进制表示的。

case={lower|asis}

将所有文件名转换为小写，或保留它们。(默认值：case=lower。)

conv={binary|text|auto}

对于conv=text，在读取文件时删除一些随机CRS(特别是所有后面跟着NL)。对于conv=auto，在conv= binary和conv=text之间随机选择多少。对于conv= binary文件，只需读取文件中的内容即可。这是默认的。

nocheck

当某些一致性检查失败时，不要中止安装。

16）iso9660选项

ISO 9660是描述用于CD-ROM的文件系统结构的标准。(在一些DVD上也可以看到这种文件系统类型。还请参阅UDF文件系统。)正常的iso 9660文件名以8.3格式出现(即，对文件名长度的类似DOS的限制)，此外，所有字符都是大写的。此外，也没有文件所有权、保护、链接数量、块/字符设备的设置等字段。

RockRidge是对iso 9660的扩展，它提供了所有类似Unix的特性。基本上，每个目录记录都有提供所有附加信息的扩展，而且当Rock Ridge在使用时，文件系统与普通UNIX文件系统是无法区分的(当然，它是只读的)。

选项

说明

norock

显示帮助信息

nojoliet

禁用Rock Ridge扩展的使用，即使可用

check={r[elaxed]|s[trict]}

使用check=relaxed，文件名在进行查找之前首先被转换为小写。这可能只有与norock和map= normal一起才有意义。(默认情况下：check=strict)

uid=value

gid=value

为文件系统中的所有文件提供指定的用户或组id，可能会覆盖RockRidge扩展中的信息。(默认值：UID=0，gid=0。)

map={n[ormal]|o[ff]|a[corn]}

对于非Rock Ridge卷，普通名称转换为从大写到小写的ASCII，删除一个尾随‘；1’，并转换‘；’到‘.’。使用map=off不进行名称转换。见norock。(默认值：map= normal.)map=acorn就像map= normal一样，但如果存在，也可以应用Acorn扩展。

mode=value

对于非Rock Ridge卷，给所有文件指定模式。(默认情况下：每个人都有读取权限。)因为Linux2.1.37不再需要指定十进制模式。

unhide

还显示隐藏的和相关的文件。(如果普通文件和关联的或隐藏的文件具有相同的文件名，这可能使普通文件无法访问。)

block={512|1024|2048}

将块大小设置为指示值。(默认值：Block=1024。)

conv={a[uto]|b[inary]|m[text]|t[ext]}

(默认值：conv=binary。)由于Linux1.3.54，此选项不再起作用。(非二进制设置过去非常危险，可能导致无声的数据损坏。)

cruft

如果文件长度的高字节包含其他垃圾，请设置此挂载选项以忽略文件长度的高阶位。这意味着文件不能大于16 MB。

session=x

选择多会话CD上的会话数

sbsector=xxx

回话从xxx区开始。

iocharset=value

用于将CD上的16位Unicode字符转换为8位字符的字符集。默认值为iso 8859-1。

utf8

将cd上的16位Unicode字符转换为utf-8

17）jfs选项：

选项

说明

iocharset=name

用于将Unicode转换为ASCII的字符集。默认情况是不进行转换。使用iocharset=utf 8翻译UTF 8。这需要在内核.config文件中设置CONFIG_NLS_UTF8。

resize=value

调整卷的块数。JFS只支持增长卷，而不支持缩小卷。此选项仅在重装入时有效，当卷被挂载时读写。没有值的resize关键字将使卷增长到分区的完整大小。

nointegrity

不要写日志。此选项的主要用途是在从备份媒体还原卷时允许更高的性能。如果系统异常弯曲，则无法保证卷的完整性。

integrity

默认。将元数据更改提交到日志。使用此选项可重新装入以前指定no完整性选项的卷，以恢复正常行为。

errors={continue|remount-ro|panic}

定义遇到错误时的行为。(要么忽略错误，标记文件系统错误并继续，要么重新装入文件系统只读，或者恐慌和停止系统。)

noquota|quota|usrquota|grpquota

这些选项有效，但是被忽略

18）minix选项

没有

19）msdos选项

请参阅FAT的安装选项。如果MSDOS文件系统检测到不一致性，它会报告一个错误并设置文件系统只读。通过重新安装文件系统，可以再次使其可写。

20）ncpfs选项

就像nfs一样，ncpfs实现需要一个二进制参数(Structncp_Mad_Data)到挂载系统调用。这个参数是由ncpmount(8)构造的，并且当前版本的挂载(2.12)不知道任何关于ncpfs的信息。

21）nfs和nfs4选项

请参阅nfs(5)手册页的选项部分(必须安装nfs-utils包)。nfs和nfs4实现需要对挂载系统调用使用二进制参数(Structnfs_Armad_Data)。这个参数是由mount.nfs(8)构造的，而且当前版本的挂载(2.13)不知道任何关于nfs和nfs4的信息。

22）ntfs选项：

选项

说明

iocharset=name

当返回文件名时要使用的字符集。与VFAT不同，NTFS禁止包含不可转换字符的名称。不受欢迎。

nls=name

前面名为iocharset的选项的新名称

utf8

使用UTF-8转换文件名.

uni_xlate={0|1|2}

如果是0(或“no”或“false”)，不要对未知Unicode字符使用转义序列。如果是1(或“是”或“真”)或2，使用vfat风格的以“：”开头的4字节转义序列。在这里，2给出了一个小的Endian编码，1给出了一个字节的bigendian编码。

posix=[0|1]

如果启用(POSIX=1)，则文件系统区分大小写。8.3别名被表示为硬链接，而不是被抑制。此选项已过时。

uid=value 

gid=value  

umask=value

在文件系统上设置文件权限。umask值以八进制为单位。默认情况下，这些文件由root拥有，其他人无法读取。

23）proc选项：

选项

说明

uid=value

gid=value

目前没有效果

24）ramfs选项

Ramfs是一个基于内存的文件系统。从Linux2.3.99pre4开始。没有挂载选项

25）reiserfs选项

Reiserfs是一个日志文件系统。

选项

说明

conv

指示3.6ReiserFS软件使用新创建的对象的3.6格式挂载3.5版本的文件系统。此文件系统将不再与ReiserFS3.5工具兼容。

hash={rupasov|tea|r5|detect}

选择ReiserFS将用于查找目录中文件的散列函数

rupasov，一种由Yury Yu. Rupasov发明的哈希。它快速并保持局部性，将按字典顺序关闭的文件名映射到关闭哈希值。不应使用此选项，因为它会导致高概率的哈希冲突。

tea，由Jeremy Fitzhardinge实现的Davis-Meyer函数。它在名称中使用散列置换位。它具有很高的随机性，因此，在一定的CPU成本下，哈希冲突的概率很低。如果R5散列遇到EHASHCOLLISION错误，则可使用此方法。

r5，一个修改版本的rupasov散列。默认情况下，它是最好的选择，除非文件系统有巨大的目录和不寻常的文件名模式。

detect，通过检查正在挂载的文件系统，指示挂载以检测正在使用的哈希函数，并将这些信息写入ReiserFS超级块。这仅适用于旧格式文件系统的第一次挂载。

hashed_relocation

调块分配器。这可能在某些情况下提供性能改进

no_unhashed_relocation

调块分配器。这可能在某些情况下提供性能改进

noborder

禁用Yury Yu发明的边界分配器算法

nolog

禁用日志记录。这将在某些情况下提供轻微的性能改进，代价是失去ReiserFS在崩溃中的快速恢复。即使打开了此选项，ReiserFS仍然执行所有日志操作，除非实际写入其日志区域。NOLOG的实现是一项正在进行的工作。

notail

默认情况下，ReiserFS将小文件和“文件尾”直接存储到其树中。这就混淆了一些实用程序，如LILO (8)。此选项用于禁用将文件打包到树中。

replayonly

重播日志中的事务，但不要实际挂载文件系统。主要用于reiserfsck。

resize=number

重新装入选项，它允许在线扩展ReiserFS分区。指示ReiserFS假定设备有数字块。此选项设计用于逻辑卷管理(LVM)下的设备。有一个特殊的Resizer实用程序可以从ftp://ftp.namesys.com/pub/reiserfsprogs.获得。

user_xattr

启用扩展用户属性

acl

启用POSIX访问控制列表

barrier=none / barrier=flush

这允许/禁用在日记代码中使用写屏障。barrier=none用它，barrier=flush启用它。写障碍强制在磁盘上正确排序日志提交，使易失性磁盘写入缓存安全使用，在某些性能上的损失。默认情况下，ReiserFS文件系统不启用写屏障。确保启用屏障，除非您的磁盘是电池支持的方式或其他方式。否则，在发生电源故障时，您将面临文件系统损坏的风险。

26）romfs选项

无

27）squashfs选项

无

28）smbfs选项

与nfs一样，smbfs实现需要一个二进制参数(smb_mount_data)到挂载系统调用。这个参数是由smbmount(8)构造的，而当前版本的挂载(2.12)不知道任何有关smbfs的信息。

29）sysv选项

无

30）ubifs选项

UBIFS是一个在UBI卷之上工作的闪存文件系统。请注意，atime不受支持，并且总是被关闭。设备名称可以指定为

ubiX_Y，UBI设备号X，卷标Y。

ubiY，UBI设备号0，卷标Y

ubiX:NAME，UBI设备号X，卷标NAME。

ubi:NAME，UBI设备号0，卷标NAME。

可以使用“！”代替分隔符“：”。

选项

说明

bulk_read

启用大容量读取。VFS预读是禁用的，因为它减慢了文件系统的速度.批量读取是一种内部优化。如果数据一次读取，而不是几次读取请求时，一些闪存可能读取得更快。例如，OneNAND如果读取多个NAND页，就可以执行“同时读取加载”操作。

no_bulk_read

不要启用bulk_read。这是默认的

chk_data_crc

检查数据CRC-32校验和。这是默认的

no_chk_data_crc.

不要检查数据CRC-32校验和。使用此选项，文件系统不会检查crc-32校验和中的数据，但会检查它是否有内部索引信息。此选项只影响阅读，而不影响写入。在写入数据时，始终计算CRC-32

compr={none|lzo|zlib}

选择写入新文件时使用的默认压缩程序。如果使用None选项挂载，仍然可以读取压缩文件。

31）udf选项

Udf是光存储技术协会定义的“通用磁盘格式”文件系统，经常用于dvd-rom。

选项

说明

gid=

设置默认组

umask=

设置默认umask，八进制

uid=

设置默认用户

unhide

显示其他隐藏文件

undelete

在列表中显示已删除的文件

nostrict

未设定严格一致性

iocharset

设置NLS字符集

bs=

设置块大小，如果不是2048，可能不工作

novrs

忽略卷标序列识别

session=

从0设置CDROM会话计数。默认值：最后一次会话

anchor=

覆盖标准锚位置。缺省值：256

volume=

覆盖VolumeDesc位置

partition=

覆盖PartitionDesc位置

lastblock=

设置系统的最后一个块

fileset=

重写文件集块位置

rootdir=

重写根目录位置

32）ufs选项：

选项

说明

ufstype=value

UFS是一个在不同操作系统中广泛使用的文件系统。问题在于实现之间的差异。一些实现的特性是无文档的，因此很难自动识别UFS的类型。这就是为什么用户必须指定UFS类型的挂载选项。可能的价值是：

old，旧格式的UFS，这是默认的，只读的。(别忘了给出-r选项。)

44bsd，用于BSD类系统(NetBSD、FreeBSD、OpenBSD)创建的文件系统。

sun，对于Sparc上由SunOS或Solaris创建的文件系统。

sunx86，对于Solaris在x86上创建的文件系统

hp，对于hp-ux创建的文件系统，只读

nextstep，对于由NeXTStep创建的文件系统(在下一个站点上)(当前为只读)

nextstep-cd，对于NextStepCDROM(块_size=2048)，只读。

openstep，对于OpenStep创建的文件系统(当前仅读)。MacOSX也使用相同的文件系统类型。

onerror=value

设置错误行为：

panic，如果遇到错误，则引发内核恐慌。

[lock|umount|repair]，这些挂载选项目前不执行任何操作；当遇到错误时，只打印控制台消息。

33）umsdos选项

查看msdos的选项

34）vfat选项

首先，FAT的安装选项被识别出来。dotsOK选项由vFAT显式地终止。

选项

说明

uni_xlate

将未处理的Unicode字符转换为特殊转义序列。这使您可以备份和还原用任何Unicode字符创建的文件名。如果没有这个选项，在不可能翻译的情况下使用“？”。转义字符是“：”，因为它在vFAT文件系统上是非法的。使用的转义序列，其中u的Unicode字符是：‘，(u&0x3f)，(u>6)和0x3f)，(u>12)

posix

允许两个文件的名字相同，但是大小写不同

nonumtail

在尝试name~num.ext之前，先尝试使用没有序列号的短名称。

utf8

utf8是控制台使用的Unicode的文件系统安全8位编码。可以为具有此选项的文件系统启用它，也可以使用utf8=0、utf8=no或utf8=false禁用它。如果设置了‘uni_xlate’，那么utf8就会被禁用。

shortname={lower|win95|winnt|mixed}

定义用于创建和显示符合8.3个字符的文件名的行为。如果文件的长名称存在，它将始终是首选显示。有四种模式：

lower，在显示时强制将短名显示为小写；在短名并非全部大写时存储长名称。此模式是默认模式。

win95，在显示时将短名强制显示为大写；在短名并非全部大写时存储长名称。

winnt，按原样显示短名；当短名不是全部小写或全部大写时，存储一个长名称。

mixed，按原样显示短名；在短名不全大写时存储长名

35）usbfs选项：

选项

说明

devuid=uid

devgid=gid

devmode=mode

在usbfs文件系统中设置设备文件的所有者、组和模式(默认值：uid=gid=0，mode=0644)。该模式以八进制表示。

busuid=uid

busgid=gid

busmode=mode

在usbfs文件系统中设置总线目录的所有者、组和模式(默认值：uid=gid=0，mode=0555)。该模式以八进制表示。

listuid=uid

listgid=gid

listmode=mode

设置文件设备的所有者、组和模式(默认值：UID=gid=0，mode=0444)。该模式以八进制表示。

36）xenix选项

无

37）xfs选项：

选项

说明

allocsize=size

在执行延迟分配写入时设置缓冲的I/O文件结束预分配大小(默认大小为64 KiB)。此选项的有效值是页面大小(通常为4 KiB)到1 GiB(包括-2的功率增量)。

attr2|noattr2

选项启用/禁用(默认启用)-磁盘上存储内联扩展属性的方式将进行“机会主义”改进。当首次使用新表单时(通过设置或删除扩展属性)，将更新磁盘上超级块功能位字段，以反映正在使用的这种格式。

barrier

启用块层写入栏写入日记和未写入范围转换。这允许为支持写屏障的设备启用驱动器级写缓存

dmapi

启用DMAPI(数据管理API)事件回调。与mtpt选项一起使用

grpid|bsdgroups

nogrpid|sysvgroups

这些选项定义了新创建的文件获取的组ID。设置GRAPID时，它接受创建它的目录的组ID；否则(默认)它接受当前进程的fsgid，除非目录设置了setgid位，在这种情况下，它从父目录获取gid，如果它是目录本身，也会获得setgid位集。

ihashsize=value

设置可用于散列指定挂载点的内存中节点的散列桶数。如果使用的值为零，则默认算法选择的值将显示在“/proc/mounts”中。

ikeep|noikeep

当inode集群清空inode时，将它们保存在磁盘上(i备)-这是传统的XFS行为，目前仍然是默认的。使用noikeep备选项，inode集群将返回到空闲空间池中。

inode64

            指示允许XFS在文件系统中的任何位置创建inode，包括那些将导致inode数占用32位以上的节点。这是为了向后兼容性而提供的，但对于无法处理大型inode编号的备份应用程序则会造成问题。

largeio|nolargeio

如果指定了nolargeio，STAT(2)在st_blksize中报告的最佳I/O将尽可能小，以使用户应用程序避免低效率的读/修改/写I/O。如果指定了Largeio，指定了swide的文件系统将返回st_blksize中的swidth值(字节)。如果文件系统没有指定sWidth，但确实指定了分配大小，则将返回分配大小(以字节为单位)。如果这两个选项都没有指定，那么文件系统将表现为指定了nolargeio。

logbufs=value

设置内存中日志缓冲区的数量。有效数字范围从2-8包括在内.对于块大小为64 KiB的文件系统，默认值为8个缓冲区；对于块大小为32 KiB的文件系统，为4个缓冲区；对于块大小为16 KiB的文件系统，为3个缓冲区；对于所有其他配置，为2个缓冲区。增加缓冲区的数量可能会提高某些工作负载的性能，而代价是用于附加日志缓冲区及其相关控制结构的内存。

logbsize=value

设置每个内存中日志缓冲区的大小。大小可以字节为单位，也可以带有“k”后缀的千字节为单位。版本1和版本2日志的有效大小分别为16384(16k)和32768(32k)。版本2日志的有效大小还包括65536(64k)、131072(128 K)和262144(256 K)。内存大于32 mb的机器的默认值为32768，内存较少的机器默认使用16384。

logdev=device

rtdev=device

使用外部日志(元数据日志)和/或实时设备。XFS文件系统有三个部分：数据部分、日志部分和实时部分。实时部分是可选的，日志部分可以独立于数据部分，也可以包含在其中。参见XFS(5)

mtpt=mountpoint

与dmapi选项一起使用。此处指定的值将包含在DMAPI挂载事件中，并且应该是所使用的实际挂载点的路径。

noalign

数据分配将不会在条形单元边界上对齐。

noatime

读取文件时不更新访问时间戳

norecovery

文件系统将在不运行日志恢复的情况下挂载。如果文件系统没有干净地卸载，那么在无恢复模式下挂载时可能会不一致。因此，某些文件或目录可能无法访问。安装的文件系统必须是只读的，否则挂载将失败.

nouuid

不要使用文件系统UUID检查双挂载文件系统。这对于挂载LVM快照卷很有用。

osyncisosync

使O_SYNC写入实现真O_SYNC。没有此选项，LinuxXFS的行为就像使用了一个grocisdsync选项，这将使对使用O_sync标志集打开的文件的写操作就像使用了O_DSYNC标志一样。这样可以在不损害数据安全的情况下获得更好的性能。但是，如果此选项无效，则如果系统崩溃，则会丢失来自O_sync写入的时间戳更新。如果时间戳更新是关键的，请使用心得顺式选项。

uquota, usrquota| uqnoenforce, quota

启用用户磁盘配额记帐，并强制限制(可选)。

gquota, grpquota, gqnoenforce

已启用磁盘配额记帐组，并强制执行限制(可选)。

pquota|prjquota|pqnoenforce

启用项目磁盘配额会计并强制执行限制(可选)

sunit=value

swidth=value

用于指定RAID设备或条带卷的条带单元和宽度。值必须以512字节块单元指定.如果没有指定此选项，并且文件系统是在条卷上创建的，或者在mkfs时为RAID设备指定了条带宽度或单元，那么挂载系统调用将从超级块恢复值。对于直接在RAID设备上创建的文件系统，如果在创建文件系统后底层磁盘布局发生了更改，则可以使用这些选项覆盖超级块中的信息。如果sunit选项已经指定，并且必须是sunit值的倍数，则必须使用swidth选项。

swalloc

当扩展文件的当前结束且文件大小大于条带宽度大小时，数据分配将被舍入到条带宽度边界。

38）xiafs选项

无

39）回环设备

另一种可能的类型是通过循环装置安装，例如指令“mount  /tmp/fdimage  /mnt  -t  vfat  -o  loop=/dev/loop3”，设置循环设备/dev/loop 3，使其与文件/tmp/fdigage相对应，然后在/mnt上挂载此设备。这种类型的挂载知道四个选项，即循环、偏移、大小消除和加密，它们实际上是losetup (8)的选项。(除了特定于文件系统类型的选项之外，还可以使用这些选项。) 如果没有提到显式循环设备(但只提供了一个选项‘-o loop’)，那么挂载将尝试找到一些未使用的循环设备并使用它。

由于Linux2.6.25支持自动销毁循环设备，因此由挂载分配的任何循环设备都将由umount在/etc/mtab上独立释放。您也可以使用‘loset-d’或‘umount-d’手动释放循环设备。

40）tmpfs选项

选项

说明

size=nbytes

覆盖文件系统的默认最大大小。大小以字节为单位，并舍入到整页。默认值是内存的一半。Size参数还接受后缀%，以将tmpfs实例限制在物理RAM的百分比上：当未指定size或nr_block时，默认值为size=50%。

nr_blocks=

与size相同，但在PAGE_CACHE_SIZE的块中

nr_inodes=

此实例的最大节点数。默认为物理RAM页数的一半，或(在具有高内存的计算机上)低内存页数的一半，以较低的值为准。

mode=

设置根目录的初始权限

uid=

用户id

gid=

组id

mpol=[default|prefer:Node|bind:NodeList|

interleave|interleave:NodeList]

为该实例中的所有文件设置NUMA内存分配策略(如果启用了内核CONFIG_NUMA)，可以通过“mount -o remount”对其进行动态调整：

default，更倾向于从本地节点分配内存。

prefer：Node，更愿意从给定的节点分配内存。

bind:NodeList，仅从NodeList中的节点分配内存。

interleave，依次从每个节点分配。

interleave:NodeList，依次从NodeList的每个节点分配。

NodeList格式是以逗号分隔的小数和范围列表，范围为两个连字符分隔的十进制数，是范围内最小和最大的节点数。例如“mpol=bind:0-3,5,7,9-15”。

 

## 说明
mount的标准格式是“mount -t type device dir”。这告诉内核将在设备(type类型)上找到的文件系统附加到目录dir上。以前的内容(如果有的话)以及dir的所有者和模式变得不可见，只要这个文件系统仍然挂载，路径名dir就会引用设备上的文件系统的根。

- 三种形式的调用实际上不会挂载任何东西： 

``` bash
mount -h               # 显示帮助信息
mount -V               # 显示命令版本信息
mount [-l] [-t type]   # 列出所有挂载的文件系统，选项“-l”在这个清单中添加标签
```
- 设备指示

大多数设备都由文件名(块特殊设备的文件名)表示，如“/dev/sda1”，但还有其他可能性。例如，在NFS安装的情况下，设备看起来可能类似于“knuth.cwi.nl:/dir”。可以使用它的卷标签或UUID来指示块特殊设备(请参阅下面的-L和-U选项)

建议的设置是使用LABEL=<Label>或UUID=<UUID>标记，而不是使用udev符号链接“/etc/disk/by-{LABEL，UUID}”。这些标签更具可读性、鲁棒性和可移植性。mount(8)命令在内部使用udev符号链接，因此使用”/etc/fstab”中的符号链接并不比Label=或者UUID=占优势。

proc文件系统不与特定设备相关联，在挂载它时，可以使用任意关键字(如proc)代替设备规范。

- /etc/fstab, /etc/mtab，/proc/mounts

文件/etc/fstab(参见fstab(5)可能包含描述哪些设备通常安装在何处，使用哪些选项安装的行。命令“mount  -a  [-t type]  [-O optlist]” 将按所示的方式(具有或没有正确的选项)安装fstab中提到的所有文件系统，但行中包含“noauto”关键字的文件系统除外。添加-F选项将使用挂载子进程，以便文件系统同时挂载。

当安装fstat或mtab中提到的文件系统时，只给设备或仅给挂载点就足够了。mount和umount程序维护文件“/etc/mtab”中当前挂载的文件系统列表。如果没有给出挂载参数，则打印此列表。

如果指定了设备(或LABEL/UUID)和dir，则挂载程序不会读取“/etc/fstab”文件。例如“mount  /dev/foo  /dir”。如果您想要覆盖“/etc/fstab“中的挂载选项，则必须使用“mount  device|dir  -o  <options>”，然后，命令行中的挂载选项将被追加到“/etc/fstab”的选项列表中。通常的做法是，如果有更多重复的选项，最后一个选项就会获胜。

当安装proc文件系统(例如/proc)时，文件“/etc/mtab”和“/proc/mount”具有非常相似的内容。前者有更多的信息，例如所使用的挂载选项，但不一定是最新的(参见下面的-n选项)。可以将“/etc/mtab”替换为指向“/proc/mount“的符号链接，特别是当您有大量的挂载时，使用该符号链接的速度会快得多，但有些信息会以这种方式丢失，特别是使用“user”选项会失败

- 非超级用户挂载

通常，只有超级用户才能挂载文件系统。然而，当fstab文件中的行中包含“让任何人都可以挂载系统“的这种内容之后，例如”/dev/cdrom  /cd  iso9660  ro,user,noauto,unhide“，任何人都可以使用以下命令挂载在CDROM中找到的iso9660系统：”mount  /dev/cdrom“或者”mount  /cd“

只有挂载文件系统的用户才能卸载它。如果任何用户应该能够卸载，那么在fstat行中使用users而不是user。owner选项类似于user选项，其限制是用户必须是特殊文件的所有者。这可能是有用的，例如对于“/dev/fd“如果登录脚本使控制台用户拥有此设备。

- 绑定挂载

从Linux2.4.0开始，可以将文件层次结构的一部分重新装入其他地方。使用命令“mount  --bind  olddir  newdir“或者”mount  -B  olddir  newdir“或者是在fstab中使用”/olddir  /newdir  none  bind“。调用这个命令之后之后，可以在两个地方访问相同的内容，还可以重新装入单个文件。

此调用仅关系到(部分)单个文件系统，而不附加可能的子挂载。整个文件层次结构(包括子挂载)将使用：“mount  --rbind  olddir  newdir“或者”mount  -R  olddir newdir“

请注意，文件系统挂载选项将与原始挂载点上的选项相同，不能通过传递“-o“选项和”-bind/-rbind“来更改。挂载选项可以通过单独的重新装入命令进行更改，例如：”mount  --bind  olddir  newdir“，”mount  -o  remount,ro  newdir“。

- 移动操作

从Linux2.5.1开始，可以原子地将挂载的树移动到另一个地方。使用如下命令:“mount  --move  olddir  newdir“或者”mount  -M  olddir  newdir“。这将导致在newdir下可以访问以前出现在olddir下的内容。

- 共享子树操作

由于Linux2.6.15可以将挂载及其子挂载标记为共享、私有、从或不可绑定的。共享挂载提供了创建该挂载的镜像的能力，以便在任何镜像中挂载和汇总到另一个镜像。从装入接收来自其主的传播，反之亦然。私有挂载不具有传播能力。不可绑定的挂载是不能通过绑定操作克隆的私有挂载。详细的语义记录在内核源代码树中的文档/sharedsubtree.txt文件中。
``` bash
mount  --make-shared  mountpoint
mount  --make-slave  mountpoint
mount  --make-private  mountpoint
mount  --make-unbindable  mountpoint
```
以下命令允许递归更改给定挂载点下所有挂载的类型
``` bash
mount  --make-rshared  mountpoint
mount  --make-rslave  mountpoint
mount  --make-rprivate  mountpoint
mount  --make-runbindable  mountpoint
```
## 返回值

- 0，成功。
- 1，不正确的唤醒或者权限。
- 2，系统错误（内存溢出，不能fork，没有回环设备）。
- 4，内部mount出现bug。
- 8，用户中断。
- 16，在写或者锁定“/etc/mtab“时出错。
- 32，挂载失败。
- 64，一些挂载成功。

## 外部安装

外部安装帮助程序的语法是“/sbin/mount.<suffix>  spec  dir  [-sfnv]  [-o options]  [-t  type.subtype]“，<type>是文件系统类型，”-sfnvo“选项的含义与标准挂载选项相同。”-t“选项用于支持子类型的文件系统(例如/sbin/mount.fut-tfuse.sshfs)。

## 文件

- /etc/fstab，系统列表。
- /etc/mtab，已经挂载的系统。
- /etc/mtab~，锁定的文件。
- /etc/mtab.tmp，临时文件。
- /etc/filesystems，尝试的文件系统列表。
## 举例
创建ext2文件系统，并将其挂载到/media/sf_data
``` bash
[root@localhost ~]$ mknod /dev/sdb4 b 1 1  #创建一个设备
[root@localhost ~]$ mke2fs /dev/sdb4  #创建文件系统，没有指定类型，默认是ext2
[root@localhost ~]$ mount /dev/sdb4 /media/disk #将文件系统挂载
[root@localhost ~]$ mount #不适用任何选项，输出已经挂载的文件系统
/dev/mapper/VolGroup-lv_root on / type ext4 (rw)
proc on /proc type proc (rw)
sysfs on /sys type sysfs (rw)
devpts on /dev/pts type devpts (rw,gid=5,mode=620)
tmpfs on /dev/shm type tmpfs (rw)
/dev/sda1 on /boot type ext4 (rw)
/dev/sdb4 on /media/sf_data type ext2 (rw)
```
挂载iso文件
``` bash

[root@localhost ~]$ mount -t iso9660 -o loop /sogrey/my.iso /media/sf_data/ #挂载iso文件，使用-o loop
[root@localhost ~]$ mount  #查看已经挂载的文件系统
/dev/mapper/VolGroup-lv_root on / type ext4 (rw)
proc on /proc type proc (rw)
sysfs on /sys type sysfs (rw)
/sogrey/my.iso on /media/sf_data type iso9660 (rw,loop=/dev/loop0)
```