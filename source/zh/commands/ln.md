# ln - 用来为文件创建链接

为指定的目录或者文件创建链接，如果没有指定链接名，那么会创建一个和源文件名字一样的链接。

ln命令 用来为文件创建链接，链接类型分为硬链接和符号链接两种，默认的链接类型是硬链接。如果要创建符号链接必须使用"-s"选项。

注意：符号链接文件不是一个独立的文件，它的许多属性依赖于源文件，所以给符号链接文件设置存取权限是没有意义的。

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
ln  [OPTION]... [-T]  TARGET  LINK_NAME     (1st form)
ln  [OPTION]... TARGET                      (2nd form)
ln  [OPTION]... TARGET... DIRECTORY         (3rd form)
ln  [OPTION]...  –t  DIRECTORY  TARGET...   (4th form)
```

- 第1种用法，创建一个名字为LINK_NAME的目标链接；
- 第2种用法，创建指向当前目录中目标的链接；
- 第3和第4种用法，创建指向目录中每个目标的链接。
- 默认情况下创建硬链接，使用使用 “symbolic”创建符号链接。
- 创建硬链接时，每个目标都必须存在。
- 符号链接可以保存任意文本；如果稍后解析，则相对链接将根据其父目录进行解释。

## 选项

``` bash
--backup[=CONTROL]                 # 为已经存在的链接创建备份
-b                                 # 和“—backup”一样，但是没有参数
-d,  -F,  --directory              # 允许超级用户创建硬链接
-f,  --force                       # 强制创建，如果已经存在，删除原来的硬链接
-i,  --interactive                 # 确认是否删除目的文件
-L,  --logical                     # 创建硬链接到符号链接的关联
-n,  --no-dereference              # 处理与某个目录的symlink的目标，就像它是一个正常文件一样
-P,  --physical                    # 创建符号链接的硬链接
-s,  --symbolic                    # 创建符号链接
-S,  --suffix=SUFFIX               # 重写通常的备份后缀
-t,  --target-directory            # 指定要创建链接的目录
-T,  --no-target-diretory          # 将链接作为普通文件
-v,  --verbose                     # 打印每个链接文件的名字

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

- 源文件：指定链接的源文件。如果使用-s选项创建符号链接，则“源文件”可以是文件或者目录。创建硬链接时，则“源文件”参数只能是文件；
- 目标文件：指定源文件的目标链接文件。

## 扩展
Linux具有为一个文件起多个名字的功能，称为链接。被链接的文件可以存放在相同的目录下，但是必须有不同的文件名，而不用在硬盘上为同样的数据重复备份。另外，被链接的文件也可以有相同的文件名，但是存放在不同的目录下，这样只要对一个目录下的该文件进行修改，就可以完成对所有目录下同名链接文件的修改。对于某个文件的各链接文件，我们可以给它们指定不同的存取权限，以控制对信息的共享和增强安全性。

文件链接有两种形式，即硬链接和符号链接。

### 硬链接
建立硬链接时，在另外的目录或本目录中增加目标文件的一个目录项，这样，一个文件就登记在多个目录中。如图所示的m2.c文件就在目录mub1和liu中都建立了目录项。

创建硬链接后，己经存在的文件的I节点号（Inode）会被多个目录文件项使用。一个文件的硬链接数可以在目录的长列表格式的第二列中看到，无额外链接的文件的链接数为l。

在默认情况下，ln命令创建硬链接。ln命令会增加链接数，rm命令会减少链接数。一个文件除非链接数为0，否则不会从文件系统中被物理地删除。

对硬链接有如下限制：

- 不能对目录文件做硬链接。
- 不能在不同的文件系统之间做硬链接。就是说，链接文件和被链接文件必须位于同一个文件系统中。
### 符号链接
符号链接也称为软链接，是将一个路径名链接到一个文件。这些文件是一种特别类型的文件。事实上，它只是一个文本文件（如图中的abc文件），其中包含它提供链接的另一个文件的路径名，如图中虚线箭头所示。另一个文件是实际包含所有数据的文件。所有读、写文件内容的命令被用于符号链接时，将沿着链接方向前进来访问实际的文件。

!符号连接

与硬链接不同的是，符号链接确实是一个新文件，当然它具有不同的I节点号；而硬链接并没有建立新文件。

符号链接没有硬链接的限制，可以对目录文件做符号链接，也可以在不同文件系统之间做符号链接。

用ln -s命令建立符号链接时，源文件最好用绝对路径名。这样可以在任何工作目录下进行符号链接。而当源文件用相对路径时，如果当前的工作路径与要创建的符号链接文件所在路径不同，就不能进行链接。

符号链接保持了链接与源文件或目录之间的区别：

- 删除源文件或目录，只删除了数据，不会删除链接。一旦以同样文件名创建了源文件，链接将继续指向该文件的新数据。
- 在目录长列表中，符号链接作为一种特殊的文件类型显示出来，其第一个字母是l。
- 符号链接的大小是其链接文件的路径名中的字节数。
- 当用ln -s命令列出文件时，可以看到符号链接名后有一个箭头指向源文件或目录，例如lrwxrwxrwx … 14 jun 20 10:20 /etc/motd->/original_file其中，表示“文件大小”的数字“14”恰好说明源文件名original_file由14个字符构成。
## 举例
创建一个硬链接
``` bash
[sogrey@bogon 文档]$  ln -v my.iso link1
"link" => "my.iso"
```
创建一个符号链接
``` bash
[sogrey@bogon 文档]$   ln -v -s my.iso link2
"link2" -> "my.iso"
[sogrey@bogon 文档]$   ls -l
总用量 1068
-rw-r--r-- 3 root root 358400 9月   7 15:46 link1
lrwxrwxrwx 1 root root      6 9月  10 12:13 link2 -> my.iso
```

