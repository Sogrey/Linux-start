(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{559:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rmmod-从运行的内核中移除指定的内核模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rmmod-从运行的内核中移除指定的内核模块"}},[s._v("#")]),s._v(" rmmod - 从运行的内核中移除指定的内核模块")]),s._v(" "),a("p",[s._v("rmmod命令 用于从当前运行的内核中移除指定的内核模块。执行rmmod指令，可删除不需要的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放如核心。你可以将这些功能编译成一个个单独的模块，待有需要时再分别载入它们。")]),s._v(" "),a("p",[s._v("rmmod指令用来卸载不需要使用的内核模块。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rmmod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" modulename "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示详细执行过程")]),s._v("\n-f, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 轻质卸载")]),s._v("\n-w, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--wait")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果拒绝卸载，那么久等待知道模块不在使用，然后卸载")]),s._v("\n-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--syslog")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将错误送到syslog，默认送到标准输出")]),s._v("\n-V, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息，并且退出")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ lsmod "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看模块，nfs没人使用")]),s._v("\nModule                  Size  Used by\nfuse                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91880")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \nxt_CHECKSUM            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12549")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nipt_MASQUERADE         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12678")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \nnf_nat_masquerade_ipv4    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13412")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ipt_MASQUERADE\ntun                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31665")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \ndevlink                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42368")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nip6t_rpfilter          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12595")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nipt_REJECT             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12541")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" \nnf_reject_ipv4         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13373")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ipt_REJECT\nip6t_REJECT            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12625")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \nnf_reject_ipv6         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13717")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ip6t_REJECT\nxt_conntrack           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12760")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" \nip_set                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40898")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nnfnetlink              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14519")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ip_set\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ndrm                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("397980")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" ttm,drm_kms_helper,vmwgfx\ni2c_core               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63151")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" drm,i2c_piix4,drm_kms_helper\nlibata                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("247431")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" pata_acpi,ata_generic,ata_piix\ndm_mirror              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22289")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \ndm_region_hash         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20813")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" dm_mirror\ndm_log                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18411")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" dm_region_hash,dm_mirror\ndm_mod                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124191")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" dm_log,dm_mirror\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);