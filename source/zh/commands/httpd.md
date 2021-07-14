# httpd - apache超文本传输协议的主程序

httpd是apache超文本传输协议的主程序，它被设计成一个独立运行的守护进程。httpd会建立一个线程池来处理http请求。

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
httpd  [OPTION]
```

## 选项

``` bash
-d serverroot           # 设置服务器根目录。对应配置文件中的ServerRoot指令
-f config               # 定apache服务器的配置文件。如果配置文件不使用绝对路径，那么就是相对于ServerRoot的路径
-k start|restart|graceful|stop|graceful-stop # 向httpd进程发送信息，可以控制httpd
-C                      # 在读取配置文件之前，先处理指定的指令
-c                      # 在读取配置文件之后，处理指定的指令
-D param                # 设置参数，它可以配合apache的配置文件中<IfDefine>一起使用
-e level                # 设置日志等级
-E file                 # 置错误信息文件
-h                      # 显示简短的说明选项
-l                      # 显示静态编译的httpd模块列表
-L                      # 显示apache服务配置文件中的指令列表
-M                      # 显示httpd模块列表
-S                      # 显示虚拟主机配置
-t                      # 检查配置文件语法
-v                      # 显示httpd版本
-V                      # 显示编译时的配置参数和版本信息
-X                      # 运行调试模式
```
## 举例

重启httpd服务
``` bash
[root@localhost ~]$ httpd -k restart      #重启服务
You have new mail in /var/spool/mail/root
[root@localhost ~]$  
```
检测配置文件
``` bash
[root@localhost ~]$ httpd –t              #检测配置文件，没有错误
httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain for ServerName
Syntax OK
[root@localhost ~]$
```
显示apache中的模块
``` bash
[root@localhost ~]$ httpd -M
httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain for ServerName
Loaded Modules:
 core_module (static)
 mpm_prefork_module (static)
 http_module (static)
 so_module (static)
 auth_basic_module (shared)
 auth_digest_module (shared)
 authn_file_module (shared)
 authn_alias_module (shared)
 authn_anon_module (shared)
 authn_dbm_module (shared)
```

