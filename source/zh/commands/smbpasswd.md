# smbpasswd - 可以用来修改samba用户的的密码

smbpasswd指令可以用来修改samba用户的的密码，该指令不仅可以修改本地samba服务器的用户密码，还可以修改远程samba服务器的用户密码。

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
smbpasswd  [选项]  username
```

## 选项

``` bash
-a        # 添加用户到samba服务器
-c        # 指定配置文件smb.conf的位置
-x        # 删除用户
-d        # 停止使用指定的用户
-e        # 激活暂停的用户
-D        # 设置调试级别0~10
-n        # 指定用户名为空密码
-r        # 指定远程smb服务器上的用户密码
-U        # 指定用户名，只和-r配合使用
-h        # 显示帮助信息
```
## 举例

添加用户
``` bash
[root@localhost ~]$ smbpasswd -a sogrey       #添加用户，设置密码
New SMB password:
Retype new SMB password:
Added user sogrey.
```
修改用户密码
``` bash
[root@localhost ~]$ smbpasswd sogrey       #修改用户密码
New SMB password:
Retype new SMB password:
```

