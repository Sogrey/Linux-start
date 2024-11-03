(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{458:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ifcfg-配置linux中的网络接口参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ifcfg-配置linux中的网络接口参数"}},[s._v("#")]),s._v(" ifcfg - 配置Linux中的网络接口参数")]),s._v(" "),t("p",[s._v("ifcfg命令 是一个Bash脚本程序，用来设置Linux中的网络接口参数。")]),s._v(" "),t("p",[s._v("ifcfg是一个简单的脚本替换iconfig命令，它可以设置网络接口的ip地址。")]),s._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),t("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),t("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),t("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),t("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),t("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),t("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),t("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),t("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),t("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),t("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),t("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),t("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ifcfg  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cmd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("device就是网卡设备，它可能有别名。cmd可以是add、delete、stop。address就是ip地址。")]),s._v(" "),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("p",[s._v("无")]),s._v(" "),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("p",[s._v("添加ip地址")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ifcfg eth0 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.250/24     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加地址250")]),s._v("\nForwarding is ON or its state is unknown "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". OK, No RDISC.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看网络信息")]),s._v("\neth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 \n          inet addr:192.168.0.250  Bcast:192.168.0.255  Mask:255.255.255.0\n          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:72250 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:83580745 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("79.7")]),s._v(" MiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:5842176 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(" MiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("删除ip地址")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ifcfg eth0 delete "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.250/24      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除网卡地址")]),s._v("\nForwarding is ON or its state is unknown "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". OK, No RDISC.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看网卡信息，ip地址已经删除")]),s._v("\neth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 \n          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:72251 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:83580745 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("79.7")]),s._v(" MiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:5842218 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(" MiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);