# pstree - 以树状图的方式展现进程之间的派生关系

pstree命令 以树状图的方式展现进程之间的派生关系，显示效果比较直观。

pstree显示正在运行的进程的树形结构，树以PID为根；如果省略了pid则以init为根。如果指定了用户名，则显示根植于该用户拥有的进程的所有进程树。如果pstree被调用为pstree.x11，那么它将提示行尾的用户按RETURE，并且在这种情况发生之前不会返回。这对于在x终端中运行pstree非常有用。

pstree通过将相同的分支放在方括号中并以重复计数作为前缀，在视觉上合并它们。例如：
``` bash
init-+-getty
    |-getty
    |-getty
‘-getty
# 变成下面的样子
init---4*[getty]
```
进程的子线程在父进程下找到，并以大括号显示进程名，例如：
```
icecast2---13*[{icecast2}]
```
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
pstree  [OPTION]
```

## 选项

``` bash
-a                   # 显示每个进程的完整指令，包括路径、参数
-A                   # 使用ascii码显示树形
-c                   # 关闭精简表示法
-G                   # 使用VT 100线条绘制字符
-h                   # 高亮显示正在执行的程序
-H                   # 类似“-h”，但是突出显示指定的进程。与-h不同，如果高亮显示不可用，pstree在使用-H时会失败。
-l                   # 长格式显示
-n                   # 以进程号排序，默认以名字排序
-p                   # 显示pid
-u                   # 显示用户
-U                   # 以utf-8显示字符
-V                   # 显示命令版本信息
-Z                   # 每个SELinux的上下文
```
## 举例
显示当前所有进程的进程号和进程id
``` bash
pstree -p
```
显示所有进程的所有详细信息，遇到相同的进程名可以压缩显示。
``` bash
pstree  -a
```
获取 SSH 会话的 PID
``` bash
pstree -p | grep ssh

#  |-sshd(1221)-+-sshd(2768)---bash(2770)-+-grep(2810)
#  |            `-sshd(2807)---sshd(2808)
```
从上方的输出中，你可以看到 sshd 进程与分支的树形图。sshd 的主进程是 sshd（1221），另两个分支分别为 sshd（2768） 和 sshd（2807）

---

显示完成的树形结构
``` bash

[root@localhost ~]$ pstree -a
init
  ├─NetworkManager --pid-file=/var/run/NetworkManager/NetworkManager.pid
  │   ├─dhclient -d -4 -sf /usr/libexec/nm-dhcp-client.action -pf /var/run/dhclient-eth0.pid ...
  │   └─{NetworkManager}
  ├─VBoxClient --clipboard
  │   └─VBoxClient --clipboard
```
显示进程号
``` bash
[root@localhost ~]$ pstree -p
init(1)─┬─NetworkManager(6362)─┬─dhclient(6377)
        │                      └─{NetworkManager}(6379)
        ├─VBoxClient(7869)───VBoxClient(7870)───{VBoxClient}(7872)
        ├─VBoxClient(7882)───VBoxClient(7883)
        ├─VBoxClient(7890)───VBoxClient(7891)───{VBoxClient}(7894)
        ├─VBoxClient(7898)───VBoxClient(7899)─┬─{VBoxClient}(7901)
        │                                     └─{VBoxClient}(7903)
        ├─VBoxClient(7306)───VBoxClient(7308)
        ├─VBoxClient(7312)───VBoxClient(7314)───{VBoxClient}(7317)
        ├─VBoxClient(7318)───VBoxClient(7320)─┬─{VBoxClient}(7323)
        │                                     └─{VBoxClient}(7325)
```