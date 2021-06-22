# sudo - 以其他身份来执行命令

sudo命令 用来以其他身份来执行命令，预设的身份为root。在/etc/sudoers中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。

sudo允许用户以超级用户或安全策略指定的另一个用户的身份执行命令。Sudo支持安全策略插件和输入/输出日志的插件。第三方可以开发和分发自己的策略和I/O日志插件，以便与sudo前端无缝地工作。默认的安全策略是sudoers，它是通过文件/etc/sudoers或通过LDAP配置的。

安全策略确定用户在需要什么权利的时候需要运行sudo。该策略可能要求用户使用密码或其他身份验证机制进行身份验证。如果需要身份验证，如果用户的密码未在可配置的时限内输入，sudo将退出。此限制是特定于策略的；sudoers安全策略的默认密码提示超时为5分钟。

安全策略可能支持凭据缓存，允许用户在不需要身份验证的情况下再次运行sudo。sudoers策略将凭据缓存5分钟，除非在sudoers(5)中重写。通过使用“-v”选项运行sudo，用户可以在不运行命令的情况下更新缓存的凭据。

安全策略可能记录使用sudo的成功和失败情况。如果配置了I/O插件，运行中的命令的输入和输出也可能被记录下来。

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
sudo  -h | -K | -k | -V
sudo  -v  [-AknS]  [-g group name | #gid]  [-p prompt]  [-u user name | #uid]
sudo  -l[l] [-AknS]  [-g group name | #gid]  [-p prompt]  [-U user name]  [-u user name | #uid]  [command]
sudo  [-AbEHnPS]  [-C fd]  [-g group name | #gid]  [-p prompt]  [-r role]  [-t type]  [-u user name | #uid]  [VAR=value]  -i |  -s [command]
sudoedit  [-AnS]  [-C fd]  [-g group name | #gid]  [-p prompt]  [-u user name | #uid]  file  ...
```

## 选项

``` bash
-b                                   # 在后台执行指令；
-E                                   # 继承当前环境变量
-H                                   # 将HOME环境变量设为新身份的HOME环境变量；
-k                                   # 结束密码的有效期限，也就是下次再执行sudo时便需要输入密码；。
-l                                   # 列出目前用户可执行与无法执行的指令；
-p                                   # 改变询问密码的提示符号；
-s<shell>                            # 执行指定的shell；
-u<用户>                              # 以指定的用户作为新的身份。若不加上此参数，则预设以root作为新的身份；
-v                                   # 延长密码有效期限5分钟；

-h, --help                           # 显示帮助文档
-V, --version                        # 显示命令版本信息
```
## 执行命令
当sudo执行命令时，安全策略指定命令的执行环境。通常，将实际有效的uid和gid设置为与密码数据库中指定的目标用户相匹配，并根据组数据库初始化组向量(除非指定了-p选项)。安全策略可能会指定一些参数：真实有效用户ID、真实有效组ID、补充组ID、环境列表、当前工作目录、文件创建掩码、SELinux的角色和类型、调度级别。

1.进程模型

当sudo运行一个命令时，它调用fork(2)，设置上面描述的执行环境，并在子进程中调用execve系统调用。主sudo进程等待命令完成，然后将命令的退出状态传递给安全策略的close方法并退出。如果配置了I/O日志插件，则将一个新的伪终端((“pty”)被创建，第二个sudo进程用于在用户现有的pty和正在运行的新pty之间传递作业控制信号。这个额外的进程使挂起并恢复命令成为可能。如果没有它，命令将使用POSIX术语中的“孤立进程组”。也不会收到任何作业控制信号

2.信号处理

因为命令是作为sudo进程的子进程运行的，所以sudo会将接收到的信号中继到命令。除非该命令在新的pty中运行，否则SIGHUP、SIGINT和SIGQUIT信号将不会被中继，除非它们是由用户进程而不是内核发送的。否则，该命令将在用户按下“ctrl+c”时接收到两次SIGINT.信号。由于SIGSTOP和SIGKILL不能被捕获，因此不会被中继到命令。作为一般规则，当您希望挂起sudo运行的命令时，应该使用SIGTSTP而不是SIGSTOP。

作为特例，sudo将不会中继它正在运行的命令发送的信号。这可以防止命令意外地杀死自己。在某些系统上，reboot(8)命令在重新启动系统之前将SIGTERM发送到所有非系统进程，而不是它自己。这防止sudo将接收到的SIGTERM信号中继回reboot(8)，然后该信号可能会在系统实际启动之前退出，使其处于类似于单用户模式的半死状态。但是，请注意，此检查只适用于sudo运行的命令，而不适用于命令可能创建的任何其他进程。因此，通过sudo运行调用重reboot(8)或shutdown(8)的脚本可能导致系统处于这种未定义状态，除非使用exec()函数系列而不是system()运行reboot(8)或shutdown(8)(后者在命令和调用进程之间插入一个shell)。
## 插件
插件根据“/etc/sudo.conf”文件的内容动态加载。如果没有“/etc/sudo.conf”文件，或者它不包含插件行，sudo将使用传统sudoers安全策略和I/O日志记录，这相当于以下“/etc/sudo.conf”文件
```
#
# Default /etc/sudo.conf file
#
# Format:
#   Plugin plugin_name plugin_path plugin_options ...
#   Path askpass /path/to/askpass
#   Path noexec /path/to/sudo_noexec.so
#   Debug sudo /var/log/sudo_debug all@warn
#   Set disable_coredump true
#
# The plugin_path is relative to /usr/libexec unless
#   fully qualified.
# The plugin_name corresponds to a global symbol in the plugin
#   that contains the plugin interface structure.
# The plugin_options are optional.
#
Plugin policy_plugin sudoers.so
Plugin io_plugin sudoers.so
```
插件行由插件关键字组成，后面跟着符号名字和包含插件的共享对象的路径。符号名字是插件共享对象中struct policy_plugin或struct io_plugin的名称。路径可以是完全限定的或相对的。如果不完全限定，则相对于“/usr/libexec”目录。路径之后的任何附加参数都是作为参数传递给插件的开放函数。不以Plugin、Path、Debug、Set开头的行将被默认忽略。
## 路径
路径行由Path关键字组成，后面跟着要设置的路径的名称及其值。例：
```
Path noexec /usr/libexec/sudo_noexec.so
Path askpass /usr/X11R6/bin/ssh-askpass
```
以下与插件无关的路径可以在“/etc/sudo.conf”文件中设置

1. askpass，辅助程序的完全限定路径，用于在没有终端可用时读取用户的密码。当sudo从图形应用程序执行时，情况可能是这样。由askpass指定的程序应该将传递给它的参数显示为提示符，并将用户的密码写入标准输出。askpass可能被环境变量SUDO_ASKPASS覆盖。
2. noexec，共享库的完全限定路径，包含仅返回错误的execv()、execve()和fexecve()库函数的虚拟版本，用于在支持LD_PRELOAD或其等效的系统上实现noexec功能。默认值为“/usr/libexec/sudo_noexec.so”。
## 调试标志
Sudo版本1.8.4及更高版本支持一种灵活的调试框架，如果存在问题，可以帮助跟踪sudo在内部做什么。

Debug行由Debug关键字组成，后面跟着要调试的程序名称(sudo、visudo、sudoreplay)、调试文件名和以逗号分隔的调试标志列表。sudo和sudoers插件使用的调试标志语法是subsystem@priority，但是插件可以自由使用不同的格式，只要它不包括逗号。例如语句“Debug sudo /var/log/sudo_debug all@warn,plugin@info” 将会在警告级别和更高级别记录插件子系统的所有调试语句以及信息级别的语句。

目前，每个程序只支持一个调试条目。sudo调试条目由sudo前端、sudodit和plugins共享。将来的版本可能会增加对每个插件调试行的支持和/或对单个程序的多个调试文件的支持。

sudo前端使用的优先级依次为：crit、err、warn、notice、diag、info、trace、debug.。当指定每个优先级时，还包括所有高于此优先级的优先级。例如，通知的优先级将包括记录在通知中的调试消息以及更高的优先级。

sudo前端可以使用一下子系统：

| 子系统  | 说明              |
| ------- | ----------------- |
| all     | 所有的子系统。    |
| args    | 命令行参数进程。  |
| conv    | 用户回会话        |
| edit    | sudoedit。        |
| exec    | 命令执行过程。    |
| main    | sudo的主函数。    |
| netif   | 网络接口处理。    |
| pcomm   | 插件会话          |
| plugin  | 插件配置。        |
| pty     | 为tty相关代码。   |
| selinux | SELinux专用处理。 |
| util    | 实用函数。        |
| utmp    | utmp处理          |

 

## 退出值

当程序成功执行时，sudo的退出状态将只是被执行的程序的退出状态。否则，如果存在配置/权限问题或sudo无法执行给定的命令，sudo将以1退出。在后一种情况下，错误字符串将打印到标准错误。如果sudo无法在用户路径中调用stat函数统计一个或多个条目，则在stderr上打印错误。(如果该目录不存在，或者它实际上不是一个目录，则忽略该条目，并且不打印错误。)在正常情况下不应该发生这种情况。stat(2)返回“拒绝权限”的最常见原因是，如果您正在运行一个自动侦听器，并且您的路径中的一个目录位于当前无法访问的计算机上。
## 安全说明
当执行外部命令时，sudo试图保持安全。为了防止命令欺骗，sudo在用户路径中搜索命令时，最后检查“.”和““。但是请注意，实际的path环境变量没有被修改，而是不改变地传递给sudo执行的程序。

请注意，sudo通常只记录它显式运行的命令。如果用户运行“sudo su“或”sudo sh“之类的命令，则从该shell运行的后续命令不受sudo的安全策略的约束，提供shell转义的命令也是如此。如果启用了I/O日志记录，随后的命令将有它们的输入和输出记录，但这些命令不会有传统的日志。因此，当用户通过sudo访问命令时，必须小心，以验证该命令不会无意中给用户一个有效的root shell。

为了防止泄露潜在的敏感信息，sudo在执行时默认禁用核心转储。为了帮助调试sudo崩溃，您可能希望通过在“/etc/sudo.conf“文件中将“disable_coredump”设置为false来重新启用核心转储，如下所示

Set disable_coredump false

请注意，默认情况下，大多数操作系统从setuid程序(包括sudo)禁用核心转储。要实际获得sudo核心文件，您可能需要为setuid进程启用核心转储。在BSD和Linux系统上，这是通过“sysctl“命令完成的，在Solaris上可以使用”coreadm“命令。
## 环境变量
sudo使用一下环境变量，安全策略控制命令环境的实际内容。

| 环境变量     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| EDITOR       | 如果没有设置SUDO_EDITOR或VISUAL，则默认编辑器使用”-e”模式。  |
| MAIL         | 在“-i“模式中或在sudoers中启用env_reset时，将其设置为目标用户的邮件线轴。 |
| HOME         | 如果指定了“-i“或”-H“，在sudoers中赋值给目标用户的home目录，或者赋值给env_reset或all_set_home。或者当指定”-s“选项时，sudoers中赋值给set_home。 |
| PATH         | 可能被安全策略覆盖                                           |
| SEHLL        | 使用“-s“选项，执行运行的shell                                |
| SUDO_ASKPASS | 如果没有可用的终端，或者指定了“-A“选项，则指定用于读取密码的辅助程序的路径。 |
| SUDO_COMMAND | 赋值给sudo运行的命令                                         |
| SUDO_EDITOR  | “-e“模式下的默认编辑器                                       |
| SUDO_GID     | 赋值给调用sudo的用户的组ID                                   |
| SUDO_PROMPT  | 作为默认的密码提示语句                                       |
| SUDO_PS1     | 如果设置，PS1将被设置为正在运行的程序的值。                  |
| SUDO_UID     | 赋值给调用sudo的用户的ID                                     |
| SUDO_USER    | 赋值给调用sudo的用户登录名                                   |
| USER         | 赋值给目标用户（默认是root，除非指定“-u“选项）               |
| VISUAL       | 如果在“-e“模式下没有指定”SUDO_EDITOR“，那么这个就是默认编辑器 |



## 举例

``` bash
[sogrey@bogon ~]$ sudo su -
[sudo] sogrey 的密码：
上一次登录：2021年 3月 24日 00:24:36 星期三 CSTpts/0 上
[root@bogon ~]# 
```
这个命令相当于使用root超级用户重新登录一次shell，只不过密码是使用的当前用户的密码。而且重要是，该命令会**重新加载/etc/profile文件以及/etc/bashrc文件等系统配置文件，并且还会重新加载root用户的$SHELL环境变量所对应的配置文件** ，比如：root超级用户的$SHELL是/bin/bash，则会加载/root/.bashrc等配置。如果是/bin/zsh，则会加载/root/.zshrc等配置，执行后是完全的root环境。

``` bash
[sogrey@bogon ~]$ sudo -i
[root@bogon ~]# 
```
这个命令基本与 sudo su - 相同，执行后也是root超级用户的环境，只不过是多了一些当前用户的信息。



``` bash
$ sudo -u yaz ls ~yaz                               //查看用户yaz的家目录
$ sudo -u www vi ~www/htdocs/index.html          //以用户www的身份编辑文件
$ sudo -g adm view /var/log/syslog                //以组adm的身份去查看日志文件， 
$ sudo -u jim -g audio vi ~jim/sound.txt         //要使用不同的主组以Jim的身份运行编辑器
$ sudo shutdown -r +15 "quick reboot"             //关机
$ sudo sh -c "cd /home ; du -s * | sort -rn > USAGE"   //若要对/home分区中的目录进行使用列表，请注意，这将在子shell中运行命令，以使cd和文件重定向工作。
```
