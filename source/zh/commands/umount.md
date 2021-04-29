# umount - 用于卸载已经加载的文件系统

umount命令 用于卸载已经加载的文件系统。利用设备名或挂载点都能umount文件系统，不过最好还是通过挂载点卸载，以免使用绑定挂载（一个设备，多个挂载点）时产生混乱。

移除已经挂载到系统中的文件系统，可以是挂载点，也可以使挂载设备。

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
umount  [选项]  src|dst
umount  [-hV]
umount  -a  [-dflnrv]  [-t vfstype]  [-O options]
umount  [-dflnrv]  {dir|device}...
```

## 选项

``` bash
-a

卸载/etc/fstab中的所有文件系统。使用umountVersion2.7及更高版本，未卸载proc文件系统

-f

强制卸载

--fake

模拟卸载过程。它可用于从/etc/mtab中删除前面使用-n选项卸载的条目。

-n

不在/etc/mtab中记录卸载信息，在/etc只读的系统中，这个选项很重要

-d

如果是个回环设备，同时释放掉这回环设备

-r

如果卸载失败，尝试以读写的方式挂载

-l

懒散的umount。现在将文件系统从文件系统层次结构中分离出来，并在文件系统不再繁忙时立即清除对该文件系统的所有引用。

-O option

指示这些操作只应在/etc/fstab中指定选项的文件系统上执行。可以在逗号分隔列表中指定多个选项类型。每个选项都可以no作为前缀，以指定不应采取任何行动的选项。

-t type

指定挂载的文件系统类型。目前支持的系统有：adfs, affs, autofs, cifs, coda, coherent, cramfs, debugfs, devpts, efs, ext, ext2,  ext3,  ext4,  hfs,  hfsplus,  hpfs, iso9660, jfs, minix, msdos, ncpfs, nfs, nfs4, ntfs, proc, qnx4, ramfs, reiserfs, romfs,  squashfs, smbfs,  sysv, tmpfs, ubifs, udf, ufs, umsdos, usbfs, vfat, xenix, xfs, xiafs。可以在逗号分隔列表中指定多个类型。文件系统类型列表可以no作为前缀，以指定不应对其采取行动的文件系统类型。

-v

显示详细执行过程

--no-canonicalize

不要把路径规范化

-h                           # 显示帮助文档
-V                           # 显示命令版本信息
```
## 说明
umount命令将释放与挂载相关联的循环设备(如果有的话)，在/etc/mtab中，找到“loop=”或在给出-d选项时。任何挂起的循环设备都可以使用“losetup -d”释放。

外部umount帮助程序的语法是：“/sbin/umount. <suffix>  {dir|device}  [-nlfvr]  [-t type.subtype]”，<suffix>是文件系统类型或来自“uheler=”mtab选项的值。“-t”选项用于支持子类型的文件系统(例如/sbin/mount.fut-tfuse.sshfs)。

“/etc/mtab”显示已经挂载文件系统表.
## 举例
卸载文件
``` bash
[root@localhost ~]$ mount                      # 查看已经挂载的设备
/dev/mapper/VolGroup-lv_root on / type ext4 (rw)
proc on /proc type proc (rw)
/dev/sr0 on /media/VBox_GAs_5.2.18 type iso9660 (ro,nosuid,nodev,uhelper=udisks,uid=0,gid=0,iocharset=utf8,mode=0400,dmode=0500)
/weijie/my.iso on /media/sf_data type iso9660 (rw,loop=/dev/loop0)
/dev/sdb4 on /media/test type ext2 (rw)

[root@localhost ~]$ umount /dev/sdb4         # 卸载，参数是设备
You have new mail in /var/spool/mail/root
[root@localhost ~]$ umount /media/sf_data/  # 卸载，参数是挂载点 

[root@localhost ~]$ mount                      # 再次查看，是否卸载成功
/dev/mapper/VolGroup-lv_root on / type ext4 (rw)
proc on /proc type proc (rw)
gvfs-fuse-daemon on /root/.gvfs type fuse.gvfs-fuse-daemon (rw,nosuid,nodev)
/dev/sr0 on /media/VBox_GAs_5.2.18 type iso9660 (ro,nosuid,nodev,uhelper=udisks,uid=0,gid=0,iocharset=utf8,mode=0400,dmode=0500)
```
