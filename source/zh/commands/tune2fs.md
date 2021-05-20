# tune2fs - tune2fs允许系统管理员在Linux ext2、ext3或ext4文件系统上调整各种可调的文件系统参数

tune2fs允许系统管理员在Linux ext2、ext3或ext4文件系统上调整各种可调的文件系统参数。这些选项的当前值可以使用-l选项显示，也可以通过使用dumpe2fs (8)程序显示。

# pwd - 显示当前工作目录

查看用户当前的工作目录，输出完整路径。

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
tune2fs  [选项]  device
tune2fs  [ -l ]  [ -c max-mount-counts ]  [ -e errors-behavior ]  [ -f ]  [ -i interval-between-checks ]  [ -j ]  
         [ -J journal-options ]  [ -m reserved-blocks-percentage ]  [-o  [^]mount-options[,...]  ]  [ -r reserved-blocks-count ]  
         [ -s sparse-super-flag ]  [ -u user ]  [ -g group ]  [ -C mount-count ]  [ -E extended-options ]  [  -L  volume-name  ]
         [  -M  last-mounted-directory  ]  [ -O [^]feature[,...]  ]  [ -T time-last-checked ]  [ -U UUID ]  device
```

## 选项

``` bash
-l                     # 显示设备的详细信息
-c max-mount-counts    # 检查文件系统之前，调整最大挂载次数。如果最大挂载计数为0或-1，e2fsck(8)和内核将忽略文件系统的挂载次数。如果对强制检查文件系统的挂载计数，将避免在使用日志文件系统时一次检查所有文件系统。
-C mount-count         # 设置文件系统的挂载次数，如果设置为比-c选项设置的max-mount-counts参数更大的值，e2fsck(8)将在下次重新启动时检查文件系统。
-e error-behavior      # 当检测到错误时，更改内核代码的行为。在任何情况下，文件系统错误都会导致e2fsck(8)在下一次引导时检查文件系统。错误行为可以是下列行为之一：
                       # - continue，继续执行正常执行。
                       # - remount-ro，重新以只读的方式挂载。
                       # - panic，产生kernel panic。
-E extended-options    # 为文件系统设置扩展选项。扩展选项是逗号分隔的，可以使用相等号(‘=’)符号进行参数化。支持下列扩展选项：
                       # - stride=stride-size，为RAID数组配置具有步长文件系统块的文件系统。这是在移动到下一个磁盘之前读取或写入磁盘的块数。这主要影响文件系统元数据(如位图)在mke2fs(2)时间的放置，以避免将它们放置在单个磁盘上，这可能会损害性能。它也可以被块分配器使用。
                       # - stripe_width=stripe-width，为RAID数组配置文件系统，每条带宽的文件系统块。这通常是stride-size *N，其中N是RAID中数据磁盘的数目(例如RAID 5 N+1，RAID 6 N+2)。这允许块分配器在写入数据时防止对RAID条中的奇偶性进行读-修改-写入(如果可能的话)。
                       # - hash_alg=hash-alg，设置用于具有散列b树目录的文件系统的默认哈希算法。接受的有效算法有：legacy、half_md4和tea。
                       # - mount_opts=mount_option_string，设置一组默认的挂载选项，这些选项将在挂载文件系统时使用。与使用-o选项指定的基于位掩码的默认挂载选项不同，mount_option_string是最大长度为63字节的任意字符串，存储在超级块中。ext 4文件系统驱动程序将首先应用基于位掩码的默认选项，然后在解析从mount (8)程序传递的挂载选项之前解析mount_option_string。此超级块设置仅在2.6.35以上内核中执行，而ext2和ext3文件系统驱动程序则完全不执行。
                       # - test_fs，在文件系统超级块中设置一个标志，指示可以使用试验性内核代码(如ext4dev文件系统)挂载它。
                       # - ^test_fs，清除test_fs标志，指示仅使用production-level文件系统代码挂载文件系统。
-f                     # 强制执行。当从具有外部日志的文件系统(或损坏到似乎有外部日志)而外部日志不可用的文件系统中删除Has_Journal文件系统特性时，此选项非常有用。
-g group               # 设置可以使用保留文件系统块的组。group参数可以是数值gid或组名。如果给定组名，则在将其存储在超级块之前，将其转换为数字gid。
-i  interval-between-checks[d|m|w] # 调整两个文件系统检查之间的最大时间。没有后缀或d将数字间隔检查解释为天，m为月，w为周.值为零将禁用与时间相关的检查。强烈建议启用-c(mount-count-dependent)检查或-i(time-dependent)检查，以强制对文件系统进行定期完整的e2fsck(8)检查。如果不这样做，可能会导致文件系统损坏(由于磁盘、电缆、内存或内核错误)而忽略，最终导致数据丢失或损坏。
-j                     # 向文件系统添加ext3日志，如果没有指定-J选项，则将使用默认日志参数来创建存储在文件系统中的适当大小的日志(给定文件系统的大小)。请注意，您必须使用具有ext3支持的内核才能实际使用日志。
                       # 如果此选项用于在已安装的文件系统上创建日志，则将在文件系统的顶层目录中创建一个不可变的文件，即日志，因为它是在安装文件系统时创建日志inode的唯一安全方法。虽然ext 3日志是可见的，但在安装文件系统时删除它或修改它是不安全的；因此，文件被标记为不可变。在检查未挂载的文件系统时，e2fsck(8)将自动将.Journal文件移动到不可见的保留日志inode。对于除根文件系统以外的所有文件系统，这应该在下一个重新启动周期中自动和自然地发生。由于根文件系统是只读安装的，因此必须从救援软盘上运行e2fsck(8)才能完成此转换。
-J journal-options     # 重写默认ext 3日志参数。日记选项是逗号分隔的，可以使用相等号(‘=’)符号进行参数化。支持下列日志选项：
                       # - size=journal-size，创建一个存储在文件系统中的日志，大小journal-size。日志的大小必须至少为1024个文件系统块(如果使用1k块，则为1MB；如果使用4k块，则为4MB)。并且可能不超过102，400个文件系统块。文件系统中必须有足够的空闲空间来创建这样大小的日志。
                       # - device=external-journal，将文件系统附加到位于外部日志上的日志块设备上。外部日志必须已使用以下命令创建“mke2fs  -O  journal_dev  external-journal”。注意，外部日志必须与将要使用的文件系统以相同的块大小进行格式化。此外，虽然支持将多个文件系统附加到单个外部日志，但Linux内核和e2fsck(8)目前还不支持共享外部日志。除了直接指定设备名称之外，还可以通过LABEL=label或UUID=UUID指定外部日志，以便通过存储在日志开头的ext2超级块中的卷标签或UUID来定位外部日志。使用dupe2fs(8)显示日志设备的卷标签和UUID。
                       # - size和device只能有一个。
-L volume-label        # 设置文件系统卷标。ext2文件系统标签最多可以长达16个字符；如果卷标签超过16个字符，tune2fs将截断它并打印警告。卷标签可由mount(8)、fsck(8)和/etc/fstab(5)(可能还有其他)使用，方法是指定LABEL=volume_label，而不是/dev/hda 5这样的块特殊设备名。
-m  reserved-blocks-percentage # 设置只能由特权进程分配的文件系统百分比。保留一些文件系统块以供特权进程使用是为了避免文件系统碎片，并允许系统守护进程(如syAdd.1-d(8)在非特权进程被阻止写入文件系统之后继续正确运行。通常，保留块的默认百分比是5%。
-M last-mounted-directory  # 设置最后的挂载目录
-o [^]mount-option[,...]   # 在文件系统中设置或清除指定的默认挂载选项。默认的挂载选项可以被“/etc/fstab”(5)中指定的挂载选项覆盖，也可以在命令行参数上覆盖mount(8)。旧内核可能不支持此特性；特别是，在2.4.20之前的内核几乎肯定会忽略超级块中的默认挂载选项字段。可以通过用逗号分隔功能来清除或设置多个挂载选项。以插入字符(‘^’)为前缀的挂载选项将在文件系统的超级块中清除；没有前缀字符的挂载选项或以‘+’作为前缀的挂载选项将添加到文件系统中。可以使用tune2fs设置或清除下列挂载选项：debug，bsdgroups，user_xattr，acl，uid16，journal_data，journal_data_ordered，journal_data_writeback，nobarrier，block_validity，discard，nodelalloc
-O [^]feature[,...]       # 设置或清除文件系统中指定的文件系统特性(选项)。多个文件系统特性可以通过用逗号分隔特性来清除或设置。以插入字符(‘^’)为前缀的文件系统特性将在文件系统的超级块中清除；没有前缀字符或前缀为‘+’的文件系统特性将添加到文件系统中。可以使用tune2fs设置或清除下列文件系统特性：dir_index，filetype，flex_bg，has_journal，large_file，resize_inode，sparse_super，uninit_bg。
-r reserved-blocks-count   # 设置保留文件系统块的数目
-T time-last-checked       # 使用e2fsck设置上次检查文件系统的时间。时间使用当前(本地)时区进行解释。这在使用逻辑卷管理器对文件系统进行一致快照的脚本中很有用，然后在空闲时间检查文件系统，以确保它没有因为硬件问题而损坏，等等。如果文件系统是干净的，那么这个选项可以用来设置原始文件系统上的最后一次检查时间。最后一次检查的格式是国际日期格式，有一个可选的时间说明符，即YYYYMMDD[HH[MM[SS]。关键字Now也被接受，在这种情况下，上一次检查时间将设置为当前时间。
-u user               # 设置可以使用保留文件系统块的用户。用户可以是uid或用户名。如果给定用户名，则将其转换为数字uid，然后将其存储在超级块中。
-U UUID               # 将文件系统的通用唯一标识符(UUID)设置UUID。UUID的格式是由连字符分隔的一系列十六进制数字，如“c1b9d5a2-f162-11cf-9ece-0020afc76f16”。UUID参数也可能是以下内容之一：
                      # - clear，清除UUID。
                      # - random，产生一个随机的UUID。
                      # - time，产生一个基于时间的UUID。
```
## 举例
查看sdb4的详细信息
``` bash
[root@localhost ~]$ tune2fs -l /dev/sdb4
tune2fs 1.41.12 (17-May-2010)
Filesystem volume name:   hello
Last mounted on:          <not available>
Filesystem UUID:          e2a0cb30-f3ca-47de-92b8-780296960d93
…
First inode:              11
Inode size:             128
Default directory hash:   half_md4
Directory Hash Seed:      4930bf0f-771e-4940-9255-bee40d138079
```
设置最大挂载次数
``` bash
[root@localhost ~]$ tune2fs -c 30 /dev/sdb4   #设置最大挂载次数
tune2fs 1.41.12 (17-May-2010)
Setting maximal mount count to 30
You have new mail in /var/spool/mail/root
[root@localhost ~]$ tune2fs -l /dev/sdb4      #查看详细信息
tune2fs 1.41.12 (17-May-2010)
Filesystem volume name:   hello
Maximum mount count:      30                  #最大挂载次数已经修改为30
Directory Hash Seed:      4930bf0f-771e-4940-9255-bee40d138079
[root@localhost ~]$    
```