# lftp - 用来登录远程ftp服务器，是一个字符界面的文件传输工具

lftp指令可以用来登录远程ftp服务器，这是一个字符界面的文件传输工具。
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
lftp  [选项]  [host]
```

## 选项

``` bash
-d            # 打开调试模式
-e cmd        # 执行给定的命令，不退出
-p port       # 使用指定的端口登录
-u user，pass # 使用给定的用户名和密码登录
-f file       # 执行文件中的命令
-c cmd        # 执行给定的命令，并且退出
```
## 举例

登录ftp服务器
``` bash
[root@localhost ~]$ lftp 192.168.1.8:21     #登录
lftp 192.168.1.8:~> ls                     #查看内容，已经登录成功
drwxr-xr-x    2 0        0            4096 Aug 14 06:38 pub
lftp 192.168.1.8:/>  
```
以netstat格式显示
``` bash
[root@localhost ~]$ lftp -u david 192.168.1.8  #使用指定用户名登录
口令:                                           #密码
lftp david@192.168.1.8:~> ls                   #查看内容，登录成功        
drwxrwxr-x    3 500      500          4096 Aug 21 01:10 mail
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 下载
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 公共的
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 图片
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 文档
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 桌面
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 模板
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 视频
drwxr-xr-x    2 500      500          4096 Sep 22 12:44 音乐
```
    

 



