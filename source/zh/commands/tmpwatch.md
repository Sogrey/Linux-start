# tmpwatch - 删除最近一段时间没有访问的文件

删除最近一段时间没有访问的文件，时间以小时为单位，节省磁盘空间。tmpwatch递归删除给定时间未被访问的文件。通常，它用于清理用于临时保存空间(如/tmp)的目录。当更改目录时，tmpwatch对可能的争用条件非常敏感，如果检测到错误，就会退出。它不遵循它正在清理的目录中的符号链接(即使给出一个符号链接作为它的参数)，它不会切换文件系统，跳过根用户的lost+found目录，只删除空目录、常规文件和符号链接。

默认情况下，tmpwatch根据文件的atime(访问时间)，而不是它们的Mtime(修改时间)来确定文件的日期。如果文件在`ls-l`暗示应该删除时没有被移除，请使用`ls-u`检查它们的数据，以确定这是否解释了问题的原因。

如果指定了`--atime`,`--ctime`或者`--mtime`选项，那么删除文件的时间由他们中的最大值决定。如果`--dirmtime`选项意味着忽略目录的atime，即使使用了`—atime`选项。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<!-- <div class="svg centos">CentOS</div> -->
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
tmpwatch  [选项]  time  file
tmpwatch  [-u|-m|-c]  [-MUadfqstvx]  [--verbose]  [--force] [--all]  [--nodirs]
          [--nosymlinks]  [--test]  [--fuser]  [--quiet]  [--atime|--mtime|--ctime]
          [--dirmtime]  [--exclude path]  [--exclude-user user]  time  dirs
```

## 选项

``` bash
-u, --atime                     # 根据文件的atime(访问时间)做出删除文件的决定。
                                # 请注意，定期更新的文件系统扫描使目录保持最近的状态。
-m, --mtime                     # 根据文件的Mtime(修改时间)而不是atime做出删除
                                # 文件的决定。
-c,  -ctime                     # 根据文件的ctime(Inode Changing Time)而不是
                                # atime来决定删除文件；对于目录，根据mtime做出决定
-M, --dirmtime                  # 根据目录的Mtime(修改时间)而不是atime作出删除
                                # 目录的决定；完全忽略目录的atime
-a, -all                        # 删除所有文件类型，而不仅仅是常规文件、
                                # 符号链接和目录。
-d, --nodirs                    # 不要尝试删除目录，即使它们是空的。
-f, -force                      # 强制删除，即使root用户没有写的权利
-l, --nosymlinks                # 不删除符号链接
-q, --quite                     # 只报告致命错误
-s, --fuser                     # 尝试在删除文件之前使用“fuser”命令查看文件是否已打开。
                                # 默认情况下未启用。在某些情况下确实有帮助，但不是全部。
                                # 依赖于/sbin中安装的fuser。不支持HPUX或Solaris
-t, --test                      # 不删除，只是演示要做什么
-U, --exclude-user=user         # 不删除指定所有者的文件，可以指定用户名，也可以指定用户ID
-v, --verbose                   # 显示详细信息
-x, --exclude                   # 跳过目录及其内部文件，如果路径不存在，
                                # 则它必须是不包含符号链接的绝对路径。
-X --exclude-pattern=pattern    # 跳过路径匹配模式；如果目录匹配模式，
                                # 则其中包含的所有文件也将被跳过。
                                # 模式必须匹配不包含符号链接的绝对路径。
```

## 举例

``` bash
[sogrey@bogon 文档]$ ls
backup  demos  test  test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon 文档]$ tmpwatch 1 .          # 删除当前目录1小时内没有访问的文件

[sogrey@bogon 文档]$ tmpwatch -U root 1 .  # 不删除root用户的文件
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