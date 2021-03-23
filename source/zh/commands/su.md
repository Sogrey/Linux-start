# su - 用于切换当前用户身份到其他用户身份

su命令 用于切换当前用户身份到其他用户身份，变更时须输入所要变更的用户帐号与密码。

临时切换身份到另外一个用户，使用su切换用户之后，不会改变当前的工作目录，但是会改变一些环境变量。


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
su  [选项]  [参数]
```

## 选项

``` bash
- , -l, --login                # 切换用户时启动一个新的shell，可以改变工作目录以及环境变量
-c, --command                  # 执行案指令后，立刻恢复原来的身份
--session-command=COMMAND      # 使用-c将单个命令传递给shell，而不创建新会话。
-f, --fast                     # 使shell不读取启动文件
-m, -p, --preserve-environment # 保留原来的环境变量
-s, --shell                    # 指定切换用户后使用的shell

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
从其他用户切换到root
``` bash
[sogrey@bogon ~]$ su
密码：
[root@bogon sogrey]#  
```
切换用户,环境变量没有发生改变
``` bash
[root@bogon sogrey]#  su sogrey
[sogrey@bogon ~]$ 
```
使用选项“-”切换,工作目录发生变化
``` bash
[root@bogon sogrey]# su - sogrey
上一次登录：2021年 3月 24日 00:23:52 星期三 CSTpts/0 上
[sogrey@bogon ~]$ 
```