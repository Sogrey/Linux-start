# grpconv - 用来开启群组的投影密码

grpconv命令 用来开启群组的投影密码。Linux系统里的用户和群组密码，分别存放在/etc目录下的passwd和group文件中。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在/etc目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密码置换为"x"字符。投影密码的功能可随时开启或关闭，您只需执行grpconv指令就能开启群组投影密码。

grpconv可以开启群组的影子文件。Linux系统的用户和群组密码分别存在在“/etc/passwd”、“/etc/group”文件中。在系统运行的时候任何用户都可以读取它们，这样难免不安全。影子文件将口令文件的内容存在在“/etc/shadow”和“/etc/gshadow”中，只允许系统管理者读取。

grpinconv命令从组和gshadow创建组，然后移除gshadow。

pwconv命令从passwd和一个可选的现有shadow创建shadow。

pwunconv命令从passwd和shadow创建passwd，然后删除shadow。

每个程序在转换前都会获得必要的锁。pwconv和grpconv相似。首先，删除主文件中不存在的阴影文件中的条目。然后，不以“x”作为主文件中的密码的阴影条目将被更新。添加任何缺失的阴影项。最后，主文件中的密码被替换为‘x’。如果主文件是手工编辑的，这些程序也可以用于初始转换以更新阴影文件。

当向“/etc/shadow“添加新条目时，pwconv将使用“/etc/login.defs”文件中定义的PASS_MIN_DAYS、PASS_MAX_DAYS和PASS_WARN_AGE的值。

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
grpconv
```

## 实例
设置sogrey组密码
``` bash
[sogrey@bogon ~]$ sudo groupmod --password 123456 sogrey 
[sudo] sogrey 的密码：
[sogrey@bogon ~]$ sudo cat /etc/gshadow | grep sogrey # 查看sogrey组密码
wheel:::sogrey 
sogrey:123456::sogrey
[sogrey@bogon ~]$ 
```
启动影子系统
``` bash
[sogrey@bogon ~]$ sudo grpconv
[sogrey@bogon ~]$ cat /etc/group | grep sogrey #看出密码段已经被x替代
wheel:x:10:sogrey
sogrey:x:1000:sogrey
[sogrey@bogon ~]$ sudo cat /etc/gshadow | grep sogrey # 已经移到影子文件了
wheel:::sogrey
sogrey:123456::sogrey
[sogrey@bogon ~]$ 
```

注：gshadow, shadow只有root权限才可以查看。