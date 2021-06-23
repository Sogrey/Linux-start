# chkconfig - 检查或设置系统的各种服务
chkconfig命令 检查、设置系统的各种服务。这是Red Hat公司遵循GPL规则所开发的程序，它可查询操作系统在每一个执行等级中会执行哪些系统服务，其中包括各类常驻服务。谨记chkconfig不是立即自动禁止或激活一个服务，它只是简单的改变了符号连接。

启动或者关闭系统服务，设置服务的运行级别，该指令并不会立刻启动或者停止服务，而是在开机的时候发生效果。

chkconfig提供了一个简单的命令行工具，用于维护/etc/rc[0-6].d目录层次结构，使系统管理员不必直接操作这些目录中的许多符号链接。这个chkconfig的实现受到IRIX操作系统中的chkconfig命令的启发。但是，这个版本没有在/etc/rc[0-6].d层次结构之外维护配置信息，而是直接管理/etc/rc[0-6].d中的符号链接。这将留下所有有关在单个位置启动服务init的配置信息。

chkconfig有五个不同的功能：添加用于管理的新服务、从管理中删除服务、列出服务的当前启动信息、更改服务的启动信息以及检查特定服务的启动状态。

当chkconfig后面只有一个服务名称的时候，它会检查服务是否配置为在当前运行级中启动。如果是，则chkconfig返回true；否则返回false。“--level”选项可以用来使chkconfig查询指定运行级下的服务状态，而不是当前的运行级。当使用“--list”参数运行chkconfig或根本没有参数时，将显示所有服务及其当前配置的清单。

如果在服务名称之后指定了on、off、reset或resetpriorities之一，则chkconfig将更改指定服务的启动信息。on和off标志将分别导致服务在被更改的运行级别中启动或停止。reset标志将服务的所有运行级别的on/off状态重置为init脚本文件中指定的样子，重置的时候会有一个询问。而resetpriorities标志则会直接将服务的on/off状态重置为init脚本中指定样子。默认情况下，on和off选项只影响运行级别2、3、4和5，而reset和resetpriorities影响所有运行级别。请注意，对于每个服务，每个运行级都有一个开始脚本或一个停止脚本。当切换runlevel时，init将不会重新启动已经启动的服务，也不会重新停止未运行的服务。

chkconfig还可以通过xinetd.d配置文件管理xinetd脚本，xinetd服务只支持on、off、--list。

chkconfig支持一个“--type”参数，当几个服务共享名字的情况下，这个选项就有效。支持该选项的服务可以是sysv和xinetd。

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
chkconfig  [--list]  [--type type][name]
chkconfig  --add  name
chkconfig  --del  name
chkconfig - -override  name
chkconfig  [--level levels]  [--type type]  name  <on|off|reset|resetpriorities>
chkconfig  [--level levels]  [--type type]  name
```

## 选项

``` bash
--list 服务名             # 此选项列出chkconfig所知道的所有服务，以及它们是在每个运行级别中停止还是启动。如果指定了名称，则仅显示有关服务名称的信息。
--add 服务名              # 增加服务。当添加新服务时，chkconfig确保服务在每个运行级别上都有一个启动项或一个杀死项。如果任何运行级缺少这样的条目，chkconfig将按照init脚本中的默认值创建适当的条目。请注意，“INIT INFO”部分中的默认条目优先于initscript中的默认运行级别；如果存在任何必需的启动或要求停止条目，则将调整脚本的开始和停止优先级，以考虑这些依赖项。
--del 服务名              # 将服务从chkconfig管理中删除，与它相关的/etc/rc[0-6].d中的任何符号链接都被删除。
--level [levels] [name] [on|off|reset] # 设置指定服务在指定运行级别的开机状态，级别可以是0~6。例如: chkconfig –level 35 vsftpd on
--override name           # 如果/etc/chkconfig.d/name文件现在存在，并且与基础配置脚本不同，则更改服务名称的配置文件，而不使用基础配置。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 关于运行级别
每个应该由chkconfig管理的服务都需要在其init.d脚本中添加两行或者多行注释。第一行告诉chkconfig默认应该在什么运行级别启动服务，以及启动和停止优先级级别。如果服务在默认情况下不应该在任何运行级别中启动，则应该使用“-”来代替runlevel列表。第二行包含服务的描述，并且可以通过反斜杠继续扩展多行。例如random.init中有三行注释
```
# chkconfig: 2345 20 80
# description: Saves and restores system entropy pool for \
# higher quality random number generation.
```
这意味着随机脚本应该在级别2、3、4和5中启动，它的开始优先级应该是20，它的停止优先级应该是80。

 

chkconfig还支持从左到右的“-”分隔符，并将优先于可用的“chkconfig：”行应用它们。例如下面的：
```
### BEGIN INIT INFO
# Provides: foo
# Required-Start: bar
# Defalt-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Description: Foo init script
### END INIT INFO
```
在这种情况下，“foo”的启动优先级将被更改，它将高于“bar”启动优先级。在添加依赖项时必须小心，因为它们可能导致许多脚本的启动和停止优先级发生巨大变化。
## 举例
查看所有服务
``` bash
[sogrey@bogon ~]$ chkconfig --list

注：该输出结果只显示 SysV 服务，并不包含
原生 systemd 服务。SysV 配置数据
可能被原生 systemd 配置覆盖。 

      要列出 systemd 服务，请执行 'systemctl list-unit-files'。
      查看在具体 target 启用的服务请执行
      'systemctl list-dependencies [target]'。

netconsole     	0:关	1:关	2:关	3:关	4:关	5:关	6:关
network        	0:关	1:关	2:开	3:开	4:开	5:开	6:关
[sogrey@bogon ~]$ 
```
查看指定服务
``` bash
[sogrey@bogon ~]$ chkconfig --list vsftpd
vsftpd         0:关闭  1:关闭  2:关闭  3:关闭  4:关闭  5:启用  6:关闭
[sogrey@bogon ~]$ 
```
设置ftp服务在3和5这两个级别启动
``` bash
[sogrey@bogon ~]$ chkconfig --level 35 vsftpd on  # 级别3和5启动
[sogrey@bogon ~]$ chkconfig --list vsftpd         # 查看是否设置成功
vsftpd         0:关闭  1:关闭  2:关闭  3:启用  4:关闭  5:启用  6:关闭
```