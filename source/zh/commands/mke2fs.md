# mke2fs - 创建磁盘分区上的etc2/etc3文件系统

mke2fs命令 被用于创建磁盘分区上的“etc2/etc3”文件系统。

在磁盘分区上创建ext2、ext3、ext4文件系统，默认情况下会创建ext2。

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
mke2fs  [选项]  [设备]
mke2fs  [ -c | -l filename ]  [ -b block-size ]  [ -f fragment-size ]  [ -g blocks-per-group ]  [ -G number-of-groups ]  [ -i bytes-per-inode ]  [ -I inode-size ]  [ -j ]  [-J  journal-options]  [ -K ]  [ -N number-of-inodes ] [ -n ]  [ -m reserved-blocks- percentage ]  [ -o creator-os ]  [ -O feature[,...]]  [ -q ]  [ -r  fs-revision-level]  [ -E  extended-options]  [ -v ]  [ -F ]  [ -L volume-label ]  [ -M last-mounted-directory ] [ -S ]  [ -t fs-type ]  [ -T usage-type ]  [ -U UUID ]  [ -V ]  device  [ blocks-count ]

mke2fs  -O  journal_dev  [ -b block-size ]  [ -L volume-label ]  [ -n ]  [ -q ]  [ -v ]  external-journal  [ blocks-count ]
```
device是与设备相对应的特殊文件(例如：g/dev/hdXX)。blocks-count是设备上的块数。如果省略，mke2fs会自动配置文件系统的大小。如果调用为mkfs.ext3，则创建日记，好像指定了“-j”选项。新创建的文件系统参数的默认值(如果没有被下面列出的选项覆盖)由“/etc/mke2fs.conf”配置文件控制。
## 选项

``` bash
-b block-size         # 指定文件系统上块的大小（kb），有效值1024、2048、4096。如果省略，块大小将由文件系统大小和文件系统的预期使用量(请参阅-T选项)来决定。如果块大小为负值，则mke2fs将使用启发式方法来确定适当的块大小，同时限制块大小至少为block-size字节。这对于某些硬件设备非常有用（这些硬件设备要求块大小为2k的倍数）。
-c                    # 坏道检测。如果该选项被指定两次，则使用较慢的读写测试，而不是快速只读测试。
-E extended-options    # 为文件系统设置扩展选项。扩展选项是逗号分隔的，可以使用等号复制。在mke2fs的早期版本中，“-E”选项以前是“-R”。为了向后兼容，仍然接受“-R”选项。支持下面的扩展选项：
                       # stride=stride-size。使用stride-size个块来配置RAID数组，这是在移动到下一个磁盘之前读取或写入磁盘的块数，有时被称为块大小。这主要影响文件系统元数据在mke2fs时的存放位置，以避免将它们放置在单个磁盘上，这可能会影响性能。块分配程序也可能使用它。
                       # stripe-width=stripe-width。使用stripe-width个块来配置RAID数组，这通常是stride-size *n，其中N是RAID中包含数据磁盘的数目(例如，对于RAID 5，有一个奇偶校验磁盘，所以N将是数组中磁盘数量减去1)，这允许块分配器在写入数据时防止修改RAID中的奇偶。
                       # resize=max-online-resize。预留足够的空间，以便块组描述符能够增长以支持具有在线调整块大小的文件系统。
                       # lazy_itable_init[= <0 to disable, 1 to enable>]。如果使能了，并且也启用了uninit_bg功能，那么inode表将不会被mke2fs完全初始化。这明显加快了文件系统的初始化速度，但它要求内核在文件系统首次挂载时在后台完成对文件系统的初始化。如果省略了选项值，则默认为1以启用延迟inode表初始化。
                       # test_fs。在文件系统超级块中设置一个标志，指示可以使用试验性内核代码(如ext4dev文件系统)挂载它。
                       # discard。尝试在mkfs时丢弃块(在固态设备和稀疏/稀疏的Provi-Sied存储中丢弃块是有用的)。当设备宣传丢弃数据时，将所有尚未归零的inode表标记为零。这大大加快了文件系统初始化的速度。此设置为默认设置。
                       # nodiscard。在mkfs时不会丢弃块。
-f fragment-size       # 设置文件系统碎片的大小。mke2fs接受“-f”选项，但目前忽略它，因为第二个扩展文件系统还不支持片段
-F                     # 强制mke2fs创建文件系统，即使指定的设备不是块特殊设备上的分区，或者其他参数没有意义。。由于这个指令很危险，因此必须确认两次
-g blocks-per-group    # 指定块组中的块数。用户通常没有任何理由设置此参数，因为默认设置对文件系统是最佳的。开发测试用例的开发人员通常使用此选项。
-G number-of-groups    # 指定组的数量，这些组将被打包在一起用来创建更大的虚拟块组。组数必须是2的幂，并且只能在启用Flex_BG文件系统功能时指定。
-i bytes-per-inode     # mke2fs为磁盘上每一个inode字节创建一个inode。bytes/inode比越大，创建的inode就越少。这个值一般不应该小于文件系统的块大小，因为在这种情况下，将产生比以往任何时候都多的inode。在文件系统创建后不可能扩展该文件系统上的inode数，因此要小心确定此参数的正确值。
-I inode-size          # 指定每个inode的大小(以字节为单位)。mke2fs默认创建256字节的inode。在2.6.10之后的内核和一些早期的供应商内核中，可以使用大于128个字节的inode存储扩展属性以提高性能。inode表将消耗，这将减少文件系统中的可用空间，也会对性能产生负面影响。大型inode中存储的扩展属性在旧内核中是不可见的，这样的文件系统将根本无法用2.4内核挂载。在创建文件系统之后，不可能更改此值。
-j                    # 创建ext3文件系统。如果没有指定“-j”选项，则默认日志参数将用于创建存储在文件系统中的适当大小的日志
-J journal-options    # 使用命令行中指定的选项创建ext 3日志。选项是逗号分隔的，可以使用相等号对参数赋值。支持以下两个参数，而且这两个参数只能指定一个。
                      # size=journal-size。指定内部日志的大小，单位是MB。日志的大小必须至少为1024个文件系统块(如果使用1k块，则为1MB，如果使用4k块，则为4MB)，并且可能不超过102，400个文件系统块。
                      # device=external-journal。将文件系统附加到位于指定“external-journal“的日志块设备上，“external-journal“必须已使用以下命令创建：mke2fs -O journal_dev external-journal。请注意，“external-journal“必须具有与新文件系统相同的块大小。此外，虽然支持将多个文件系统附加到单个“external-journal“，但linux内核和e2fsck(8)目前还不支持共享“external-journal“。
-K                    # 保留，不要试图在mkfs时丢弃块
-l filename           # 从文件中读取磁盘坏块信息。注意，必须使用mke2fs使用的块大小来生成坏块列表中的块号。因此，mke2fs的-c选项是一种简单得多且不容易出错的方法，用于在格式化磁盘之前检查是否存在错误块，因为mke2fs将自动将正确的参数传递给坏块程序。
-L new-volume-label   # 设置文件系统卷标，卷标最大16个字节
-m reserved-blocks-percentage  # 指定为超级用户保留的文件系统块的百分比。这样可以避免碎片，并允许root有用的守护进程(如syzabd(8)在非特权进程被阻止写入文件系统后继续正确运行。默认百分比为5%。
-M last-mounted-directory  # 设置文件系统最后的挂载目录。一些实用程序可以从上一次挂载目录中选择键，以确定文件系统应该安装在何处。
-n                    # 不创建文件系统，而是演示创建文件系统时该怎么做
-N number-of-inodes   # 重写应为文件系统保留的inode数量的默认值。
-o creator-os         # 重写文件系统的“creator operating system”字段的默认值。默认情况下，creator字段设置为mke2fs编译出的操作系统的名称。
-O feature[,...]      # 创建具有给定功能的文件系统(文件系统选项)，覆盖默认的文件系统选项。默认情况下启用的特性由base_features关系指定，或者在/etc/mke2fs.conf配置文件中的[defaults]部分中指定，或者在-T选项指定的用法类型的[fs_type]子节中指定，并由文件系统的[fs_types]子节中的特性关系进一步修改使用类型。
                      # 文件系统特性集将使用此选项指定的特性集进行进一步编辑，或者如果未给出此选项，则由正在创建的文件系统类型的default_features关系进行编辑，或者在配置文件的[defaults]部分中进行编辑。
                      # 文件系统功能集由一系列要启用的以逗号分隔的特性组成。要禁用一个功能，只需在特征名前加上插入符号(‘^’)。伪文件系统功能“none”将清除所有文件系统功能。feature可以是以下内容：
                      #    1）dir_index。使用hashed b-trees来加快大目录中的查找速度
                      #    2）extent。使用间extent块来存储inode中数据块的位置。这是一种更有效的编码，它加快了文件系统的访问速度，特别是对于大型文件。
                      #    3）filetype。将文件类型信息存储在目录条目中。
                      #    4）flex_bg。允许将每个块组元数据(分配位图和inode表)放置在存储介质上的任何位置。此外，mke2fs将每个块组元数据放在每个“flx_bg group”的第一个块组中。可以使用-G选项指定flx_bg组的大小。
                      #    5）has_journal。创建ext 3日志，和“-j”选项一样。
                      #    6）journal_dev。在给定设备上创建外部ext 3日志，而不是常规ext 2文件系统。
                      #    7）large_file。文件系统可以包含大于2GB的文件。(创建文件>2GB时，现代内核会自动设置此特性。)
                      #    8）resize_inode。保留空间，这样块组描述符表在将来可能会增长。对于使用regze2fs在线调整大小很有用。默认情况下，mke2fs将尝试预留足够的空间，以便文件系统可以增长到其初始大小的1024倍。
                      #    9）sparse_super。创建一个较少SuperBlock备份的文件系统（在大型文件系统上节省空间）。
                      #    10）uninit_bg。在不初始化所有块组的情况下创建一个文件系统。这个特性还允许校验和功能，以及每个块组中highest-inode-used统计信息。这个特性可以显著加快文件系统的创建时间(如果启用了lazable_init)，还可以大大减少e2fsck的时间。它只受最近Linux内核中的ext 4文件系统的支持。
-q                    # 静默执行，通常用在脚本文件中。
-r revision           # 为新的文件系统设置文件系统修订号。
-S                    # 只写超级块和组描述符。如果所有的超级块和备份超级块都损坏了，并且需要一种最后的恢复方法，这是很有用的。它导致mke2fs重新初始化超级块和组描述符，同时不触及inode表、块和inode位图。e2fsck程序应该在使用此选项后立即运行，并且无法保证任何数据都是可挽救的。使用此选项时指定正确的文件系统块大小至关重要，否则不可能恢复。
-t fs-type             # 指定文件系统类型，默认ext2。此选项根据“/etc/mke2fs.conf(5)”中的fstypes配置节控制默认使用哪些文件系统选项
                        #如果使用“-O”选项显式地添加或删除应该在新创建的文件系统中设置的文件系统选项，则所请求的fs-type可能不支持所产生的文件系统。(例如，“mke2fs -t ext3 -O extents /dev/sdXX”将创建一个不受ext3实现支持的文件系统。 “"mke2fs -t ext3 -O^has_journal /dev/hdXX”将创建一个没有日志的文件系统，因此Linux内核中的ext 3文件系统代码将不支持该文件系统。)
-T usage-type[,...]    # 指定文件系统的使用方式，以便mke2fs可以选择最佳的文件系统参数。所支持的usage-type在配置文件“/etc/mke2fs.conf(5)”中定义。用户可以使用逗号分隔列表指定一个或多个usage-type。
-U                    # 用指定UUID创建系统
-v                    # 显示详细执行过程

-V                               # 显示命令版本信息
```
## 举例
创建ext2文件系统
``` bash
[root@localhost ~]$ mknod /dev/sdb4 b 1 1      //创建一个设备 

[root@localhost ~]$ mke2fs /dev/sdb4          //创建文件系统，没有指定类型，默认是ext2
mke2fs 1.41.12 (17-May-2010)
文件系统标签=
操作系统:Linux
块大小=1024 (log=0)
分块大小=1024 (log=0)
Stride=0 blocks, Stripe width=0 blocks
4096 inodes, 16384 blocks
819 blocks (5.00%) reserved for the super user
第一个数据块=1
Maximum filesystem blocks=16777216
2 block groups
8192 blocks per group, 8192 fragments per group
2048 inodes per group
Superblock backups stored on blocks:
    8193
正在写入inode表: 完成
Writing superblocks and filesystem accounting information: 完成
This filesystem will be automatically checked every 26 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
[root@localhost ~]$ mount /dev/sdb4 /media/disk   #将文件系统挂载
[root@localhost ~]$ df –T     #查看已经使用的文件系统
Filesystem                   Type    1K-blocks     Used Available Use% Mounted on
/dev/mapper/VolGroup-lv_root ext4     25552764 13250844  11003900  55% /
tmpfs                        tmpfs      829656      268    829388   1% /dev/shm
/dev/sda1                    ext4       495844    32996    437248   8% /boot
/dev/sr0                     iso9660     56618    56618         0 100% /media/VBox_GAs_5.2.18
/dev/sdb1                    vfat        15863      140     14904   1% /media/disk
/dev/sdb4                    ext2        15863      140     14904   1% /media/disk         #可以看到这里是ext2类型的
```
