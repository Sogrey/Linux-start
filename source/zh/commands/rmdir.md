# rmdir - 用来删除空目录

删除一个空目录，可以同时删除途经的父目录，但是要确保父目录中没有其他内容。

rmdir命令 用来删除空目录。当目录不再被使用时，或者磁盘空间已到达使用限定值，就需要删除失去使用价值的目录。利用rmdir命令可以从一个目录中删除一个或多个空的子目录。该命令从一个目录中删除一个或多个子目录，其中dirname佬表示目录名。如果dirname中没有指定路径，则删除当前目录下由dirname指定的目录；如dirname中包含路径，则删除指定位置的目录。删除目录时，必须具有对其父目录的写权限。

注意：子目录被删除之前应该是空目录。就是说，该目录中的所有文件必须用rm命令全部，另外，当前工作目录必须在被删除目录之上，不能是被删除目录本身，也不能是被删除目录的子目录。

虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身，但是这样做存在很大的危险性。

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
rmdir  [选项]  dir
```

## 选项

``` bash
--ignore-fail-on-non-empty   # 忽略由非空目录造成的错误信息
-p,  --parent                # 删除目录，以及途经的父目录
-v,  --verbose               # 显示详细信息

--help            # 显示帮助文档
--version         # 显示命令版本信息
```
## 举例
将工作目录下，名为 www 的子目录删除 :
``` bash
rmdir www
```
在工作目录下的 www 目录中，删除名为 Test 的子目录。若 Test 删除后，www 目录成为空目录，则 www 亦予删除。
``` bash
rmdir -p www/Test
```
下面命令等价于 `rmdir a/b/c`, `rmdir a/b`, `rmdir a`
``` bash
rmdir -p a/b/c
```

简单删除一个目录
``` bash
[sogrey@bogon DirTest]$ ls -l # 查看当前目录
总用量 8
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
[sogrey@bogon DirTest]$ ls -l Dir1 # 查看已有目录Dir1子文件和子目录，不为空
总用量 0
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 3.c
[sogrey@bogon DirTest]$ rmdir Dir1 # 尝试删除非空目录失败
rmdir: 删除 "Dir1" 失败: 目录非空
[sogrey@bogon DirTest]$ mkdir DirTmp #创建临时空目录
[sogrey@bogon DirTest]$ ls -l #查看临时空目录DirTmp已创建
总用量 12
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
drwx------. 2 sogrey sogrey 4096 3月  28 23:33 DirTmp
[sogrey@bogon DirTest]$ rmdir DirTmp #删除空目录
[sogrey@bogon DirTest]$ ls -l #查看删除成功
总用量 8
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
[sogrey@bogon DirTest]$ 
```
使用-p选项，删除子目录以及途经的父目录，父目录只有当前的一个子目录
``` bash
[sogrey@bogon DirTest]$ mkdir -p  pDir/cDir #使用-p选项创建目录pDir以及其子目录cDir
[sogrey@bogon DirTest]$ ll
总用量 12
drwx------. 2 sogrey sogrey 4096 3月  28 23:38 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
drwx------. 3 sogrey sogrey 4096 3月  28 23:39 pDir
[sogrey@bogon DirTest]$ ll pDir/
总用量 4
drwx------. 2 sogrey sogrey 4096 3月  28 23:39 cDir
[sogrey@bogon DirTest]$ ll pDir/cDir/
总用量 0
[sogrey@bogon DirTest]$ rmdir -p pDir/cDir/ #使用-p选项删除目录cDir，这样会导致pDir一起被删除
[sogrey@bogon DirTest]$ ll
总用量 8
drwx------. 2 sogrey sogrey 4096 3月  28 23:38 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
[sogrey@bogon DirTest]$ 
```
使用-p选项，删除子目录以及途经的父目录，父目录中还有其他内容
``` bash
[sogrey@bogon DirTest]$ ll #先查看当前目录
总用量 8
drwx------. 2 sogrey sogrey 4096 3月  28 23:38 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
[sogrey@bogon DirTest]$ mkdir -p  Dir1/cDir #为目录Dir1创建子目录cDir
[sogrey@bogon DirTest]$ ll
总用量 8
drwx------. 3 sogrey sogrey 4096 3月  28 23:43 Dir1
drwx------. 2 sogrey sogrey 4096 3月  28 23:30 Dir2
[sogrey@bogon DirTest]$ ll Dir1 #查看子目录cDir已创建
总用量 4
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey    0 3月   9 00:44 3.c
drwx------. 2 sogrey sogrey 4096 3月  28 23:43 cDir
[sogrey@bogon DirTest]$ rmdir -p Dir1/cDir/ #使用-p选项删除目录Dir1/cDir/，父目录Dir1不为空，删除失败
rmdir: 删除目录 "Dir1" 失败: 目录非空
[sogrey@bogon DirTest]$ ll Dir1 #但cDir成功删除
总用量 0
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey 0 3月   9 00:44 3.c
[sogrey@bogon DirTest]$ 
```
同时改变所有者和组
``` bash
[root@bogon DirTest]$ ls -l 1.c  #当前的组是sogrey
-rwxr--r-- 1 root sogrey 0 9月   7 09:11 1.c
[root@bogon DirTest]$ chown 500：500 1.c #把组和所有者都改为500，注意语法，中间有个冒号
[root@bogon DirTest]$ ls -l 1.c
-rwxr--r-- 1 user01 user01 0 9月   7 09:11 1.c
```