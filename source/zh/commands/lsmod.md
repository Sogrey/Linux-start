# lsmod - 显示已载入系统的模块

lsmod指令用来显示已经加载的内核模块。

lsmod命令 用于显示已经加载到内核中的模块的状态信息。执行lsmod命令后会列出所有已载入系统的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放入核心。您可以将这些功能编译成一个个单独的模块，待需要时再分别载入。


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
lsmod
```

## 选项
无
## 举例

``` bash
[sogrey@bogon ~]$ lsmod
Module                  Size  Used by
nls_utf8               16384  1
isofs                  49152  1
vboxvideo              24576  0
ghash_clmulni_intel    16384  0
snd_rawmidi            36864  1 snd_seq_midi
aesni_intel           372736  0
crypto_simd            16384  1 aesni_intel
cryptd                 24576  2 crypto_simd,ghash_clmulni_intel
joydev                 24576  0
vboxguest              45056  5
pata_acpi              16384  0
video                  49152  0
...
sogrey@sogrey-VirtualBox:~/桌面$ 
```

