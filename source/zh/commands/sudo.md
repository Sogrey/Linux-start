# sudo - 以其他身份来执行命令

sudo命令 用来以其他身份来执行命令，预设的身份为root。在/etc/sudoers中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。

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
sudo  [OPTION] [参数]
```

## 选项

``` bash
-b                                   # 在后台执行指令；
-E                                   # 继承当前环境变量
-H                                   # 将HOME环境变量设为新身份的HOME环境变量；
-k                                   # 结束密码的有效期限，也就是下次再执行sudo时便需要输入密码；。
-l                                   # 列出目前用户可执行与无法执行的指令；
-p                                   # 改变询问密码的提示符号；
-s<shell>                            # 执行指定的shell；
-u<用户>                              # 以指定的用户作为新的身份。若不加上此参数，则预设以root作为新的身份；
-v                                   # 延长密码有效期限5分钟；

-h, --help                           # 显示帮助文档
-V, --version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ sudo su -
[sudo] sogrey 的密码：
上一次登录：2021年 3月 24日 00:24:36 星期三 CSTpts/0 上
[root@bogon ~]# 
```
这个命令相当于使用root超级用户重新登录一次shell，只不过密码是使用的当前用户的密码。而且重要是，该命令会**重新加载/etc/profile文件以及/etc/bashrc文件等系统配置文件，并且还会重新加载root用户的$SHELL环境变量所对应的配置文件** ，比如：root超级用户的$SHELL是/bin/bash，则会加载/root/.bashrc等配置。如果是/bin/zsh，则会加载/root/.zshrc等配置，执行后是完全的root环境。

``` bash
[sogrey@bogon ~]$ sudo -i
[root@bogon ~]# 
```
这个命令基本与 sudo su - 相同，执行后也是root超级用户的环境，只不过是多了一些当前用户的信息。
