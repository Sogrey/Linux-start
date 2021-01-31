---
sidebarDepth: 3
---

# Linux系统启动U盘制作工具

## UNetbootin

UNetbootin 让你创建 Ubuntu 或者其他 Linux 发行版的可引导 Live U 盘，而无需烧录 CD。

你既能让 UNetbootin 为你下载众多开箱即用的发行版，或者提供你自己的 Linux 的 .iso 文件。支持Linux和windows系统，官网有安装方法。


官方网址：[https://unetbootin.github.io/](https://unetbootin.github.io/)

 
## Rufus(亲测过)

Rufus是一个实用程序，可帮助格式化和创建可启动的U盘。它对以下情况特别有用：您需要从可启动的ISO（Windows，Linux，UEFI等）创建USB安装媒体，您需要在没有安装操作系统的系统上工作，你需要从DOS中刷新BIOS或其他固件，你想运行一个低级实用程序，尽管体积小，但Rufus提供您所需的一切！目前之支持Windows平台



官方网站：[https://rufus.ie/en_IE.html](https://rufus.ie/en_IE.html)

 

## universal-usb-installer

Universal USB Installer（通用USB安装程序）是一个自启动Linux U盘创建工具，您可从大量精选的Linux发行版中挑选一个安装到您的U盘上。通用USB安装程序使用方便，只需选择自启动Linux发行版，ISO文件，和您的U盘，单击“安装”即可。其他功能包括，持续保存（如果可用的话），以FAT32格式格式化U盘（推荐）确保一个干净的安装。安装完成后，您即拥有了一个安装了您所喜欢的Linux版本的自启动U盘。目前之支持Windows平台。



官方网址：[https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3)

 

#  Ubuntu系统的自带软件 Startup Disk Creator（启动盘创建器）

这个是Ubuntu系统的自带软件，安装完Ubuntu系统会默认安装。

usb-creator-common：使用CD或磁盘映像创建启动磁盘（通用文件）
usb-creator-gtk：使用CD或磁盘映像创建启动磁盘（适用于GNOME）
usb-creator-kde：使用CD或磁盘映像创建启动磁盘（适用于KDE）

没有安装可以通过下面的命令安装：
``` bash
root@Ubuntu:~# apt install usb-creator-gtk
```