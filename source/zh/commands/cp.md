# cp - 复制文件

可以将一个文件复制到另外一个地方，也可以将多个文件复制到目录。

**cp命令** 用来将一个或多个源文件或者目录复制到指定的目的文件或目录。它可以将单个源文件复制成一个指定文件名的具体的文件或一个已经存在的目录下。cp命令还支持同时复制多个文件，当一次复制多个文件时，目标文件参数必须是一个已经存在的目录，否则将出现错误。

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
cp  [option]  [-T]  src  dst
cp  [option]  src  dir
cp  [option]  -t  dir  src
```

## 选项

``` bash
-a, --archive                     # 等价于“-dR --preserve=all”
--backup[=CONTROL]                # 为每一个存在的目标文件创建备份
-b                                # 类似“--backup”，但是没有参数
--copy-contents                   # 递归时复制特殊文件的内容
-d                                # 等价于“--no-dereference    --preserve=links”
-f, --force                       # 强制执行
-i, --interactive                 # 交互模式，覆盖文件之前询问
-H                                # 遵循src中的命令行符号链接。
-l, --link                        # 创建链接，不复制
-L, --dereference                 # 始终遵循src中的符号链接
-n, --no-clobber                  # 不覆盖已经存在的文件
-R, -r                            # 递归模式，复制子目录
-s, --symbolic-link               # 创建符号链接，不复制
-P, --no-dereference              # 不遵循src中的符号链接
-p                                # 等价于“--preserve=mode”
--preserve[=ATTR_LIST]            # 保留指定的属性(默认：模式、所有权、时间戳)，
                                  # 如果可能的话，其他属性：上下文、链接、xattr、all
-c                                # 等价于“--preserve=context”
--no-preserve=ATTR_LIST           # 不保留指定的属性
--parents                         # 使用目录下的完整源文件名
-R, -r, --recursive               # 递归复制子目录
--reflink[=WHEN]                  # 控制拷贝
--remove-destination              # 在尝试打开每个现有目标文件之前移动它(与“--force”相反)
--sparse=WHEN                     # 控制稀疏文件的创建
--strip-trailing-slashes          # 从每个源参数中移除任何尾随斜线。
-s, --symbolic-link               # 创建符号链接，不复制
-S, --suffix=SUFFIX               # 重写通常的备份后缀
-t, --target-directory=DIRECTORY  # 将所有源参数复制到DIRECTORY中。
-T, --no-target-directory         # 将目标文件当做普通文件
-t, --target-directory=dir        # 复制所有的源文件到目录
-u, --update                      # 以更新的方式复制
-v, --verbose                     # 显示详细执行过程
-x, --one-file-system             # 保持在这个文件系统上
-Z, --context=CONTEXT             # 将副本的安全上下文设置为上下文

--help                            # 显示帮助文档
--version                         # 显示命令版本
```

## 补充说明

当`--reflink[=always]`被指定时，执行一个轻量级副本，其中数据块仅在修改时被复制。如果这是不可能的，复制失败，或者如果`--reflink=auto`被指定，则返回到标准副本。

备份后缀为`~`，除非设置`--suffix`或`SIMPLE_BACKUP_SUFFIX`。版本控制方法可以通过”--backup“选项或通过VERSION_CONTROL环境变量来选择。以下是这些值：

- 1）none, off，从不备份，即使指定了`--backup`。
- 2）numbered, t，数字版本控制。
- 3）existing, nil，如果有数字备份，那么就使用数字备份，否则使用简单备份。
- 4）simple, never，简单备份。

作为特例，当提供强制和备份选项时，cp对源进行备份，src和dst名字相同，都是常规文件。

## 举例

``` bash
[sogrey@bogon 文档]$ ls
demos  test2.txt  test3.txt  test.txt
[sogrey@bogon 文档]$ ls ./demos
[sogrey@bogon 文档]$ cp test.txt test4.txt
[sogrey@bogon 文档]$ ls
demos  test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon 文档]$ cp -t demos *.txt
[sogrey@bogon 文档]$ cd ./demos
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon demos]$ cd ..
[sogrey@bogon 文档]$ cp -r ./demos/ ./backup/
[sogrey@bogon 文档]$ ls
backup  demos  test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon 文档]$ ls ./backup/
test2.txt  test3.txt  test4.txt  test.txt
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