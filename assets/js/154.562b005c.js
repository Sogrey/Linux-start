(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{470:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"iptables-save-备份iptables的表配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iptables-save-备份iptables的表配置"}},[a._v("#")]),a._v(" iptables-save - 备份iptables的表配置")]),a._v(" "),t("p",[a._v("iptables-save命令 用于将linux内核中的iptables表导出到标准输出设备商，通常，使用shell中I/O重定向功能将其输出保存到指定文件中。")]),a._v(" "),t("p",[a._v("iptables-save指令可以将内核中当前的iptables配置导出到标准输出。通过IO重定向功能来定向输出到文件。")]),a._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[a._v("#")]),a._v(" 适用范围")]),a._v(" "),t("div",{staticClass:"svg redhat"},[a._v("RedHat")]),a._v(" "),t("div",{staticClass:"svg rhel"},[a._v("RHEL")]),a._v(" "),t("div",{staticClass:"svg ubuntu"},[a._v("Ubuntu")]),a._v(" "),t("div",{staticClass:"svg centos"},[a._v("CentOS")]),a._v(" "),t("div",{staticClass:"svg debian"},[a._v("Debian")]),a._v(" "),t("div",{staticClass:"svg deepin"},[a._v("Deepin")]),a._v(" "),t("div",{staticClass:"svg suse"},[a._v("SUSE")]),a._v(" "),t("div",{staticClass:"svg opensuse"},[a._v("openSUSE")]),a._v(" "),t("div",{staticClass:"svg fedora"},[a._v("Fedora")]),a._v(" "),t("div",{staticClass:"svg linuxmint"},[a._v("Linux Mint")]),a._v(" "),t("div",{staticClass:"svg alpinelinux"},[a._v("Alpine Linux")]),a._v(" "),t("div",{staticClass:"svg archlinux"},[a._v("Arch Linux")]),a._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("iptables-save  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("-c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--counters")]),a._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定要保存的iptables表时，保存当权的数据包计算器和字节计数器的值；")]),a._v("\n-t, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--table")]),a._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定要保存的表的名称。")]),a._v("\n-M, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--modprobe")]),a._v(" modprobe_program "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定调制解调器探测程序的路径。默认情况下，iptables-Save将检查“/proc/sys/kernel/modprobe”，以确定可执行文件的路径。")]),a._v("\n")])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[a._v("#")]),a._v(" 举例")]),a._v(" "),t("p",[a._v("显示iptables配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ iptables-save –c   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示计数器信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Generated by iptables-save v1.4.7 on Sun Sep 30 16:20:14 2018")]),a._v("\n*filter\n:INPUT ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:FORWARD ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:OUTPUT ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1802")]),a._v(":148673"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("14011")]),a._v(":18173274"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" RELATED,ESTABLISHED "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27")]),a._v(":2268"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" icmp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("585")]),a._v(":30820"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" lo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4526")]),a._v(":2073410"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" eth+ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" wlan+ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" NEW "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" NEW "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n")])])]),t("p",[a._v("导出指定表的信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ iptables-save "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nat "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出nat表的信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Generated by iptables-save v1.4.7 on Sun Sep 30 16:21:17 2018")]),a._v("\n*nat\n:PREROUTING ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6181")]),a._v(":2947647"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:POSTROUTING ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("573")]),a._v(":30328"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:OUTPUT ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2466")]),a._v(":479800"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" POSTROUTING "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" eth+ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" MASQUERADE\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" POSTROUTING "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wlan+ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" MASQUERADE\nCOMMIT\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Completed on Sun Sep 30 16:21:17 2018")]),a._v("\n")])])]),t("p",[a._v("备份iptables的表配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ iptables-save "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" filter "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" iptables.bak\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" iptables.bak\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Generated by iptables-save v1.3.5 on Thu Dec 26 21:25:15 2013")]),a._v("\n*filter\n:INPUT DROP "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("48113")]),a._v(":2690676"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:FORWARD accept "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:OUTPUT ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3381959")]),a._v(":1818595115"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" lo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" RELATED,ESTABLISHED "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" icmp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" OUTPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" lo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\nCOMMIT\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);