# lpadmin - 配置CUPS套件中的打印机和类

lpadmin命令 用于配置CUPS套件中的打印机和类，也被用来设置打印服务器默认打印机。

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
lpadmin  [OPTION] [参数]
```
打印机：指定要配置的打印机的名称。

## 选项

``` bash
-c      # 将打印机加入类；
-i      # 为打印机设置“system V”风格的接口脚本；
-m      # 从mode目录设置一个标准的“system V”接口脚本或“PPD”文件；
-o      # 为“PPD”或服务器设置选项；
-r      # 从类中删除打印机；
-u      # 设置打印机用户级的访问控制；
-D      # 为打印机提供一个文字描述；
-E      # 允许打印机接受打印任务；
-L      # 为打印机位置提供一个文字描述；
-P      # 为打印机指定一个ppd描述文件；
-p      # 指定要配置的打印机名称；
-d      # 设置默认打印机。
```
