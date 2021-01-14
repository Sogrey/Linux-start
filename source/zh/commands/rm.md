# rm - 删除文件和目录

默认情况下不会删除目录.

rm 命令 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。

注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以用-i选项，这个选项在使用文件扩展名字符删除多个文件时特别有用。使用这个选项，系统会要求你逐一确定是否要删除。这时，必须输入y并按Enter键，才能删除文件。如果仅按Enter键或其他字符，文件不会被删除。

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
rm  [选项]  file
```

## 选项

``` bash
-f, --force                     # 强制执行，不交互
-i                              # 交互模式，每删除一个文件都要询问
-I                              # 在删除三个以上的文件之前，或者在递归删除之前，
                                # 提示一次。“-I“的侵扰性不如“-i”，
                                # 但仍能免受大多数错误的侵扰。
    --interactive[=WHEN]        # 根据时间提示：从不（never），一次(-i)，
                                # 或始终(-i)。没有指定WHEN，总是提示
    --one-file-system           # 递归删除层次结构时，跳过与相应命令行参数不同的
                                # 文件系统上的任何目录。
    --no-preserve-root          # 删除根目录
    --preserve-root             # 不删除根目录，默认的
-r, -R, --recursive             # 递归的方式删除子目录
-v, --verbose                   # 显示详细执行过程

    --help                      # 显示帮助文档
    --version                   # 显示命令版本信息
```

## 补充说明

默认情况下，`rm`不删除目录。使用`--recursive` (`-r` or `-R`)选项也可以删除每个列出的目录及其所有内容。要删除名称以`-`开头的文件，例如`-foo`，请使用以下命令之一：
``` bash
rm  --  -foo
rm  ./-foo
```
注意，如果使用rm删除文件，通常可以恢复该文件的内容。如果您想要更多的保证内容是真正不可恢复的，请考虑使用shred。

## 举例

``` bash
[sogrey@bogon 文档]$ ls
backup  demos  test  test2.txt  test3.txt  test4.txt  test.txt
[sogrey@bogon 文档]$ rm test*
rm: 无法删除"test": 是一个目录
[sogrey@bogon 文档]$ ls
backup  demos  test
[sogrey@bogon 文档]$ rm -rf test/
[sogrey@bogon 文档]$ ls
backup  demos
[sogrey@bogon 文档]$ 
```
