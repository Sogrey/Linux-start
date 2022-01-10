# 快速开始

## 高频Linux命令大总结

- [Linux-commands-cheat-sheet-by-PhoenixNAP.pdf](https://phoenixnap.com/kb/wp-content/uploads/2021/04/Linux-commands-cheat-sheet-by-PhoenixNAP.pdf)

# 关机/重启/注销

| 常用命令          | 作用                     |
| ----------------- | ------------------------ |
| shutdown -h now   | 即刻关机                 |
| shutdown -h 10    | 10分钟后关机             |
| shutdown -h 11:00 | 11：00关机               |
| shutdown -h +10   | 预定时间关机（10分钟后） |
| shutdown -c       | 取消指定时间关机         |
| shutdown -r now   | 重启                     |
| shutdown -r 10    | 10分钟之后重启           |
| shutdown -r 11:00 | 定时重启                 |
| reboot            | 重启                     |
| init 6            | 重启                     |
| init 0            | 立刻关机                 |
| telinit 0         | 关机                     |
| poweroff          | 立刻关机                 |
| halt              | 关机                     |
| sync              | buff数据同步到磁盘       |
| logout            | 退出登录Shell            |

> 注意点：比如同样是关机，shutdown、poweroff、halt、init 0有什么区别呢？这个有兴趣可以自己了解一下，它们是有区别的。

------

# 系统信息和性能查看

> 这里命令其实平时用得是非常之多的，因为一旦系统或者后台服务除了问题，我们经常要登上去查看，包括很多的系统信息，比如：系统版本、内核版本、处理器架构、计算机名、环境变量、用户情况、负载情况、内存用量、磁盘信息、进程、网络连接...

| 常用命令                    | 作用                               |
| --------------------------- | ---------------------------------- |
| uname -a                    | 查看内核/OS/CPU信息                |
| uname -r                    | 查看内核版本                       |
| uname -m                    | 查看处理器架构                     |
| arch                        | 查看处理器架构                     |
| hostname                    | 查看计算机名                       |
| who                         | 显示当前登录系统的用户             |
| who am i                    | 显示登录时的用户名                 |
| whoami                      | 显示当前用户名                     |
| cat /proc/version           | 查看linux版本信息                  |
| cat /proc/cpuinfo           | 查看CPU信息                        |
| cat /proc/interrupts        | 查看中断                           |
| cat /proc/loadavg           | 查看系统负载                       |
| uptime                      | 查看系统运行时间、用户数、负载     |
| env                         | 查看系统的环境变量                 |
| lsusb -tv                   | 查看系统USB设备信息                |
| lspci -tv                   | 查看系统PCI设备信息                |
| lsmod                       | 查看已加载的系统模块               |
| grep MemTotal /proc/meminfo | 查看内存总量                       |
| grep MemFree /proc/meminfo  | 查看空闲内存量                     |
| free -m                     | 查看内存用量和交换区用量           |
| date                        | 显示系统日期时间                   |
| cal 2021                    | 显示2021日历表                     |
| top                         | 动态显示cpu/内存/进程等情况        |
| vmstat 1 20                 | 每1秒采一次系统状态，采20次        |
| iostat                      | 查看io读写/cpu使用情况             |
| sar -u 1 10                 | 查询cpu使用情况（1秒一次，共10次） |
| sar -d 1 10                 | 查询磁盘性能                       |

------

# 磁盘和分区

> 这是和日常使用息息相关的一些常用命令，在Windows系统里面我们点点鼠标，图形化界面上就能查看，但是在Linux中我们应该熟练掌握用命令的方式来查看，比如：各种分区信息查看、磁盘使用情况、文件和目录大小、各种挂载和卸载...

| 常用命令                            | 作用                           |                                |
| ----------------------------------- | ------------------------------ | ------------------------------ |
| fdisk -l                            | 查看所有磁盘分区               |                                |
| swapon -s                           | 查看所有交换分区               |                                |
| df -h                               | 查看磁盘使用情况及挂载点       |                                |
| df -hl                              | 查看磁盘剩余空间               |                                |
| du -sh /dir                         | 查看指定目录大小               |                                |
| `du -sk *                           | sort -rn`                      | 从高到低依次显示文件和目录大小 |
| mount /dev/hda2 /mnt/hda2           | 挂载hda2盘                     |                                |
| mount -t ntfs /dev/sdc1 /mnt/usbhd1 | 指定文件系统类型挂载（如ntfs） |                                |
| mount -o loop xxx.iso /mnt/cdrom    | 挂载iso文件                    |                                |
| mount /dev/sda1 /mnt/usbdisk        | 挂载usb盘/闪存设备             |                                |
| umount -v /dev/sda1                 | 通过设备名卸载                 |                                |
| umount -v /mnt/mymnt                | 通过挂载点卸载                 |                                |
| fuser -km /mnt/hda1                 | 强制卸载(慎用)                 |                                |

------

# 用户和用户组

> Linux系统里用户组和用户本身也是一个非常重要的概念，这部分命令主要就是关于：用户的CRUD、用户组的CURD、然后还包括查用户、切换用户、改密码、查用户登录日志...

| 常用命令                                              | 作用                                           |
| ----------------------------------------------------- | ---------------------------------------------- |
| useradd codesheep                                     | 创建用户                                       |
| userdel -r codesheep                                  | 删除用户                                       |
| usermod -g group_name user_name                       | 修改用户的组                                   |
| usermod -aG group_name user_name                      | 将用户添加到组                                 |
| usermod -s /bin/ksh -d /home/codepig –g dev codesheep | 修改用户codesheep的登录Shell、主目录以及用户组 |
| groups test                                           | 查看test用户所在的组                           |
| groupadd group_name                                   | 创建用户组                                     |
| groupdel group_name                                   | 删除用户组                                     |
| groupmod -n new_name old_name                         | 重命名用户组                                   |
| su - user_name                                        | 完整切换到一个用户环境                         |
| passwd                                                | 修改口令                                       |
| passwd codesheep                                      | 修改某用户的口令                               |
| w                                                     | 查看活动用户                                   |
| id codesheep                                          | 查看指定用户信息                               |
| last                                                  | 查看用户登录日志                               |
| crontab -l                                            | 查看当前用户的计划任务                         |
| cut -d: -f1 /etc/passwd                               | 查看系统所有用户                               |
| cut -d: -f1 /etc/group                                | 查看系统所有组                                 |

------

# 网络和进程管理

> 我们作为一个后端开发，这些命令平时用到的概率很大，比如：查看网络、查看连接、查看端口服务、配置网卡/防火墙/路由表/DNS，查看和过滤进程，采集系统状态，还有一些系统性能的监控和排查命令...等等。这些命令，在后端开发连到公司服务器上去排查问题时就很有用了，用得也很频繁。

| 常用命令                                                     | 作用                                 |                    |
| ------------------------------------------------------------ | ------------------------------------ | ------------------ |
| ifconfig                                                     | 查看网络接口属性                     |                    |
| ifconfig eth0                                                | 查看某网卡的配置                     |                    |
| route -n                                                     | 查看路由表                           |                    |
| netstat -lntp                                                | 查看所有监听端口                     |                    |
| netstat -antp                                                | 查看所有已经建立的连接               |                    |
| netstat -lutp                                                | 查看TCP/UDP的状态信息                |                    |
| ifup eth0                                                    | 启用eth0网络设备                     |                    |
| ifdown eth0                                                  | 禁用eth0网络设备                     |                    |
| iptables -L                                                  | 查看iptables规则                     |                    |
| ifconfig eth0 192.168.1.1 netmask 255.255.255.0              | 配置ip地址                           |                    |
| dhclient eth0                                                | 以dhcp模式启用eth0                   |                    |
| route add -net 0/0 gw Gateway_IP                             | 配置默认网关                         |                    |
| route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1 | 配置静态路由到达网络'192.168.0.0/16' |                    |
| route del 0/0 gw Gateway_IP                                  | 删除静态路由                         |                    |
| hostname                                                     | 查看主机名                           |                    |
| host www.codesheep.cn                                        | 解析主机名                           |                    |
| nslookup www.codesheep.cn                                    | 查询DNS记录，查看域名解析是否正常    |                    |
| ps -ef                                                       | 查看所有进程                         |                    |
| `ps -ef                                                      | grep codesheep`                      | 过滤出你需要的进程 |
| kill -s name                                                 | kill指定名称的进程                   |                    |
| kill -s pid                                                  | kill指定pid的进程                    |                    |
| top                                                          | 实时显示进程状态                     |                    |
| vmstat 1 20                                                  | 每1秒采一次系统状态，采20次          |                    |
| iostat                                                       | 查看io读写/cpu使用情况               |                    |
| sar -u 1 10                                                  | 查询cpu使用情况（1秒一次，共10次）   |                    |
| sar -d 1 10                                                  | 查询磁盘性能                         |                    |

------

# 常见系统服务命令

> 这类命令平时接触得也很多，比如我们自己在安装和部署各种各样的基础编程环境和服务时就常用，比如装JDK、MySQL数据库、redis缓存、nginx服务器...

| 常用命令                   | 作用         |
| -------------------------- | ------------ |
| `chkconfig --list`         | 列出系统服务 |
| service <服务名> status    | 查看某个服务 |
| service <服务名> start     | 启动某个服务 |
| service <服务名> stop      | 终止某个服务 |
| service <服务名> restart   | 重启某个服务 |
| systemctl status <服务名>  | 查看某个服务 |
| systemctl start <服务名>   | 启动某个服务 |
| systemctl stop <服务名>    | 终止某个服务 |
| systemctl restart <服务名> | 重启某个服务 |
| systemctl enable <服务名>  | 开启自启动   |
| systemctl disable <服务名> | 关闭自启动   |

------

# 文件和目录操作

> 这类命令全部是Linux系统使用的基本操作，也是平时用到频率最高的一些命令，关于文件操作的、关于目录操作的、关于路径的。比如：对文件和目录的各种高频操作，创建、查看、查找、删除、重命名、复制、软连接、快速定位和查找... 等等。都是些高频的实用命令。

| 常用命令                 | 作用                                                         |                     |
| ------------------------ | ------------------------------------------------------------ | ------------------- |
| cd <目录名>              | 进入某个目录                                                 |                     |
| cd ..                    | 回上级目录                                                   |                     |
| cd ../..                 | 回上两级目录                                                 |                     |
| cd                       | 进个人主目录                                                 |                     |
| cd -                     | 回上一步所在目录                                             |                     |
| pwd                      | 显示当前路径                                                 |                     |
| ls                       | 查看文件目录列表                                             |                     |
| ls -F                    | 查看目录中内容（显示是文件还是目录）                         |                     |
| ls -l                    | 查看文件和目录的详情列表                                     |                     |
| ls -a                    | 查看隐藏文件                                                 |                     |
| ls -lh                   | 显示权限                                                     |                     |
| ls -lSr                  | more                                                         | 按大小查看文件/目录 |
| tree                     | 查看文件和目录的树形结构                                     |                     |
| mkdir <目录名>           | 创建目录                                                     |                     |
| mkdir dir1 dir2          | 同时创建两个目录                                             |                     |
| mkdir -p /tmp/dir1/dir2  | 创建目录树                                                   |                     |
| rm -f file1              | 删除'file1'文件                                              |                     |
| rmdir dir1               | 删除'dir1'目录                                               |                     |
| rm -rf dir1              | 删除'dir1'目录和其内容                                       |                     |
| rm -rf dir1 dir2         | 同时删除两个目录及其内容                                     |                     |
| mv old_dir new_dir       | 重命名/移动目录                                              |                     |
| cp file1 file2           | 复制文件                                                     |                     |
| cp dir/* .               | 复制某目录下的所有文件至当前目录                             |                     |
| cp -a dir1 dir2          | 复制目录                                                     |                     |
| cp -a /tmp/dir1 .        | 复制一个目录至当前目录                                       |                     |
| ln -s file1 link1        | 创建指向文件/目录的软链接                                    |                     |
| ln file1 lnk1            | 创建指向文件/目录的物理链接                                  |                     |
| find / -name file1       | 从跟目录开始搜索文件/目录                                    |                     |
| find / -user user1       | 搜索用户user1的文件/目录                                     |                     |
| find /dir -name *.bin    | 在目录/dir中搜带有.bin后缀的文件                             |                     |
| locate 关键词            | 快速定位文件                                                 |                     |
| locate *.mp4             | 寻找.mp4结尾的文件                                           |                     |
| whereis halt             | 显示某二进制文件/可执行文件的路径                            |                     |
| which halt               | 查找系统目录下的二进制文件                                   |                     |
| chmod ugo+rwx dir1       | 设置目录所有者(u)、群组(g)及其他人(o)的读（r）写(w)执行(x)权限 |                     |
| chmod go-rwx dir1        | 移除群组(g)与其他人(o)对目录的读写执行权限                   |                     |
| chown user1 file1        | 改变文件的所有者属性                                         |                     |
| chown -R user1 dir1      | 改变目录的所有者属性                                         |                     |
| chgrp group1 file1       | 改变文件群组                                                 |                     |
| chown user1:group1 file1 | 改变文件的所有人和群组                                       |                     |

------

# 文件查看和处理

> 这部分命令主要针对性地关于文件处理或者说文本处理，比如我们作为一个程序员，那操作最多的就是代码源文件，各种花式查看、比较、增加、删除、替换、合并... 等等一系列快速操作。

| 常用命令                      | 作用                                    |                              |
| ----------------------------- | --------------------------------------- | ---------------------------- |
| cat file1                     | 查看文件内容                            |                              |
| cat -n file1                  | 查看内容并标示行数                      |                              |
| cat xxx.txt                   | awk 'NR%2==1'                           | 查看文件中的所有奇数行       |
| tac file1                     | 从最后一行开始反看文件内容              |                              |
| more file1                    | 查看一个长文件的内容                    |                              |
| less file1                    | 类似more命令，但允许反向操作            |                              |
| head -2 file1                 | 查看文件前两行                          |                              |
| tail -2 file1                 | 查看文件后两行                          |                              |
| tail -f /log/msg              | 实时查看添加到文件中的内容              |                              |
| grep codesheep hello.txt      | 在文件hello.txt中查找关键词codesheep    |                              |
| grep ^sheep hello.txt         | 在文件hello.txt中查找以sheep开头的内容  |                              |
| grep [0-9] hello.txt          | 选择hello.txt文件中所有包含数字的行     |                              |
| sed 's/s1/s2/g' hello.txt     | 将hello.txt文件中的s1替换成s2           |                              |
| sed '/^$/d' hello.txt         | 从hello.txt文件中删除所有空白行         |                              |
| sed '/ *#/d; /^$/d' hello.txt | 从hello.txt文件中删除所有注释和空白行   |                              |
| sed -e '1d' hello.txt         | 从文件hello.txt 中排除第一行            |                              |
| sed -n '/s1/p' hello.txt      | 查看只包含关键词"s1"的行                |                              |
| sed -e 's/ *$//' hello.txt    | 删除每一行最后的空白字符                |                              |
| sed -e 's/s1//g' hello.txt    | 从文档中只删除词汇s1并保留剩余全部      |                              |
| sed -n '1,5p;5q' hello.txt    | 查看从第一行到第5行内容                 |                              |
| sed -n '5p;5q' hello.txt      | 查看第5行                               |                              |
| paste file1 file2             | 合并两个文件或两栏的内容                |                              |
| paste -d '+' file1 file2      | 合并两个文件或两栏的内容，中间用"+"区分 |                              |
| sort file1 file2              | 排序两个文件的内容                      |                              |
| sort file1 file2              | uniq                                    | 取出并集(重复的行只保留一份) |
| sort file1 file2              | uniq -u                                 | 删除交集，留下其他行         |
| sort file1 file2              | uniq -d                                 | 取交集                       |
| comm -1 file1 file2           | 比较两个文件的内容(去除'file1'所含内容) |                              |
| comm -2 file1 file2           | 比较两个文件的内容(去除'file2'所含内容) |                              |
| comm -3 file1 file2           | 比较两个文件的内容(去除两文件共有部分)  |                              |

------

# 打包和解压

> 这部分内容主要关于文件或者目录的打包压缩和解压，涉及好几种压缩包格式和文件，这部分命令在平时用得也是非常非常频繁的。

| 常用命令                          | 作用                     |
| --------------------------------- | ------------------------ |
| zip xxx.zip file                  | 压缩至zip包              |
| zip -r xxx.zip file1 file2 dir1   | 将多个文件+目录压成zip包 |
| unzip xxx.zip                     | 解压zip包                |
| tar -cvf xxx.tar file             | 创建非压缩tar包          |
| tar -cvf xxx.tar file1 file2 dir1 | 将多个文件+目录打tar包   |
| tar -tf xxx.tar                   | 查看tar包的内容          |
| tar -xvf xxx.tar                  | 解压tar包                |
| tar -xvf xxx.tar -C /dir          | 将tar包解压至指定目录    |
| tar -cvfj xxx.tar.bz2 dir         | 创建bz2压缩包            |
| tar -jxvf xxx.tar.bz2             | 解压bz2压缩包            |
| tar -cvfz xxx.tar.gz dir          | 创建gzip压缩包           |
| tar -zxvf xxx.tar.gz              | 解压gzip压缩包           |
| bunzip2 xxx.bz2                   | 解压bz2压缩包            |
| bzip2 filename                    | 压缩文件                 |
| gunzip xxx.gz                     | 解压gzip压缩包           |
| gzip filename                     | 压缩文件                 |
| gzip -9 filename                  | 最大程度压缩             |

------

然后接下来就是一些常见的包管理器命令。首先什么是包管理器，大家应该都清楚。

这么说吧，如果没有包管理器这个东西的存在，那估计仅仅是Linux系统上的软件安装，怕是就要劝退很多用户了，因为很多的软件依赖处理会让人抓狂。因此简单来说，我们可以将包管理器理解为，用来为Linux系统上的软件安装、卸载、升级、查询提供支持的组件，所以对于用户使用来说，一般就是一组工具命令集。

我们平常使用最广的比如，红帽子的包结构RPM包管理器，像RedHat、CentOS等系统都在用，典型的命令就是rpm命令、yum命令；然后就是DPKG包管理器，像Debain、Ubuntu等系统都用，典型的命令比如dpkg命令、apt软件工具。

------

# rpm包管理命令

| 常用命令                  | 作用                          |
| ------------------------- | ----------------------------- |
| rpm -qa                   | 查看已安装的rpm包             |
| rpm -q pkg_name           | 查询某个rpm包                 |
| rpm -q --whatprovides xxx | 显示xxx功能是由哪个包提供的   |
| rpm -q --whatrequires xxx | 显示xxx功能被哪个程序包依赖的 |
| rpm -q --changelog xxx    | 显示xxx包的更改记录           |
| rpm -qi pkg_name          | 查看一个包的详细信息          |
| rpm -qd pkg_name          | 查询一个包所提供的文档        |
| rpm -qc pkg_name          | 查看已安装rpm包提供的配置文件 |
| rpm -ql pkg_name          | 查看一个包安装了哪些文件      |
| rpm -qf filename          | 查看某个文件属于哪个包        |
| rpm -qR pkg_name          | 查询包的依赖关系              |
| rpm -ivh xxx.rpm          | 安装rpm包                     |
| rpm -ivh --test xxx.rpm   | 测试安装rpm包                 |
| rpm -ivh --nodeps xxx.rpm | 安装rpm包时忽略依赖关系       |
| rpm -e xxx                | 卸载程序包                    |
| rpm -Fvh pkg_name         | 升级确定已安装的rpm包         |
| rpm -Uvh pkg_name         | 升级rpm包(若未安装则会安装)   |
| rpm -V pkg_name           | RPM包详细信息校验             |

------

# yum包管理命令

| 常用命令                            | 作用                 |
| ----------------------------------- | -------------------- |
| yum repolist enabled                | 显示可用的源仓库     |
| yum search pkg_name                 | 搜索软件包           |
| yum install pkg_name                | 下载并安装软件包     |
| yum install --downloadonly pkg_name | 只下载不安装         |
| yum list                            | 显示所有程序包       |
| yum list installed                  | 查看当前系统已安装包 |
| yum list updates                    | 查看可以更新的包列表 |
| yum check-update                    | 查看可升级的软件包   |
| yum update                          | 更新所有软件包       |
| yum update pkg_name                 | 升级指定软件包       |
| yum deplist pkg_name                | 列出软件包依赖关系   |
| yum remove pkg_name                 | 删除软件包           |
| yum clean all                       | 清除缓存             |
| yum clean packages                  | 清除缓存的软件包     |
| yum clean headers                   | 清除缓存的header     |

------

# dpkg包管理命令

| 常用命令             | 作用                  |
| -------------------- | --------------------- |
| dpkg -c xxx.deb      | 列出deb包的内容       |
| dpkg -i xxx.deb      | 安装/更新deb包        |
| dpkg -r pkg_name     | 移除deb包             |
| dpkg -P pkg_name     | 移除deb包(不保留配置) |
| dpkg -l              | 查看系统中已安装deb包 |
| dpkg -l pkg_name     | 显示包的大致信息      |
| dpkg -L pkg_name     | 查看deb包安装的文件   |
| dpkg -s pkg_name     | 查看包的详细信息      |
| dpkg –unpack xxx.deb | 解开deb包的内容       |

------

# apt软件工具

| 常用命令                  | 作用                   |
| ------------------------- | ---------------------- |
| apt-cache search pkg_name | 搜索程序包             |
| apt-cache show pkg_name   | 获取包的概览信息       |
| apt-get install pkg_name  | 安装/升级软件包        |
| apt-get purge pkg_name    | 卸载软件（包括配置）   |
| apt-get remove pkg_name   | 卸载软件（不包括配置） |
| apt-get update            | 更新包索引信息         |
| apt-get upgrade           | 更新已安装软件包       |
| apt-get clean             | 清理缓存               |

## 参考资料



- [硬核！高频Linux命令大总结，建议收藏~ - SegmentFault 思否](https://segmentfault.com/a/1190000040222932)
- [常考的 21 条 Linux 命令](https://mp.weixin.qq.com/s/CXXOjyOaW-ssjWmmaSb6yw)
- [linux-command](https://github.com/jaywcjlove/linux-command) [url](https://git.io/linux) 这个开源项目是 Linux 命令大全搜索工具，当前搜集了 570 多个 Linux 命令，主要内容包含：Linux 基础命令分类、Linux 学习资源整理（社区网站、知识相关、软件工具、开源镜像站点、游戏玩家发行版）等；
- [Awesome-Linux-Software](https://github.com/luong-komorebi/Awesome-Linux-Software) [url](https://luong-komorebi.github.io/Awesome-Linux-Software/) 这个开源项目适用于所有人员，主要内容包含：Linux 应用程序、命令行应用程序、桌面环境、窗口管理器等多种软件工具和其他资料的列表集合，可以说内容是非常的丰富，而且这个开源项目是一名大学生在校期间的所总结出来的，真的不一般。
- [How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) 这个开源项目的目的是教您如何保护 Linux 服务器安全的方法指南，也希望能从中教给您一些有关安全性及其重要性的知识，包括：在你开始使用前的一些指南、SSH 远程服务器需要注意的点、网络、基础、审计方面的操作以及危险操作的注意事项等，同时希望你通过这个开源项目能够对 Linux 服务器安全有一定的认识并运用到实际情况之中。
- [explainshell](https://github.com/idank/explainshell) explainshell 是一个可以解析 Linux 命令的网站，它可以给出命令的解释和其参数的解释。对 Linux 小白来说，可以有效的将一条长命令进行拆分加以理解，很有帮助。
- [the-practical-linux-hardening-guide](https://github.com/trimstray/the-practical-linux-hardening-guide) 这个开源项目是一份详细介绍了创建安全 Linux 生产系统所涉及的规划和工具指南。
- [Linux-Tutorial](https://github.com/judasn/Linux-Tutorial) [在线阅读](https://youmeek.gitbooks.io/linux-tutorial/content/) 这个开源项目是 Java 程序员眼中的 Linux，主要内容包含：Linux / Ubuntu 介绍与安装、Linux 环境下的基础命令操作、Vim 的安装 / 配置 / 快捷键、日常维护与监控、 Linux 环境下的各应用服务安装和配置、高可用、黑客入侵检查等；
- [linuxtools_rst](https://github.com/me115/linuxtools_rst) [在线阅读](https://linuxtools-rst.readthedocs.org/zh_CN/latest/) 这个开源项目的作者是 大CC，专注于 Linux 工具最常用的用法并希望读者能够应用到实际工作中。主要内容包含：Linux 基础（命令、文件与目录管理、文本处理、磁盘 / 进程管理、性能监控、网络工具）、Linux 工具进阶（程序构建、调试、优化）、工具参考等；
- [instantbox](https://github.com/instantbox/instantbox) 这个开源项目主要是通过在任何浏览器的即时 Web Shell 访问来启动临时 Linux 系统。目前支持 Ubuntu、CentOS、Arch Linux、Debian、Fedora 和 Alpine 的各种版本。
- [linuxupskillchallenge](https://github.com/snori74/linuxupskillchallenge) [课程网址](https://linuxupskillchallenge.org/) 这个开源项目是一份开源的 Linux 服务器管理教程，主要包括 20 课的所有源材料，该课程可以让开发者在通过一个月时间快速掌握 Linux 基础使用技巧，而且这份教程过去是付费的，不过现在不仅免费而且还开源了。
- [TLCL](https://github.com/billie66/TLCL) [在线阅读](https://billie66.github.io/TLCL/book/) 这个开源项目是：快乐的 Linux 命令行，主要内容包含：Shell、配置文件和Shell环境、常见任务和基本工具、编写 Shell 脚本（if、while、case、for 语句）等；
