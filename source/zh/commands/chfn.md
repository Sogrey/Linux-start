# chfn - 用来改变finger命令显示的信息

chfn命令 用来改变finger命令显示的信息。这些信息都存放在/etc目录里的passwd文件里。若不指定任何选项，则chfn命令会进入问答式界面。

chfn指令可以改变通过finger指令查看到的信息。此信息存储在/etc/passwd文件中，并由Finger程序显示。LinuxFinger命令将显示可由chfn更改的四条信息：您的真名、您的工作区和电话以及您的家庭电话。这四条信息中的任何一条都可以在命令行上指定。如果命令行上没有提供任何信息，chfn将进入交互模式。在交互模式下，chfn将提示每个字段。在提示符下，您可以输入新信息，也可以按“返回”使字段保持不变。输入关键字“None”使字段为空。

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
chfn  [选项]  user
```

## 选项

``` bash
-f, --full-name                      # 设置真实姓名
-o, --office                         # 设置办公室地址
-h, --home-phone                     # 设置家庭电话
-p, --office-phone                   # 设置办公室电话

-u, --help                           # 显示帮助文档
-v, --version                        # 显示命令版本信息
```
## 举例
修改用户真实姓名和家庭电话
``` bash
[sogrey@bogon 文档]$ chfn -f sogrey -h 110 root   #修改信息
Changing finger information for root.
Finger information changed.
[sogrey@bogon 文档]$ finger root                #查看信息，已经修改成功
Login: root                   Name: sogrey
Directory: /root                      Shell: /bin/bash
Office: 110
On since 五 9月  7 21:02 (CST) on tty1 from :0
    14 days 21 hours idle
On since 六 9月 22 07:36 (CST) on pts/0 from :0.0
   9 hours 12 minutes idle
On since 四 9月 13 08:55 (CST) on pts/1 from :0.0
New mail received 六 9月 22 18:05 2018 (CST)
     Unread since 二 8月 21 09:22 2018 (CST)
No Plan.
```
