(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{590:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"tailf-在屏幕上显示指定文件的末尾若干行内容-通常用于日志文件的跟踪输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tailf-在屏幕上显示指定文件的末尾若干行内容-通常用于日志文件的跟踪输出"}},[a._v("#")]),a._v(" tailf - 在屏幕上显示指定文件的末尾若干行内容，通常用于日志文件的跟踪输出")]),a._v(" "),t("p",[a._v("tailf命令几乎等同于tail -f，严格说来应该与tail --follow=name更相似些。当文件改名之后它也能继续跟踪，特别适合于日志文件的跟踪（follow the growth of a log file）。与tail -f不同的是，如果文件不增长，它不会去访问磁盘文件。tailf特别适合那些便携机上跟踪日志文件，因为它能省电，因为减少了磁盘访问。tailf命令不是个脚本，而是一个用C代码编译后的二进制执行文件，某些Linux安装之后没有这个命令。")]),a._v(" "),t("p",[a._v("tailf和tail -f的区别")]),a._v(" "),t("ul",[t("li",[a._v("tailf 总是从文件开头一点一点的读， 而tail -f 则是从文件尾部开始读")]),a._v(" "),t("li",[a._v("tailf check文件增长时，使用的是文件名， 用stat系统调用；而tail -f 则使用的是已打开的文件描述符； 注：tail 也可以做到类似跟踪文件名的效果； 但是tail总是使用fstat系统调用，而不是stat系统调用；结果就是：默认情况下，当tail的文件被偷偷删除时，tail是不知道的，而tailf是知道的。")])]),a._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[a._v("#")]),a._v(" 适用范围")]),a._v(" "),t("div",{staticClass:"svg redhat"},[a._v("RedHat")]),a._v(" "),t("div",{staticClass:"svg rhel"},[a._v("RHEL")]),a._v(" "),t("div",{staticClass:"svg ubuntu"},[a._v("Ubuntu")]),a._v(" "),t("div",{staticClass:"svg centos"},[a._v("CentOS")]),a._v(" "),t("div",{staticClass:"svg debian"},[a._v("Debian")]),a._v(" "),t("div",{staticClass:"svg deepin"},[a._v("Deepin")]),a._v(" "),t("div",{staticClass:"svg suse"},[a._v("SUSE")]),a._v(" "),t("div",{staticClass:"svg opensuse"},[a._v("openSUSE")]),a._v(" "),t("div",{staticClass:"svg fedora"},[a._v("Fedora")]),a._v(" "),t("div",{staticClass:"svg linuxmint"},[a._v("Linux Mint")]),a._v(" "),t("div",{staticClass:"svg alpinelinux"},[a._v("Alpine Linux")]),a._v(" "),t("div",{staticClass:"svg archlinux"},[a._v("Arch Linux")]),a._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("tailf logfile "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 动态跟踪日志文件logfile，最初的时候打印文件的最后10行内容。")]),a._v("\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("-n, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--lines")]),a._v(" NUMBER  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出最后数行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-NUMBER")]),a._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 与NUMBER相同 `-n NUMBER'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示帮助文档")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示命令版本信息")]),a._v("\n")])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[a._v("#")]),a._v(" 举例")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon newDir3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ tailf test2.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("212")]),a._v("\n\n^C\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon newDir3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ tailf "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" test2.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("212")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);