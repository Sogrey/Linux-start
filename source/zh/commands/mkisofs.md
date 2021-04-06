# mkisofs - 建立ISO 9660映像文件

mkisofs命令 用来将指定的目录与文件做成ISO 9660格式的映像文件，以供刻录光盘。

mkisofs指令可以创建ISO9660/Joliet/HFS文件系统，现在使用指令genisoimage代替它。genisoImage是一个预掌握程序，用于生成iso 9660/joliet/hfs混合文件系统。

genisoImage能够生成由Rock Ridge交换协议指定的系统使用共享协议记录(SUSP)，用于向unix主机进一步描述iso 9660文件系统中的文件，并提供诸如长文件名、UID/GID、POSIX权限、符号链接以及块和字符设备文件等信息。如果指定Joliet或HFS混合命令行选项，genisoImage将创建Joliet或HFS所需的附加文件系统元数据，否则genisoImage将生成纯ISO 9660文件系统。

genisoImage可以生成真正的(或共享的)HFS混合文件系统。这些文件从Macintosh访问时被视为HFS文件，从其他机器访问时被视为ISO 9660文件。HFS代表分层文件系统，是在Macintosh计算机上使用的本机文件系统作为替代，genisoImage可以为每个文件生成对ISO 9660的Apple扩展。当从Macintosh访问时，这些扩展为每个文件提供创建者、类型和某些Finder标志。请参阅下面的HFS Macintosh文件格式部分。

genisoImage获取给定目录树的快照，并生成二进制映像，当写入块设备时，该图像将对应于iso 9660和/或hfs文件系统。

写入iso 9660文件系统的每个文件都必须有一个8.3格式的文件名(最多8个字符.最多3个字符，全部大写)，即使Rock Ridge正在使用。这个文件名用于无法使用Rock Ridge扩展名的系统(如MS-DOS)，每个目录中的每个文件名必须与每个目录中的文件名不同。genisoImage通常试图通过强制unix文件名大写并根据需要截断而形成正确的名称，但当截断的名称并不都是唯一时，这通常会产生不满意的结果。genisoImage为每个文件名分配权重，如果找到两个其他相同的名称，则将优先级较低的名称重命名为包含一个3位数的数字(保证是唯一的)。例如，两个文件“foo.bar”和“foo.bar.~1~”可以呈现为“FOO.BAR；1“和”FOO000.bAR；1“

当与各种HFS选项一起使用时，genisoImage将尝试识别存储在多个Apple/Unix文件格式中的文件，并复制数据和资源派生以及任何相关的Finder信息。有关genisoImage支持的更多信息，请参见下面的HFS Macintosh文件格式部分。

请注意，genisoImage的设计并不是为了直接与作者通信。大多数编写人员都有专有的命令集，每个制造商的不同，您需要一个专门的工具才能真正地刻录盘。WODIM就是这样的工具之一。

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
mkisofs  [选项]  [-o file.iso]  srcfile
genisoimage  [options]  [-o filename]  pathspec  [pathspec ...]
```

pathspec是要复制到iso 9660文件系统中的目录树的路径。可以指定多个路径，genisoImage将所有指定路径组件中的文件合并成文件系统映像。

如果指定了“-graft-points “选项，则可以在root目录以外的点嫁接路径，也可以将文件或目录移植到CDRom映像上，并且源文件系统中的名称可以不同。我们首先假设存在一个本地文件”./old.lis“，并且希望将它包含在CDROM映像中。语句

foo/bar/=../old.lis

可以使”/foo/bar/old.lis“的CDROM映像中包括”old.lis“。而语句

foo/bar/xxx=../old.lis

可以使”/foo/bar/xxx“的CDROM映像中包括”old.lis“。同样的语法也可以与目录一起使用。genisoImage将创建任何目录，以满足CDROM映像上存在嫁接点的需求。默认情况下，像这样动态创建的任何目录都具有权限0555，被genisoimage的运行者拥有。如果您希望其他权限或中间目录的所有者，请参阅-uid, -gid, -dir-mode, -file-mode and -new-dir-mode。

## 选项

``` bash
-abstract  file          # 设置摘要文件名称，可以有37个字符
-A  AppId                # 指定描述光盘应用程序Id的文本字符串，可以有128个字符
-allow-limited-size      # 当处理不能在ISO 9660中容易表示的大于2GiB的文件时，用缩小的可见文件大小将它们添加到ISO 9660，并将正确的可见文件大小添加到UDF系统。结果是一个不一致的文件系统，用户需要确保他们真的使用UDF而不是ISO 9660驱动程序来读取这样的磁盘。意味着启用-UDF。
-allow-leading-dots-ldots # 允许ISO 9660文件名以句点开始。通常，为了保持MS-DOS的兼容性，使用下划线替换前导点。这违反了ISO 9660标准，但它恰好适用于许多系统。小心使用。
-allow-lowercase          # 允许iso9660文件名中出现小写字母。这违反了ISO 9660标准，但它恰好适用于某些系统，谨慎使用。
-allow-multidot           # 允许iso9660文件名中出现多个点。引导点不受此选项的影响，可以单独使用“-allow-leading-dots”，这违反了ISO 9660标准，但它恰好适用于许多系统。小心使用。
-biblio file             # 指定书目文件名。有37个字符的空间。等效于“.genisoImagerc”文件中的BIBL。
-cache-inodes            # 
-no-cache-inodes         # 启用或禁用inode缓存和以设备号查找指向文件的硬链接。如果genisoImage找到一个硬链接(具有多个名称的文件)，该文件也将在cd上被硬链接，因此文件内容只显示一次。这有助于节省空间。类似Unix的操作系统，但在Cygwin等其他系统上默认使用非缓存inode，因为在这些系统上假定inode编号唯一是不安全的。(某些版本Cygwin使用弱散列算法创建假inode编号，这可能会产生重复。)如果两个文件有相同的inode号，但不是同一个文件的硬链接，“genisoImage -cache-indes”的行为将不正确。“-no cache-inode”在所有情况下都是安全的，但在这种情况下genisoImage无法检测硬链接，因此所产生的cd映像可能比所需的要大。
-alpha-boot alpha _boot_image # 指定在制作Alpha/SRM可引导CD时使用的引导映像的路径和文件名。路径名必须相对于指定给genisoimage的源路径。
-hppa-bootloader  hppa_bootloader_image # 指定在制作HPPA可引导CD时使用的引导映像的路径和文件名。路径名必须相对于指定给genisoImage的源路径。还需要其他选项，至少需要一个内核文件名和一个引导命令行。
-hppa-cmdline  hppa_boot_command_line # 指定在制作可引导CD时要传递给HPPA引导加载程序的命令行。用空格或逗号分隔参数。必须将更多选项传递给genisoImage，至少要传递一个内核文件名和引导加载程序文件名。
-hppa-kernel-32  hppa_kernel_32 #
-hppa-kernel-64  hppa_kernel_64 # 指定在制作HPPA可引导CD时使用的32位和/或64位内核映像的路径和文件名。路径名必须相对于指定给genisoImage的源路径。还需要其他选项，至少引导加载程序文件名和引导命令行。
-hppa-ramdisk  hppa_ramdisk_image # 指定在制作HPPA可引导CD时使用的ramdisk映像的路径和文件名。路径名必须相对于指定给genisoImage的源路径。此参数是可选的。还需要其他选项，至少需要一个内核文件名和引导命令行。
-mips-boot  mips_boot_image # 指定在生成SGI/大端MIPS可引导CD时使用的引导映像的路径和文件名。路径名必须相对于指定给genisoImage的源路径。可以多次指定此选项，以存储最多15个引导映像。
-mipsel-boot  mipsel_boot_image # 指定制作DEC/小端MIPS引导映像的路径和文件名。路径名必须相对于指定给genisoImage的源路径。
-b eltorito_boot_image  # 指定在为x86 PC制作EL Torito可引导CD时使用的引导映像的路径和文件名。路径名必须相对于为genisoImage指定的源路径。此选项是制作El Torito可引导CD所必需的。引导映像必须精确地为1200 kB、1440 kB或2880 kB，当创建iso 9660文件系统时，genisoImage将使用此大小。pc BIOS将使用该映像来模拟软盘，因此第一个512字节扇区应该包含pc引导代码。
                        # - 如果引导映像不是软盘映像，则需要添加“-hard-disk-boot”或“-no-emul-boot.”。如果系统不应该从模拟磁盘启动，则使用“-no-boot”。
                        # - 如果未指定“-sort”，则引导映像将以低优先级(2)排序到介质的开头。如果您不喜欢这种情况，则需要为引导映像指定0的排序权重。
-B img_sun4,img_sun4c,img_sun4m,img_sun4d,img_sun4e #
-sparc-boot img_sun4,img_sun4c,img_sun4m,img_sun4d,img_sun4e # 设置引导文件名，img_sun4,img_sun4c,img_sun4m,img_sun4d,img_sun4e。
                           # - 指定为SPARC系统制作可引导cd所需的逗号分隔的引导映像列表。分区0用于iso 9660映像，第一个映像文件映射到分区1。以逗号分隔的列表最多可能有7个字段，包括空字段。此选项是为Sun制作可引导cd所必需的。如果-B或-SPARC-引导已指定，则生成映像的第一个扇区将包含一个Sun磁盘标签。此磁盘标签为ISO 9660映像指定片0，为用此选项指定的引导映像指定切片1至7。每个附加引导映像中的字节偏移量512到8191必须包含适合于适当的SPARC体系结构的主引导。每个映像的其余部分通常包含一个用于主内核引导阶段的ufs文件系统。
                           # - 实现的引导方法是在SunOS4.x和SunOS5.x中找到的。但是，它不依赖于SunOS内部，而只依赖于OpenBootprom的属性，因此它应该可以用于任何用于SPARC系统的操作系统。
                           # - 如果指定了文件名，则将实际的和下面的所有引导分区映射到前一个分区。如果使用-G映像-B调用genisoImage，所有引导分区都映射到包含iso 9660文件系统映像的分区，而位于磁盘前16个扇区的通用引导映像用于所有体系结构。
-G  generic_boot_image     # 指定在制作通用可引导cd时使用的引导映像的路径和文件名。引导映像将放置在cd的前16个扇区上，位于iso 9660主卷描述符之前。如果此选项与-sparc-boot一起使用，则Sun磁盘标签将覆盖泛型引导映像的前512字节。
-eltorito-alt-boot         # 从一组新的El Torito启动参数开始。最多63个El Torito引导项可以存储在一张CD上。
-hard-disk-boot            # 指定用于创建El Torito可引导CD的引导映像是硬盘映像。映像必须以包含单个分区的主引导记录开始。
-no-emul-boot              # 指定用于创建El Torito可引导cd的引导映像是“无仿真”映像。系统将在不执行任何磁盘模拟的情况下加载和执行此映像。
-no-boot                   # 指定应将创建的El Torito CD标记为不可引导。系统将提供一个模拟驱动器的图像，但将启动一个标准的启动设备。
-boot-load-seg  segment_address # 指定非模拟El Torito cd的引导映像的加载段地址
-boot-load-size  load_sectors   # 指定在非模拟模式下加载的“虚拟”(512字节)扇区的数量。默认情况是加载整个引导文件。如果不是4的倍数，一些BIOSes可能会出现问题。
-boot-info-table                # 指定在引导文件中的偏移量8处修补一个56字节的表，其中包含CD-ROM布局的信息。如果提供此选项，则启动文件将在源文件系统中被修改，因此，如果无法轻松重新生成该文件，请创建该文件的副本！有关此表的说明，请参阅El Torito启动信息表部分。
-C  last_sess_start,next_sess_start  # 此选项需要为多会话磁盘创建一个额外的CD或第二个会话或更高级别会话的图像。“-C”需要两个数字，用逗号分隔。第一个是应该附加到的磁盘最后一个会话中的第一个扇区。第二个是新会话的起始扇区号。正确的编号可以通过调用“wodin-msinfo”得到。如果-“C”与“-M”一起使用，genisoImage将创建一个文件系统映像，该映像将作为上一次会话的延续。如果使用“-C”而不使用“-M”，genisoImage将创建一个文件系统映像，用于CD额外的第二次会话。这是一个多会话cd，在第一个会话中保存音频数据，在第二个会话中保存iso 9660文件系统。
-c  boot_catalog          # 指定引导目录的路径和文件名，这是El Torito可引导CD所必需的。路径名必须相对于指定给genisoImage的源路径。此文件将插入到输出树中，而不是在源文件系统中创建，因此请确保指定的文件名不与现有文件冲突，否则将被排除。通常选择一个像“boot.Catalog”这样的名称。
                          # - 如果未指定“-sort”，则引导目录以低优先级(1)排序到介质的开头。如果您不喜欢这种情况，则需要为引导目录指定0的排序权重。
-check-oldnames           # 检查从旧会话导入的所有文件名是否符合iso 9660文件命名规则。如果没有此选项，只检查超过31个字符的名称，因为这些文件严重违反iso 9660标准。
-check-session  file      # 检查所有旧会话是否符合实际的genisoImage iso 9660文件命名规则。这是一个高级选项，它结合了“-M  file  -C  0,0  -check-oldnames”
-copyright  file          # 指定版权信息，通常是光盘上的文件名。有37个字符的空间。相当于在“.genisoImagerc”文件中复制。
-d                        # 不要将句点附加到没有句点的文件中。这违反了ISO 9660标准，但它恰好适用于许多系统。小心使用。
-D                        # 不要使用深度目录重新定位，而是按我们看到的方式打包它们。如果未选择iso 9660：1999，则违反iso 9660标准，但它恰好适用于许多系统。
-dir-mode  mode           # 重写用于创建镜像的目录mode，指定为chmod(1)中权限位的4位数字。
-dvd-video                # 生成一个符合DVD视频的UDF文件系统.这是通过排序适当文件的内容顺序和在需要时在文件之间添加填充来实现的。注意，只有当DVD视频文件名只包含大写字符时，排序才能工作。          
                          # 注意，为了获得符合dvd视频的文件系统映像，您需要准备一个符合dvd视频的目录树，这需要生成dvd的根目录中包含目录VIDEO_TS和AUDIO_TS(所有大写)。VIDEO_TS需要包含视频文件系统的所有所需文件(文件名必须为所有大写)。
-f                        # 在生成文件系统时遵循符号链接。当这个选项没有使用时，符号链接将使用Rock Ridge，如果Rock Ridge也没有启用，那么它们将被忽略。
-file-mode  mode          # 重写用于创建image的常规文件的模式，使用4位模式
-gid  gid                 # 将从源文件读取的组ID重写为gid的值。指定此选项将自动启用RockRidge扩展
-gui                      # 切换GUI的行为。这使得输出更加冗长，但将来可能会产生其他影响。
-graft-points             # 允许文件名使用嫁接点。如果使用此选项，将检查所有文件名是否有嫁接点。文件名在第一个未转义的等号处被分隔。如果“-graft-points”已经指定，所有出现的‘\’和‘=’字符必须用‘\’转义。
-hide  glob               # 隐藏出现在ISO 9660或Rock Ridge目录中的与shell通配符模式GLOB匹配的任何文件。GLOB可能与文件名或路径的任何部分匹配。如果GLOB匹配某个目录，则该目录的内容将被隐藏。为了匹配目录名，请确保路径名不包括尾随“/‘字符。所有隐藏文件仍将写入输出CD映像文件。请参见-Hided-Joliet和README.Hide。此选项可多次使用。
-hide-list  file          # 包含要隐藏的shell通配符列表的文件
-hidden  glob             # 为匹配GLOB的文件和目录添加隐藏(存在)ISO 9660目录属性，这是一个shell通配符模式。该属性将防止文件被某些MS-DOS和Windows命令显示。GLOB可能匹配文件名或路径的任何部分。‘/’字符。此选项可多次使用
-hidden-list  file        # 包含获取隐藏属性的shell通配符列表的文件
-hide-joliet  glob        # 隐藏在Joliet目录中看到的与shell通配符模式GLOB匹配的文件和目录。GLOB可能匹配文件名或路径的任何部分。如果GLOB匹配某个目录，则该目录的内容将被隐藏。为了匹配目录名，请确保路径名不包括尾随的“/‘字符。所有隐藏文件仍将写入输出CD映像文件。此选项通常与-Hide一起使用。请参见README.Hide。此选项可多次使用。
-hide-joliet-list  file   # 包含要向Joliet树隐藏的shell通配符列表的文件。
-hide-joliet-trans-tbl    # 将TRANS.TBL文件隐藏在Joliet树中。这些文件在Joliet世界中通常没有意义，因为它们列出了真实名称和ISO 9660名称，这两者都可能与Joliet名称不同。
-hide-rr-moved            # 将RockRidge树中目录“RR_MOVED”的“.rr_move”目。这样似乎不可能完全将“RR_MOVED”目录隐藏在Rock Ridge树中。此选项只会使不知道该目录的人更容易混淆可见树。如果你不需要“RR_MOVED“目录，那么使用“-D”选项。请注意，如果指定了-D，则生成的文件系统不符合ISO 9660 level-1，在MS-DOS上也无法读取。
-input-charset  charset   # 定义本地文件名中使用的输入字符集。要获得有效字符集名称的列表，请调用“genisoImage-put-charset”获取帮助。要获得1：1的映射，可以使用默认值作为字符集名称。默认初始值在DOS系统上为cp 437，在所有其他系统上为iso 8859-1。有关详细信息，请参阅下面的字符集部分。
-output-charset  charset  # 定义Rock  Ridge文件名中将使用的输出字符集，默认为输入字符集。有关详细信息，请参阅下面的字符集部分。
-iso-level  level         # 设置ISO 9660一致性级别。有效数字是1到4。
                          # - 对于第1级，文件只能由一个部分组成，文件名限制为8.3类型。
                          # - 对于第2级，文件只能由一个部分组成。
                          # - 对于第三级，没有任何限制 (ISO-9660：1988除外)。
                          #   所有ISO 9660级别从1到3，所有文件名仅限于大写字母、数字和下划线(_)。文件名限制为31个字符，目录嵌套限制为8个级别，路径名限制为255个字符。
                          # - 级别4正式不存在，但genisoImage将其映射到ISO-9660：1999，这是ISO 9660版本2。
                          #   使用第4级时，增强型卷描述符的版本号和文件结构的版本号设置为2。目录嵌套不限于8级，不需要文件包含点，点没有特殊意义，文件名没有版本号，文件名最长可达207个字符，如果使用Rock Ridge，文件名可达197个字符。
                          # 创建第2版image时，genisoImage会发出一个增强的卷描述符，与主卷描述符相似但不完全相同。请注意不要使用损坏的软件通过假设第二个PVD副本并将这个假定的PVD副本修补为El Torito VD，从而使ISO 9660图像可引导。
-J                        # 除了正常的ISO 9660文件名之外，还生成Joliet目录记录。在Windows机器上使用光盘时，这是有用的。Joliet文件名是在Unicode编码，每个路径组件最多可以有64个Unicode字符。注意，Joliet不是标准的-只有Microsoft Windows和Linux系统才能读取Joliet扩展。要获得更好的可移植性，请同时考虑使用Joliet和Rock Ridge扩展。
-joliet-long              # 允许Joliet文件名最多为103个Unicode字符，而不是64个字符。这违反了Joliet规范，但似乎有效。谨慎使用。
-jcharset  charset        # “-J -input-charset charset”的组合。
-l                        # 允许完整的31个字符的文件名。通常iso 9660文件名将采用与MS-DOS兼容的8.3格式，尽管iso 9660标准允许最多31个字符的文件名。如果使用此选项，光盘可能很难在MS-DOS系统上使用，但会在大多数其他系统上使用。请谨慎使用。
-L                        # 过时的选项，使用“-allow-leading-dots”代替。
-jigdo-jigdo  jigdo_file  # 生成一个jigdo.jigdo元数据文件以及文件系统映像。
-jigdo-template  template_file # 生成一个jigdo.template元数据文件以及文件系统映像。
-jigdo-min-file-size  size  # 指定要在.jigdo文件中列出的文件的最小size。默认值(和最小允许值)为1KB。
-jigdo-force-md5  path      # 指定文件模式，其中文件必须包含在由“-md5-list”提供的externally-sup-plied MD5列表中。
-jigdo-exclude  path        # 指定一个不再“.jigdo”中列出的文件模式
-jigdo-map  path            # 为jigdo文件指定模式映射，例如“Debian=/mirror/debian”
-md5-list  md5_file         # 指定一个文件，这个文件列出了包含在“.jigdo”文件列表中的文件的MD5sum、大小和路径名。
-jigdo-template-compress  algorithm # 指定模板date.gzip和bzip 2当前支持的压缩算法，默认情况是gzip。
-log-file  log_file         # 将所有错误、警告和信息性消息重定向到log_file，而不是标准错误
-m glob                     # 将与shell通配符模式glob匹配的文件排除到CD-ROM。blob可能与文件名组件或完整路径名匹配。此选项可多次使用。例如“genisoimage -o rom -m ’*.o’ -m core -m foobar”，将从image中排除所有以“.o”结尾的文件，或者名为core或foobar的文件。
-exclude-list  file         # 包含要排除的shell通配符列表的文件
-max-iso9660-filenames      # 允许ISO 9660文件名长达37个字符。此选项启用-N，因为额外的名称空间是从为文件版本号保留的空间中提取的。这违反了ISO 9660标准，但它恰好适用于许多系统。虽然符合要求的应用程序需要提供至少37个字符的缓冲区空间，但使用此选项创建的光盘可能会导致读取操作系统中的缓冲区溢出。极其小心地使用
-M  path
-M  device 
-dev  device                 # 指定要合并的现有ISO 9660映像的路径。另一种形式采用SCSI设备说明符，它使用与“dev=  parameter”相同的语法。genisoImage的输出将是一个新的会话，它应该被写入-M中指定的image的末尾，这通常需要用于CD记录器的多会话功能。此选项只能与-C一起使用。
-N                           # 从ISO 9660文件名中省略版本号。这违反了iso 9660标准，但没有人真正使用版本号。
-new-dir-mode  mode          # 指定在文件系统映像中创建新目录时使用的mode，缺省值为0555。
-nobak 
-no-bak                      # 排除ISO 9660文件系统上的备份文件；也就是说，包含字符“~”或“#”或以.bak结尾的文件名。这些文件通常是Unix文本编辑器的备份文件。
-force-rr                    # 不要对以前的会话进行自动的Rock Ridge属性识别。这可以解决由Nero Burning ROM创建的image的问题
-no-rr                       # 不要使用以前会话中的RockRidge属性。这可能有助于避免当genisoImage在旧会话上发现非法的RockRidge签名时出现的问题。
-no-split-symlink-components # 不要拆分符号链接组件，而是开始一个新的连续区域(CE)。这可能会浪费一些空间，但是SunOS 4.1.4和Solaris 2.5.1 CDROM驱动程序在读取拆分的符号链接字段(a‘/’可以删除)时有错误。
-no-split-symlink-fields     # 不要拆分符号链接字段，而是开始一个新的连续区域(CE)。这可能会浪费一些空间，但是SunOS 4.1.4和Solaris 2.5.1 CDROM驱动程序在读取拆分的符号链接字段(a‘/’可以删除)方面有一个错误。
-o filename                  # 指定iso 9660文件系统映像的输出文件。这可以是磁盘文件、磁带驱动器，也可以直接对应光盘写入器的设备名称。如果没有指定，则使用stdout。注意，输出也可以是常规磁盘分区的块设备，在这种情况下，可以使用iso 9660。可以正常安装文件系统，以验证是否正确地生成了文件系统。
-pad                         # 将整个映像的末尾按150个扇区(300 KB)填充。默认启用此选项。如果与-B一起使用，则在ISO 9660分区和引导分区之间插入填充，以便第一个引导分区以16的扇区号开始。当许多操作系统(例如Linux)在其文件系统I/O中实现readahead错误时，就需要填充。这些错误会导致位于磁道末尾附近的文件的读取错误，特别是如果磁盘是在一次模式下以磁道方式写入的，或者在CD音频轨道跟随数据轨道的情况下。
-no-pad                     # 不要将结束部分按150个扇区(300 KB)填充，也不要使引导分区在16个扇区的倍数上启动。
-path-list  file            # 包含要添加到ISO 9660文件系统中的路径规范目录和文件名列表的文件。此路径规范列表是在命令行中出现的任何路径规范之后处理的。如果参数为“-”，则从标准输入读取列表。
-P                          # 过时的操作，参考“-publisher”
-publisher  publisher_id    # 指定要写入卷头的文本字符串。这应该描述CD-ROM的发行者，通常带有邮件地址和电话号码。有128个字符的空间。相当于”.genisoImagerc”文件中的PUBL。
-p  preparer_id             # 指定要写入卷头的文本字符串。这应该描述CD-ROM的发行者，通常带有邮件地址和电话号码。有128个字符的空间。相当于”.genisoImagerc”文件中的PREP。
-print-size                 # 以扇区大小的倍数(2048字节)打印估计的文件系统大小并退出。这个选项是磁盘在一次模式下需要的，并且在某些cd-R驱动器中，当管道pipe进入wodim时，需要提前了解文件系统映像的大小。旧版本的mKisofs将此信息(以及其他信息)写入stderr。由于这是很难解析的，因此没有任何其他信息的数字。如果您想编写一个简单的shell脚本，请重定向stderr并从stdout捕获数字。例如下面的操作
cdblocks=‘ genisoimage -print-size -quiet ... ‘
genisoimage ... | wodim ... tsize=${cdblocks}s -
-quiet                       # 静默模式，只有少量的输出。
-R                           # 使用Rock Ridge协议生成SUSP和RR记录，以进一步描述ISO 9660文件系统上的文件。
-r                           # 这类似于-R选项，但是文件所有权和模式被设置为更有用的值。uid和gid设置为零，因为它们通常只在作者的系统中有用，而对客户端没有用处。所有文件读取位都设置为true，以便在客户端上全局可读文件和目录。如果为文件设置了任何执行位，则设置所有执行位，以便可在客户端上全局执行可执行文件。如果为某个目录设置了任何搜索位，则设置所有搜索位，以便在客户端上对目录进行全局搜索。所有写入位都将被清除，因为在任何情况下，文件系统都将被挂载只读。如果设置了任何特殊模式位，则清除它们，因为文件锁在只读文件系统上是无用的，并且uid 0或gid 0不需要设置id位。在Win 32上使用时，对所有文件都设置执行位。这是Win 32和CygwinPOSIX仿真层缺乏文件权限的结果。
-relaxed-filenames            # 允许ISO 9660文件名包含除小写字母以外的所有7位ASCII字符.这违反了ISO 9660标准，但它恰好适用于许多系统。谨慎使用
-root  dir                    # 当写入多会话映像时，此选项是必需的，而上一次(甚至更早的)会话是用-root dir编写的。使用上一次会话中找不到的目录名将导致genisoImage错误终止。如果没有此选项，genisoImage将无法找到未经修改的文件，并将被迫再次将它们的数据写入映像中。-root和-old-root将一起用于进行增量备份。
-old-root  dir               # -root和-old-root用于一起进行增量备份。初始会话将使用“genisoimage -root backup_1 dirs”，下一次使用“genisoimage -root backup_2 -old-root  backup_1  dirs”将会对这些目录进行另一次快照。第一个快照将在backup_1中找到，第二个快照将在backup_2中找到，但是只需要将修改后的或新的文件写入到第二次会话中。如果没有这些选项，将添加新的文件并保留旧的文件。但是如果文件被修改了，旧的文件就会被覆盖。通过从CD复制整个目录来恢复文件也会还原有意删除的文件。访问一个文件的几个旧版本需要操作系统支持来选择要挂载哪些会话。
-sort  sort_file             # 对媒体上的文件位置进行排序。排序由包含一对文件名和排序偏移加权的文件控制。如果权重较高，则文件将位于更接近媒体开头的位置，如果权重较低，则文件将位于接近媒体末尾的位置。文件名和权重之间必须只有一个空格或制表符，而权重必须是行中的最后一个字符。文件名被视为包含了上面的所有字符，但不包括最后一个空格或制表符。这是为了允许空格字符位于文件名的末尾。此选项不对ISO 9660目录中文件名的顺序进行排序。它对文件数据写入CD映像的顺序进行排序，这对于优化CD上的数据布局非常有用。
-sparc-boot img_sun4,img_sun4c,img_sun4m,img_sun4d,img_sun4e # 参考“-B”
-sparc-label  label           # 为使用“-sparc-boot”创建的Sun磁盘标签设置Sun磁盘标签名。
-split-output                 # 将输出image分割成几个文件，每个文件大约1GB。这有助于在没有大型文件支持的操作系统上创建DVD大小的ISO 9660图像。如果要写入DVD，那么wodim将多个文件连接成一个单一的音轨。要使“-split-output”输出工作，必须指定-o文件名。得到的输出image将命名为：filename_00，filename_01，filename_02。
-stream-media-size            #选择流操作并将媒体大小设置为#扇区。这允许您将tar(1)程序的输出输送到genisoImage，并创建一个ISO 9660文件系统，而不需要中间的tar存档文件。如果指定了此选项，genisoImage将从stdin读取并创建一个名为STREAM.IMG的文件。该文件的最大大小(带填充)比指定的媒体大小200个扇区。如果指定了“-no-pad”，则文件大小比指定的媒体大小50个扇区。如果文件较小，genisoImage将写入填充。这可能需要一段时间。选项流媒体大小只创建简单的ISO 9660文件系统，不能与多会话或混合文件系统选项一起使用。
-stream-file-name  name       # 保留
-sunx86-boot  UFS_img,,,AUX1_img  # 指定为Solaris x86系统制作可引导CD所需的以逗号分隔的文件系统映像列表。请注意，分区1用于iso 9660映像，分区2是整个磁盘，因此分区1和分区2不能被外部分区数据使用。第一个image文件映射到分区0。逗号分隔的列表中可能有空字段，分区1和2的列表条目必须为空。所支持的分区的最大数目为8个(尽管Solaris x 86分区表最多可支持16个分区)，因此不可能指定超过6个分区映像。要为Solaris x 86系统制作可引导CD，则需要此选项。
                            # 如果指定了“-sunx86-boot”，则结果映像的第一个扇区将包含一个带有Solaris类型0x82 fdisk分区的PC fdisk标签，该分区从偏移512开始，覆盖整个cd。此外，对于Solaris类型0x82 fdisk分区，在CD的第一个扇区中有一个位于偏移量1024的SVR 4磁盘标签。为用于引导PC的第一个文件系统映像(通常为UFS类型)指定切片0，为ISO 9660映像指定切片1。片2跨越整个CD，片3~.片7可用于使用此选项指定的其他文件系统映像。
                            # Solaris x86引导CD使用1024字节大小的主引导，它使用ElTorito不模拟引导模式，以及在cd扇区1~15中的第二泛型引导。
-sunx86-label  label        # 为使用-sunx86-boot创建的svr 4磁盘标签设置svr 4磁盘标签名。
-sysid  ID                  # 指定系统ID。有32个字符的空间。相当于“.genisoImagerc”文件中的SYSI。
-T                          # 在CD-ROM上的每个目录中生成一个TRANS.TBL文件，该文件可用于非Rock Ridge系统，以帮助建立正确的文件名。文件中也有指示块和字符设备的主要和次要数字的信息，每个符号链接都有给定链接文件的名称。
-table-name  table_name     # 替代翻译表文件名(见上文)。如果要创建多会话映像，则必须使用与上一次会话相同的名称。
-ucs-level  level           # 在JolietSVD中设置Unicode一致性级别。默认级别为3。可以使用此选项将其设置为1~3
-udf                        # 在生成的文件系统映像中包含UDF文件系统支持。UDF支持目前处于alpha状态，因此无法创建仅UDF的映像。UDF数据结构目前耦合到Joliet结构，因此当前的实现存在许多缺陷。没有UID/GID支持，没有POSIX权限支持，也没有对符号链接的支持。请注意，除了真正的UDF数据结构所需的空间外，UDF浪费了磁盘开头的扇区~20到扇区256的空间。
-uid  uid                   # 将从源文件读取的uid重写。指定此选项将自动启用RockRidge扩展
-use-fileversion            # -use-fileversion选项允许genisoImage使用文件系统中的文件版本号。如果未指定该选项，genisoImage将为所有文件创建一个版本号为1。文件版本是范；1~；32767内的字符串；该选项是VMS上的默认选项。
-U                          # 允许“未翻译”文件名，完全违反了上面描述的ISO 9660标准。允许以下标志：-d -l -N  -allow-leading-dots-relaxed-filenames -allow-lowercase -allow-multidot -no-iso-translate。允许文件名中包含多个“.”字符，以及混合大小写文件名，这在HP-UX上很有用，因为内置的CDF文件系统不识别任何扩展名。使用时要格外小心。
-no-iso-translate           # 不要翻译ISO 9660文件名中无效的字符“#”和“~”。虽然这些字符无效，但Microsoft系统经常使用这些字符。这违反了ISO 9660标准，但它恰好适用于许多系统。谨慎使用
-V  volid                   # 指定要写入主块的卷ID(卷名或标签)。有32个字符的空间。相当于“.genisoImagerc”文件中的VOLI。卷ID被Solaris卷管理器用作挂载点，并作为分配给光盘的标签。
-volset  ID                 # 指定卷集ID。有128个字符的空间。相当于“.genisoImagerc”文件中的VOLS
-volset-size   #            # 将卷集大小设置为#。卷集大小是CD卷集中的CD数。卷集是一个或多个卷的集合，其中记录了一组文件。卷集不打算用于创建一组编号为CD的CD，例如操作系统安装CD集。卷集用于记录不适合单个卷的大目录树。卷集的每个卷都包含对所有目录和记录在序列号小于或等于当前卷的指定卷集大小的卷上的文件。
                            # GenisoImage目前不支持大于1的-volset-size。选项-volset-size必须在每个命令行的-volset-seqno之前指定.
-volset-seqno  #            # 将卷集序列号设置为#。卷集序列号是cd集中当前cd的索引号。选项-volset-size必须在每个命令行的-volset-seqno之前指定。
-v                          # 冗长的执行。如果在命令行上给出两次，则会打印额外的调试信息。
-x  glob                    # 与-m glob相同
-z                          # 为透明压缩的文件生成特殊的RRIP记录。这只是支持透明解压缩的主机(如Linux 2.4.14或更高版本)的用途和兴趣。您必须指定-R或-r来启用Rock Ridge，并在运行genisoImage之前使用mkzftree实用程序生成压缩文件。请注意，透明压缩是一个非标准的Rock Ridge扩展。结果磁盘只有在Linux上才能透明地读取。在其他操作系统上，您需要手动调用mkzftree来解压缩文件。
```

HFS选项

 
``` bash
-hfs                         # 创建ISO 9660/HFS混合CD。此选项应与-map、-magic或下列各种双破折号选项结合使用。
-apple                       # 创建带有Apple扩展的ISO 9660 CD。类似于-hfs，只是添加了对ISO 9660的苹果扩展，而不是创建一个HFS混合卷。以前的genisoImage版本在默认情况下包括Rock Ridge属性，如果“-apple”是指定的。这个版本的genisoImage不再这样做了。如果您希望拥有RockRidge属性，则需要分别指定此属性。
-map  mapping_file           # 使用映射文件根据文件名的扩展名为文件设置创建者并键入文件的信息。只有当文件名不是已知的Apple/Unix文件格式时，才会映射它。请参阅下面的HFS CREATOR/TYPE部分。
-magic  magic_file           # 创建者和类型信息是通过使用文件的magic数字(通常是文件的前几个字节)来设置的。只有当文件不是已知的Apple/unix文件格式，或者文件扩展名尚未使用-map映射时，才会使用magic_file。

-hfs-creator  creator

设置所有文件的默认创建者。一定是4个字符。请参阅HFSCREATOR/TYPE。

-hfs-type  type

设置所有文件的默认类型。必须精确为4个字符。请参阅HFSCREATOR/TYPE。

-probe

搜索所有已知的Apple/Unix文件格式的文件内容。然而，检测MacBinary and AppleSingle文件唯一的方法是打开和读取他们，因此这个选项可能会增加处理时间。如果已知正在使用的Apple/Unix格式，最好使用下面给出的选项

-no-desktop

不要创建(空)桌面文件。当在Macintosh上使用CD时，将创建新的hfs桌面文件。默认情况下，空桌面文件将添加到hfs卷中。

-mac-name

使用HFS文件名作为ISO 9660、Joliet和Rock Ridge文件名的起点。有关更多信息，请参见下面的HFS Macintosh文件名部分。

-boot-hfs-file  driver_file

安装驱动程序文件，使CD可在Macintosh上启动。

-part

生成一个HFS分区表。默认情况下，不生成分区表，但是一些较老的macintosh CD-ROM驱动程序需要CD-ROM上的hfs分区表才能识别混合CD-ROM。

-auto  AutoStart_file

让HFS CD使用QuickTime2.0自动启动功能来启动应用程序或文档。给定的文件名必须是位于CD顶层的文档或应用程序的名称。文件名必须小于12个字符。

-cluster-size  size

以字节为单位设置PC Exchange文件的群集或分配单元的大小。

-hide-hfs  glob

将shell通配符模式GLOB隐藏在HFS卷中。该文件或目录仍然存在于iso 9660和/或Joliet目录中。GLOB可能与文件名的任何部分匹配。可以排除多个全局。例如命令

genisoimage -o rom -hfs -hide-hfs ’*.o’ -hide-hfs foobar

将会从HFS卷中排除所有以“.o”结尾或称为foobar的文件。注意，如果您有一个名为foobar的目录，那么它(当然还有它的所有后代)也会被排除在外。GLOB也可以是相对于命令行上给定的源目录的路径名，例如

 

仅从src目录中排除名为html的文件或目录。树中任何其他名为html的文件或目录都不会被排除。应该与“-hide”或“-hide-joliet”一起使用。为了匹配目录名，请确保模式不包含尾随的“/”字符。

-hide-hfs-list  file

指定一个文件，该文件包含要隐藏的通配符模式的列表，如“-hide-hfs”中所示。

-hfs-volid  hfs_volid

HFS分区的卷名称。这是分配给macintosh上的磁盘的名称，并用-V替换使用的volid。

-icon-position

如果存在图标位置信息，就使用。图标将显示在与Macintosh桌面相同的位置。文件夹在屏幕上的位置和大小、滚动位置、文件夹视图(视图为图标、小图标等)也会保留下来。

-root-info  file

为HFS卷的根文件夹设置位置、屏幕上的大小、滚动位置、文件夹视图等。

-prep-boot  file

准备引导映像文件。最多允许4次

-chrp-boot

添加CHRP引导头

-input-hfs-charset  charset

输入字符集，定义与“-mac-name”一起使用时在hfs文件名中使用的字符。默认字符集为cp 10000

-output-hfs-charset  charset

定义将在HFS文件名中使用的字符的输出字符集。默认输入字符集

-hfs-unlock

默认情况下，genisoImage将创建一个被锁定的hfs卷。此选项使卷不被锁定，以便其他应用程序(例如hfsutils)可以修改卷。

-hfs-bless  folder_name

“Bless”指定目录(文件夹)。这通常是系统文件夹，用于创建HFS可引导CD。目录的名称必须是genisoImage所看到的整个路径名。例如，如果给定的路径规范是“./cddata“，所需的文件夹称为系统文件夹，则整个路径名为“/cddata/system”文件夹(如果名称包含空格，请记住使用引号)。

-hfs-parms  parameters

重写用于创建HFS文件系统的某些参数。不太可能在正常情况下使用

--cap

查找AUFS CAP Macintosh文件。仅搜索CAP Apple/Unix文件格式。搜索其他可能的Apple/Unix文件格式将被禁用，除非给出其他“--”选项

--netatalk

查找NETATALK Macintosh文件

--double

查找AppleDouble Macintosh文件

--ethershare

查找Helios EtherShare Macintosh文件

--ushare

查找IPT UShare Macintosh文件

--exchange

查找PC Exchange Macintosh文件

--sgi

查找SGI Macintosh文件

--xinet

查找XINET  Macintosh文件

--macbin

查找MacBinary Macintosh文件

--single

查找AppleSingle Macintosh文件

--dave

查找Thursby Software Systems DAVE Macintosh文件

--sfm

查找Microsoft’s Services for Macintosh文件

--osx-double

查找Mac OS X AppleDouble Macintosh文件

--osx-hfs

查找Mac OS X HFS Macintosh文件
```
## 字符集
genisoImage以符合POSIX的方式将文件名处理为8位字符的字符串。要表示所有语言的所有编码，8位字符是不够的。Unicode或Iso-10646定义了至少需要21位才能表示所有已知语言的字符编码。它们可以用utf-32、utf-16或utf-8编码表示。utf-32使用普通的32位编码，但似乎不常见。microsoft使用utf-16时使用win 32，缺点是16位字符不符合POSIX文件系统接口。

现代unix操作系统可以对文件名使用utf-8编码。每个32位字符由一个或多个8位字符表示。如果一个字符用iso-8859-1(在中欧和北美使用)编码，则以1：1映射到utf-32或utf-16编码的Unicode字符。如果一个字符是用7位asci编码(在美国和其他字符集有限的国家)将以1：1映射到UTF-32、UTF-16或UTF-8编码的Unicode字符。不能用UTF-8(如果值大于0x7F)中的单个字节表示的字符代码使用转义序列，这些转义序列映射到多个8位字符。

如果所有操作系统都使用utf-8，genisoImage将不需要在文件名中重新编码字符。不幸的是，Apple使用完全非标准的编码，而microsoft使用与POSIX文件名接口不兼容的unicode编码。对于所有非utf-8编码的操作系统，每个字节表示的实际字符取决于本地操作系统使用的字符集或代码页(microsoft使用的名称)。字符集中的字符将反映用户的区域或自然语言集。通常字符代码0x00-0x1f是控制字符，代码0x20-0x7f是7位ASCII字符，(在PC和Mac上)0x80-0xff用于其他字符。

由于有超过256个字符/符号在使用，只有一个小子集表示在一个字符集。因此，相同的字符代码可以表示不同字符集中的不同字符。因此在中欧生成的文件名，在东欧的机器上查看时可能不会显示相同的字符。为了使事情变得更复杂，不同的操作系统对区域或语言使用不同的字符集。例如，‘é’的字符代码(带有尖锐口音的小e)可以是PC上的字符代码0x82、Macintosh上的代码0x8e、西欧Unix系统上的代码0xe9和Unicode中的代码0x000e9。

只要不是所有操作系统和应用程序都使用相同的字符集作为文件名的基础，就可能需要指定文件名中使用的字符集以及文件名应该显示在CD上的字符集。有四个选项可以指定要使用的字符集：

- -input-charset。定义您在主机上使用的本地字符集。发生的任何字符集转换都将使用此字符集作为起点。默认输入字符集在基于MS-DOS的系统上为cp 437，在所有其他系统上为iso 8859-1。如果给定-j，则输入字符集的unicode等效项将在joliet目录中使用。“-jcharset”选项 和“-input-charset –J”选项时一样的。
- -output-charset。定义用于CD上Rock Ridge名称的字符集。默认为输入字符集。
- -input-hfs-charset。定义从各种Apple/Unix文件格式解码的用于HFS文件名的HFS字符集。只有当与“-mac-name”一起使用时才有用。
- -output-hfs-charset。定义用于从正在使用的输入字符集创建hfs文件名的hfs字符集。在大多数情况下，这将来自“-input-charset”选项指定的字符集。默认为输入hfs字符集。

在genisoImage中内置了许多字符集。要获得列表，请使用输入字符集帮助。此列表不包括从当前区域设置派生的字符集，如果genisoImage是使用iconv支持构建的。通过将文件名作为选项的参数，可以从任意字符集选项的文件中读取其他字符集。只有当文件的名称与内置字符集中的一个不匹配时，才会读取给定的文件。

     字符集文件的格式与“http://www.unicode.org/Public/MAPPINGS”提供的映射文件相同。格式如下：
``` bash
Column #1 is the input byte code (in hex as 0xXX)
Column #2 is the Unicode (in hex as 0xXXXX)
The rest of the line is ignored.
```
任何空白行、没有上述格式的两个(或更多)列的行或注释行(以#字符开始)都会被忽略，而不会发出任何警告。任何丢失的输入代码都映射到Unicode字符0x0000。

请注意，虽然支持UTF-8，但其他Unicode编码(如UCS-2/UTF-16和UCS-4/UTF-32)则不支持，因为POSIX操作系统无法本地处理它们。1：1字符集映射可以通过使用关键字默认值作为任何字符集选项的参数来定义。从输入文件名生成的iso 9660文件名不会从输入字符集转换。iso 9660字符集是ASCII字符的非常有限的子集，因此任何转换都是没有意义的。任何不能转换的字符都将被“_”字符替换。
## HFS CREATOR/TYPE（创建者和类型）
Macintosh文件有两个与其相关的属性，它们定义了创建文件的创建者和文件类型。两者都是(完全)4个字母字符串。通常，这允许Macintosh用户双击文件并启动正确的应用程序等。可以通过在Macintosh上使用ResEdit(或类似的)之类的方法找到特定文件的创建者和类型。

创建者和类型信息存储在所有Apple/Unix编码的文件中。对于其他文件，可以使用文件的映射文件(带-map)或使用文件的魔术号(通常是前几个字节中的签名)，将创建者和输入文件的扩展名作为基础。如果这两个选项都给出了，那么它们在命令行上的顺序是有效的。如果“-map”是首先给出的，则在魔术号匹配之前尝试进行文件扩展名匹配。但是，如果先给出“-magic”，则在文件扩展名匹配之前尝试进行魔法号匹配。

如果没有使用映射或魔术文件，或者没有找到匹配，则可以通过使用“.genisoImagerc”文件中的条目或使用“-hfs-creator”或“-hfs-type,”来设置所有常规文件的默认创建者和类型，否则默认的创建者和类型是Unix和Text。

映射文件的格式与aufs使用的afpfile格式相同。该文件有五列用于扩展名、文件转换、创建者、类型和注释。以“#”字符开头的行是注释行，被忽略。下面就是一个例子
``` bash
# Example filename mapping file
#
# EXTN   XLate   CREATOR   TYPE     Comment
.tif     Raw     ’8BIM’    ’TIFF’   "Photoshop TIFF image"
.hqx     Ascii   ’BnHq’    ’TEXT’   "BinHex file"
.doc     Raw     ’MSWD’    ’WDBN’   "Word file"
.mov     Raw     ’TVOD’    ’MooV’   "QuickTime Movie"
*        Ascii   ’ttxt’    ’TEXT’   "Text file"
```
第一列EXTN定义要映射的Unix文件名扩展名，任何不匹配的文件扩展名的默认映射都定义为“*”字符。第二列Xate列定义了Unix和Macintosh文件之间的文本转换类型，它被genisoImage忽略，但与aufs(1)兼容。虽然genisoImage不改变文件的内容，但如果二进制文件的类型设置为文本，则可能会在Macintosh上错误地读取它。因此，默认类型的更好选择可能是“？？？？”。CREATOR和TYPE关键字必须为4个字符长，并以单引号括起来。注释字段以双引号括起来-它被genisoImage忽略，但与aufs兼容。

魔术文件的格式几乎与file (1)命令使用的魔术(5)文件格式相同。该文件有偏移量、类型、测试和消息用四个字节的制表符分隔列。以‘#’字符开头的行是注释行，被忽略。一个示例文件将类似于：
``` bash
# Example magic file
#
# off   type      test       message
0       string    GIF8       8BIM GIFf  GIF image
0       beshort   0xffd8     8BIM JPEG  image data
0       string    SIT!       SIT! SIT!  StuffIt Archive
0       string    \037\235   LZIV ZIVU  standard Unix compress
0       string    \037\213   GNUz ZIVU  gzip compressed data
0       string    %!         ASPS TEXT  Postscript
0       string    \004%!     ASPS TEXT  PC Postscript with a ^D to start
4       string    moov       txtt MooV  QuickTime movie file (moov)
4       string    mdat       txtt MooV  QuickTime movie file (mdat)
```
文件的格式用magic(5)来描述。这里唯一的区别是，对于魔术文件中的每个条目，message的初始偏移量必须是4个字符的CREATOR，紧接着是4个字符的TYPE，空格是可选的。此行上的任何其他字符都将被忽略。延拓行(从‘>’开始)也会被忽略，即只使用初始偏移行。

使用”-magic“可能会显著增加处理时间，因为每个文件必须打开和读取，以找到其魔术号码。

总之，对于所有文件，默认创建者是Unix，默认类型是TEXT。这些可以通过使用“.genisoImagerc“文件中的条目或使用” -hfs-creator “或” -hfs-type“选项来更改。如果文件是以已知的Apple/Unix格式之一(并且已经选择了该格式)，则创建者和类型将从存储在Apple/Unix文件中的值中提取。其他文件的创建者和类型可以通过其文件扩展名(-map)或它们的魔术号(-magic)进行设置。如果在映射文件中使用了默认匹配，则这些值将覆盖默认的创建者和类型。
## HFS MACINTOSH FILE FORMATS（文件格式）
Macintosh文件有两个部分，称为数据和资源叉。两者都可能是空的。unix(和许多其他开放源码软件)只能处理只有一部分(或分叉)的文件。另外，macintosh文件有许多与它们相关的属性-可能最重要的是类型和创建者。同样，unix对这些类型的属性没有概念。例如，Macintosh文件可以是JPEG图像，其中图像存储在数据分叉中，桌面缩略图存储在资源分叉中。数据分叉中的信息通常是跨平台有用的。因此，要在Unix文件系统上存储Macintosh文件，必须找到一种方法来处理两个分叉和额外的属性(称为Finder info)。不幸的是，似乎每个在Unix上存储Macintosh文件的软件包都选择了一种完全不同的存储方法。genisoImage(部分)支持的Apple/Unix格式如下：

CAP AUFS format。数据存储在文件中，资源存储在子目录。资源和数据有相同的文件名

AppleDouble/Netatalk。数据存储在文件中。资源存储在以‘%’作为前缀的文件中，查找器信息也存储在相同的‘%’文件中

AppleSingle。数据结构类似于上面的结构，除了分叉和Finder信息都存储在一个文件中。

Helios EtherShare。数据存储在文件中的，资源和查找器信息一起存储在子目录.rsrc中，与数据具有相同的文件名。

IPT UShare。与EtherShare格式类似，但是Finder信息的存储方式略有不同

MacBinary。分叉和查找器信息都存储在一个文件中。

Apple PC Exchange。Macintoshes将苹果文件存储在DOS(FAT)磁盘上。数据分叉存储在文件中。资源分叉存储在子目录Resoure.frk(或RESOURCE.FRK)中。finder info作为文件finder.dat(或FINDER.DAT)中的一条记录。为每个数据叉目录分离finder.dat。注意：genisoImage需要知道pc Exchange文件所在的磁盘的本机胖集群大小(或已从其复制)。此大小由“-cluster-size”确定。使用DOS实用程序chkdsk可以找到群集或分配大小。

SGI/XINET。SGI机器在安装HFS磁盘时使用。存储在文件中的数据分叉。.hsResource子目录中的资源叉，具有相同的文件名.finder info作为文件中的一条记录。

Thursby Software Systems DAVE。允许Macintoshes将苹果文件存储在SMB服务器上。存储在文件中的数据分叉。使用AppleDouble格式存储资源叉。

genisoImage将尝试从finder信息中设置创建者、类型、日期和可能的其他标志。此外，如果存在，则从finder info设置macintosh文件名，否则macintosh名称基于unix文件名

Services for Macintosh。NT服务器存储在NTFS文件系统上的文件格式。数据分叉存储为文件名。资源叉存储为名为filename：afp_Resource的NTFS流。查找信息存储为名为filename：AFP_AfpInfo的NTFS流。NTFS流通常对用户不可见。注意：genisoImage只部分支持SFM格式。如果存储在NT服务器上的HFS文件或文件夹在其名称中包含非法NT字符，则NT将这些字符转换为私有使用Unicode字符。这些字符是：“*/<>？\和空格或句点(如果它是文件名的最后一个字符，则编码0x01到0x1f)。(控制字符)和苹果的苹果标志。不幸的是，这些私有Unicode字符无法被genisoImageNT可执行文件读取。因此，包含这些字符的任何文件或目录名称都将被忽略-包括任何此类目录的内容。

Mac OS X AppleDouble。当MacOSX将HFS/HFS文件复制或保存到非HFS文件系统(例如UFS、NFS等)时，文件以AppleDouble格式存储。存储在以“._”开头的同名文件中的资源叉。查找器信息也存储在相同的“._”文件中。

Mac OS X HFS (Alpha)。实际上不是Apple/Unix编码，而是MacOSX系统上的实际HFS/HFS文件。存储在文件中的数据分叉。资源叉存储在同名、后缀/rsrc的伪文件中。只有在MacOSX上使用时才能工作。如果发现一个文件具有零长度的资源分叉和空的finderinfo，则假定它没有任何Apple/Unix编码，因此可以使用其他方法设置类型和创建者。

 

genisoImage将尝试从finder信息中设置创建者、类型、日期和可能的其他标志。此外，如果存在，则从finder info设置macintosh文件名，否则macintosh名称基于unix文件名。

在使用“-apple”时，类型和创建者存储在ISO 9660目录记录中的可选系统使用或SUSP字段中，方式与Rock Ridge属性非常类似。实际上，为了简化生活，在现有Rock Ridge属性的开头添加了Apple扩展(即，为了获得Apple扩展，您也可以获得Rock Ridge扩展) 。Apple扩展要求将资源叉存储为与ISO 9660关联的文件。这与存储在ISO 9660文件系统中的任何普通文件一样，只是相关的文件标志是在目录记录(位2)中设置的。该文件与数据分叉(由非苹果计算机看到的文件)具有相同的名称。相关文件通常被其他操作系统忽略。

使用“-hfs”时，类型和创建者以及其他查找器信息存储在单独的HFS目录中，在ISO 9660卷中不可见。HFS目录引用上述相同的数据和资源叉文件。在大多数情况下，最好使用“-hfs”而不是“-apple”，因为后者在文件名中使用了有限的ISO 9660字符。然而，Apple扩展名确实提供了这样的优势：文件被更高效地打包到磁盘上，并且可能在CD上安装更多的文件
## HFS MACINTOSH FILENAMES
在可能的情况下，存储在Apple/Unix文件中的HFS文件名用于CD的HFS部分。但是，并不是所有的Apple/Unix编码都使用finderinfo存储HFS文件名。在这些情况下，使用Unix文件名-带有转义的特殊字符。特殊字符包括‘/’和代码超过127的字符。AUFS使用‘：’转义这些字符，后面跟着字符代码作为两个十六进制数字。Netatalk和EtherShare有类似的方案，但使用‘%’而不是‘：’。如果genisoImage无法找到HFS文件名，则使用Unix名称，将任何“%xx”或“：xx”字符(xx是两个十六进制数字)转换为单个字符代码。如果xx不是十六进制数字([0-9a-FA-F])，则它们将被单独保留-尽管其余的“：”转换为“%”，因为“：”是hfs目录分隔符。必须小心，因为带有“%xx”或“：xx”的普通Unix文件也将被转换。例如下面的例子
``` bash
This:2fFile   converted to This/File
This:File     converted to This%File
This:t7File   converted to This%t7File
```
虽然HFS文件名似乎支持大写字母和小写字母，但文件系统不区分大小写，即文件名AbC和aBC是相同的。如果在具有相同HFS名称的目录中找到一个文件，genisoImage将尝试通过在其中一个文件名中添加“_”字符来创建唯一的名称。如果文件存在HFS文件名，genisoImage可以使用“-mac-name”选项，让此名称作为ISO 9660、Joliet和Rock Ridge文件名的起始点。没有HFS名称的普通Unix文件仍将使用它们的Unix名称。

如果在unix系统中，一个mac的二进制文件存储名字是这是someimage.gif.bin，但是系统中还有一个名字为someimage.gif的文件，那么这个名字是将出现在CD的HFS部分的名称。但是，由于genisoImage使用Unix名称作为其他名称的起点，生成的ISO 9660名称可能是SOMEIMAG.BIN，Joliet/Rock Ridge将是某某Image.gif.bin。此选项将使用HFS文件名作为起点，ISO 9660名称可能为SOMEIMAG.GIF，而Joliet/Rock Ridge可能是一些Image.gif。

“-mac-name”目前不能和“-T”一起使用。Unix名称将在TRANS.TBL文件中使用，而不是Macintosh名称。

     用于将任何HFS文件名转换为Joliet/Rock Ridge文件名的字符集默认为cp 10000(Mac Roman)。使用的字符集可以使用“-input-hfs-charset.”选项指定。HFS字符集中的其他内置字符集是：cp 10006(Mac希腊语)、cp 10007(MacCyrilic)、cp 10029(MacLatin 2)、cp 10079(Mac冰岛和andic)和cp 10081(Mac土耳其语)。注意：从各种Apple/Unix格式中提取的HFS文件名使用的字符代码将不会被转换，因为它们被假定在正确的Apple字符集中。只有从HFS文件名派生的Joliet/Rock Ridge名称才会被转换。

现有的genisoImage代码将过滤掉ISO 9660和Joliet文件名的任何非法字符，但随着genisoImage预期将直接处理Unix名称，它将保留Rock Ridge的名称。但“/”是一个合法的HFS文件名字符，“-mac-name”选项在Rock Ridge文件名中将“/”转换为“_”。

如果使用Apple扩展，则只会在Macintosh上显示ISO 9660文件名。然而，由于MacintoshISO 9660驱动程序可以使用级别2文件名，您可以使用类似于“-allow-multidot”的选项，这在Macintosh上没有问题的。但是仍然要注意名称，例如“this.file.name”将转换为“THIS.FILE”，即只有一个‘.’，也可以将文件名“abcdefgh”视为“ABCDEFGH”，但“abcdefghi”将被视为“ABCDEFGHI.”。也就是说，在结尾有一个“.”不知道这是Macintosh问题还是genisoImage/mk混合问题。当在Macintosh上查看时，所有的文件名都是大写的。当然，DOS/Win3.X机器将无法看到二级文件名。
## HFS CUSTOM VOLUME/FOLDER ICONS
若要为HFS CD提供自定义图标，请确保根(顶级)文件夹包含一个标准Macintosh卷图标文件。若要在Macintosh上为卷提供自定义图标，必须在卷的“获取信息”框中将一个图标粘贴到卷的图标上。这将在根文件夹中创建一个名为“Icon\r“(‘\r’是回车字符)的不可见文件。自定义文件夹图标非常相似，文件夹本身存在一个名为”Icon\r“的不可见文件。

可能创建genisoImage可以使用的自定义图标的最简单方法是格式化Mac上的空白HFS软盘，并将图标粘贴到其“GET Info”框中。如果在安装hfs模块的情况下使用linux，请挂载软盘:” mount -t hfs /dev/fd0 /mnt/floppy”。默认情况下，软盘将作为CAP文件系统挂载。然后使用以下内容运行genisoImage：“genisoimage --cap -o output source_dir /mnt/floppy “。

如果您不使用Linux，您可以使用hfsutils从软盘复制图标文件。但是，必须小心，因为图标文件包含一个控制字符。例如：
``` bash
hmount /dev/fd0
hdir -a
hcopy -m Icon^V^M icon_dir/ico
```
其中‘^V^M’是“ctrl+v“，然后是控制”ctrl+m“。然后以下面的方式运行genisoimage：“genisoimage --macbin -o output source_dir icon_dir”

创建/使用自定义文件夹图标的过程非常相似-将图标粘贴到文件夹的“Get Info”框中，并将生成的“Icon\r”文件传输到genisoImage源树中的相关目录。您可能需要将图标文件隐藏在iso 9660和Joliet树中。
## HFS BOOT DRIVER
可以在Macintosh上启动混合CD。可引导的HFS CD需要一个AppleCD-ROM(或兼容)驱动程序、一个可引导的HFS分区和必要的系统、Finder等文件。使用Apple_Driver实用程序，可以从任何其他Macintosh可引导CD-ROM中获得驱动程序。然后，这个文件可以与“-boot-hfs-file”一起使用。HFS分区(在本例中是混合磁盘)必须包含一个合适的系统文件夹，同样来自另一个光盘或磁盘。

要使分区可引导，必须设置其引导块。引导块位于分区的前两个块中。对于不可引导的分区，引导块中满是零。通常情况下，当系统文件被复制到Macintosh磁盘上的分区时，引导块会被许多必需的设置填充。因此，实用程序Apple_Driver还从它在给定的cd-ROM上找到的第一个hfs分区中提取引导块，这用于genisoImage创建的hfs分区。

请注意：通过使用来自Apple CD的驱动程序并将Apple软件复制到您的CD上，您将很容易服从Apple Computer，Inc。软件许可协议。
## EL TORITO BOOT INFORMATION TABLE
当给出“-boot-info-table”时，genisoImage将修改-b指定的引导文件，方法是在文件的偏移量8处插入一个56字节的引导信息表。这一修改是在源文件系统中完成的，因此，如果该文件不易重新创建，请确保使用副本！此文件包含指针，这些指针在启动时可能不易或可靠地获得。本表的格式如下；所有整数均采用7.3.1(“小Endian”)格式：
``` bash
Offset    Name           Size      Meaning
8        bi_pvd         4 bytes   LBA of primary volume descriptor
12        bi_file        4 bytes   LBA of boot file
16        bi_length      4 bytes   Boot file length in bytes
20        bi_csum        4 bytes   32-bit checksum
24        bi_reserved    40 bytes  Reserved
```
32位校验和是引导文件中从字节偏移64开始的所有32位字的总和。所有线性块地址(LBA)都以CD扇区(通常为2048字节)给出。
## HFS PROBLEMS/LIMITATION
虽然HFS文件名似乎支持大写字母和小写字母，但文件系统不区分大小写，即文件名ABC和ABC是相同的。如果在具有相同HFS名称的目录中找到一个文件，genisoImage将尝试通过在其中一个文件名中添加“_”字符来创建唯一的名称。

共享前31个字符的HFS文件/目录名称有‘_N’(十进制数字)替代最后几个字符以生成唯一的名称。在“嫁接”Apple/Unix文件或目录(所涉及的方法和语法见上文)时，必须小心。不能为Apple/Unix编码的文件/目录使用新名称。例如，如果要将名为oldname的Apple/Unix编码文件添加到CD中，则不能使用一下命令行：

“genisoimage -o output.raw -hfs -graft-points newname=oldname cd_dir”

genisoImage将无法解码旧名。但是，只要您不尝试像上面那样给它们命名，就可以移植Apple/unix编码的文件或目录。

当使用多会话选项-M和-C创建HFS卷时，仅上一次会话中的文件将位于HFS卷中。也就是说，genisoImage不能将以前会话中的现有文件添加到hfs卷中。但是，如果每个会话都是使用“-part”创建的，则在Mac上挂载时，每个会话将显示为单独的卷。在这种情况下，值得使用“-v”或-”hfs-volid“为每个会话提供一个唯一的卷名，否则每个“卷”都会以相同的名称出现在桌面上。符号链接(与所有其他非常规文件一样)不会添加到hfs目录中。

混合卷可能大于包含相同数据的纯ISO 9660卷。在某些情况下(例如DVD大小的卷)，差异可能很大。随着HFS卷的增大，分配块的大小(文件所能占用的最小空间)也会变大。对于650 MB的CD，分配块是10 kb，对于4.7GB的DVD，大约是70 kB。hfs卷中的最大文件数约为65500，但实际限制将略小于此。

生成的混合卷可以使用hfsutils例程在Unix机器上访问。但是，当卷被设置为锁定时，不能对其进行任何更改。这个选项“-hfs-unlock“将创建一个未锁定的输出映像-但是不应该对卷的内容进行任何更改(除非您真正知道自己在做什么)，因为它不是“真实的”hfs卷。

“-mac-name“目前不能和“-T”一起使用，-Unix名称将在TRANS.TBL文件中使用，而不是Macintosh名称。

虽然genisoImage不改变文件的内容，但如果二进制文件的类型设置为”TEXT“，则可能在Macintosh上不正确地读取它。因此，默认类型的更好选择可能是”？？？？“。

“-mac-boot-file “选项可能完全不能工作。可能无法使用PC Exchangev2.2或更高版本的文件(MacOS8.1可用)。当使用Linux时，包含PC Exchange文件的DoS媒体应该以MSDOS(而不是vFAT)类型挂载。SFM格式仅部分支持。geniso映像应该能够创建超过4GB的hfs混合映像，尽管这还没有经过充分的测试。
## HPPA说明
要为HPPA制作一个可引导的CD，至少必须指定一个引导加载程序文件(-hppa-boot-loader)、一个内核映像文件(32位、64位，或者两者兼而有之，视硬件而定)和一个引导命令行(-hppa-cmdline)。有些系统可以启动32位或64位的内核，如果两者都存在，固件将选择其中一种。还可以选择使用“-hppa-cmdline”对根文件系统使用ramdisk。
## JIGDO说明
Jigdo是一个帮助分发大文件的工具，如cd和dvd镜像；更多细节请参见http://atterer.net/jigdo/。debian cd和dvd iso镜像以jigdo格式在网络上发布，以便最终用户更有效地下载它们。若要从genisoImage在ISO映像旁边创建jigdo和模板文件，您必须首先生成将使用的文件列表，格式如下：

MD5sum   File size  Path

32 chars 12 chars   to end of line

MD5sum应该用jigdo的伪BASE 64格式编写。文件大小应该是十进制，文件的路径必须是绝对的。拥有此文件后，使用所有常规命令行参数调用genisoImage。使用“-jigdo-jigdo”和“-jigdo-Template”指定jigdo和模板文件的输出文件名，并使用“-md5-list”传递md5列表的位置。

如果您不希望将一些文件添加到jigdo文件中(例如，如果它们可能经常更改)，请使用-jigdo-忽略指定它们。如果您想在将一些文件写入镜像时验证它们，请使用“-jigdo-force-md5”指定它们。如果任何文件不匹配，genisoImage就会中止。这两个选项都以正则表达式作为输入。可以根据大小，使用”-jigdo-min-file-size”选项限制将进一步使用的文件集。

最后，jigdo代码需要知道如何将给定的文件映射到镜像样式的配置中。指定如何使用“-jigdo-map”映射路径。使用“debian=/mirror/debian”将导致所有以“/mirror/debian”开头的路径映射到输出jigdo文件中的debian：<file>。
## 例子代码
1）若要在cd.iso文件中创建一个普通的ISO 9660文件系统映像，如果CD为cd.iso，目录cd_dir将成为根目录，使用命令：
``` bash
% genisoimage -o cd.iso cd_dir
```
2）使用目录cd_dir的Rock Ridge扩展创建CD
``` bash
% genisoimage -o cd.iso -R cd_dir
```
3）若要创建源目录cd_dir的RockRidge扩展名的CD，其中所有文件至少具有读取权限，且所有文件均为root所有，使用命令：
``` bash
% genisoimage -o cd.iso -r cd_dir
```
4）将tar存档直接写入CD，该CD将包含带有tar存档的简单iso 9660文件系统。使用命令：
``` bash
% tar cf - . | genisoimage -stream-media-size 333000 | wodim dev=b,t,l -dao tsize=333000s –
```
5）用源目录cd_dir的Joliet和Rock Ridge扩展创建HFS混合CD
``` bash
% genisoimage -o cd.iso -R -J -hfs cd_dir
```
6）从包含Netatalk Apple/Unix文件的源目录cd_dir创建HFS混合CD
``` bash
% genisoimage -o cd.iso --netatalk cd_dir
```
7）要从源目录cd_dir创建HFS混合CD，只需根据文件“映射”中列出的文件扩展名提供所有文件创建者和类型
``` bash
% genisoimage -o cd.iso -map mapping cd_dir
```
8）要创建一个带有Apple扩展到ISO 9660的CD，可以从源目录cd_dir和another_di。.解码所有已知Apple/Unix格式的文件，并根据文件魔术中给出的魔术号给出任何其他文件的创建者和类型。
``` bash
% genisoimage -o cd.iso -apple -magic magic -probe cd_dir another_dir
```
9）下面的示例在CD上放置不同的文件，这些文件都有自述的名称，但当被视为ISO 9660/Rock Ridge、Joliet或HFS CD时，它们的内容不同。当前目录包含“README.hfs     README.joliet  README.Unix    cd_dir/”。下面的命令将cd_dir目录的内容连同三个自述文件放在CD上，但在这三个文件系统中只能看到一个
``` bash
% genisoimage -o cd.iso -hfs -J -r -graft-points \
  -hide README.hfs -hide README.joliet \
  -hide-joliet README.hfs -hide-joliet README.Unix \
 -hide-hfs README.joliet -hide-hfs README.Unix \
  README=README.hfs README=README.joliet \
  README=README.Unix cd_dir
```
文件README.hfs将被视为HFS CD上的自述文件，另外两个自述文件将被隐藏。同样适用于Joliet和ISO 9660/Rock Ridge CD。隐藏选项的组合可能会产生各种奇怪的结果。
## 说明
genisoImage可以安全地安装在suid root中。这可能是为了允许genisoImage在创建多会话映像时读取上一次会话。如果genisoImage正在创建具有Rock Ridge属性的文件系统映像，而源目录树的目录嵌套级别对于ISO 9660来说太高，genisoImage将执行深度目录重定位。这将导致CD根目录中的一个名为RR_Move的目录。您无法避免此目录。不同平台的许多引导代码选项是互斥的，因为引导块不能共存，即不同平台共享映像中相同的数据位置。
## 举例
创建iso文件
``` bash
[sogrey@bogon 文档]$ mkisofs -v -o my.iso /sogrey/
I: -input-charset not specified, using utf-8 (detected in locale settings)
genisoimage 1.1.9 (Linux)
Scanning /sogrey/
Scanning /sogrey/wjtpflR
Writing:   Initial Padblock                        Start Block 0
Done with: Initial Padblock                        Block(s)    16
Writing:   Primary Volume Descriptor               Start Block 16
Done with: Primary Volume Descriptor               Block(s)    1
Writing:   End Volume Descriptor                   Start Block 17
Done with: End Volume Descriptor                   Block(s)    1
Writing:   Version block                           Start Block 18
Done with: Version block                           Block(s)    1
Writing:   Path table                              Start Block 19
Done with: Path table                              Block(s)    4
Writing:   Directory tree                          Start Block 23
Done with: Directory tree                          Block(s)    2
Writing:   Directory tree cleanup                  Start Block 25
Done with: Directory tree cleanup                  Block(s)    0
Writing:   The File(s)                             Start Block 25
Total translation table size: 0
Total rockridge attributes bytes: 0
Total directory bytes: 2048
Path table size(bytes): 26
Done with: The File(s)                             Block(s)    0
Writing:   Ending Padblock                         Start Block 25
Done with: Ending Padblock                         Block(s)    150
Max brk space used 0
175 extents written (0 MB)
You have new mail in /var/spool/mail/root
[root@localhost sogrey]$ ls
1.c  my.iso  wj123.kpET  wj123.oH2o4P  wj234.q1C  wjtpflR
[root@localhost sogrey]$
```
