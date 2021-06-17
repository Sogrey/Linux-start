# eject - 用来退出抽取式设备

eject命令 用来退出抽取式设备。若设备已挂入，则eject命令会先将该设备卸除再退出。

eject允许可移动介质（典型是cd-ROM、软盘、磁带、或者JAZ以及zip磁盘）在软件控制下弹出。该命令也可以控制一些多盘片CD-ROM控制器，控制一些设备支持的自动弹出功能，以及控制一些CD-ROM驱动器磁盘托盘的关闭。与name相应的设备将被弹出，name可以为设备文件或者其挂载点，也可以为完整路径或者省略前面的/dev或者/mnt设备文件名。如果没有指定name，缺省使用cdrom。

有四种不同的弹出的方法，具体要看设备是CD-ROM， SCSI设备，可移动软盘，还是磁带而定。默认的弹出会依次尝试所有四种方法，直到成功为止。如果设备当前是挂载上来的，那么在弹出前要先卸载。

eject指令允许在软件控制下弹出可移动媒体(通常是光盘、软盘、磁带或Jaz或ZIP磁盘)。该命令还可以控制一些由某些设备支持的自动弹出功能的多光盘转换器，并关闭一些光盘驱动器的盘。

对应于<name>的设备被弹出。名称可以是一个设备文件或挂载点，可以是一个完整的路径，也可以是前面省略的“/dev”、“/media”或“/mnt”。如果未指定名称，则使用默认名称“cdrom”。

根据设备是CD ROM、SCSI设备、可移动软盘还是磁带，有四种不同的弹出方法。默认情况下，弹出将按顺序尝试所有四种方法，直到成功为止。如果该设备目前已安装，则在弹出前将其卸载。
## 其他说明
eject指令执行成功之后会返回0，如果失败就返回1。

eject指令只适用于支持四种弹出方法中的一种或多种方法的设备。这包括大多数光盘驱动器(IDE、SCSI和专有)、一些SCSI磁带驱动器、Jaz驱动器、ZIP驱动器(并行口、SCSI和IDE版本)和LS 120可移动软盘。用户还报告说，在Sun SPARC和Apple Macintosh系统上，软盘驱动器也取得了成功。如果弹出无法工作，很可能是对设备的内核驱动程序的限制，而不是弹出程序本身的限制。

-r、-s、-f和-q选项允许控制用于弹出的方法。可以指定多个方法。如果没有指定这些选项，则会尝试所有四个选项(在大多数情况下，这很好)。

eject并不总是能够确定设备是否已安装(例如，它是否有多个名称)。如果设备名称是一个符号链接，弹出将跟随该链接并使用它所指向的设备。

如果eject确定该设备可以具有多个分区，则它将尝试在弹出之前卸载该设备的所有已安装分区。如果卸载失败，程序将不会尝试弹出媒体。

你可以弹出一张音频CD。如果驱动器是空的，一些CDROM将拒绝打开托盘。有些设备不支持托盘关闭命令。

如果启用了自动弹出功能，则在运行此命令后，驱动器将始终弹出。并不是所有的linux内核CDROM驱动程序都支持自动弹出模式，无法找到自动弹出模式的状态。

您需要适当的权限才能访问设备文件。要弹出某些设备(例如SCSI设备)，需要以root或setuidroot的形式运行。

用于查找设备的启发式方法(给定名称)如下所示。如果名称以尾随斜杠结尾，则删除它(这是为了支持使用shell文件名完成生成的文件名)。如果名称以“.”或“/”开头，则尝试将其作为设备文件或挂载点打开。如果失败，它会尝试将‘/dev/’、‘/media/’、‘/mnt/’、‘/dev/cdroms’、‘/dev/rdsk/’、‘/dev/dsk/’和最后‘./’放在名称前面，直到找到可以打开的设备文件或挂载点。安装设备的程序检查/etc/mtab。如果失败，它还会检查/etc/fSTAB以查找当前未挂载设备的挂载点。

建议创建符号链接，如/dev/cdrom或/dev/zip，以便eject可以使用容易记住的名称来确定合适的设备。

要保存类型，可以为特定设置工作的弹出选项创建shell别名。
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
eject  -h
eject  [-vnrsfmqp]  [<name>]
eject  [-vn]  -d
eject  [-vn]  -a  on|off|1|0  [<name>]
eject  [-vn]  -c  slot  [<name>]
eject  [-vn]  -i  on|off|1|0  [<name>]
eject  [-vn]  -t  [<name>]
eject  [-vn]  -T  [<name>]
eject  [-vn]  -x  <speed>  [<name>]
eject  [-vn]  -X  [<name>]
eject  -V
```

## 选项

``` bash
-d | --default

显示默认的设备名字（cdrom）

-a on|1|off|0

这个选项控制自动弹出模式，只有某些设备才支持。如果是能这个开关，设备在关闭的时候会自动弹出。

-c <slot> | --changerslot

使用此选项，可以从ATAPI/IDE CD-ROM转换器中选择CD插槽。使用此特性需要Linux2.0或更高版本。当一个更改请求工作的时候，无法使用CD-ROM驱动器(挂载的数据CD或播放音乐CD)。还请注意，转换器的第一个插槽称为0，而不是1。

-i on|1|off|0

此选项可以锁定弹出按钮，使其不工作。当启用时，当按下按钮时，驱动器将不会弹出。这是有用的，当您携带笔记本电脑在一个袋子或箱子，不希望它弹出，如果该按钮是无意中按下。

-t | --trayclose

有了这个选项，驱动器被赋予一个CD-ROM托盘关闭命令。并非所有设备都支持此命令。

-T | --traytoggle

如果CD-ROM托盘已经打开，那么它将关闭；如果CD-ROM托盘已经关闭，那么它将弹出。并非所有设备都支持此命令，因为它使用了上面的CD-ROM托盘关闭命令。

-x <speed> | --cdspeed

使用此选项，CDROM驱动器可以进行选择速度。速度参数是一个指示所需速度的数字(例如，8表示8X速度)，或0表示最大数据速率。并非所有设备都支持此命令，而且您只能指定驱动器能够达到的速度。每次媒体更改时，此选项将被清除。此选项可以单独使用，也可以与-t和-c选项一起使用。

-X | --listspeed

显示cdrom的可用速度。使用此选项，将探测CD-ROM驱动器以检测可用的速度。输出一个速度列表，可用作-x选项的参数。这只适用于Linux2.6.13或更高版本，在以前的版本上只报告最高速度。还请注意，某些驱动器可能无法正确报告速度，因此选项不适用于它们。

-n | --noop

显示所选的设备，但是不执行任何操作

-r | --cdrom

弹出 cdrom设备

-s | --scsi

弹出SCSI设备

-f | --floppy

弹出 floppy设备

-q | --tape

弹出 磁带设备

-p | --proc

允许使用/proc/mounts代替/etc/mtab

-m | --no-umount

此选项允许eject与自动挂载可移动媒体的设备驱动程序一起工作，因此这些设备必须总是已挂载的。该选项告诉eject不要尝试卸载给定的设备，即使它是根据/etc/mtab或/proc/挂载安装的。
-v, --verbose         # 执行指令的时候显示详细信息，可以在命令行看到指令在干什么

-h， --help           # 显示帮助文档
-V, --version         # 显示命令版本信息
```

## 举例

``` bash
#弹出默认设备
eject

#弹出一个名字为cdrom的设备或者挂载点
eject cdrom

#使用设备名来弹出
eject /dev/cdrom

#使用挂载点弹出
eject /mnt/cdrom

#弹出第4个IDE设备
eject hdd

#弹出第一个SCSI设备
eject sda

#使用SCSI分区名称弹出
eject sda4

#在多盘交换机上选择第5盘
eject –v –c4 /dev/cdrom

#打开声音放映机CD-ROM上的自动弹出功能
eject –a on /dev/sbpcd
```
没有指定设备类型，直接弹出cdrom。此种情况下会依次尝试所有的方式，直到弹出为止。
``` bash
[sogrey@bogon ~]$ eject -v
eject: 使用默认设备“/dev/sr0”
eject: 设备名称为“/dev/sr0”
eject: /dev/sr0：已挂臷于 /run/media/sogrey/VBox_GAs_6.1.22
eject: /dev/sr0：是全磁盘设备
eject: /dev/sr0 不是可移动设备
eject: /run/media/sogrey/VBox_GAs_6.1.22：正在卸载
eject: /dev/sr0：正在尝试使用 CD-ROM 弹出命令弹出
eject: CD-ROM 弹出命令成功
[sogrey@bogon ~]$ 
```
使用“-r”选项，弹出cdrom
``` bash
[sogrey@bogon ~]$ mount # 查看是否有光盘挂载
sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime,seclabel)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
devtmpfs on /dev type devtmpfs (rw,nosuid,seclabel,size=2172124k,nr_inodes=543031,mode=755)
...
/dev/sr0 on /run/media/sogrey/VBox_GAs_6.1.22 type iso9660 (ro,nosuid,nodev,relatime,uid=1000,gid=1000,iocharset=utf8,mode=0400,dmode=0500,uhelper=udisks2)
[sogrey@bogon ~]$ eject -v -r # 弹出光盘
eject: 使用默认设备“/dev/sr0”
eject: 设备名称为“/dev/sr0”
eject: /dev/sr0：已挂臷于 /run/media/sogrey/VBox_GAs_6.1.22
eject: /dev/sr0：是全磁盘设备
eject: /dev/sr0 不是可移动设备
eject: /run/media/sogrey/VBox_GAs_6.1.22：正在卸载
eject: /dev/sr0：正在尝试使用 CD-ROM 弹出命令弹出
eject: CD-ROM 弹出命令成功
[sogrey@bogon ~]$ 
```
