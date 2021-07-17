# smbclient - 交互式的访问samba服务器的客户端的管理程序

smbclient是一个smb服务器的客户端的管理程序，可以交互式的访问samba服务器。

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
smbclient  servername  [选项]
```

## 选项

``` bash
-?, --help                # 显示帮助文档
-V, --version             # 显示命令版本信息
-R, --name-resolve        # 将NetBIOS名称解析成对应的IP地址顺序
-M, --message             # 使用winpopup协议发送消息
-p, --port                # 指定连接端口，默认TCP的139
-m, --max-protocol        # 协议的最大版本
-I, --ip-address          # 指定连接的ip地址
-E, --stderr              # 将信息送到标准出错设备
-L, --list                # 显示服务器的资源列表
-b, --send-buffer         # 设置传输过程的缓冲区大小
-e, --encyrpt             # 要求服务器采用加密方式
-d, --debuglevel          # 设置调试模式级别，级别越高显示的日志就月详细
-l, ---log-basename       # 日志文件的存放目录
-N, --no-pass             # 不使用密码
-A                        # 从指定文件读取用户名和密码，文件格式如下：
                          # username=<value>
                          # password=<value>
                          # domain=<value>
-U, --user=username[%password] # 指定用户名和密码
-n                        # 指定NetBIOS名称
-W, --workgroup           # 指定用户的smb域
-T, --tar                 # 将服务器共享的文件打包成tar格式
-s                        # 指定smb.conf目录
```
## 命令
登录samba服务器后支持的命令有
``` bash
-? [cmd]                  # 显示命令的说明文档，如果不指定命令，列出所有的命令文档
！[shell]                 # 运行shell
allinfo file              # 要求服务器返回所有文件或者目录的信息
altname file              # 要求服务器返回文件或者目录的别名
archive <num>             # 设置归档级别
blocksize <size>          # 设置打包的块大小，默认20。块的单位是521B
case_sensitive            # 设置文件大小写敏感
cd                        # 切换目录
chmod                     # 修改权限
chown                     # 修改uid和gid
close <fd>                # 关闭使用open打开的文件
del <mask>                # 删除当前目录下符合mask的文件
du                        # 列出目录信息和磁盘信息
echo <number> <data>      # 该指令的作用是向服务器发送ping的测试信息
exit                      # 退出
get                       # 获取文件
hardlink <src> <dst>      # 创建硬连接
iosize <bytes>            # 设置传输文件时使用内存缓冲区的大小，默认64512字节，可以设置的范围16384~16776960
lowercase                 # 将受到的文件中字母都改成小写
ls                        # 查看目录信息
md                        # 创建目录
mget <mask>               # 获取所有匹配mask的文件
mkdir                     # 创建目录
mput <mask>               # 发送当前目录下所有匹配msak的文件到服务器
put <local file> [remote file] # 发送文件
queue                     # 显示打印队列
quit                      # 退出
rd                        # 删除目录
rmdir                     # 删除目录
recurse                   # 改变递归选项的开关
rename                    # 重命名
rm <mask>                 # 删除当前目录下所有匹配mask的文件
showconnect               # 显示当前连接
stat file                 # 显示文件信息
tar                       # 压缩文件
```
## 举例

连接服务器
``` bash
[root@localhost ~]$ cat wj.txt        #查看文件内容
username=david
password=543092
[root@localhost ~]$ smbclient //192.168.1.8/wj -A wj.txt   #登录服务器，从指定文件读取用户名和密码
Domain=[MYGROUP] OS=[Unix] Server=[Samba 3.6.23-51.el6]
smb: \>
```
查看命令
``` bash
smb: \> ?       #列出支持的命令
?              allinfo        altname        archive        blocksize   
cancel         case_sensitive cd             chmod          chown 
close          del            dir            du             echo 
exit           get            getfacl        geteas         hardlink 
help           history        iosize         lcd            link 
lock           lowercase      ls             l              mask
md             mget           mkdir          more           mput 
newer          open           posix          posix_encrypt  posix_open
posix_mkdir    posix_rmdir    posix_unlink   print          prompt  
put            pwd            q              queue          quit          
readlink       rd             recurse        reget          rename        
reput          rm             rmdir          showacls       setea         
setmode        stat           symlink        tar            tarmode       
timeout        translate      unlock         volume         vuid          
wdel           logon          listconnect    showconnect    ..            
!             
smb: \> ? allinfo     #查看指定命令的帮助信息
HELP allinfo:
    <file> show all available info 

smb: \>
```
上传文件
``` bash
 smb: \> put wj.txt       #上传文件
putting file wj.txt as \wj.txt (10.1 kb/s) (average 10.1 kb/s)
smb: \> ls wj.txt      #查看文件，已经上传
  wj.txt                              A       31  Tue Oct  9 09:15:22 2018
 
       49907 blocks of size 524288. 2282 blocks available
smb: \>
```
 

