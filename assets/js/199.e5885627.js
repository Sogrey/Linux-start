(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{516:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"modprobe-自动处理可载入模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modprobe-自动处理可载入模块"}},[a._v("#")]),a._v(" modprobe - 自动处理可载入模块")]),a._v(" "),s("p",[a._v("modprobe命令 用于智能地向内核中加载模块或者从内核中移除模块。")]),a._v(" "),s("p",[a._v("modprobe可载入指定的个别模块，或是载入一组相依的模块。modprobe会根据depmod所产生的相依关系，决定要载入哪些模块。若在载入过程中发生错误，在modprobe会卸载整组的模块。")]),a._v(" "),s("h2",{attrs:{id:"适用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[a._v("#")]),a._v(" 适用范围")]),a._v(" "),s("div",{staticClass:"svg redhat"},[a._v("RedHat")]),a._v(" "),s("div",{staticClass:"svg rhel"},[a._v("RHEL")]),a._v(" "),s("div",{staticClass:"svg ubuntu"},[a._v("Ubuntu")]),a._v(" "),s("div",{staticClass:"svg centos"},[a._v("CentOS")]),a._v(" "),s("div",{staticClass:"svg debian"},[a._v("Debian")]),a._v(" "),s("div",{staticClass:"svg deepin"},[a._v("Deepin")]),a._v(" "),s("div",{staticClass:"svg suse"},[a._v("SUSE")]),a._v(" "),s("div",{staticClass:"svg opensuse"},[a._v("openSUSE")]),a._v(" "),s("div",{staticClass:"svg fedora"},[a._v("Fedora")]),a._v(" "),s("div",{staticClass:"svg linuxmint"},[a._v("Linux Mint")]),a._v(" "),s("div",{staticClass:"svg alpinelinux"},[a._v("Alpine Linux")]),a._v(" "),s("div",{staticClass:"svg archlinux"},[a._v("Arch Linux")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("modprobe  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("模块名：要加载或移除的模块名称。")]),a._v(" "),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("-a, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--all")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 载入全部的模块；")]),a._v("\n-c, --show-conf     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示所有模块的设置信息；")]),a._v("\n-d, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--debug")]),a._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用排错模式；")]),a._v("\n-l, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示可用的模块；")]),a._v("\n-r, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--remove")]),a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 模块闲置不用时，即自动卸载模块；")]),a._v("\n-t, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定模块类型；")]),a._v("\n-v, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verbose")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行时显示详细的信息；")]),a._v("\n-V, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示版本信息；")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-help")]),a._v("               "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示帮助。")]),a._v("\n")])])]),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[a._v("#")]),a._v(" 举例")]),a._v(" "),s("p",[a._v("查看modules的配置文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("modprobe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v("\n")])])]),s("p",[a._v("这里，可以查看modules的配置文件，比如模块的alias别名是什么等。会打印许多行信息，例如其中的一行会类似如下：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" symbol:ip_conntrack_unregister_notifier ip_conntrack\n")])])]),s("p",[a._v("列出内核中所有已经或者未挂载的所有模块：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("modprobe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])])]),s("p",[a._v("这里，我们能查看到我们所需要的模块，然后根据我们的需要来挂载；其实modprobe -l读取的模块列表就位于/lib/modules/"),s("code",[a._v("uname -r")]),a._v("目录中；其中uname -r是内核的版本，例如输出结果的其中一行是：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/lib/modules/2.6.18-348.6.1.el5/kernel/net/netfilter/xt_statistic.ko\n")])])]),s("p",[a._v("挂载vfat模块：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("modprobe vfat\n")])])]),s("p",[a._v("这里，使用格式modprobe 模块名来挂载一个模块。挂载之后，用lsmod可以查看已经挂载的模块。模块名是不能带有后缀的，我们通过modprobe -l所看到的模块，都是带有.ko或.o后缀。")]),a._v(" "),s("p",[a._v("移除已经加载的模块：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("modprobe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" 模块名\n")])])]),s("p",[a._v("这里，移除已加载的模块，和rmmod功能相同。")])])}),[],!1,null,null,null);s.default=r.exports}}]);