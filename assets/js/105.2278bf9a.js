(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{422:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"file-判断指定文件的文件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-判断指定文件的文件类型"}},[t._v("#")]),t._v(" file - 判断指定文件的文件类型")]),t._v(" "),s("p",[t._v("判断指定文件的文件类型，它依据文件内容判断，并不依据扩展名。")]),t._v(" "),s("p",[t._v("file对每个参数进行测试，试图对其进行分类。按照这个顺序执行的测试有三组：文件系统测试、魔术测试和语言测试。成功的第一个测试将导致打印文件类型。打印的类型通常包含一个单词text(该文件只包含打印字符和几个常见的控制字符，并可能安全地在ASCII终端上读取)、executable (该文件包含以某种UNIX内核可以理解的形式编译程序的结果)，或包含任何其他含义的data(数据通常是“二进制”或不可打印的)。异常是众所周知的包含二进制数据的文件格式(核心文件、tar存档).在修改魔术文件或程序本身时，请确保保留这些关键字。用户依赖于知道目录中的所有可读文件都打印了单词“text”。不要像Berkeley那样，把“shell命令文本”改为“shell脚本”")]),t._v(" "),s("p",[t._v("文件系统测试基于检查STAT(2)系统调用的返回。该程序检查该文件是否为空文件，或是否为某种特殊文件。如果在系统头文件中定义了适合您正在运行的系统的任何已知文件类型(套接字、符号链接或有名管道)，则会直观地显示它们。")]),t._v(" "),s("p",[t._v("魔术测试用于检查具有特定固定格式的数据的文件。这方面的典型示例是二进制可执行文件(已编译的程序)a.out文件，其格式在标准include目录中的#include<a.out.h>中定义，或者#include <exec.h>。这些文件具有一个“魔术号”，存储在文件开头附近的某个特定位置，该位置告诉UNIX操作系统该文件是二进制可执行文件，以及其中的几种类型中的哪一种。“魔术”的概念已经通过扩展应用于数据文件。任何在一个小的固定偏移量处具有一些不变标识符的文件通常都可以用这种方式来描述。标识这些文件的信息是从已编译的魔术文件/usr/share/misc/magic.mgc中读取的，如果编译的文件不存在，则从/usr/share/misc/magc目录中读取这些文件。此外，如果$HOME/.magic.mgc或$home/.magic存在，则它将优先用于系统魔术文件。如果/etc/magic存在，它将与其他魔术文件一起使用。")]),t._v(" "),s("p",[t._v("如果文件与魔术文件中的任何条目不匹配，则检查它是否为文本文件。ASCII、ISO-8859-x、非ISO 8位扩展-ASCII字符集(例如在Macintosh和IBM PC系统上使用的字符集)、UTF-8编码Unicode、UTF-16编码Unicode和EBCDIC字符集可以通过构成每组可打印文本的不同范围和字节序列来区分。如果一个文件通过了这些测试中的任何一个，就会报告它的字符集。ASCII、ISO-8859-x、UTF-8和Extended-ASCII文件被识别为“Text”，因为它们在几乎任何终端上都是可读的；UTF-16和EBCDIC仅仅是“字符数据”，因为它们包含文本，但是文本需要翻译才能被读取。此外，文件将试图确定文本类型文件的其他特征.如果文件的行被CR、CRLF或Nel终止，而不是Unix标准LF，这将被报告。还将识别包含嵌入转义序列或过度醒目的文件。")]),t._v(" "),s("p",[t._v("一旦文件确定了在文本类型文件中使用的字符集，它将试图确定该文件是用哪种语言编写的。语言测试寻找特定的字符串(Cf. #include<names.h>)，它可以出现在文件的前几个块中的任何地方。例如，关键字.br表示文件很可能是troff(1)输入文件，正如关键字struct表示C程序一样。这些测试不如前两组可靠，因此它们是最后执行的。语言测试例程还测试一些混类(例如tar(1)存档)。")]),t._v(" "),s("p",[t._v("任何无法标识为已在上述任何字符集中写入的文件，都被简单地称为“data”。")]),t._v(" "),s("h2",{attrs:{id:"适用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[t._v("#")]),t._v(" 适用范围")]),t._v(" "),s("div",{staticClass:"svg redhat"},[t._v("RedHat")]),t._v(" "),s("div",{staticClass:"svg rhel"},[t._v("RHEL")]),t._v(" "),s("div",{staticClass:"svg ubuntu"},[t._v("Ubuntu")]),t._v(" "),s("div",{staticClass:"svg centos"},[t._v("CentOS")]),t._v(" "),s("div",{staticClass:"svg debian"},[t._v("Debian")]),t._v(" "),s("div",{staticClass:"svg deepin"},[t._v("Deepin")]),t._v(" "),s("div",{staticClass:"svg suse"},[t._v("SUSE")]),t._v(" "),s("div",{staticClass:"svg opensuse"},[t._v("openSUSE")]),t._v(" "),s("div",{staticClass:"svg fedora"},[t._v("Fedora")]),t._v(" "),s("div",{staticClass:"svg linuxmint"},[t._v("Linux Mint")]),t._v(" "),s("div",{staticClass:"svg alpinelinux"},[t._v("Alpine Linux")]),t._v(" "),s("div",{staticClass:"svg archlinux"},[t._v("Arch Linux")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  filename\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-b, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--brief")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出结果的时候，不显示文件名")]),t._v("\n-C, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--compile")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编写一个magic.mgc输出文件，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中包含魔术文件或目录的预解析版本")]),t._v("\n-c, --checking-printout            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以检查魔术文件的解析形式的打印输出。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这通常与-m标志一起使用，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用于在安装新的魔术文件之前调试它。")]),t._v("\n-e, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--exclude")]),t._v(" testname             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从确定文件类型的测试列表中排除在testname")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中指定的测试。有效的测试名称是：")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apptype，EMX应用程序类型(仅在EMX上)。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# text，各种类型的文本文件(此测试将尝试猜测")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文本编码，而不管“编码”选项的设置如何)")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# encoding，用于软魔术测试的不同文本编码")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tokens，在文本文件中查找已知的令牌")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cdf，打印复合文档文件的详细信息")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# compress，检查并查看压缩文件")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# elf，打印ELF文件的细节。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# soft，查阅魔法档案。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar，检查tar文件")]),t._v("\n-F, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--separator")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定文件名和结果之间的分隔符，默认：(冒号)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" namefile, --files-from namefile "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从给定的文件中，读取文件名，然后操作")]),t._v("\n-h, --no-dereference               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选项导致符号链接不被遵循(在支持符号链接的系统上)。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有定义环境变量POSIXLY_TRIDER，则这是默认的")]),t._v("\n-i, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mime")]),t._v("                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导致文件命令输出MIME类型字符串，而不是更传统的人类")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可读的字符串。因此，它可以说‘text/plain;；")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# charset=us-ascii’而不是‘ASCII文本’。为了使此选项工作，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件更改了它处理命令本身识别的文件的方式(例如许多文本文")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 件类型、目录等)，并使用了另一个“魔术”文件。(见下文档案部分)")]),t._v("\n--mime-type, --mime-encoding       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类似-i，但只打印指定的元素。")]),t._v("\nk, --keep-going                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一次匹配别停，继续。随后的匹配将具有字符串‘\\012-’。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (如果需要换行符，请参见‘-r’选项。)")]),t._v("\n-L, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dereference")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选项导致符号链接被遵循，就像ls(1)中的同名选项(在支持符号")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 链接的系统上)。如果定义了环境变量POSIXLY_TRIDER，则这是默认的")]),t._v("\n-m, --magic-file magicfiles        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定包含魔术的文件和目录的备用列表。这可以是单个项目，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也可以是冒号分隔的列表。如果在文件或目录旁边找到已编译的魔术文件，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 则将使用它。")]),t._v("\n-N, --no-pad                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让文件名在输出中对齐                          ")]),t._v("\n-n, --no-buffer                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查每个文件后，强迫stdout被刷新。这只有在检查文件列表时才有用。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它用于希望从管道输出文件类型的程序。")]),t._v("\n-p, --preserve-date                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在支持utime(2)或utime(2)的系统上，尝试保留分析过的文件的访问时间，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假装文件从未读取过它们。")]),t._v("\n-r, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--raw")]),t._v("                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不要将不可打印的字符翻译为\\ooo。通常，文件将不可打印的字符转换为")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它们的八进制表示形式")]),t._v("\n-s, --special-files                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通常，文件只尝试读取和确定STAT(2)报告是普通文件的参数文件的类型。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这可以防止出现问题，因为读取特殊文件可能会产生特殊的后果。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定-s选项会导致file也读取参数文件，这些参数文件是块文件或字符特殊文件。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这对于确定原始磁盘分区中数据的文件系统类型非常有用，这些分区是块特殊文件。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此选项还会导致文件忽略stat(2)所报告的文件大小，因为在某些系统上，")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它报告原始磁盘分区的大小为零。")]),t._v("\n-z, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--uncompress")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 试着查看压缩文件")]),t._v("\n-0, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--print0")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在文件名结束后输出空字符‘\\0’。很好地削减了产量。")]),t._v("\n                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这不影响仍然打印的分隔符。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-z")]),t._v("                                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 尝试读取压缩文件的内容")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示帮助文档")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示命令版本信息")]),t._v("\n")])])]),s("h2",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("p",[t._v("文件在成功时返回0，在错误时返回非零。如果文件操作数命名的文件不存在，无法读取，或者无法确定由文件操作数命名的文件的类型，则不认为这是影响退出状态的错误。")]),t._v(" "),s("h2",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),s("p",[t._v("环境变量MAGIC可以用来设置默认的魔术文件名。如果设置了该变量，那么文件将不会尝试打开$HOME/.magic。文件酌情将‘.mgc’添加到此变量的值中。环境变量POSIXLY_RIDER控制(在支持符号链接的系统上)，文件是否会尝试遵循符号链接。如果设置了，那么文件将遵循符号链接，否则就不会。这也是由-l和-h选项控制的。")]),t._v(" "),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sogrey@bogon demos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" test.txt\ntest.txt: UTF-8 Unicode text\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sogrey@bogon demos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" -F. test.txt\ntest.txt. UTF-8 Unicode text\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);