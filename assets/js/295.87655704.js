(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{612:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"useradd-创建的新的系统用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useradd-创建的新的系统用户"}},[a._v("#")]),a._v(" useradd - 创建的新的系统用户")]),a._v(" "),s("p",[a._v("useradd命令 用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在/etc/passwd文本文件中。")]),a._v(" "),s("p",[a._v("在Slackware中，adduser指令是个script程序，利用交谈的方式取得输入的用户帐号资料，然后再交由真正建立帐号的useradd命令建立新用户，如此可方便管理员建立用户帐号。在Red Hat Linux中， adduser命令 则是useradd命令的符号连接，两者实际上是同一个指令。")]),a._v(" "),s("p",[a._v("创建新的系统用户，useradd指令只能以管理员的身份运行，创建的用户都在“/etc/passwd”文件中。当不加-D参数,useradd指令使用命令列来指定新帐号的设定值and使用系统上的预设值.新使用者帐号将产生一些系统档案，使用者目录建立，拷备起始档案等，这些均可以利用命令列选项指定。此版本为RedHat Linux提供，可帮每个新加入的使用者建立个别的group,毋须添加-n选项。")]),a._v(" "),s("h2",{attrs:{id:"适用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[a._v("#")]),a._v(" 适用范围")]),a._v(" "),s("div",{staticClass:"svg redhat"},[a._v("RedHat")]),a._v(" "),s("div",{staticClass:"svg rhel"},[a._v("RHEL")]),a._v(" "),s("div",{staticClass:"svg ubuntu"},[a._v("Ubuntu")]),a._v(" "),s("div",{staticClass:"svg centos"},[a._v("CentOS")]),a._v(" "),s("div",{staticClass:"svg debian"},[a._v("Debian")]),a._v(" "),s("div",{staticClass:"svg deepin"},[a._v("Deepin")]),a._v(" "),s("div",{staticClass:"svg suse"},[a._v("SUSE")]),a._v(" "),s("div",{staticClass:"svg opensuse"},[a._v("openSUSE")]),a._v(" "),s("div",{staticClass:"svg fedora"},[a._v("Fedora")]),a._v(" "),s("div",{staticClass:"svg linuxmint"},[a._v("Linux Mint")]),a._v(" "),s("div",{staticClass:"svg alpinelinux"},[a._v("Alpine Linux")]),a._v(" "),s("div",{staticClass:"svg archlinux"},[a._v("Arch Linux")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-c comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-d home_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-e expire_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f inactive_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-g initial_group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-G group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-k skeleton_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-s shell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-u uid "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  login\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-g default_group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b default_home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f default_inactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-e default_expire_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-s default_shell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示帮助文档")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示命令版本信息")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用-D选项")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n\n指定用户的基目录，默认是home\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v("\n\n使用者账号有效日期\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" days\n\n指定密码过期后多少天关闭账号\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" group\n\n指定账户的组，这个组必须存在\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" shell\n\n指定账户使用的shell\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 不使用-D选项")]),a._v("\n\n \n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" comment\n\n备注信息\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" home\n\n账户每次登陆使用的目录\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v("\n\n账号终止日期，MM/DD/YY\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" days\n\n账号过期后多久停用\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" group\n\n指定账户的组，这个组必须存在\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-G")]),a._v(" group\n\n指定用户的附加组\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v("\n\n使用者目录如果不存在，自动创建\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("\n\n取消自动创建于账号同名的组\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" password\n\n设置账户的密码\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n\n创建系统账号\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v("\n\n指定账户登录后使用的shell\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" uid\n\n指定用户ID\n")])])]),s("h2",{attrs:{id:"相关文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文件"}},[a._v("#")]),a._v(" 相关文件")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/etc/passwd")]),a._v("使用者帐号资讯。")]),a._v(" "),s("li",[s("code",[a._v("/etc/shadow")]),a._v("使用者帐号资讯加密。")]),a._v(" "),s("li",[s("code",[a._v("/etc/group")]),a._v("群组资讯。")]),a._v(" "),s("li",[s("code",[a._v("/etc/default/useradd")]),a._v("定义资讯。")]),a._v(" "),s("li",[s("code",[a._v("/etc/login.defs")]),a._v("系统广义设定。")]),a._v(" "),s("li",[s("code",[a._v("/etc/skel")]),a._v("内含定义档的目录。")])]),a._v(" "),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[a._v("#")]),a._v(" 举例")]),a._v(" "),s("p",[a._v("新建用户加入组：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" –g sales jack –G company,employees    //-g：加入主要组、-G：加入次要组\n")])])]),s("p",[a._v("建立一个新用户账户，并设置ID：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" caojh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("544")]),a._v("\n")])])]),s("p",[a._v("需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。")]),a._v(" "),s("p",[a._v("创建用户")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" userTmp "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建用户userTmp，密码123456")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sudo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" sogrey 的密码：\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" /etc/passwd "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看是否创建成功")]),a._v("\nvboxadd:x:989:1::/var/run/vboxadd:/bin/false\nuserTmp:x:1001:1001::/home/userTmp:/bin/bash\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /home/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看在home下创建家目录")]),a._v("\nlost+found  sogrey  userTmp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ \n")])])]),s("p",[a._v("设定用户的家目录、uid、备注")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /home/other "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test user"')]),a._v(" user02 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建用户")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" /etc/passwd "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看用户信息")]),a._v("\nuserTmp:x:1001:1001::/home/userTmp:/bin/bash\nuser02:x:600:1002:test user:/home/other:/bin/bash\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /home/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#家目录other")]),a._v("\nlost+found  other  sogrey  userTmp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sogrey@bogon ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);