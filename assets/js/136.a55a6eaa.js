(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{454:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hostname-显示和设置系统的主机名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-显示和设置系统的主机名"}},[s._v("#")]),s._v(" hostname - 显示和设置系统的主机名")]),s._v(" "),a("p",[s._v("hostname命令 用于显示和设置系统的主机名称。")]),s._v(" "),a("ul",[a("li",[s._v("环境变量 HOSTNAME 也保存了当前的主机名。")]),s._v(" "),a("li",[s._v("在使用 hostname 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 /etc/hosts 和 /etc/sysconfig/network 的相关内容并进行重启；也可以使用 hostnamectl 命令进行永久修改。")])]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-F file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置主机名称（或从文件获取）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-A"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-I"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示格式化的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示主机名称")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("yp,nis,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("domainname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("nisdomain"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-F file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 NIS 主机名称（或从文件获取）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("yp,nis,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("domainname                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示 NIS 主机名称")]),s._v("\n\ndnsdomainname                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示 DNS 主机名称")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" -V"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-h"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--help            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印信息并退出")]),s._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示详细执行过程")]),s._v("\n-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--alias")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示主机别名")]),s._v("\n-d, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--domain")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示主机dns域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从文件读取")]),s._v("\n-f, --fqdn, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--long")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示完全格式的域名")]),s._v("\n-A, --all-fqdns        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示机器的全部FQDNs")]),s._v("\n-i, --ip-address       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示指定主机的ip地址")]),s._v("\n-I, --all-ip-address   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示主机所有的地址")]),s._v("\n-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--short")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以短格式显示，仅显示从第一个点分开的部分")]),s._v("\n-y, --yp, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nis")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示nis域名")]),s._v("\n\n-h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n-V, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),a("h2",{attrs:{id:"fqdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fqdn"}},[s._v("#")]),s._v(" FQDN")]),s._v(" "),a("p",[s._v("不能用此命令更改FQDN(由hostname-fqdn返回)或DNS域名(由dnsdomainname返回)。系统的FQDN是resolver为主机名返回的名称。技术上：FQDN是由gethostname(2)返回的主机名。DNS域名是第一个点之后的部分。因此，如何更改取决于配置文件(通常在“/etc/host.conf”中)。通常(如果在DNS或NIS之前解析主机文件)，您可以在“/etc/host”中更改它。")]),s._v(" "),a("p",[s._v("如果一台机器有多个网络接口/地址，或者在移动环境中使用，那么它可能有多个FQDN/域名，或者根本没有。因此，避免使用“hostname -fqdn”、“hostname  --domain”和“dnsdomainname”。“hostname --ip-address”地址也受到同样的限制，因此也应该避免。")]),s._v(" "),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("显示主机名")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示完整名字")]),s._v("\nlocalhost.localdomain\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" –s  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示短格式名字")]),s._v("\nlocalhost       \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" –a   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示主机别名")]),s._v("\nlocalhost.localdomain localhost4 localhost4.localdomain4 localhost.localdomain loc\n")])])]),a("p",[s._v("显示主机ip")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);