(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{419:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"export-为shell变量或函数设置导出属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-为shell变量或函数设置导出属性"}},[s._v("#")]),s._v(" export - 为shell变量或函数设置导出属性")]),s._v(" "),a("p",[s._v("export用来设置、删除、修改环境变量，改指令仅在本次登录有效。")]),s._v(" "),a("h2",{attrs:{id:"主要用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[s._v("定义一到多个变量并设置导出属性。")]),s._v(" "),a("li",[s._v("修改一到多个变量的值并设置导出属性。")]),s._v(" "),a("li",[s._v("删除一到多个变量的导出属性。")]),s._v(" "),a("li",[s._v("显示全部拥有导出属性的变量。")]),s._v(" "),a("li",[s._v("为一到多个已定义函数新增导出属性。")]),s._v(" "),a("li",[s._v("删除一到多个函数的导出属性。")]),s._v(" "),a("li",[s._v("显示全部拥有导出属性的函数。")])]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置变量名称为某一函数名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除某环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 限制变量的值必须是使用-o选项定义的set内置变量")]),s._v("\n")])])]),a("p",[s._v("如果变量名后面跟着“=word”，则变量的值设置为word。除非遇到无效的选项，否则导出返回退出状态为0，其中一个名称不是有效的shell变量名，或者-f提供的名称不是函数。")]),s._v(" "),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("显示所有环境变量")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".:/usr/local/src/jdk1.8.0_181/jre/lib/rt.jar:/usr/local/src/jdk1.8.0_181/lib/dt.jar:\n/usr/local/src/jdk1.8.0_181/lib/tools.jar"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("COLORTERM")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gnome-terminal"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CVS_RSH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh"')]),s._v("\n")])])]),a("p",[s._v("添加环境变量")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var_1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" var_1              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将变量导出为环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" var_1       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看环境变量，已经导出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var_1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ROOT"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])])]),a("p",[s._v("删除环境变量")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" var_1        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" var_1    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看环境变量，已经删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$  \n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);