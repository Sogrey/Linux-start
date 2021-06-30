# enable - 启动或禁用shell内建命令



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
enable [-a] [-dnps] [-f filename] [name ...]
```

- filename：动态库文件名。
- name（可选）：内建命令，可以为多个。

## 主要用途

- 禁用一到多个内建命令。
- 启用一到多个内建命令。
- 直接调用与禁用的内建命令同名且在$PATH路径下找到的外部命令。
- 打印所有内建命令，无论是否禁用。
- 打印处于启用状态的内建命令。
- 打印处于禁用状态的内建命令。
- 打印处于启用状态的posix标准内建命令。
- 打印处于禁用状态的posix标准内建命令。
- 打印posix标准内建命令，无论是否禁用。
- 从动态库中加载内建命令。
- 移除从动态库中加载的内建命令。

## 选项

``` bash
-a          # 打印所有内建命令，无论是否禁用。
-d          # 移除从动态库中加载的内建命令。
-n          # 禁用内建命令或显示已禁用的内建命令。
-p          # 以可复用格式打印。
-s          # 只显示处于启动状态的posix标准内建命令。
-f          # 动态库中加载内建命令。
-ns         # 打印处于禁用状态的posix标准内建命令。
-as         # 打印posix标准内建命令，无论是否禁用。
```
## 举例

``` bash
# posix special builtin
# 假设没有任何内建命令被禁用
# 禁用两个posix标准内建命令
enable -n set source
# 打印处于禁用状态的posix标准内建命令
enable -ns
# 打印posix标准内建命令，无论是否禁用。
enable -as
# 打印处于启用状态的posix标准内建命令
enable -s
# 假设没有任何内建命令被禁用
# 禁用一到多个内建命令
enable -n echo pwd
# 打印所有内建命令，无论是否禁用。
enable -a
# 打印处于启用状态的内建命令
enable
# 打印处于禁用状态的内建命令
enable -n
# 启用一到多个内建命令
enable pwd
```

