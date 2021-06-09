# hostname - 显示和设置系统的主机名

hostname命令 用于显示和设置系统的主机名称。

- 环境变量 HOSTNAME 也保存了当前的主机名。
- 在使用 hostname 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 /etc/hosts 和 /etc/sysconfig/network 的相关内容并进行重启；也可以使用 hostnamectl 命令进行永久修改。
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
hostname    [OPTION]
hostname [-b] {hostname|-F file}           # 设置主机名称（或从文件获取）
hostname [-a|-A|-d|-f|-i|-I|-s|-y]         # 显示格式化的名称
hostname                                   # 显示主机名称

{yp,nis,}domainname {nisdomain|-F file}    # 设置 NIS 主机名称（或从文件获取）
{yp,nis,}domainname                        # 显示 NIS 主机名称

dnsdomainname                              # 显示 DNS 主机名称

hostname -V|--version|-h|--help            # 打印信息并退出
```

## 选项

``` bash
-v                     # 显示详细执行过程
-a, --alias            # 显示主机别名
-d, --domain           # 显示主机dns域名
-F file                # 从文件读取
-f, --fqdn, --long     # 显示完全格式的域名
-A, --all-fqdns        # 显示机器的全部FQDNs
-i, --ip-address       # 显示指定主机的ip地址
-I, --all-ip-address   # 显示主机所有的地址
-s, --short            # 以短格式显示，仅显示从第一个点分开的部分
-y, --yp, --nis        # 显示nis域名

-h, --help                           # 显示帮助文档
-V, --version                        # 显示命令版本信息
```
## FQDN
不能用此命令更改FQDN(由hostname-fqdn返回)或DNS域名(由dnsdomainname返回)。系统的FQDN是resolver为主机名返回的名称。技术上：FQDN是由gethostname(2)返回的主机名。DNS域名是第一个点之后的部分。因此，如何更改取决于配置文件(通常在“/etc/host.conf”中)。通常(如果在DNS或NIS之前解析主机文件)，您可以在“/etc/host”中更改它。

如果一台机器有多个网络接口/地址，或者在移动环境中使用，那么它可能有多个FQDN/域名，或者根本没有。因此，避免使用“hostname -fqdn”、“hostname  --domain”和“dnsdomainname”。“hostname --ip-address”地址也受到同样的限制，因此也应该避免。
## 举例
显示主机名
``` bash
[root@localhost ~]$ hostname  #显示完整名字
localhost.localdomain
[root@localhost ~]$ hostname –s  #显示短格式名字
localhost       
[root@localhost ~]$ hostname –a   #显示主机别名
localhost.localdomain localhost4 localhost4.localdomain4 localhost.localdomain loc
```
显示主机ip
``` bash
[root@localhost ~]$ hostname -i
127.0.0.1 127.0.0.1
```