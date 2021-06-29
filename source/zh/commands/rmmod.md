# rmmod - 从运行的内核中移除指定的内核模块

rmmod命令 用于从当前运行的内核中移除指定的内核模块。执行rmmod指令，可删除不需要的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放如核心。你可以将这些功能编译成一个个单独的模块，待有需要时再分别载入它们。

rmmod指令用来卸载不需要使用的内核模块。

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
rmmod [ -f ]  [ -w ]  [ -s ]  [ -v ]  [ modulename ]
```

## 选项

``` bash
-v, --verbose       # 显示详细执行过程
-f, --force         # 轻质卸载
-w, --wait          # 如果拒绝卸载，那么久等待知道模块不在使用，然后卸载
-s, --syslog        # 将错误送到syslog，默认送到标准输出
-V, --version       # 显示命令版本信息，并且退出
```
## 举例

``` bash
[sogrey@bogon ~]$ lsmod # 查看模块，nfs没人使用
Module                  Size  Used by
fuse                   91880  3 
xt_CHECKSUM            12549  1 
ipt_MASQUERADE         12678  3 
nf_nat_masquerade_ipv4    13412  1 ipt_MASQUERADE
tun                    31665  1 
devlink                42368  0 
ip6t_rpfilter          12595  1 
ipt_REJECT             12541  4 
nf_reject_ipv4         13373  1 ipt_REJECT
ip6t_REJECT            12625  2 
nf_reject_ipv6         13717  1 ip6t_REJECT
xt_conntrack           12760  12 
ip_set                 40898  0 
nfnetlink              14519  1 ip_set
...
drm                   397980  5 ttm,drm_kms_helper,vmwgfx
i2c_core               63151  3 drm,i2c_piix4,drm_kms_helper
libata                247431  3 pata_acpi,ata_generic,ata_piix
dm_mirror              22289  0 
dm_region_hash         20813  1 dm_mirror
dm_log                 18411  2 dm_region_hash,dm_mirror
dm_mod                124191  11 dm_log,dm_mirror
[sogrey@bogon ~]$ 
```

