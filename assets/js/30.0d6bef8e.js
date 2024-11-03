(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{349:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-上安装java-jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-上安装java-jdk"}},[a._v("#")]),a._v(" Linux 上安装Java&JDK")]),a._v(" "),s("h2",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[a._v("#")]),a._v(" Ubuntu")]),a._v(" "),s("h3",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),s("ul",[s("li",[a._v("Ubuntu 20.04.2 LTS")])]),a._v(" "),s("h3",{attrs:{id:"在线安装jdk-适用于可连接互联网的用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在线安装jdk-适用于可连接互联网的用户"}},[a._v("#")]),a._v(" 在线安装JDK(适用于可连接互联网的用户)")]),a._v(" "),s("h4",{attrs:{id:"_1-先检查是否已安装jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-先检查是否已安装jdk"}},[a._v("#")]),a._v(" 1. 先检查是否已安装JDK")]),a._v(" "),s("p",[a._v("输入以下命令，如果输出jdk版本号，则已安装，不用再往下看了。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\n")])])]),s("p",[a._v("如果没有输出版本号，而是输出类似于以下提示，"),s("code",[a._v("java")]),a._v("未找到，则还未安装。同时也看到下面给出几个jdk在线安装的命令：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sogrey@sogrey-VirtualBox:~/桌面$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\n\nCommand "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'java'")]),a._v(" not found, but can be installed with:\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk-11-jre-headless  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 11.0.11+9-0ubuntu2~20.04, or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" default-jre              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 2:1.11-72")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk-13-jre-headless  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 13.0.7+5-0ubuntu1~20.04")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk-16-jre-headless  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 16.0.1+9-1~20.04")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk-8-jre-headless   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 8u292-b10-0ubuntu1~20.04")]),a._v("\n\nsogrey@sogrey-VirtualBox:~/桌面$ \n")])])]),s("p",[a._v("我们试着安装jdk8 。")]),a._v(" "),s("h4",{attrs:{id:"_2-在线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在线安装"}},[a._v("#")]),a._v(" 2. 在线安装")]),a._v(" "),s("p",[a._v("根据提示我们输入以下命令，安装jdk8：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk-8-jre-headless\n")])])]),s("blockquote",[s("p",[a._v("注意：此处需要输入sudo密码")])]),a._v(" "),s("h4",{attrs:{id:"_3-验证安装是否成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证安装是否成功"}},[a._v("#")]),a._v(" 3. 验证安装是否成功")]),a._v(" "),s("p",[a._v("输入以下命令，输出版本号，安装成功。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sogrey@sogrey-VirtualBox:~/桌面$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\nopenjdk version "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_292"')]),a._v("\nOpenJDK Runtime Environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_292-8u292-b10-0ubuntu1~20.04-b10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOpenJDK "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.292")]),a._v("-b10, mixed mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nsogrey@sogrey-VirtualBox:~/桌面$ \n")])])]),s("h4",{attrs:{id:"_4-卸载jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-卸载jdk"}},[a._v("#")]),a._v(" 4.卸载JDK")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sogrey@sogrey-VirtualBox:~/桌面$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v("\njava: /usr/bin/java /usr/share/java /usr/share/man/man1/java.1.gz\nsogrey@sogrey-VirtualBox:~/桌面$ \n")])])]),s("p",[a._v("卸载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoremove default-jdk\n")])])]),s("h2",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[a._v("#")]),a._v(" CentOS")])])}),[],!1,null,null,null);s.default=e.exports}}]);