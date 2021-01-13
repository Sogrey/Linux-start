# which - 查找并显示给定命令的绝对路径

which命令 用于查找并显示给定命令的绝对路径，环境变量PATH中保存了查找命令时需要遍历的目录。which指令会在环境变量$PATH设置的目录里查找符合条件的文件。也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。

在环境变量PATH中搜索某个命令，返回命令的执行文件或者脚本位置，默认只显示第一个结果。这需要一个或多个参数。对于它的每个参数，它会打印出当在shell提示符下输入该参数时将执行的可执行文件的完整路径。它通过使用与bash(1)相同的算法在环境变量路径中列出的目录中搜索可执行文件或脚本来做到这一点。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
<div class="svg debian">Debian</div>
<div class="svg deepin">Deepin</div>
<div class="svg suse">SUSE</div>
<div class="svg opensuse">openSUSE</div>
<div class="svg fedora">Fedora</div>
<div class="svg linuxmint">Linux Mint</div>
<!-- <div class="svg mxlinux">MX Linux</div> -->
<div class="svg alpinelinux">Alpine Linux</div>
<div class="svg archlinux">Arch Linux</div>

## 语法

``` bash
which  [options]  [--]  programname  [...]
```

## 选项

``` bash
-a, -all                        # 输出所有的结果，而不只是第一个
-i, --read-alias                # 从stdin中读取别名，在stdout上报告匹配的别名。
    --skip-alias                # 忽略“--read-alias”
    --read-function             # 从标准输入读取函数，在stdout输出
    --skip-functions            # 忽略“--skip-functions”
    --skip-dot                  # 忽略PATH中以点开头的目录
    --skip-tilde                # 跳过路径中以主目录中的波浪线和可执行文件开头的目录。
    --show-dot                  # 如果路径中的目录以点开始，并为该路径找到匹配的
                                # 可执行文件，打印“./Programname”而不是完整路径。
    --show-tilde                # 当目录与主目录匹配时，输出一个波浪线。
                                # 果将该选项作以root身份调用，则忽略此选项
    --tty-only                  # 如果不在TTY上，则停止右边的处理选项。

    --help                      # 显示帮助文档
-v, -V, --version               # 显示命令版本信息
```

## 返回值

它返回失败参数的数量，或者当未指定“程序名”时返回-1。

## 举例

``` bash
[sogrey@bogon 文档]$ which pwd
/usr/bin/pwd
[sogrey@bogon 文档]$ which cd
/usr/bin/cd
[sogrey@bogon 文档]$ which ls
alias ls='ls --color=auto'
	/usr/bin/ls
[sogrey@bogon 文档]$ which -a ls
alias ls='ls --color=auto'
	/usr/bin/ls
	/bin/ls
[sogrey@bogon 文档]$ which -a ll
alias ll='ls -l --color=auto'
	/usr/bin/ls
	/bin/ls
/usr/bin/which: no ll in (/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/home/sogrey/.local/bin:/home/sogrey/bin)
[sogrey@bogon 文档]$ 
```

<!-- <link rel="stylesheet" type="text/css" href="../../.vuepress/public/css/style.css"/> -->
<style>
.svg {
    height: 1.5rem;
    /* width: 1.5rem; */
    background-repeat: no-repeat;
    padding-left:30px;margin-right:16px;
    display:inline-block;
}
.svg.linux{
    background-image: url("../../.vuepress/public/img/icos/linux.svg"); 
}
.svg.redhat,.svg.rhel{
    background-image: url("../../.vuepress/public/img/icos/redhat.svg"); 
}
.svg.ubuntu{
    background-image: url("../../.vuepress/public/img/icos/ubuntu.svg"); 
}
.svg.centos{
    background-image: url("../../.vuepress/public/img/icos/centos.svg"); 
}
.svg.suse,.svg.opensuse{
    background-image: url("../../.vuepress/public/img/icos/opensuse.svg"); 
}
.svg.fedora{
    background-image: url("../../.vuepress/public/img/icos/fedora.svg"); 
}
.svg.linuxmint{
    background-image: url("../../.vuepress/public/img/icos/linuxmint.svg"); 
}
.svg.mxlinux{
    background-image: url("../../.vuepress/public/img/icos/mxlinux.svg"); 
}
.svg.alpinelinux{
    background-image: url("../../.vuepress/public/img/icos/alpinelinux.svg"); 
}
.svg.archlinux{
    background-image: url("../../.vuepress/public/img/icos/archlinux.svg"); 
}
.svg.archlinux{
    background-image: url("../../.vuepress/public/img/icos/archlinux.svg"); 
}
.svg.debian{
    background-image: url("../../.vuepress/public/img/icos/debian.svg"); 
}
.svg.deepin{
    background-image: url("../../.vuepress/public/img/icos/deepin.svg"); 
}
</style>