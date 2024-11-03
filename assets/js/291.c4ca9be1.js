(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{611:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"uniq-显示或忽略重复的行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniq-显示或忽略重复的行"}},[s._v("#")]),s._v(" uniq - 显示或忽略重复的行")]),s._v(" "),t("p",[s._v("将文件中重复出现的行删除，结果送到标准输出或者指定文件。在使用uniq指令之前，必须使用sort对内容进行排序，否则没有效果。如果没有选项，则将匹配的行合并到第一个匹配项。")]),s._v(" "),t("h2",{attrs:{id:"适用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),t("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),t("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),t("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),t("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),t("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),t("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),t("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),t("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),t("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),t("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),t("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),t("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("将输入文件（或标准输入）中邻近的重复行写入到输出文件（或标准输出）中。")]),s._v(" "),t("p",[s._v("当没有选项时，邻近的重复行将合并为一个。")]),s._v(" "),t("ul",[t("li",[s._v("INPUT（可选）：输入文件，不提供时为标准输入。")]),s._v(" "),t("li",[s._v("OUTPUT（可选）：输出文件，不提供时为标准输出。")])]),s._v(" "),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-c,--count                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示行重复出现的次数")]),s._v("\n-d, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repeated")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅显示重复出现的行")]),s._v("\n-D, --all-repeated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("delimit-method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印所有重复行")]),s._v("\n-f, --skip-fields"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略前n个字段")]),s._v("\n-i, --ignore-case                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较时忽略大小写")]),s._v("\n-s, --skip-chars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略前n个字符")]),s._v("\n-u, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unique")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示不重复的行")]),s._v("\n-z, --zero-terminated                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以0字节为结束符，而不是换行")]),s._v("\n-w, --check-chars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较不超过指定次数")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助文档")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令版本信息")]),s._v("\n")])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon demos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" test5.txt\n石家庄今日新增16例确诊病例\n北京一确诊者隐瞒行程不配合流调\n中国留美博士遇害 美驻华使馆慰问\n特朗普夫人发文谴责国会暴乱\n理塘文旅公司回应丁真抽烟\n北京一确诊者隐瞒行程不配合流调\n特朗普夫人发文谴责国会暴乱\n山西晋中新增2例无症状感染者\n特朗普夫人发文谴责国会暴乱\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon demos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" test5.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先排序，然后再删除重复行，显示重复行出现的次数")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 北京一确诊者隐瞒行程不配合流调\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 理塘文旅公司回应丁真抽烟\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 山西晋中新增2例无症状感染者\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 石家庄今日新增16例确诊病例\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 特朗普夫人发文谴责国会暴乱\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 中国留美博士遇害 美驻华使馆慰问\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon demos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" test5.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示不重复的行")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 理塘文旅公司回应丁真抽烟\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 山西晋中新增2例无症状感染者\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 石家庄今日新增16例确诊病例\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 中国留美博士遇害 美驻华使馆慰问\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sogrey@bogon demos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);