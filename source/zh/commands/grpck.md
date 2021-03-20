# grpck - 用于验证组文件的完整性
grpck命令 用于验证组文件的完整性，在验证之前，需要先锁定（lock）组文件/etc/group和/etc/shadow。

grpck命令检查数据是否正确存放，每条记录是否都包含足够的信息，是否有一个唯一的组名，是否包含正确的用户，是否正确设置了组的管理员等。grpck检查发现错误以后，在命令行提示用户是否删除错误的记录。如果用户没有明确回答删除记录，grpck终止运行。

grpck指令可以验证组文件“/etc/group”和“/etc/gshadow”的完整性。检查的内容包括：正确的字段数、唯一有效的组名称、有效的组标识符、成员和管理员的有效列表、“/etc/gshadow”文件中的相应条目。检查正确的字段数和唯一的组名是致命的。如果条目有错误的字段数，则会提示用户删除整行。如果用户没有肯定地回答，所有进一步的检查都会被绕过。提示删除具有重复组名的条目，但仍将进行其余检查。所有其他错误都是警告，并鼓励用户运行groupmod命令来更正错误。

对“/etc/group“和“/etc/gshadow“文件进行操作的命令不能更改损坏或重复的条目。在这种情况下，应该使用grpck来删除违规条目。

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
grpck  [选项]  group
```

## 选项

``` bash
-r                               # 以只读模式运行
-s                               # 使用gid对group和gshadow进行排序

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 配置
下面“/etc/login.defs”中的配置变量更改了该工具的行为：

MAX_MEMBERS_PER_GROUP（number），每个组条目的最大成员数。达到最大值时，在“/etc/group”中启动一个新的组条目(行)(具有相同的名称、相同的密码和相同的GID)。默认值为0，这意味着组中的成员数没有限制。此功能(拆分组)允许限制组文件中的行长度。这对于确保NIS组的行不大于1024个字符非常有用。如果你需要执行这样的限制，你可以使用25。注意：拆分组可能不支持所有的工具(即使在阴影工具集中)。除非您真的需要这个变量，否则不应该使用它。
## 相关文件
- `/etc/group`组账户信息。
- `/etc/gshadow`安全组账户信息。
- `/etc/passwd`用户账户信息。
## 举例
检查组信息
``` bash
[sogrey@bogon ~]$ sudo grpck # 检查组信息，返回0，没有任何错误
[sudo] sogrey 的密码：
[sogrey@bogon ~]$ echo $?
0
[sogrey@bogon ~]$ 
```
对/etc/group排序
``` bash
[sogrey@bogon ~]$ tail /etc/group # 查看组信息
pulse-access:!:986:
pulse-rt:!:985:
pulse:!:171:
gdm:!:42:
gnome-initial-setup:!:984:
sshd:!:74:
avahi:!:70:
slocate:!:21:
vboxsf:!:983:
sogrey:123456:1000:sogrey
[sogrey@bogon ~]$ sudo grpck -s /etc/group # 按照gid排序
[sogrey@bogon ~]$ tail /etc/group # 查看信息，已经排序
geoclue:!:992:
ssh_keys:!:993:
cgred:!:994:
colord:!:995:
libstoragemgmt:!:996:
printadmin:!:997:
polkitd:!:998:
input:!:999:
sogrey:123456:1000:sogrey
nfsnobody:!:65534:
[sogrey@bogon ~]$ 
```