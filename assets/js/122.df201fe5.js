(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{440:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"groupmod-更改群组识别码或名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#groupmod-更改群组识别码或名称"}},[s._v("#")]),s._v(" groupmod - 更改群组识别码或名称")]),s._v(" "),a("p",[s._v("groupmod命令 更改群组识别码或名称。需要更改群组的识别码或名称时，可用groupmod指令来完成这项工作。")]),s._v(" "),a("p",[s._v("修改组的基本信息，包括组名称、组ID等信息。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupmod")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  group\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" gid                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定组id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" name                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定组名")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" /etc/group "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看组信息")]),s._v("\nsogrey:123456:1000:sogrey\nvboxsf:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(":983:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" sogrey01 sogrey\nbash: /usr/sbin/groupmod: 权限不够\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" sogrey01 sogrey "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改组id：955，组名字：sogrey01")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" sogrey 的密码：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" /etc/group\nvboxsf:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(":983:\nsogrey01:123456:955:sogrey "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看组信息，已经修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon 文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);