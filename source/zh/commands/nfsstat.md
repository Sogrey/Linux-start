# nfsstat - 列出NFS客户端和服务器的工作状态

nfsstat命令 用于列出NFS客户端和服务器的工作状态。

nfsstat指令用来显示nfs客户端和服务器的活动信息。
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
nfsstat  [选项]
```

## 选项

``` bash
-s, --server     # 只显示服务器信息，默认还要显示客户端信息
-c, --client     # 只显示客户端信息
-n, --nfs        # 只显示nfs信息，默认还要显示rpc信息
-m, --mounts     # 显示被加载的nfs文件信息信息
-r, --rpc        # 只显示rpc信息
-l, --list       # 显示列表的nfs信息
-s, --since      # 从文件显示nfs信息
-o               # 显示自定义信息：nfs，显示nfs协议信息；rpc，显示rpc常规信息；net，显示网络层状态；fh，显示文件控制缓存信息；rc，显示服务器上的请求应答缓存信息；all，显示所有信息
-v, --verbose    # 等价“-o all”
```
## 举例
要显示关于客户机发送和拒绝的RPC和NFS调用数目的信息，输入：
``` bash
nfsstat -c
```
要显示和打印与客户机NFS调用相关的信息，输入如下命令：
``` bash
nfsstat -cn
```
要显示和打印客户机和服务器的与RPC调用相关的信息，输入如下命令：
``` bash
nfsstat -r
```
要显示关于服务器接收和拒绝的RPC和NFS调用数目的信息，输入如下命令：
``` bash
nfsstat –s
```

显示客户端nfs信息
``` bash
[root@localhost ~]$ nfsstat -cn
Client nfs v4:
null         read         write        commit       open         open_conf   
0         0% 0         0% 0         0% 0         0% 1         0% 0         0%
open_noat    open_dgrd    close        setattr      fsinfo       renew       
0         0% 0         0% 0         0% 0         0% 3         2% 20       18%
setclntid    confirm      lock         lockt        locku        access      
1         0% 1         0% 0         0% 0         0% 0         0% 7         6%
getattr      lookup       lookup_root  remove       rename       link        
58       52% 7         6% 1         0% 0         0% 0         0% 0         0%
symlink      create       pathconf     statfs       readlink     readdir     
0         0% 0         0% 2         1% 0         0% 0         0% 4         3%
server_caps  delegreturn  getacl       setacl       fs_locations rel_lkowner 
5         4% 0         0% 0         0% 0         0% 0         0% 0         0%
secinfo      exchange_id  create_ses   destroy_ses  sequence     get_lease_t 
0         0% 0         0% 0         0% 0         0% 0         0% 0         0%
reclaim_comp layoutget    getdevinfo   layoutcommit layoutreturn getdevlist  
0         0% 0         0% 0         0% 0         0% 0         0% 0         0%
(null)      
0         0%
```
显示已经挂载的系统信息
``` bash
[root@localhost ~]$ nfsstat -m
/media/test from 192.168.1.8:/wj/
 Flags:rw,relatime,vers=4,rsize=262144,wsize=262144,namlen=255,hard,proto=tcp,port=0,timeo=600,retrans=2,sec=sys,
clientaddr=192.168.1.8,minorversion=0,local_lock=none,addr=192.168.1.8
[root@localhost ~]$
```
 

    


