# znew - 将.Z压缩包重新转化为gzip命令压缩的.gz压缩包

znew命令 用于将使用compress命令压缩的“.Z”压缩包重新转化为使用gzip命令压缩的“.gz”压缩包。

将compress压缩成的”.Z”文件，转换成“.gz”格式的文件。ZNew将文件从.z(压缩)格式重新压缩到.gz(Gzip)格式。如果要重新压缩已以gzip格式的文件，请重命名该文件以强制.z扩展名，然后应用znew。


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
znew  [选项]  name.Z
```

## 选项

``` bash
-f                  # 强制转换
-t                  # 在删除原始的.Z文件之前，测试新生成的.gz文件
-v                  # 显示详细信息
-9                  # 使用最高压缩率
-P                  # 使用管道功能
-K                  # 如果.Z文件比新生成的.gz文件小，那么保留.Z文件

--help              # 显示帮助文档
--version           # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt  list.txt  res2.zip  res.zip  run.sh
[sogrey@bogon 文档]$ compress file2.txt # compress压缩
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt.Z  list.txt  res2.zip  res.zip  run.sh
[sogrey@bogon 文档]$ znew file2.txt.Z # 将.Z压缩包重新转化为gzip命令压缩的.gz压缩包
[sogrey@bogon 文档]$ ls
1.c  2.c  3.c  file1.txt.gz  file2.txt.gz  list.txt  res2.zip  res.zip  run.sh
[sogrey@bogon 文档]$ 
```
