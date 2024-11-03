(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{550:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"pushd-将目录添加到目录堆栈顶部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pushd-将目录添加到目录堆栈顶部"}},[s._v("#")]),s._v(" pushd - 将目录添加到目录堆栈顶部")]),s._v(" "),t("p",[s._v("pushd指令用来将目录加入堆栈的顶部，并且切换到该目录。如果没有任何参数，那么将栈最上面的两个记录切换位置。")]),s._v(" "),t("h2",{attrs:{id:"主要用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),t("ul",[t("li",[s._v("将目录添加到目录堆栈顶部，切换当前工作目录到该目录。")]),s._v(" "),t("li",[s._v("旋转目录堆栈，使堆栈的新顶部成为当前工作目录。")]),s._v(" "),t("li",[s._v("没有参数时，交换目录堆栈的前两个目录。")])]),s._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),t("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),t("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),t("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),t("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),t("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),t("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),t("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),t("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),t("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),t("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),t("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),t("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("如果没有参数，则交换前两个目录并返回0，除非目录堆栈为空。如果pusd命令成功，那么还会执行dir。如果使用第一种形式，除非cd到dir失败，否则pushd返回0。对于第二种表单，除非目录堆栈为空，指定了一个不存在的目录堆栈元素，或者将目录更改为指定的新的当前目录，否则PUSD返回0。")]),s._v(" "),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("+num          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从左起第num个目录移动到栈顶，从0开始计数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-num")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从右起第num个目录移动到栈顶，从0开始计数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加记录的时候，不切换目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将dir添加到顶部的目录堆栈，使其成为新的当前工作目录。")]),s._v("\n")])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("p",[s._v("不使用任何参数")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ dirs.          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录")]),s._v("\n/dev/so/sogrey\nYou have new mail "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /var/spool/mail/root\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接调用pushd，栈顶的两个目录位置切换")]),s._v("\n/so/dev/sogrey\n")])])]),t("p",[s._v("删除最左面的目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost wj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" /etc       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#增加目录")]),s._v("\n/etc/so/dev/sogrey\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#位置已经切换")]),s._v("\n")])])]),t("p",[s._v("移动目录的位置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost wj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ dirs.               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录")]),s._v("\n/etc/so/dev/sogrey\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将最右面的移动到栈顶")]),s._v("\n/sogrey/etc/so/dev\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost sogrey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#成功移动，并且切换位置")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);