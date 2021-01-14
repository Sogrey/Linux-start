# lsattr - 显示指定文件或者目录的属性

RT。 显示指定文件或者目录的属性。可用于查看文件的第二扩展文件系统属性。

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
lsattr  [选项]  file
```

## 选项

``` bash
-v       # 列出文件版本号
-R       # 递归列出所有子目录中文件的属性
-a       # 列出所有文件的属性，包含隐藏文件
-d       # 列出目录的属性，而不是它里面内容的属性
-V       # 显示执行过程
```

## 举例

``` bash
[sogrey@bogon 文档]$ lsattr -a demos
--------------e----- demos/test.txt
--------------e----- demos/test3.txt
--------------e----- demos/.
--------------e----- demos/test2.txt
--------------e----- demos/test4.txt
--------------e----- demos/..
[sogrey@bogon 文档]$ lsattr -a -v demos
803300458  --------------e----- demos/test.txt
803300456  --------------e----- demos/test3.txt
803300302  --------------e----- demos/.
803300455  --------------e----- demos/test2.txt
803300457  --------------e----- demos/test4.txt
3339769049 --------------e----- demos/..
[sogrey@bogon 文档]$ lsattr -a -V demos
lsattr 1.45.0 (6-Mar-2019)
--------------e----- demos/test.txt
--------------e----- demos/test3.txt
--------------e----- demos/.
--------------e----- demos/test2.txt
--------------e----- demos/test4.txt
--------------e----- demos/..
[sogrey@bogon 文档]$ lsattr -d demos
--------------e----- demos
[sogrey@bogon 文档]$ lsattr -R demos
--------------e----- demos/test.txt
--------------e----- demos/test3.txt
--------------e----- demos/test2.txt
--------------e----- demos/test4.txt
[sogrey@bogon 文档]$ 
```
