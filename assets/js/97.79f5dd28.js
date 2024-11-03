(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{416:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ex2fsck-检查ext2、ext3、ext4文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex2fsck-检查ext2、ext3、ext4文件系统"}},[s._v("#")]),s._v(" ex2fsck - 检查ext2、ext3、ext4文件系统")]),s._v(" "),a("p",[s._v("检查ext2、ext3、ext4文件系统，如果系统已经挂载了，那么不建议去检查，因为这样是不安全的。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("e2fsck  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-pacnyrdfkvtDFV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-b  superblock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-B  blocksize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-L bad_blocks_file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-C fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-j external-journal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-E extended_options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  device\n")])])]),a("p",[s._v("设备是存储文件系统的设备文件(例如/dev/hdc 1)。")]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动修复文件系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" superblock   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定块大小。不要使用普通的超级块，而是使用由superblock指定的替代超级块。此选项通常在主超级块损坏时使用。备份超级块的位置取决于文件系统的块大小。对于具有1k块的文件系统，可以使用备份超级块。在块8193处找到；对于具有2k块的文件系统，在块16384处找到；对于4k块在块32768处找到。")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他备份超级块可以通过使用mke2fs程序使用-n选项打印出创建超级块的位置来确定。mke2fs的-b选项必须指定文件系统的块大小，以便打印出准确的超级块位置。")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果指定了另一个超级块，并且文件系统不是只读的，e2fsck将确保主超级块在完成文件系统检查后得到适当更新。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-B")]),s._v(" blocksize    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正常情况下，e2fsck将在不同块大小下搜索超级块，以试图找到适当的块大小。在某些情况下，此搜索可能会被愚弄。此选项迫使e2fsck只尝试在特定块大小上定位超级块。如果找不到超级块，e2fsck将以致命错误结束。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此选项会导致e2fsck使用badblock(8)程序对设备执行只读扫描，以查找任何坏块。如果发现任何坏块，则将它们添加到坏块inode中，以防止将它们分配给文件或目录。如果指定了该选项两次，则将使用无损读写测试完成坏块扫描。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" fd           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此选项导致e2fsck将完成信息写入指定的文件描述符，以便监视文件系统检查的进度。运行e2fsck的程序通常使用此选项。如果文件描述符号为负数，则将使用文件描述符的绝对值，而进度信息最初将被抑制。之后，可以通过向e2fsck进程发送SIGUSR 1信号来启用它。如果指定的文件描述符为0，e2fsck将在其业务进行时打印一个完成栏。这要求e2fsck在视频控制台或终端上运行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示调试信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 优化文件系统中的目录。此选项导致e2fsck尝试优化所有目录，如果文件系统支持目录索引，则通过重新索引这些目录，或者对较小目录的目录进行排序和压缩，或者使用传统的线性目录对文件系统进行排序和压缩。即使没有-D选项，e2fsck有时也可能优化几个方向。例如，如果启用目录索引，并且目录没有索引，或者索引结构被破坏并需要重建，则会受益。-D选项强制对文件系统中的所有目录进行优化。它们较小，搜索速度稍快，但实际上，您不需要使用此选项。-D选项将检测单个目录中具有重复名称的目录项，由于性能原因，e2fsck通常不强制执行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" extended_options "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置e2fsck扩展选项。扩展选项是逗号分隔的，可以使用等于(‘=’)号进行参数设置。")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ea_ver=extended_attribute_version，在检查文件系统时，设置e2fsck所需的扩展属性块的版本。版本号可能是1或2。默认的扩展属性版本格式是2。")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fragcheck，在传递1期间，为文件系统中的文件打印任何不连续块的详细报告。")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# discard，在进行完整的文件系统检查后，尝试丢弃空闲块和未使用的inode块。")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodiscard，不要试图丢弃空闲块和未使用的inode块。这个选项与discard选项正好相反。此设置为默认设置。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制检查")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在开始检查之前，清空缓冲区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件中的块添加在损坏列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件系统在日志文件的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当与-c选项相结合时，坏块列表中的任何现有坏块将被保留，而通过运行badblocks (8)发现的任何新坏块将被添加到现有的坏块列表中。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" filename         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件名指定的文件中所列的块号添加到坏块的列表中。此文件的格式与badblocks (8)程序生成的格式相同。请注意，块号是基于文件系统的块大小。因此，对e2fsck使用-c选项更简单、更安全，因为它将确保将正确的参数传递给badblock程序。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" filename         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将坏块列表设置为文件名指定的块列表。(此选项与-l选项相同，除非在将文件中列出的块添加到坏块列表之前清除坏块列表。)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开文件系统只读，并假设对所有问题的答案为“no”。允许非交互地使用e2fsck。此选项不能与-p或-y选项同时指定。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动修复(“preen”)文件系统。此选项将导致e2fsck自动修复任何不需要人工干预就能安全修复的文件系统问题。如果e2fsck发现可能需要系统管理员采取额外纠正措施的问题，e2fsck将打印问题的描述，然后以代码4退出。(请参阅退出代码部分。)此选项通常由系统的引导脚本使用。它不能与-n或-y选项同时指定。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不执行任何操作，提供向后的兼容性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交换文件系统的字节顺序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印e2fsck的时间统计信息。如果使用此选项两次，则附加的时间统计信息将按传递方式打印。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示执行的详细过程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本号，并且退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有的交互回话都回答yes，此选项不能与-n或-p选项同时指定。")]),s._v("\n")])])]),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("e2fsck用于检查ext 2/ext 3/ext 4系列文件系统。对于使用日志的ext 3和ext 4文件系统，如果系统在没有任何错误的情况下被不干净地关闭，通常在日志中重播提交的事务之后，文件系统应该标记为干净。因此，对于使用日志的文件系统，e2fsck通常会重播日志并退出，除非它的超级块表明需要进一步检查。")]),s._v(" "),a("p",[s._v("请注意，通常在挂载的文件系统上运行e2fsck是不安全的。唯一的例外是指定了-n选项，并且没有指定-c、-l或-L选项。然而，即使这样做是安全的，如果挂载了文件系统，e2fsck打印的结果也是无效的。")]),s._v(" "),a("h2",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("p",[s._v("e2fsck可以返回以下值：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0")]),s._v("没有错误。")]),s._v(" "),a("li",[a("code",[s._v("1")]),s._v("文件系统错误更正。")]),s._v(" "),a("li",[a("code",[s._v("2")]),s._v("文件系统错误更正，系统应该重启。")]),s._v(" "),a("li",[a("code",[s._v("4")]),s._v("文件系统错误没有更正。")]),s._v(" "),a("li",[a("code",[s._v("8")]),s._v("操作错误。")]),s._v(" "),a("li",[a("code",[s._v("16")]),s._v("语法错误。")]),s._v(" "),a("li",[a("code",[s._v("32")]),s._v("用户取消了操作。")]),s._v(" "),a("li",[a("code",[s._v("128")]),s._v("共享库错误")])]),s._v(" "),a("h2",{attrs:{id:"信号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信号"}},[s._v("#")]),s._v(" 信号")]),s._v(" "),a("p",[s._v("对e2fsck发送以下信号，并产生相应的结果：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("SIGUSR1")]),s._v("此信号导致e2fsck开始显示完成栏或发出进度信息。(见对-C选项的讨论。)")]),s._v(" "),a("li",[a("code",[s._v("SIGUSR2")]),s._v("此信号导致e2fsck停止显示完成栏或发出进度信息。。")])]),s._v(" "),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("以只读的方式检查sda1")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ e2fsck  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" /dev/sda1\ne2fsck "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.41")]),s._v(".12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("-May-2010"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWarning"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("  /dev/sda1 is mounted.     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件系统已经挂载，因此会有警告")]),s._v("\nWarning: skipping journal recovery because doing a read-only filesystem check.    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以只读的方式执行，不去修复")]),s._v("\n/dev/sda1: clean, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("/128016 files, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49152")]),s._v("/512000 blocks\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);