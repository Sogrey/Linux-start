# e2image - 将文件系统元数据保存到由图像文件指定的文件中

e2Image程序将位于设备上的ext2、ext3或ext4文件系统元数据保存到由图像文件指定的文件中。通过对这些程序使用-i选项，image文件可以由dupe2fs和调试器来检查。这可以帮助专家恢复严重损坏的文件系统。

如果image文件是”-“，那么e2image的输出将被发送到标准输出，以便输出可以管道到另一个程序，如gzip(1)。(请注意，目前只有在使用-r选项创建原始image文件时才支持这一点，因为创建普通image文件或QCOW 2映像的过程目前需要对文件进行随机访问，这不能使用管道进行。)

最好为系统上的所有文件系统创建映像文件，并定期保存分区布局(可以使用fdisk-l命令生成)。image文件应该存储在它所包含的数据的文件系统以外的其他文件系统上，以确保在文件系统严重损坏的情况下可以访问这些数据。

为了节省磁盘空间，e2Image将image文件创建为稀疏文件，或以QCOW2格式创建。因此，如果需要将稀疏image文件复制到另一个位置，则应该首先对其进行压缩，或者使用GNU版本的cp ” sparse=always”选项。这不适用于QCOW2映像，它并不稀疏。

ext2映像文件的大小主要取决于文件系统的大小和正在使用的inode数量。对于一个典型的10GB文件系统，120万个节点中有20万个节点在使用，image文件将大约为35兆字节；在55万个节点中使用15000个节点的4G文件系统将产生一个3MB的image文件。image文件通常是可压缩的；占用磁盘上32 MB空间的image文件通常会压缩到3或4MB。

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
e2image [ -rsI ] device image-file
```

## 选项

``` bash
-I          # 将文件中的元数据恢复到分区
-r          # 创建raw格式的image
-Q          # 创建QCOW2格式的image
```
## 说明
1. “-I”选项

“-I”选项将导致e2Image将存储在映像文件中的元数据重新安装到设备上。它可用于在紧急情况下将文件系统元数据还原回设备。只有当其他选择失败时，才应该使用”-I”选项作为一种绝望措施。如果文件系统在创建image文件后发生了更改，数据将丢失。通常，您应该首先对文件系统进行完整的映像备份，以便以后尝试其他恢复策略。

2. “-r”选项

“-r”选项将创建一个原始image文件，而不是普通的image文件。原始image文件与普通image文件有两种不同之处。首先，将文件系统元数据放置在适当的位置，以便e2fsck、dupe2fs、调试器等。可以直接在原始image文件上运行。为了尽量减少原始映像文件占用的磁盘空间，将该文件创建为稀疏文件。(请注意使用不了解如何创建稀疏文件的实用程序复制或压缩/解压缩该文件；该文件将与文件系统本身一样大！)其次，原始image文件还包括标准image文件没有的间接块和目录块，尽管这在将来可能会发生变化。

当将文件系统作为bug报告的一部分发送给维护人员时，有时会使用原始映像文件到e2fsprogs。当以这种方式使用时，建议的命令如下(用适当的设备替换hda1)：“e2image  -r  /dev/hda1  -  |  bzip2  >  hda1.e2i.bz2”。这将只发送元数据信息，没有任何数据块。但是，目录块中的文件名仍然可以显示关于文件系统内容的信息，bug报告人员可能希望将这些信息保密。要解决此问题，可以指定“-s”选项。这将导致e2Image对目录条目进行置乱，并在写入image文件之前将目录块中任何未使用的部分清零。但是，“-s”选项将防止分析与散列树索引目录相关的问题

请注意，即使您将“/dev/hda 1”替换为另一个原始磁盘映像或先前由e2Image创建的QCOW2映像，这也是可行的。

3. “-Q”选项

“-Q”选项将创建一个QCOW2 image文件，而不是普通的或原始的image文件。QCOW2 image包含原始image所做的所有信息，但是与原始image不同的是，它并不稀疏。QCOW 2映像通过将数据以特殊格式存储，并将数据紧密地打包在一起，从而将磁盘空间的数量降到最低，从而避免了漏洞，同时仍然最小化了大小。

为了将文件系统作为bug报告的一部分发送给维护人员到e2fsprogs，请使用以下命令：“e2image  -Q  /dev/hda1  hda1.qcow2“、”bzip2  -z  hda1.qcow2”。这将只发送元数据信息，没有任何数据块。但是，目录块中的文件名仍然可以显示关于文件系统内容的信息，bug报告人员可能希望将这些信息保密。要解决此问题，可以指定“-s”选项。这将导致e2Image对目录条目进行置乱，并在写入image文件之前将目录块中任何未使用的部分清零。但是，“-s”选项将防止分析与哈希树索引目录相关的问题.

请注意，e2Image创建的qcow2映像是规则的qcow2映像，可以通过知道qcow2格式的工具进行处理，例如qemu-img。
## 举例
保存sdb4元数据
``` bash
[root@localhost ~]$ e2image /dev/sdb4 sdb4
e2image 1.41.12 (17-May-2010)
[root@localhost ~]$ file sdb4
sdb4: Linux rev 1.0 ext2 filesystem data
```
