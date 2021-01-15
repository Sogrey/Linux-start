# mkdir - 创建目录

 如果目录不存在，那么就创建目录。

 mkdir命令 用来创建目录。该命令创建由dirname命名的目录。如果在目录名的前面没有加任何路径名，则在当前目录下创建由dirname指定的目录；如果给出了一个已经存在的路径，将会在该目录下创建一个指定的目录。在创建目录时，应保证新建的目录与它所在目录下的文件没有重名。 

注意：在创建文件时，不要把所有的文件都存放在主目录中，可以创建子目录，通过它们来更有效地组织文件。最好采用前后一致的命名方式来区分文件和目录。例如，目录名可以以大写字母开头，这样，在目录列表中目录名就出现在前面。

在一个子目录中应包含类型相似或用途相近的文件。例如，应建立一个子目录，它包含所有的数据库文件，另有一个子目录应包含电子表格文件，还有一个子目录应包含文字处理文档，等等。目录也是文件，它们和普通文件一样遵循相同的命名规则，并且利用全路径可以唯一地指定一个目录。


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
 mkdir  [选项]  dir  # 多个目录之间用空格隔开
```

## 选项

``` bash
-m, --mode=MODE     # 设置目录的权限
-p, --parents       # 创建多层目录的时候，如果父目录不存在，那么首先创建父目录
-v, --vervose       # 显示执行过程

    --help          # 显示帮助文档
    --version       # 显示命令版本信息
```


## 举例

``` bash
[sogrey@bogon 文档]$ mkdir newDir
[sogrey@bogon 文档]$ ls
backup  demos  newDir
[sogrey@bogon 文档]$ ls -l
总用量 12
drwx------. 2 sogrey sogrey 4096 1月  12 00:52 backup
drwx------. 2 sogrey sogrey 4096 1月  14 23:23 demos
drwx------. 2 sogrey sogrey 4096 1月  15 23:42 newDir
[sogrey@bogon 文档]$ mkdir -m 777 newDir2
[sogrey@bogon 文档]$ ls -l
总用量 16
drwx------. 2 sogrey sogrey 4096 1月  12 00:52 backup
drwx------. 2 sogrey sogrey 4096 1月  14 23:23 demos
drwx------. 2 sogrey sogrey 4096 1月  15 23:42 newDir
drwxrwxrwx. 2 sogrey sogrey 4096 1月  15 23:43 newDir2
[sogrey@bogon 文档]$ mkdir -v newDir3/test.java
mkdir: 无法创建目录"newDir3/test.java": 没有那个文件或目录
[sogrey@bogon 文档]$ mkdir -p -v newDir3/test.java
mkdir: 已创建目录 "newDir3"
mkdir: 已创建目录 "newDir3/test.java"
[sogrey@bogon 文档]$ 
```
