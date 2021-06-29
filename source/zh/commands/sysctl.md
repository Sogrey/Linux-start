# sysctl - 时动态地修改内核的运行参数
sysctl命令 被用于在内核运行时动态地修改内核的运行参数，可用的内核参数在目录/proc/sys中。它包含一些TCP/ip堆栈和虚拟内存系统的高级选项， 这可以让有经验的管理员提高引人注目的系统性能。用sysctl可以读取设置超过五百个系统变量。

sysctl指令用来修改正在运行的内核参数，可以修改的参数都保存在/proc/sys/目录中，修改会立即生效。Linux中的sysctl支持需要Procfs。您可以使用sysctl来读取和写入sysctl数据。

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
sysctl  [-n]  [-e]  variable ...
sysctl  [-n]  [-e]  [-q]  -w  variable=value ...
sysctl  [-n]  [-e]  [-q]  –p  <filename>
sysctl  [-n]  [-e]  -a
sysctl  [-n]  [-e]  -A
```
## 选项

``` bash
-n               # 显示内核参数的值，不显示其名称
-e               # 忽略错误
-N               # 只显示名字
-q               # 不在标准输出显示值
-w               # 复制的时候需要
-p               # 加载sysctl的设置情况
-a, -A, --all    # 显示所有内核参数的值和名字
variable         # 读取的变量名，可以用“/”做分隔符
variable=value   # 如果value包含由shell解析的引号或字符，则可能需要将该值括在双引号中。这需要使用-w参数。
```
## 举例

``` bash
[sogrey@bogon ~]$ sysctl

Usage:
 sysctl [options] [variable[=value] ...]

Options:
  -a, --all            display all variables
  -A                   alias of -a
  -X                   alias of -a
      --deprecated     include deprecated parameters to listing
  -b, --binary         print value without new line
  -e, --ignore         ignore unknown variables errors
  -N, --names          print variable names without values
  -n, --values         print only values of the given variable(s)
  -p, --load[=<file>]  read values from file
  -f                   alias of -p
      --system         read values from all system directories
  -r, --pattern <expression>
                       select setting that match expression
  -q, --quiet          do not echo variable set
  -w, --write          enable writing a value to variable
  -o                   does nothing
  -x                   does nothing
  -d                   alias of -h

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see sysctl(8).
[sogrey@bogon ~]$ sysctl --all # 显示所有的内核参数名字和值
abi.vsyscall32 = 1
crypto.fips_enabled = 0
debug.exception-trace = 1
debug.kprobes-optimization = 1
debug.panic_on_rcu_stall = 0
dev.cdrom.autoclose = 1
dev.cdrom.autoeject = 0
dev.cdrom.check_media = 0
dev.cdrom.debug = 0
dev.cdrom.info = CD-ROM information, Id: cdrom.c 3.20 2003/12/17
net.ipv6.conf.lo.use_optimistic = 0
net.ipv6.conf.lo.use_tempaddr = -1
net.ipv6.conf.virbr0.accept_dad = 1
net.ipv6.conf.virbr0.accept_ra = 0
net.ipv6.conf.virbr0.accept_ra_defrtr = 1
net.ipv6.conf.virbr0.accept_ra_pinfo = 1
net.ipv6.conf.virbr0.accept_ra_rt_info_max_plen = 0
net.ipv6.conf.virbr0.accept_ra_rtr_pref = 1
net.ipv6.conf.virbr0.accept_redirects = 0
net.ipv6.conf.virbr0.accept_source_route = 0
net.ipv6.conf.virbr0.autoconf = 0
net.ipv6.conf.virbr0.dad_transmits = 1
net.ipv6.conf.virbr0.disable_ipv6 = 1
net.ipv6.conf.virbr0.force_mld_version = 0
net.ipv6.conf.virbr0.force_tllao = 0
net.ipv6.conf.virbr0.forwarding = 0
net.ipv6.conf.virbr0.hop_limit = 64
net.ipv6.conf.virbr0.max_addresses = 16
net.ipv6.conf.virbr0.max_desync_factor = 600
net.ipv6.conf.virbr0.mc_forwarding = 0
...
[sogrey@bogon ~]$ 
```

