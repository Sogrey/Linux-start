# cpio - 用来建立、还原备份档的工具程序

cpio命令 主要是用来建立或者还原备份档的工具程序，cpio命令可以复制文件到归档包中，或者从归档包中复制文件。

从归档中复制文件，或者复制文件到归档中。

Cpio命令有三种工作模式：

1. copy-out mode，cpio指令将文件复制到归档。它读取标准输入上的文件名列表(每行一个)，将归档包写到标准输出。
2. copy-in mode，cpio指令从归档中复制文件，从标准输入读取归档包。
3. cpio-pass mode，从目录树复制文件到另一个目录，它从标准输入中读取要复制的文件列表。

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
cpio  -o  namelist  > archive
cpio  -i  <  archive
cpio  -p  dst-dir  < namelist
```

## 选项

``` bash
-0, --null                          # 接受新增列控制字符，通常配合find指令的“-print0”参数使用；
-a, --rest-access-time              # 重新设置文件的存取时间；
-A, --append                        # 附加到已存在的备份文档中，且这个备份文档必须存放在磁盘上，而不能放置于磁带机里；
-b, --awap                          # 此参数的效果和同时指定“-ss”参数相同；
-B                                  # 将输入/输出的区块大小改成5210Bytes；
-c                                  # 使用旧ASCII备份格式；
-C<区块大小>, --io-size=<区块大小>   # 设置输入/输出的区块大小，单位是Byte；
-d, --make-directories              # 如有需要cpio会自行建立目录；
-E<范本文件>, --pattern-file=<范本文件># 指定范本文件，其内含有一个或多个范本样式，让cpio解开符合范本条件的文件，格式为每列一个范本样式；
-f, --nonmatching                     # 让cpio解开所有不符合范本条件的文件；
-F<备份档>, --file=<备份档>            # 指定备份档的名称，用来取代标准输入或输出，也能借此通过网络使用另一台主机的保存设备存取备份档；
-H<备份格式>                          # 指定备份时欲使用的文件格式；
-i, --extract                        # 执行copy-in模式，还原备份档；
-l<备份档>                           # 指定备份档的名称，用来取代标准输入，也能借此通过网络使用另一台主机的保存设备读取备份档；
-k                                   # 此参数将忽略不予处理，仅负责解决cpio不同版本间的兼容性问题；
-l, --link                          # 以硬连接的方式取代复制文件，可在copy-pass模式下运用；
-L, --dereference                   # 不建立符号连接，直接复制该连接所指向的原始文件；
-m, preserve-modification-time      # 不去更改文件的更改时间；
-M<回传信息>, --message=<回传信息>  #  设置更换保存媒体的信息；
-n, --numeric-uid-gid               # 使用“-tv”参数列出备份档的内容时，若再加上参数“-n”，则会以用户识别和群组识别码替代拥有者和群组名称列出文件清单；
-o, --create                        # 执行copy-out模式，建立备份档；
-O<备份档>                          # 指定备份档的名称，用来取代标准输出，也能借此通过网络使用另一台主机的保存设备存放备份档；
-p, --pass-through                  # 执行copy-pass模式，略过备份步骤，直接将文件复制到目的目录；
-r, --rename                        #  当有文件名称需要更改时，采用互动模式；
-R<拥有者><:/.><所属群组>, ----owner<拥有者><:/.><所属群组> #  在copy-in模式还原备份档，或copy-pass模式复制文件时，可指定这些备份，复制的文件的拥有者与所属群组；
-s, --swap-bytes                   # 交换每队字节的内容；
-S, --swap-halfwords               # 交换每半个字节的内容；
-t, --list                         # 将输入的内容呈现出来；
-u, --unconditional                # 置换所有文件，不论日期时间的新旧与否，皆不予询问而直接覆盖；
-v, --verbose                      # 详细显示指令的执行过程；
-V, --dot                          # 执行指令时。在每个文件的执行程序前面加上“.”号；
--block-size=<区块大小>             # 设置输入/输出的区块大小，假如设置数值为5，则区块大小为2500，若设置成10，则区块大小为5120，以此类推；
--force-local                      # 强制将备份档存放在本地主机；
--no-absolute-filenames            #使用相对路径建立文件名称；
--no-preserve-owner                #不保留文件的拥有者，谁解开了备份档，那些文件就归谁所有；
-only-verify-crc                   # 当备份档采用CRC备份格式时，可使用这项参数检查备份档内的每个文件是否正确无误；
--quiet                            # 不显示复制了多少区块；
--sparse                           # 倘若一个文件内含有大量的连续0字节，则将此文件存在稀疏文件；

--help                           # 在线帮助；
--version                        # 显示命令版本信息
```
## 用法

将/etc下的所有普通文件都备份到/opt/etc.cpio，使用以下命令：
``` bash
find /etc –type f | cpio –ocvB >/opt/etc.cpio
```
将系统上所有资料备份到磁带机内，使用以下命令：
``` bash
find / -print | cpio -covB > /dev/st0
```
这里的/dev/st0是磁带的设备名，代表SCSI磁带机。

查看上例磁带机上备份的文件，使用以下命令：
``` bash
cpio  -icdvt < /dev/st0 > /tmp/st_content
```
有时可能因为备份的文件过多，一个屏幕无法显示完毕，此时我们利用下面命令，让磁带机的文件信息输出到文件。

将示例1中的备份包还原到相应的位置，如果有相同文件进行覆盖，使用以下命令：
``` bash
cpio –icduv < /opt/etc.cpio
```
注意，cpio恢复的路径，如果cpio在打包备份的时候用的是绝对路径，那么在恢复的时候会自动恢复到这些绝对路径下，本例就会将备份文件全部还原到/etc路径下对应的目录中。同理，如果在打包备份用的是相对路径，还原时也将恢复到相对路径下。

通过上面的示例，可以看出，cpio无法直接读取文件，它需要每个文件或者目录的完整路径名才能识别读取，而find命令的输出刚好做到了这点，因此，cpio命令一般和find命令配合使用。其实，上面的示例我们已经看到了它们的组合用法。

---

归档当前目录下的内容，并且制定输出文件
``` bash
% ls | cpio -ov > directory.cpio
```
存档整个目录树，find命令可以将文件列表提供给cpio。这将获取当前目录中的所有文件，以及下面的目录，并将它们放置在归档目录tree.cpio中
``` bash
% find . -print -depth | cpio -ov > tree.cpio
```
这将检索存档在文件directory.cpio中的文件，并将它们放在当前目录中
``` bash
% cpio -iv < directory.cpio
```
这将获取存档tree.cpio的内容，并将其解压缩到当前目录。
``` bash
% cpio -idv < tree.cpio
```
将当前目录的文件和子目录复制到一个名为new-dir的新目录中
``` bash
% find . -depth -print0 | cpio --null -pvd new-dir
```

## 实例
将当前目录归档
``` bash
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ ls | cpio -o > bak # 将ls的输出定向到cpio，然后归档
3 块
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey 1536 3月   9 00:39 bak
-rw-------. 1 sogrey sogrey  415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey  576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey   90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ 
```
从归档中提取文件
``` bash
[sogrey@bogon 文档]$ cpio -i < bak # 从归档中提取
cpio: 未创建 bak：已有更新或同样新的版本存在
cpio: 未创建 file1.txt：已有更新或同样新的版本存在
cpio: 未创建 file2.txt：已有更新或同样新的版本存在
cpio: 未创建 run.sh：已有更新或同样新的版本存在
3 块
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey 1536 3月   9 00:39 bak
-rw-------. 1 sogrey sogrey  415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey  576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey   90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ 
```
拷贝文件
``` bash
[sogrey@bogon 文档]$ ll
总用量 24
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 1536 3月   9 00:39 bak
drwx------. 2 sogrey sogrey 4096 3月   9 00:46 bakDir
-rw-------. 1 sogrey sogrey  415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey  576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey   12 3月   9 00:43 list.txt
-rwx------. 1 sogrey sogrey   90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ cat list.txt 
1.c
2.c
3.c
[sogrey@bogon 文档]$ cpio -p bakDir/ < list.txt # 将list.txt中的内容当做文件列表，然后拷贝到bakDir目录
0 块
[sogrey@bogon 文档]$ ll -R
.:
总用量 24
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 1536 3月   9 00:39 bak
drwx------. 2 sogrey sogrey 4096 3月   9 00:46 bakDir
-rw-------. 1 sogrey sogrey  415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey  576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey   12 3月   9 00:43 list.txt
-rwx------. 1 sogrey sogrey   90 3月   9 00:23 run.sh

./bakDir:
总用量 0
-rw-------. 1 sogrey sogrey 0 3月   9 00:46 1.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:46 2.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:46 3.c
[sogrey@bogon 文档]$ 
```