# history - 显示或操作历史列表
  history指令用来显示用户以前执行过的历史命令，也可以对历史命令进行追加和删除。
## 主要用途
- 显示历史列表。
- 操作历史列表。

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
history  [n]
history  -c
history  -d  offset
history  -anrw  [filename]
history  -p  arg  [arg ...]
history  -s  arg  [arg ...]
```

## 选项

``` bash
-c    # 清空当前历史命令
-d    # 删除指定序号的历史命令
-a    # 追加新的历史命令
-n    # 从历史命令的文件中读取本次shell会话没有读取的命令
-r    # 读取历史命令文件到当前的历史命令缓冲区
-s    # 将指令作为单独的条目存储到历史命令缓冲区，并且在添加之前删除缓冲区中的最后一条命令
-w    # 将当前shell历史命令缓冲区写入到历史命令文件
```
## 举例

显示当前历史命令
``` bash
[root@localhost ~]$ history    #显示当前所有历史命令
...
 1008  hash -p /usr/bin/lsusb
 1009  hash -p /usr/bin/tail
 1010  hash -l
 1011  hash -p /usr/bin/tail tail
 1012  hash -l
 1013  history
```
删除指定的历史命令
``` bash
[root@localhost ~]$ history     # 查看历史命令
  992  hash -p /usr/bin/lsusb
  993  hash -l
  994  hash -p /usr/bin/tail
  995  hash -l
  996  hash -l
  997  history
  998  history -d 1008
  999  history
 1000  history -d 996
 1001  history
[root@localhost ~]$ history –d 994    #删除指令的历史命令
[root@localhost ~]$ history           #查看历史命令，已经删除
  991  ls /usr/bin/
  992  hash -p /usr/bin/lsusb
  993  hash -l
  994  hash -l
  995  history
  996  history -d 1008
  997  history
  998  history -d 996
  999  history
```
## 注意
- 在命令行中，可以使用符号!执行指定序号的历史命令。例如，要执行第2个历史命令，则输入!2。
- 关闭终端后，历史列表将被写入历史文件~/.bash_history。
- 环境变量HISTSIZE决定了历史文件中命令的存储数量，默认存储1000条。
- 环境变量HISTTIMEFORMAT如果是非空值，则使用其值作为strftime(3)打印相关时间戳的格式字符串添加在每个显示的历史记录之前；否则不会打印时间戳。
- 该命令是bash内建命令，相关的帮助信息请查看help命令。