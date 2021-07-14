# htdigest - Apache服务器内置工具

htdigest指令用来建立和更新apache服务器用于摘要认证的存放用户认证信息的文件。

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
htdigest  [-c]  passfile   realm  username
```

## 选项

``` bash
-c  # 创建密码文件，如果存在，首先删除
```
## 举例

创建摘要认证文件
``` bash
[root@localhost ~]$ htdigest -c htfile qq.com weijie  #用户weijie在qq.com的认证文件
Adding password for weijie in realm qq.com.
New password:                                    #输入密码
Re-type new password:                           #确认密码
You have new mail in /var/spool/mail/root
[root@localhost ~]$ cat htfile                #显示认证文件
weijie:qq.com:3d3feff0cf3f031cf3652349b7249d59
```
 



