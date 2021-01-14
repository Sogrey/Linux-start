# whereis - 查找二进制程序、代码等相关文件路径
whereis命令 用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。

whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。

和find相比，whereis查找的速度非常快，这是因为linux系统会将 系统内的所有文件都记录在一个数据库文件中，当使用whereis和下面即将介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通 过遍历硬盘来查找，效率自然会很高。 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。

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
whereis  [选项]  cmd
whereis  [-bmsu] [-BMS directory...  -f] filename...
```

## 选项

``` bash
-b                  # 只搜索二进制文件
-m                  # 只搜索手册文件
-s                  # 只搜索源代码
-u                  # 寻找不寻常的条目。如果文件没有每个请求类型的一个条目，
                    # 则该文件被认为是不寻常的。因此，“Whereis –m –u *”
                    # 请求当前目录中没有文档的文件。
-B                  # 在指定目录下搜索二进制文件
-M                  # 在指定目录下搜索手册文件
-S                  # 在指定目录下搜索源代码文件
-f                  # 不显示文件名前的路径，在是使用-S 、–M、 -B选项时，
                    # 必须使用这个选项
```

## 举例

``` bash
[sogrey@bogon 文档]$ whereis -b ls
ls: /usr/bin/ls
[sogrey@bogon 文档]$ whereis -m ls
ls: /usr/share/man/man1p/ls.1p.gz /usr/share/man/man1/ls.1.gz
[sogrey@bogon 文档]$ 
```
