# groupadd - 用于创建一个新的工作组

groupadd命令 用于创建一个新的工作组，新工作组的信息将被添加到系统文件中。

指定群组名称来建立新的群组账号，需要时可以从系统中取得新的群组值。

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
groupadd  [选项]  group
```

## 选项

``` bash
-g gid                        # 指定组id
-r                            # 创建系统组
-f                            # 新增一个已经存在的群组帐号，系统会出现错误讯息然后结束groupadd。如果是这样的情况，不会新增这个群组(如果是这个情况下，系统不会再新增一次)也可同时加上-g选项当你加上一个gid，此时gid就不用是唯一值，可不加-o参数，建好群组后会显结果

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 相关文件

- `/etc/group`群组信息。
- `/etc/gshadow`群组加密信息。

## 举例

``` bash
[sogrey@bogon ~]$ sudo groupadd groupTest -g 1996 # 创建组，指定id
[sogrey@bogon ~]$ tail -n 2 /etc/group # 查看组信息
sogrey:123456:1000:sogrey
groupTest:x:1996:
[sogrey@bogon ~]$ 
```
