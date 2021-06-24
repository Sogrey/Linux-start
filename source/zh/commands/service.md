# service - 控制系统服务的实用工具
service命令 是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。

service可以控制系统服务（打开、关闭、重启）。service在尽可能可预测的环境中运行SystemV init脚本，删除大多数环境变量并将当前工作目录设置为根目录。脚本参数位于“/etc/init.d/script”中的System V init脚本。受支持的命令值取决于调用的脚本，服务将命令和选项传递给init脚本。

所有脚本至少应该支持start命令和stop命令。作为特例，如果命令是“--full-restart”，脚本将运行两次，首先使用stop命令，然后使用start命令。“service  --status-all”按照字母顺序运行所有的init脚本，执行status命令。用户可以在/etc/init.d/目录下找到服务的脚本文件。

只有环境变量LANG和TERM传递给init脚本文件。

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
service SCRIPT COMMAND [OPTIONS]
service --status-all
service --help | -h | --version
```

## 选项

``` bash
-h, --help          # 帮助信息
-V, --version       # 显示命令版本信息
--status-all        # 显示所有的服务状态
--full-restart      # 重启服务，运行两次，先停止后开启
[service_name  cmd] # 控制服务。例如service vsftpd start。cmd可以是start、stop、restart
```
## 举例
查看所有服务当前的运行状态
``` bash
[sogrey@bogon ~]$ service --status-all
未加载 netconsole 模块
已配置设备：
lo enp0s3
当前活跃设备：
lo enp0s3 virbr0
[sogrey@bogon ~]$ 
```
查看指定服务（vsftpd）的运行状态
``` bash
[sogrey@bogon ~]$ service vsftpd status
vsftpd (pid 30818) 正在运行...
[sogrey@bogon ~]$ 
```
停止指定服务（vsftpd）
``` bash
[sogrey@bogon ~]$ service vsftpd stop
关闭 vsftpd：                                              [确定]
[sogrey@bogon ~]$ service vsftpd status
vsftpd 已停
[sogrey@bogon ~]$ 
```