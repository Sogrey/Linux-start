# lsusb - 显示本机的USB设备列表信息

lsusb命令 用于显示本机的USB设备列表，以及USB设备的详细信息。

lsusb命令是一个学习USB驱动开发，认识USB设备的助手，推荐大家使用，如果您的开发板中或者产品中没有lsusb命令可以自己移植一个，放到文件系统里面。

显示本机的usb设备列表，可以显示出usb的详细信息，包括设备的读取速度和描述符。

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
lsusb  [OPTION]
```

## 选项

``` bash
-v                      # 告诉lsusb详细显示所示设备的详细信息。这包括设备当前速度的配置描述符。如果可用，类描述符将显示USB设备类，包括集线器、音频、HID、通信和芯片卡。
-s [[bus]:][devnum]     # 显示指定总线和设备号的设备信息，总线和设备号用十进制标识。格式：lsusb –s 00:01
-d [vendor]:[product]   # 显示指定厂商和产品编号的设备，用十六进制表示编号。格式：lsusb –d 8086:
-D                      # 显示指定设备文件的设备信息，例如：lsusb –D /proc/bus/usb/001/001。只有root用户才可以使用这个选项
-t                      # 以树状结构显示
-V                      # 指令版本信息
```
如果指定的设备没有被找到，那么返回一个非0值。/usr/share/hwdata/usb.ids文件中记录了所有的USB设备节点的信息，包括制造商、产品号、类、子类、协议等等。
## 举例
直接显示简单的设备信息
``` bash
[root@localhost ntop-4.0.1]$ lsusb
//总线号      设备号          厂商ID
Bus 001      Device 001:   ID 1d6b:0001 Linux Foundation 1.1 root hub
```
显示详细信息
``` bash
[root@localhost ntop-4.0.1]$ lsusb -v
Bus 001 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Device Descriptor:     # 设备描述符
  bLength                18
  bDescriptorType         1
  …
Hub Descriptor:        # 集线器描述符
  bLength              11
 …
Hub Port Status:       # 集线器端口状态
   Port 1: 0000.0100 power
   Port 2: 0000.0100 power
  …
Device Status:     0x0003   # 设备状态
  Self Powered
  Remote Wakeup Enabled
```
显示指定总线上的设备
``` bash
[root@localhost ntop-4.0.1]$ lsusb -s 001:001
Bus 001 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
```
显示指定厂商的设备信息
``` bash
[root@localhost ntop-4.0.1]$ lsusb -d 1d6b:001
Bus 001 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
```
以树状结构显示
``` bash
[root@localhost ntop-4.0.1]$ lsusb -t
Bus#  1
`-Dev#   1 Vendor 0x1d6b Product 0x0001
```