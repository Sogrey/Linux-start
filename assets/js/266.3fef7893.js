(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{581:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"swapoff-关闭指定的交换空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swapoff-关闭指定的交换空间"}},[s._v("#")]),s._v(" swapoff - 关闭指定的交换空间")]),s._v(" "),a("p",[s._v("swapoff命令 用于关闭指定的交换空间（包括交换文件和交换分区）。swapoff实际上为swapon的符号连接，可用来关闭系统的交换区。")]),s._v(" "),a("p",[s._v("关闭交换分区，同时可以刷新交换分区的缓存。关闭交换分区后，使用free指令查看内存，swap数值会减少。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("swapoff  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  specialfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nswapoff  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行的时候显示详细信息")]),s._v("\n-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭所有的交换分区")]),s._v("\n\n-V, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示版本信息")]),s._v("\n-h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("关闭所有的交换分区")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ swapoff –a   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭所有交换分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看内存使用状态")]),s._v("\n        total       used       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("     shared    buffers   cached\nMem:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1659316")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("678908")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("980408")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85608")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("369308")]),s._v("\n-/+ buffers/cache:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("223992")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1435324")]),s._v("\nSwap:            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#swap分区不使用")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);