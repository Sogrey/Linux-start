# groupmod - 更改群组识别码或名称
groupmod命令 更改群组识别码或名称。需要更改群组的识别码或名称时，可用groupmod指令来完成这项工作。

修改组的基本信息，包括组名称、组ID等信息。

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
groupmod  [选项]  group
```

## 选项

``` bash
-g gid                           # 指定组id
-n name                          # 指定组名

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon 文档]$ tail -n 2 /etc/group # 查看组信息
sogrey:123456:1000:sogrey
vboxsf:!:983:
[sogrey@bogon 文档]$ groupmod -g 955 -n sogrey01 sogrey
bash: /usr/sbin/groupmod: 权限不够
[sogrey@bogon 文档]$ sudo groupmod -g 955 -n sogrey01 sogrey #修改组id：955，组名字：sogrey01
[sudo] sogrey 的密码：
[sogrey@bogon 文档]$ tail -n 2 /etc/group
vboxsf:!:983:
sogrey01:123456:955:sogrey #查看组信息，已经修改
[sogrey@bogon 文档]$ 
```
