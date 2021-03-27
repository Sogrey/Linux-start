# passwd - 用于让用户可以更改自己的密码
passwd命令 用于设置用户的认证信息，包括用户密码、密码过期时间等。系统管理者则能用它管理系统用户的密码。只有管理者可以指定用户名称，一般用户只能变更自己的密码。

更改用户密码，超级用户可以修改所有用户密码，普通用户只能修改自己的密码。这个任务是通过调用LinuxPAM和LibuserAPI来完成的。本质上，它使用LinuxPAM将自己初始化为一个“passwd”服务，并利用配置的密码模块对用户的密码进行身份验证和更新。

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
passwd  [选项]  user

passwd  [-k]  [-l]  [-u  [-f]]  [-d]
        [-e]  [-n mindays]  [-x maxdays]
        [-w warndays]  [-i inactivedays]
        [-S]  [--stdin]  [username]
```

## 选项

``` bash
-d                # 删除用户的密码，只有root用户才能使用
-e                # 使用户密码失效，强制用户下次登录改变密码，只有root用户才能使用
-n                # 设置密码的最短有效时间，只有root用户才能使用
-x                # 设置密码最大有效时间，只有root用户才能使用
-S                # 显示简短的密码信息，只有root用户才能使用
-l                # 锁定用户，只有root用户才能使用
-u                # 解锁用户，只有root用户才能使用
-k                # 选项-k用于指示更新只适用于过期的身份验证令牌(密码)；用户希望像以前一样保留其未过期的令牌。
-i                # 这将设置此帐户的过期密码将被视为不活动的天数，如果用户帐户支持密码生存期，则应禁用该帐户。只对根用户可用。
-w                # 这将设置用户将开始收到警告，如果用户帐户支持密码生存期，其密码将过期的天数。只对根用户可用。
--stdin           # 此选项用于指示passwd应从标准输入中读取新密码，该输入可以是管道。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
锁定用户，锁定之后不能登录
``` bash
[root@bogon 文档]$ passwd -l sogrey  #锁定用户
锁定用户 sogrey 的密码 。
passwd: 操作成功
[root@bogon 文档]$ passwd -u sogrey  #解锁用户
解锁用户 sogrey 的密码 。
passwd: 操作成功
```
删除用户密码
``` bash
[root@bogon 文档]$ passwd -d sogrey  #清除用户sogrey密码
清除用户的密码 sogrey
passwd: 操作成功
[root@bogon 文档]$ su user01     #切换到普通用户user01
[user01@bogon 文档]$ su sogrey    #从普通用户user01切换到普通用户sogrey，不需要密码
[sogrey@bogon 文档]$
```