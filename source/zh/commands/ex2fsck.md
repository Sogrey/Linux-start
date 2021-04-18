# ex2fsck - 检查ext2、ext3、ext4文件系统

检查ext2、ext3、ext4文件系统，如果系统已经挂载了，那么不建议去检查，因为这样是不安全的。

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
e2fsck  [-pacnyrdfkvtDFV]  [-b  superblock]
        [-B  blocksize]  [-l|-L bad_blocks_file ]
        [-C fd]  [-j external-journal]  [-E extended_options ]  device
```
设备是存储文件系统的设备文件(例如/dev/hdc 1)。

## 选项

``` bash
-a, -p          # 自动修复文件系统
-b superblock   # 指定块大小。不要使用普通的超级块，而是使用由superblock指定的替代超级块。此选项通常在主超级块损坏时使用。备份超级块的位置取决于文件系统的块大小。对于具有1k块的文件系统，可以使用备份超级块。在块8193处找到；对于具有2k块的文件系统，在块16384处找到；对于4k块在块32768处找到。
                # 其他备份超级块可以通过使用mke2fs程序使用-n选项打印出创建超级块的位置来确定。mke2fs的-b选项必须指定文件系统的块大小，以便打印出准确的超级块位置。
                # 如果指定了另一个超级块，并且文件系统不是只读的，e2fsck将确保主超级块在完成文件系统检查后得到适当更新。
-B blocksize    # 正常情况下，e2fsck将在不同块大小下搜索超级块，以试图找到适当的块大小。在某些情况下，此搜索可能会被愚弄。此选项迫使e2fsck只尝试在特定块大小上定位超级块。如果找不到超级块，e2fsck将以致命错误结束。
-c              # 此选项会导致e2fsck使用badblock(8)程序对设备执行只读扫描，以查找任何坏块。如果发现任何坏块，则将它们添加到坏块inode中，以防止将它们分配给文件或目录。如果指定了该选项两次，则将使用无损读写测试完成坏块扫描。
-C fd           # 此选项导致e2fsck将完成信息写入指定的文件描述符，以便监视文件系统检查的进度。运行e2fsck的程序通常使用此选项。如果文件描述符号为负数，则将使用文件描述符的绝对值，而进度信息最初将被抑制。之后，可以通过向e2fsck进程发送SIGUSR 1信号来启用它。如果指定的文件描述符为0，e2fsck将在其业务进行时打印一个完成栏。这要求e2fsck在视频控制台或终端上运行。
-d              # 显示调试信息
-D              # 优化文件系统中的目录。此选项导致e2fsck尝试优化所有目录，如果文件系统支持目录索引，则通过重新索引这些目录，或者对较小目录的目录进行排序和压缩，或者使用传统的线性目录对文件系统进行排序和压缩。即使没有-D选项，e2fsck有时也可能优化几个方向。例如，如果启用目录索引，并且目录没有索引，或者索引结构被破坏并需要重建，则会受益。-D选项强制对文件系统中的所有目录进行优化。它们较小，搜索速度稍快，但实际上，您不需要使用此选项。-D选项将检测单个目录中具有重复名称的目录项，由于性能原因，e2fsck通常不强制执行。
-E extended_options # 设置e2fsck扩展选项。扩展选项是逗号分隔的，可以使用等于(‘=’)号进行参数设置。
                    # ea_ver=extended_attribute_version，在检查文件系统时，设置e2fsck所需的扩展属性块的版本。版本号可能是1或2。默认的扩展属性版本格式是2。
                    # fragcheck，在传递1期间，为文件系统中的文件打印任何不连续块的详细报告。
                    # discard，在进行完整的文件系统检查后，尝试丢弃空闲块和未使用的inode块。
                    # nodiscard，不要试图丢弃空闲块和未使用的inode块。这个选项与discard选项正好相反。此设置为默认设置。
-f                  # 强制检查
-F                  # 在开始检查之前，清空缓冲区
-I file             # 指定文件中的块添加在损坏列表
-j file             # 设置文件系统在日志文件的路径
-k                  # 当与-c选项相结合时，坏块列表中的任何现有坏块将被保留，而通过运行badblocks (8)发现的任何新坏块将被添加到现有的坏块列表中。
-l filename         # 将文件名指定的文件中所列的块号添加到坏块的列表中。此文件的格式与badblocks (8)程序生成的格式相同。请注意，块号是基于文件系统的块大小。因此，对e2fsck使用-c选项更简单、更安全，因为它将确保将正确的参数传递给badblock程序。
-L filename         # 将坏块列表设置为文件名指定的块列表。(此选项与-l选项相同，除非在将文件中列出的块添加到坏块列表之前清除坏块列表。)
-n                  # 打开文件系统只读，并假设对所有问题的答案为“no”。允许非交互地使用e2fsck。此选项不能与-p或-y选项同时指定。
-p                  # 自动修复(“preen”)文件系统。此选项将导致e2fsck自动修复任何不需要人工干预就能安全修复的文件系统问题。如果e2fsck发现可能需要系统管理员采取额外纠正措施的问题，e2fsck将打印问题的描述，然后以代码4退出。(请参阅退出代码部分。)此选项通常由系统的引导脚本使用。它不能与-n或-y选项同时指定。
-r                  # 不执行任何操作，提供向后的兼容性
-S                  # 交换文件系统的字节顺序
-t                  # 打印e2fsck的时间统计信息。如果使用此选项两次，则附加的时间统计信息将按传递方式打印。
-v                  # 显示执行的详细过程
-V                  # 显示命令版本号，并且退出
-y                  # 所有的交互回话都回答yes，此选项不能与-n或-p选项同时指定。
```
## 说明

e2fsck用于检查ext 2/ext 3/ext 4系列文件系统。对于使用日志的ext 3和ext 4文件系统，如果系统在没有任何错误的情况下被不干净地关闭，通常在日志中重播提交的事务之后，文件系统应该标记为干净。因此，对于使用日志的文件系统，e2fsck通常会重播日志并退出，除非它的超级块表明需要进一步检查。

请注意，通常在挂载的文件系统上运行e2fsck是不安全的。唯一的例外是指定了-n选项，并且没有指定-c、-l或-L选项。然而，即使这样做是安全的，如果挂载了文件系统，e2fsck打印的结果也是无效的。
## 返回值
e2fsck可以返回以下值：

- `0`没有错误。
- `1`文件系统错误更正。
- `2`文件系统错误更正，系统应该重启。
- `4`文件系统错误没有更正。
- `8`操作错误。
- `16`语法错误。
- `32`用户取消了操作。
- `128`共享库错误
## 信号
对e2fsck发送以下信号，并产生相应的结果：

- `SIGUSR1`此信号导致e2fsck开始显示完成栏或发出进度信息。(见对-C选项的讨论。)
- `SIGUSR2`此信号导致e2fsck停止显示完成栏或发出进度信息。。
## 举例
以只读的方式检查sda1
``` bash
[root@bogon ~]$ e2fsck  -n /dev/sda1
e2fsck 1.41.12 (17-May-2010)
Warning!  /dev/sda1 is mounted.     #文件系统已经挂载，因此会有警告
Warning: skipping journal recovery because doing a read-only filesystem check.    #以只读的方式执行，不去修复
/dev/sda1: clean, 39/128016 files, 49152/512000 blocks
```
