(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{614:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"userdel-用于删除给定的用户以及与用户相关的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userdel-用于删除给定的用户以及与用户相关的文件"}},[s._v("#")]),s._v(" userdel - 用于删除给定的用户以及与用户相关的文件")]),s._v(" "),a("p",[s._v("userdel命令 用于删除给定的用户，以及与用户相关的文件。若不加选项，则仅删除用户帐号，而不删除相关文件。")]),s._v(" "),a("p",[s._v("删除用户，如果没有附加选项，仅删除用户，不删除相关文件。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  user\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户的同时，删除其相关文件")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("userdel命令很简单，比如我们现在有个用户linuxde，其家目录位于/var目录中，现在我们来删除这个用户：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" linuxde       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户linuxde，但不删除其家目录及文件；")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" linuxde    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户linuxde，其家目录及文件一并删除；")]),s._v("\n")])])]),a("p",[s._v("请不要轻易用-r选项；他会删除用户的同时删除用户所有的文件和目录，切记如果用户目录下有重要的文件，在删除前请备份。")]),s._v(" "),a("p",[s._v("其实也有最简单的办法，但这种办法有点不安全，也就是直接在/etc/passwd中删除您想要删除用户的记录；但最好不要这样做，/etc/passwd是极为重要的文件，可能您一不小心会操作失误。")]),s._v(" "),a("p",[s._v("不使用选项，删除用户")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" /etc/passwd\nuserTmp:x:1001:1001::/home/userTmp:/bin/bash\nuser02:x:600:1002:test user:/home/other:/bin/bash\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" userTmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /home/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#相关文件还存在")]),s._v("\nlost+found  other  sogrey  userTmp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])]),a("p",[s._v("删除用户所有信息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" userTmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除用户，使用-r")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /home/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#相关文件也删除")]),s._v("\nlost+found  other  sogrey\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);