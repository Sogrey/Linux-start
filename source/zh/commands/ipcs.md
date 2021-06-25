# ipcs - 分析消息队列共享内存和信号量

ipcs命令 用于报告Linux中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息。

ipcs指令用来显示进程间通信状况。“-i”选项允许指定特定的资源id。将只打印有关此id的信息。

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
ipcs  [-asmq]  [-tclup]
ipcs  [-smq]  -i id
ipcs  -h
```

## 选项

``` bash
-i     # 显示指定id的信息
-m     # 显示共享内存段的信息
-q     # 显示队列信息
-s     # 显示信号灯信息
-a     # 显示所有信息，默认选项
-t     # 显示使用时间
-p     # 显示进程pid
-c     # 显示进程创造者
-u     # 显示总和
-l     # 显示限制
```
## 举例
显示信号灯信息
``` bash
[sogrey@bogon ~]$  ipcs –s  # 显示信号灯使用情况

--------- 消息队列 -----------
键        msqid      拥有者  权限     已用字节数 消息      

------------ 共享内存段 --------------
键        shmid      拥有者  权限     字节     nattch     状态      
0x00000000 327680     sogrey     600        16777216   2          目标       
0x00000000 360449     sogrey     600        524288     2          目标       
0x00000000 458754     sogrey     600        393216     2          目标       
0x00000000 622595     sogrey     600        524288     2          目标       
0x00000000 720900     sogrey     600        524288     2          目标       

--------- 信号量数组 -----------
键        semid      拥有者  权限     nsems     

[sogrey@bogon ~]$ 
```
显示共享内存使用情况
``` bash
[sogrey@bogon ~]$  ipcs -m –p # 显示共享内存信息，并且显示进程pid

------------ 共享内存段 --------------
键        shmid      拥有者  权限     字节     nattch     状态      
0x00000000 327680     sogrey     600        16777216   2          目标       
0x00000000 360449     sogrey     600        524288     2          目标       
0x00000000 458754     sogrey     600        393216     2          目标       
0x00000000 622595     sogrey     600        524288     2          目标       
0x00000000 720900     sogrey     600        524288     2          目标       

[sogrey@bogon ~]$ 
```
