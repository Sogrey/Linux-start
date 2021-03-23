# pwck - 用来验证系统认证文件内容和格式的完整性

pwck命令 用来验证系统认证文件/etc/passwd和/etc/shadow的内容和格式的完整性。

检查用户密码文件“/etc/passwd”和“/etc/shadow”的完整性，将验证结果送到标砖输出。提示用户删除格式不正确或有其他不可更正错误的条目。检查以验证每个条目是否具有：正确的字段数、唯一有效的用户名、有效的用户和组标识符、有效的主组、有效的家目录、有效的登录shell。

当指定了第二个文件参数或系统上存在“/etc/shadow”时，就启用了shadow检查。它会检查一下信息：每个passwd条目都有一个匹配的阴影条目，每个影子条目都有一个匹配的passwd条目，在shadow文件中指定了密码，阴影条目有正确的字段数，阴影条目在shadow中是唯一的，最近的密码更改不会在将来发生。

检查正确的字段数和唯一用户名是致命的。如果条目有错误的字段数，则会提示用户删除整行。如果用户没有肯定地回答，所有进一步的检查都会被绕过。提示删除具有重复用户名的条目，但仍将进行其余检查。所有其他错误都是警告，并鼓励用户运行usermod命令来更正错误。

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
pwck  [选项] 
```

## 选项

``` bash
-q                               # 仅显示报错信息
-r                               # 以只读模式执行
-s                               # 使用UID作为文件的排序依据

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 配置
下面“/etc/login.defs“中的配置变量更改了该工具的行为：

**PASS_MAX_DAYS**，可以使用密码的最大天数。如果密码早于此，则将强制进行密码更改。如果没有指定，将假定-1(这将禁用限制)。

**PASS_MIN_DAYS**，密码更改之间允许的最短天数。任何密码更改尝试比这更早将被拒绝。如果未指定，则假定为-1(这将禁用限制)

**PASS_WARN_AGE**，在密码过期前发出警告的天数。零表示警告只在到期之日发出，负值表示没有发出警告。如未指定，则不会提供警告。
## 相关文件
- `/etc/group`组账户信息。
- `/etc/passwd`用户账户信息。
- `/etc/shadow`安全用户帐户信息。
## 返回值
- `0` 成功
- `1` 无效的命令
- `2` 1个或多个密码出错
- `3` 无法打开密码文件
- `4` 不能锁定密码文件
- `5` 不能更新密码文件
- `6` 无法排序密码文件
## 举例
普通用户调用pwck
``` bash
[sogrey@bogon ~]$ sudo pwck # 查看密码文件
用户“ftp”：目录 /var/ftp 不存在
用户“saslauth”：目录 /run/saslauthd 不存在
用户“gluster”：目录 /var/run/gluster 不存在
用户“pulse”：目录 /var/run/pulse 不存在
用户“gnome-initial-setup”：目录 /run/gnome-initial-setup/ 不存在
用户“avahi”：目录 /var/run/avahi-daemon 不存在
用户“vboxadd”：目录 /var/run/vboxadd 不存在
pwck：无改变
[sogrey@bogon ~]$ echo $? #打印返回值，这个返回值在shell变量“#？”中
2
[sogrey@bogon ~]$ 
```
root调用pwck
``` bash
[sogrey@bogon ~]$ sudo -i
[root@bogon ~]# pwck
用户“ftp”：目录 /var/ftp 不存在
用户“saslauth”：目录 /run/saslauthd 不存在
用户“gluster”：目录 /var/run/gluster 不存在
用户“pulse”：目录 /var/run/pulse 不存在
用户“gnome-initial-setup”：目录 /run/gnome-initial-setup/ 不存在
用户“avahi”：目录 /var/run/avahi-daemon 不存在
用户“vboxadd”：目录 /var/run/vboxadd 不存在
pwck：无改变
[root@bogon ~]# pwck /etc/passwd
用户“ftp”：目录 /var/ftp 不存在
用户“saslauth”：目录 /run/saslauthd 不存在
用户“gluster”：目录 /var/run/gluster 不存在
用户“pulse”：目录 /var/run/pulse 不存在
用户“gnome-initial-setup”：目录 /run/gnome-initial-setup/ 不存在
用户“avahi”：目录 /var/run/avahi-daemon 不存在
用户“vboxadd”：目录 /var/run/vboxadd 不存在
pwck：无改变
[root@bogon ~]# 
```