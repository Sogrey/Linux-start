# mpstat - 显示各个可用CPU的状态

mpstat命令 指令主要用于多CPU环境下，它显示各个可用CPU的状态系你想。这些信息存放在/proc/stat文件中。在多CPUs系统里，其不但能查看所有CPU的平均状况信息，而且能够查看特定CPU的信息。

mpstat指令用来显示cpu的使用状况，将内容显示到标准输出。处理器0是第一个。还报告了所有处理器之间的全球平均活动。mpstat命令既可以在SMP机器上使用，也可以在UP机器上使用，但是在后者中，只会打印全局平均活动。如果未选择活动，则默认报告是CPU利用率报告。

Interval参数指定每个报表之间以秒为单位的时间量。值为0(或根本没有参数)表示自系统启动(启动)以来将报告处理器统计信息。如果未将count参数设置为零，则可以与Interval参数一起指定Count参数。计数值决定间隔秒生成的报表数。如果未使用count参数指定Interval参数，则mpstat命令将连续生成报告。

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
mpstat  [ -A ]  [ -I { SUM | CPU | ALL } ]  [ -u ]  [ -P { cpu [,...] | ON | ALL} ]  [ -V ]  [ interval [ count ] ]
```

## 选项

``` bash
-A                        # 等价于“-I ALL –u –P ALL”
-I {SUM | CPU | ALL}      # 显示中断信息：SUM，显示每个cpu的中断次数；CPU，显示每秒收到的中断次数；ALL，等同于同时具备SUM和CPU属性
-P {cpu […] | ON |ALL}    # 指定CPU编号，从0开始。ON代表，每行显示一个CPU信息。ALL代表显示所有的cpu信息
-u                        # 显示cpu的使用状态：
-V                        # 显示版本信息并且推出
```
## cpu状态
“-u”选项可以显示的cpu状态有
``` bash
CPU                       # 处理器号码。关键字ALL表示统计数据是以所有处理器之间的平均值计算的。
%usr                      # 显示在用户级别(应用程序)执行时出现的CPU利用率百分比。
%nice                     # 以良好的优先级在用户级别执行时显示CPU利用率的百分比。
%sys                      # 显示在系统级(内核)执行时CPU利用率的百分比。请注意，这不包括用于服务硬件和软件中断的时间。
%iowait                   # 显示CPU或CPU空闲的时间百分比，在此期间，系统有未执行的磁盘I/O请求。
%irq                      # 显示cpu或cpu用于服务硬件中断的时间百分比。
%soft                     # 显示CPU或CPU用于服务软件中断的时间百分比。
%steal                    # 显示虚拟机管理程序为另一个虚拟处理器服务时，虚拟CPU或CPU在非自愿等待中花费的时间百分比。
%guest                    # 显示CPU或cpu运行虚拟处理器所花费的时间百分比。
%idle                     # 显示CPU或CPU空闲的时间百分比，并且系统没有未执行的磁盘I/O请求。
```
## 举例
显示cpu使用情况
``` bash
[sogrey@bogon ~]$ mpstat -u
Linux 3.10.0-862.14.1.0.h209.eulerosv2r7.x86_64 (bogon) 	2021年06月26日 _x86_64_	(1 CPU)

01时00分11秒  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
01时00分11秒  all   51.71    0.05   14.88    0.06    0.00    0.16    0.00    0.00    0.00   33.14
[sogrey@bogon ~]$ 
```

