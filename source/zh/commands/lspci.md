# lspci - 显示当前主机的所有PCI总线信息

lspci命令 用于显示当前主机的所有PCI总线信息，以及所有已连接的PCI设备信息。

lspci是一种实用程序，用于在系统中显示有关pci总线的信息以及连接到它们的设备。

默认情况下，它显示了一个简单的设备列表。使用下面描述的选项可以请求更详细的输出或其他程序用于解析的输出。

如果要报告PCI设备驱动程序或lspci本身中的bug，请使用选项“lspci-vvx”或更好的“lspci-vvxxx”的输出(不过，可能会有警告)。

输出的某些部分，特别是在高度冗长的模式下，只有经验丰富的PCI黑客才能理解Proba-Bly。有关字段的确切定义，请参阅PCI规范或head er.h和/usr/include/linux/pci.h文件。

在许多操作系统上，对PCI配置空间的某些部分的访问仅限于root用户，因此对于普通用户来说，lspci的功能是有限的。然而，lspci尽力显示尽可能多的可用信息，并将所有其他信息标记为<访问拒绝>文本

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
lspci  [OPTION]
```
lspci命令中，我们经常会看到一些“[]:[].[]”这样格式的数字，例如“00:01.0”，这一个参数是总线编号，第二个是插槽编号，第三个是功能编号，它们都是十六进制的数字。

## 选项
基础显示模式
``` bash
-m       # 以向后兼容并且机器可读的方式转储设备信息
-mm      # 以机器可读的方式转储设备信息，以便脚本解析
-t       # 以树形结构显示pci设备的层次关系，包含所有总线、桥梁、设备和它们之间的连接
```
显示选项
``` BASH
-n                # 显示pci设备的厂商和设备代码
-v                # 显示所有设备的详细信息
-vv               # 以更加详细的方式显示设备信息
-k                # 显示处理每个设备的内核驱动程序以及能够处理该设备的内核模块。默认情况下，当-v以正常的输出模式打开时。(目前只在内核2.6或更高版本的Linux上工作。)
-x                # 显示配置空间标准部分的十六进制转储(CardBus桥的前64字节或128字节)。
-xxx              # 显示整个PCI配置空间的十六进制转储。当您试图读取配置空间的某些部分时，只有当几个PCI设备崩溃时，它才可用，而且只适合root用户。(这种行为可能没有违反PCI标准，但至少非常愚蠢)。然而，这样的设备很少见，所以您不必太担心
-xxxx             # 显示扩展(4096字节)PCI配置空间在PCI-X2.0和PCIExpress总线上可用的十六进制转储
-b                # 以总线为中心的视图。显示由pci总线上的卡看到的所有irq编号和地址。注意，不是有内核看到的
-D                # 始终显示PCI域号。默认情况下，lspci在只有域0的机器上略过它们。
```
解析ID为名称的选项
``` BASH
-n                # 将PCI供应商和设备代码显示为编号，而不是在PCI ID列表中查找它们。
-nn               # 显示pci供应商和设备的代码和名字
-q                # 如果在本地pci.id文件中找不到设备，则使用DNS查询中央PCI ID数据库。如果DNS查询成功，结果将缓存在~/.pciids-cache中，即使-q不再给出，也会在后续运行中识别。请在自动脚本中使用此开关时要小心，以避免数据库服务器超载。
-qq               # 和“-q”一样，但是本地缓存被重置
-Q                # 查询中央数据库，即使是本地也有缓存数据可查。如果您怀疑显示的条目是错误的，请使用此方法。
```
选择设备的选项
``` bash
-s [域]:[总线]:[插槽].[功能]  # 只显示指定域中的设备(如果您的计算机有几个主机桥接器，它们可以共享公共总线编号空间，或者每个设备可以自己寻址PCI域；域编号为0到ffff)、总线编号(0到ff)、插槽编号(0至1f)、函数编号(0至7)。地址可以省略或设置为“*”，这两者都意味着“任何值”。所有数字都是十六进制的。例如，“0：”表示总线0上的所有设备，“0”表示设备0在任何总线上的所有功能，“0.3”在所有总线上选择设备0的第三功能，“4”仅显示每个设备的第四个功能。
-d [厂商：设备]              # 显示指定厂商和设备的信息，厂商号和设备号都是十六进制。
```
其他选项
``` bash
-i <file>     # 指定pci设备编号文件，默认文件是/usr/share/hwdata/pci.ids
-p <file>     # 使用指定文件作为PCI ID的映射文件，默认使用/lib/Module/kernel_version/Modes.pcimap
-M            # 调用总线映射模式，它对所有pci设备，包括配置错误的桥后面的设备进行彻底扫描。此选项只在直接硬件访问模式下提供有意义的结果，通常需要根权限。请注意，总线映射程序只扫描pci域0。
```
PCI设备访问选项
``` bash
-A <method>        # 支持多种方法来访问PCI硬件。默认情况下，它使用第一个可用的访问方法，但您可以使用此选项覆盖此决定。你可以使用“-A help”来先看可用的方法
-O <param>=<value> # 库的行为由多个命名参数控制。此选项允许设置任何参数的值。使用“-Ohelp“获取已知参数及其默认值的列表。
-H1                # 通过Intel配置机制1直接访问硬件
-H2                # 通过Intel配置机制2直接访问硬件
-F <file>          # 与其访问真正的硬件，不如从先前运行的lspci-x生成的给定文件中读取设备及其配置寄存器的值列表，这对于分析用户提供的错误报告非常有用，因为您可以任何方式显示硬件配置，而不需要使用更多转储请求来干扰用户。
-G                 # 提高库的调试级别
```
## 说明

1.关于“–m”选项

如果您打算自动处理lspci的输出，请使用本节中描述的机器可读的输出格式之一(-m、-vm、-vmm)。所有其他格式都可能在lspci的不同版本之间发生变化。所有的数字都是以十六进制打印的。如果要处理数字ID而不是名称，请添加-n开关.

在简单格式中，每个设备都在一行上进行描述，这些参数被格式化为适合传递给shell脚本的参数，即由空格分隔的值，必要时引用和转义。其中一些参数是位置：槽、类、供应商名称、设备名称、子系统名称和子系统名称(如果设备没有子系统，最后两个参数是空的)；其余的参数是选项

2.关于“-vmm”选项

详细的输出是由空行分隔的记录序列，每条记录用一行来描述一个设备，每一行包含一个‘tag：value’对。标记和值由单个制表符分隔。记录或记录中的行都不按任何特定顺序排列。标记区分大小写。下面是已经定义的tag：

- Slot，设备所在的插槽名称
- Class，类名
- Vendor，厂商名
- Device，设备名
- SVendor，子系统供应商名字
- SDevice，子设备名字
- PhySlot，设备所在的物理插槽
- Rev，修序号
- ProgIf，编程接口
- Driver，当前正在处理设备的内核驱动程序
- Module，内核模块的报告

## 举例

以机器可读的方式显示
``` bash
[root@localhost ntop-4.0.1]$ lspci -m
00:00.0 "Host bridge" "Intel Corporation" "440FX - 82441FX PMC [Natoma]" -r02 "" ""
00:01.0 "ISA bridge" "Intel Corporation" "82371SB PIIX3 ISA [Natoma/Triton II]" "" ""
00:01.1 "IDE interface" "Intel Corporation" "82371AB/EB/MB PIIX4 IDE" -r01 -p8a "" ""
00:02.0 "VGA compatible controller" "InnoTek Systemberatung GmbH" "VirtualBox Graphics Adapter" "" ""
```
显示设备代码和名字
``` bash
[root@localhost ntop-4.0.1]$ lspci –nn
#设备代码0600， 厂商代码8086：1237
00:00.0 Host bridge [0600]: Intel Corporation 440FX - 82441FX PMC [Natoma] [8086:1237] (rev 02)
00:01.0 ISA bridge [0601]: Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II] [8086:7000]
00:01.1 IDE interface [0101]: Intel Corporation 82371AB/EB/MB PIIX4 IDE [8086:7111] (rev 01)
```
以树形结构显示
``` bash
[root@localhost ntop-4.0.1]$ lspci –t
#总线编号，插槽，功能编号
-[0000:00]-+-00.0
           +-01.0
           +-01.1
           +-02.0
```
显示指定位置的设备信息
``` bash
[root@localhost ntop-4.0.1]$ lspci -s 0000:01.0
00:01.0 ISA bridge: Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]
```
显示指定厂商和设备号的设备信息
``` bash
[root@localhost ntop-4.0.1]$ lspci -d 8086:1237
00:00.0 Host bridge: Intel Corporation 440FX - 82441FX PMC [Natoma] (rev 02)
```
