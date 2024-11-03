(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{482:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"last-列出目前与过去登入系统的用户相关信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-列出目前与过去登入系统的用户相关信息"}},[s._v("#")]),s._v(" last - 列出目前与过去登入系统的用户相关信息")]),s._v(" "),t("p",[s._v("last命令 用于显示用户最近登录信息。单独执行last命令，它会读取/var/log/wtmp的文件，并把该给文件的内容记录的登入系统的用户名单全部显示出来。")]),s._v(" "),t("p",[s._v("显示以前登录过的用户信息，last指令会搜索/var/log/wtmp文件（或者是经过-f选项指定的文件），然后列出文件中所有的用户信息。如果执行last指令时提示“last /var/log/wtmp∶ NO such file or directory”,则需要使用指令touch /var/log/wtmp手工创建此文件")]),s._v(" "),t("p",[s._v("lastb指令用来显示登录失败的用户信息，其用法和last一样，对应的日志文件是/var/log/btmp")]),s._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),t("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),t("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),t("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),t("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),t("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),t("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),t("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),t("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),t("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),t("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),t("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),t("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("last  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-adFiowx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" YYYYMMDDHHMMSS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nlastb  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-adFiowx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 文件名               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定登录的日志文件（默认是/var/log/wtmp）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-num")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定last显示多少行信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" num                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 和“-num”一样")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不显示主机名字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在最后一列显示主机名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将非本地登录的用户ip转换成主机名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有的登录和注销时间和日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取旧的日志文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示用户名和域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示系统关机信息和运行级别的变化信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("YYYYMMDDHHMMSS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示指定时间的登录信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示指定用户的登录信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示指定终端的登录信息，last tty1 = last 1")]),s._v("\n")])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("p",[s._v("显示最近登录的5条信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ last "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-5")]),s._v("\nsogrey   pts/0        :0               Thu Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":32   still logged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("   \nsogrey   :0           :0               Thu Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":30   still logged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("   \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("   system boot  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-862.14.1. Thu Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":29 - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":33  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:04"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   pts/0        :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":18 - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":35  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:16"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   :0           :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":12 - crash "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("+00:16"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \n\nwtmp begins Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" 01:55:51 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])]),t("p",[s._v("显示用户weijie和root在8月9号的登录信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ last "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021062500000")]),s._v(" sogrey\nsogrey   pts/0        :0               Thu Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":32   still logged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("   \nsogrey   :0           :0               Thu Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":30   still logged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("   \nsogrey   pts/0        :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":18 - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":35  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:16"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   :0           :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":12 - crash "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("+00:16"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \nsogrey   pts/1        :0               Fri Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" 00:26 - 00:32  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:05"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   pts/0        :0               Fri Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" 00:21 - 00:31  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:09"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   :0           :0               Fri Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" 00:18 - crash "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("+22:53"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \nsogrey   pts/0        :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":55 - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":10  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:14"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nsogrey   pts/0        :0               Wed Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":48 - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":54  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00:05"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".    \n\nwtmp begins Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" 01:55:51 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])])]),t("p",[s._v("显示终端tty1的登录信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ last "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于last tty1")]),s._v("\n\nwtmp begins Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" 01:55:51 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ last tty1\n\nwtmp begins Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" 01:55:51 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);