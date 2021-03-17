# gpasswd - Linux下工作组文件的管理工具
gpasswd指令用来管理组文件“/etc/group”和“/etc/gshadow”，每个组可以设置管理员、组员、密码。系统管理员可以使用-A选项定义组管理员，使用-M选项定义成员。他们拥有组管理员和成员的所有权利。由具有组名的组管理员调用的gpasswd只提示输入组的新密码。如果设置了密码，则成员仍然可以在没有密码的情况下使用newgrp(1)，而非成员必须提供密码。

组密码是一个固有的安全问题，因为允许多个人知道密码。然而，群组是允许不同用户之间合作的有用工具。

警告，此工具仅对“/etc/group”和“/etc/gshadow”文件进行操作。因此，您不能更改任何NIS或LDAP组。这必须在相应的服务器上执行。

gpasswd命令 是Linux下工作组文件/etc/group和/etc/gshadow管理工具。

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
gpasswd  [选项]  group
```

## 选项

``` bash
-a,  --add user                    # 向组中添加用户
-d,  --delete user                 # 删除成员
-r,  --remove-password             # 删除组密码
-R,  --restrict                    # 限制对命名组的访问。只允许组成员使用newgrp加入命名组。
-M,   --members user,...           # 向组添加多个成员
-A,  --administrators user,..      # 设置组管理员

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 配置

下面“/etc/login.defs”中的配置变量更改了该工具的行为：

**ENCRYPT_METHOD**（string），这定义了用于加密密码的系统默认加密算法(如果命令行上没有指定算法)。可用的算法有：DES（默认）、MD5、 SHA256、SHA512。注意：此参数重写MD5_CRYPT_ENAB变量。

**MAX_MEMBERS_PER_GROUP**（number），每个组条目的最大成员数。达到最大值时，在/etc/group中启动一个新的组条目(行)(具有相同的名称、相同的密码和相同的GID)。默认值为0，这意味着组中的成员数没有限制。此功能(拆分组)允许限制组文件中的行长度。这对于确保NIS组的行不大于1024个字符非常有用。如果你需要执行这样的限制，你可以使用25。注意：拆分组可能不支持所有的工具(即使在阴影工具集中)。除非你真的需要这个变量，否则你不应该使用它。

**MD5_CRYPT_ENAB**（boolean），指示是否必须使用基于MD5的算法加密密码。如果设置为“是”，新密码将使用基于MD5的算法进行加密，该算法与FreeBSD最新版本使用的算法兼容。它支持无限长度的密码和更长的盐字符串。如果您需要将加密密码复制到其他不了解新算法的系统，则设置为“否”。默认为否。该变量由ENCRYPT_METHOD变量或用于配置加密算法的任何命令行选项取代。不推荐这个变量。您应该使用ENCRYPT_METHOD。

**SHA_CRYPT_MIN_ROUNDS**（number）、**SHA_CRYPT_MAX_ROUNDS**（number），当Encrypt_Method设置为SHA 256或SHA 512时，默认情况下这将定义加密算法使用的SHA轮数(当命令行上未指定轮数时)。有很多回合，这是比较困难的暴力强制密码。但是还要注意的是，需要更多的CPU资源来对用户进行身份验证。如果没有指定，libc将选择默认的回合数(5000)。数值必须在1000-999999999范围内。如果只设置了SHA_CRYPT_MIN_ROUNDS或SHA_CRYPT_MAX_ROUNDS中的一个，则将使用此值。如果SHA_CRYPT_MIN_ROUNDS>SHA_CRYPT_MAX_ROUNDS，则将使用最高值。

## 相关文件

- `/etc/group`，组账户信息。
- `/etc/gshadow`，安全组账户信息。

## 用法
如系统有个peter账户，该账户本身不是groupname群组的成员，使用newgrp需要输入密码即可。
``` bash
gpasswd groupname
```
让使用者暂时加入成为该组成员，之后peter建立的文件group也会是groupname。所以该方式可以暂时让peter建立文件时使用其他的组，而不是peter本身所在的组。

所以使用gpasswd groupname设定密码，就是让知道该群组密码的人可以暂时切换具备groupname群组功能的。
``` bash
gpasswd -A peter users
```
这样peter就是users群组的管理员，就可以执行下面的操作:
``` bash
gpasswd -a mary users
gpasswd -a allen users
```
注意：添加用户到某一个组 可以使用usermod -G group_name user_name这个命令可以添加一个用户到指定的组，但是以前添加的组就会清空掉。

所以想要添加一个用户到一个组，同时保留以前添加的组时，请使用gpasswd这个命令来添加操作用户：
``` bash
gpasswd -a user_name group_name
```
## 举例

将用户 usr01 添加到组 sogrey
``` bash
[sogrey@bogon 文档]$ gpasswd -a usr01 sogrey  #向sogrey组添加用户usr01
Adding user usr01 to group sogrey
[sogrey@bogon 文档]$ cat /etc/group     #查看组信息，已经成功添加
sogrey:123456:1000:usr01
```

设置组管理员
``` bash
[sogrey@bogon 文档]$ sudo gpasswd -A sogrey sogrey   #设置管理员
[sogrey@bogon 文档]$ sudo cat /etc/gshadow           #查看组信息，管理员已经设置
sogrey:!:1000:sogrey
```