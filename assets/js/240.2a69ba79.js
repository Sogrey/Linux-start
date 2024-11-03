(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{565:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rm-删除文件和目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm-删除文件和目录"}},[s._v("#")]),s._v(" rm - 删除文件和目录")]),s._v(" "),t("p",[s._v("默认情况下不会删除目录.")]),s._v(" "),t("p",[s._v("rm 命令 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。")]),s._v(" "),t("p",[s._v("注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以用-i选项，这个选项在使用文件扩展名字符删除多个文件时特别有用。使用这个选项，系统会要求你逐一确定是否要删除。这时，必须输入y并按Enter键，才能删除文件。如果仅按Enter键或其他字符，文件不会被删除。")]),s._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),t("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),t("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),t("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),t("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),t("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),t("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),t("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),t("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),t("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),t("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),t("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),t("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-f, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制执行，不交互")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交互模式，每删除一个文件都要询问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在删除三个以上的文件之前，或者在递归删除之前，")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示一次。“-I“的侵扰性不如“-i”，")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但仍能免受大多数错误的侵扰。")]),s._v("\n    --interactive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WHEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据时间提示：从不（never），一次(-i)，")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或始终(-i)。没有指定WHEN，总是提示")]),s._v("\n    --one-file-system           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归删除层次结构时，跳过与相应命令行参数不同的")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件系统上的任何目录。")]),s._v("\n    --no-preserve-root          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除根目录")]),s._v("\n    --preserve-root             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不删除根目录，默认的")]),s._v("\n-r, -R, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--recursive")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归的方式删除子目录")]),s._v("\n-v, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示详细执行过程")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("rm")]),s._v("不删除目录。使用"),t("code",[s._v("--recursive")]),s._v(" ("),t("code",[s._v("-r")]),s._v(" or "),t("code",[s._v("-R")]),s._v(")选项也可以删除每个列出的目录及其所有内容。要删除名称以"),t("code",[s._v("-")]),s._v("开头的文件，例如"),t("code",[s._v("-foo")]),s._v("，请使用以下命令之一：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  --  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-foo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  ./-foo\n")])])]),t("p",[s._v("注意，如果使用rm删除文件，通常可以恢复该文件的内容。如果您想要更多的保证内容是真正不可恢复的，请考虑使用shred。")]),s._v(" "),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbackup  demos  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("  test2.txt  test3.txt  test4.txt  test.txt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" test*\nrm: 无法删除"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 是一个目录\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbackup  demos  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" test/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbackup  demos\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);