(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{373:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chfn-用来改变finger命令显示的信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chfn-用来改变finger命令显示的信息"}},[s._v("#")]),s._v(" chfn - 用来改变finger命令显示的信息")]),s._v(" "),a("p",[s._v("chfn命令 用来改变finger命令显示的信息。这些信息都存放在/etc目录里的passwd文件里。若不指定任何选项，则chfn命令会进入问答式界面。")]),s._v(" "),a("p",[s._v("chfn指令可以改变通过finger指令查看到的信息。此信息存储在/etc/passwd文件中，并由Finger程序显示。LinuxFinger命令将显示可由chfn更改的四条信息：您的真名、您的工作区和电话以及您的家庭电话。这四条信息中的任何一条都可以在命令行上指定。如果命令行上没有提供任何信息，chfn将进入交互模式。在交互模式下，chfn将提示每个字段。在提示符下，您可以输入新信息，也可以按“返回”使字段保持不变。输入关键字“None”使字段为空。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("chfn  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  user\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-f, --full-name                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置真实姓名")]),s._v("\n-o, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--office")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置办公室地址")]),s._v("\n-h, --home-phone                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置家庭电话")]),s._v("\n-p, --office-phone                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置办公室电话")]),s._v("\n\n-u, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n-v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("修改用户真实姓名和家庭电话")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ chfn "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" sogrey "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" root   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改信息")]),s._v("\nChanging finger information "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root.\nFinger information changed.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ finger root                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看信息，已经修改成功")]),s._v("\nLogin: root                   Name: sogrey\nDirectory: /root                      Shell: /bin/bash\nOffice: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nOn since 五 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":02 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" on tty1 from :0\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" hours idle\nOn since 六 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" 07:36 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" on pts/0 from :0.0\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" hours "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" minutes idle\nOn since 四 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" 08:55 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" on pts/1 from :0.0\nNew mail received 六 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":05 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     Unread since 二 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" 09:22 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nNo Plan.\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);