(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{526:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nfsstat-列出nfs客户端和服务器的工作状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfsstat-列出nfs客户端和服务器的工作状态"}},[s._v("#")]),s._v(" nfsstat - 列出NFS客户端和服务器的工作状态")]),s._v(" "),a("p",[s._v("nfsstat命令 用于列出NFS客户端和服务器的工作状态。")]),s._v(" "),a("p",[s._v("nfsstat指令用来显示nfs客户端和服务器的活动信息。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nfsstat  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--server")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示服务器信息，默认还要显示客户端信息")]),s._v("\n-c, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--client")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示客户端信息")]),s._v("\n-n, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nfs")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示nfs信息，默认还要显示rpc信息")]),s._v("\n-m, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mounts")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示被加载的nfs文件信息信息")]),s._v("\n-r, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rpc")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示rpc信息")]),s._v("\n-l, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示列表的nfs信息")]),s._v("\n-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--since")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从文件显示nfs信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示自定义信息：nfs，显示nfs协议信息；rpc，显示rpc常规信息；net，显示网络层状态；fh，显示文件控制缓存信息；rc，显示服务器上的请求应答缓存信息；all，显示所有信息")]),s._v("\n-v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价“-o all”")]),s._v("\n")])])]),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("要显示关于客户机发送和拒绝的RPC和NFS调用数目的信息，输入：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nfsstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n")])])]),a("p",[s._v("要显示和打印与客户机NFS调用相关的信息，输入如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nfsstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cn")]),s._v("\n")])])]),a("p",[s._v("要显示和打印客户机和服务器的与RPC调用相关的信息，输入如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nfsstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n")])])]),a("p",[s._v("要显示关于服务器接收和拒绝的RPC和NFS调用数目的信息，输入如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nfsstat –s\n")])])]),a("p",[s._v("显示客户端nfs信息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ nfsstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cn")]),s._v("\nClient nfs v4:\nnull         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v("        commit       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v("         open_conf   \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\nopen_noat    open_dgrd    close        setattr      fsinfo       renew       \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("%\nsetclntid    confirm      lock         lockt        locku        access      \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("%\ngetattr      lookup       lookup_root  remove       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("        \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\nsymlink      create       pathconf     statfs       readlink     readdir     \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("%\nserver_caps  delegreturn  getacl       setacl       fs_locations rel_lkowner \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\nsecinfo      exchange_id  create_ses   destroy_ses  sequence     get_lease_t \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\nreclaim_comp layoutget    getdevinfo   layoutcommit layoutreturn getdevlist  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\n")])])]),a("p",[s._v("显示已经挂载的系统信息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ nfsstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("\n/media/test from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8:/wj/\n Flags:rw,relatime,vers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",rsize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v(",wsize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v(",namlen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(",hard,proto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",timeo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(",retrans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sys,\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clientaddr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8,minorversion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",local_lock"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none,addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);