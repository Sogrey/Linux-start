# ntpdate - 通过轮询指定服务器设置本地日期和时间从而确定正确的时间

ntpdate指令通过轮询指定为服务器参数的网络时间协议(NTP)服务器来设置本地日期和时间,从而确定正确的时间。

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
ntpdate  [选项]  server
```

## 选项

``` bash
-a        # 启用身份验证功能并指定要用于身份验证的密钥标识符。密钥和密钥标识符必须 在客户端密钥文件和服务器密钥文件中都匹配。缺省设置时禁用身份验证功能
-B        # 强制始终使用adjtime系统调用来微调时间(即使测量到的偏移量大于±128ms)。 默认设置时在偏移量大于±12.8ms时使用clock_settime系统调用步进时间
-b        # 强制使用clock_settime系统调用来步进时间,而不是使用adjtime系统调用来微 调时间 (默认值)。 如果在引导时从启动文件中调用,则应使用该选项
-d        # 启用调试模式,在该模式下ntpdate将经历所有步骤,而不仅仅是调整本地时钟。 另外还将输出可用于一般性调试的信息
-e        # 将执行身份验证功能的处理延迟指定为值 authdelay (以秒及其分数为单位,有关详细信息请参阅xntpd(1M))。虽然指定一个值可以在速度很慢的CPU上提高走时精度,但是该数通常都非常小,以至在大多数情况下都可以将其忽略
-k        # 将身份验证密钥文件的路径指定为字符串keyfile。 默认值为/etc/ntp.keys。 该文件应该采用xntpd中所述的格式
-o        # 将外发数据包的NTP版本指定为整数版本(可以是1或2)。 默认值是3。 它允许将ntpdate与早期NTP版本一起使用
-p        # 将要从每个服务器中获取的示例数指定为整数示例,其值的范围是 1~8(包括这 两个数)。默认值为4
-q        # 输出偏移量测量结果、服务器层次以及延迟测量结果,但不调整本地时钟。它类似于“-d”选项,后者提供更为详细的调试信息
-s        # 将日志记录输出从标准输出(默认)转移到系统 syslog (请参阅 syslog(3C))工具。它主要是为方便使用cron脚本而设计
-t        # 将等待服务器响应的最长时间指定为超时值,以秒及其分数为单位。该值将四舍五入成0.2秒的倍数。默认值是1秒,该值适用于轮询局域网
-u        # 指示ntpdate将无特权的端口用于外发的数据包。在防火墙后,如果阻塞向特权端口的传入流量,并且希望与防火墙后的主机进行同步,则该选项极为有用。请注意,“-d” 选项始终使用无特权的端口
-v        # 输出NTP版本号和偏移量测量信息
```
## 举例
同步时间
``` bash
[root@localhost ~]$ ntpdate 202.112.29.82
16 Aug 10:13:21 ntpdate[20212]: adjust time server 202.112.29.82 offset 0.006454 sec
```



