(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{327:function(t,s,a){},369:function(t,s,a){"use strict";var n=a(327);a.n(n).a},393:function(t,s,a){"use strict";a.r(s);a(369);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tmpwatch-删除最近一段时间没有访问的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tmpwatch-删除最近一段时间没有访问的文件"}},[t._v("#")]),t._v(" tmpwatch - 删除最近一段时间没有访问的文件")]),t._v(" "),a("p",[t._v("删除最近一段时间没有访问的文件，时间以小时为单位，节省磁盘空间。tmpwatch递归删除给定时间未被访问的文件。通常，它用于清理用于临时保存空间(如/tmp)的目录。当更改目录时，tmpwatch对可能的争用条件非常敏感，如果检测到错误，就会退出。它不遵循它正在清理的目录中的符号链接(即使给出一个符号链接作为它的参数)，它不会切换文件系统，跳过根用户的lost+found目录，只删除空目录、常规文件和符号链接。")]),t._v(" "),a("p",[t._v("默认情况下，tmpwatch根据文件的atime(访问时间)，而不是它们的Mtime(修改时间)来确定文件的日期。如果文件在"),a("code",[t._v("ls-l")]),t._v("暗示应该删除时没有被移除，请使用"),a("code",[t._v("ls-u")]),t._v("检查它们的数据，以确定这是否解释了问题的原因。")]),t._v(" "),a("p",[t._v("如果指定了"),a("code",[t._v("--atime")]),t._v(","),a("code",[t._v("--ctime")]),t._v("或者"),a("code",[t._v("--mtime")]),t._v("选项，那么删除文件的时间由他们中的最大值决定。如果"),a("code",[t._v("--dirmtime")]),t._v("选项意味着忽略目录的atime，即使使用了"),a("code",[t._v("—atime")]),t._v("选项。")]),t._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[t._v("#")]),t._v(" 适用范围")]),t._v(" "),a("div",{staticClass:"svg redhat"},[t._v("RedHat")]),t._v(" "),a("div",{staticClass:"svg rhel"},[t._v("RHEL")]),t._v(" "),a("div",{staticClass:"svg ubuntu"},[t._v("Ubuntu")]),t._v(" "),a("div",{staticClass:"svg debian"},[t._v("Debian")]),t._v(" "),a("div",{staticClass:"svg deepin"},[t._v("Deepin")]),t._v(" "),a("div",{staticClass:"svg suse"},[t._v("SUSE")]),t._v(" "),a("div",{staticClass:"svg opensuse"},[t._v("openSUSE")]),t._v(" "),a("div",{staticClass:"svg fedora"},[t._v("Fedora")]),t._v(" "),a("div",{staticClass:"svg linuxmint"},[t._v("Linux Mint")]),t._v(" "),a("div",{staticClass:"svg alpinelinux"},[t._v("Alpine Linux")]),t._v(" "),a("div",{staticClass:"svg archlinux"},[t._v("Arch Linux")]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tmpwatch  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\ntmpwatch  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-MUadfqstvx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--verbose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--nodirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--nosymlinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--fuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--quiet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--atime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--mtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--ctime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--dirmtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--exclude path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--exclude-user user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirs")]),t._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("-u, --atime                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据文件的atime(访问时间)做出删除文件的决定。")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请注意，定期更新的文件系统扫描使目录保持最近的状态。")]),t._v("\n-m, --mtime                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据文件的Mtime(修改时间)而不是atime做出删除")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件的决定。")]),t._v("\n-c,  -ctime                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据文件的ctime(Inode Changing Time)而不是")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atime来决定删除文件；对于目录，根据mtime做出决定")]),t._v("\n-M, --dirmtime                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据目录的Mtime(修改时间)而不是atime作出删除")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录的决定；完全忽略目录的atime")]),t._v("\n-a, -all                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除所有文件类型，而不仅仅是常规文件、")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 符号链接和目录。")]),t._v("\n-d, --nodirs                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不要尝试删除目录，即使它们是空的。")]),t._v("\n-f, -force                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制删除，即使root用户没有写的权利")]),t._v("\n-l, --nosymlinks                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不删除符号链接")]),t._v("\n-q, --quite                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只报告致命错误")]),t._v("\n-s, --fuser                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 尝试在删除文件之前使用“fuser”命令查看文件是否已打开。")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认情况下未启用。在某些情况下确实有帮助，但不是全部。")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 依赖于/sbin中安装的fuser。不支持HPUX或Solaris")]),t._v("\n-t, --test                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不删除，只是演示要做什么")]),t._v("\n-U, --exclude-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不删除指定所有者的文件，可以指定用户名，也可以指定用户ID")]),t._v("\n-v, --verbose                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示详细信息")]),t._v("\n-x, --exclude                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳过目录及其内部文件，如果路径不存在，")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 则它必须是不包含符号链接的绝对路径。")]),t._v("\n-X --exclude-pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pattern    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳过路径匹配模式；如果目录匹配模式，")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 则其中包含的所有文件也将被跳过。")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模式必须匹配不包含符号链接的绝对路径。")]),t._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nbackup  demos  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("  test2.txt  test3.txt  test4.txt  test.txt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ tmpwatch "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除当前目录1小时内没有访问的文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ tmpwatch -U root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不删除root用户的文件")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);