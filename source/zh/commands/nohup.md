# nohup - 将程序以忽略挂起信号的方式运行起来

nohup命令 可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端。

无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到$HOME/nohup.out文件中。如果没有文件能创建或打开以用于追加，那么 command 参数指定的命令不可调用。如果标准错误是一个终端，那么把指定的命令写给标准错误的所有输出作为标准输出重定向到相同的文件描述符。

nohup可以使程序能够忽略挂起信号，继续运行。用户退出时会挂载，而nohup可以保证用户退出后程序继续运行。如果标准输入是终端，请将其从/dev/null重定向。如果标准输出是终端，则将输出附加到“nohup.out”(如果可能的话)，否则追加到“$home/nohup.out”。如果标准错误是终端，请将其重定向到标准输出。若要将输出保存到文件中，请使用“nohup COMMAND > FILE”。

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
nohup  cmd
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
以nohup形式运行find指令
``` bash
[root@localhost ~]$ nohup find /weijie/ -name *.c    #运行find
nohup: 忽略输入并把输出追加到"nohup.out"               #结果会保存到nohup.out文件中
[root@localhost ~]$ cat nohup.out                    #查看结果
/weijie/11.c
/weijie/4.c
/weijie/2.c
/weijie/3.c
/weijie/5.c
/weijie/1.c
```

使用nohup命令提交作业，如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：
``` bash
nohup command > myout.file 2>&1 &
```
在上面的例子中，输出被重定向到myout.file文件中。

该指令表示不做挂断操作，后台下载
``` bash
nohup wget site.com/file.zip
```
下面命令，会在同一个目录下生成一个名称为 nohup.out 的文件，其中包含了正在运行的程序的输出内容
``` bash
nohup ping -c 10 baidu.com
```