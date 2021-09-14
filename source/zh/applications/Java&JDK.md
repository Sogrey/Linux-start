# Linux 上安装Java&JDK

## Ubuntu

### 环境
- Ubuntu 20.04.2 LTS

### 在线安装JDK(适用于可连接互联网的用户)

#### 1. 先检查是否已安装JDK

输入以下命令，如果输出jdk版本号，则已安装，不用再往下看了。

``` bash
java -version
```

如果没有输出版本号，而是输出类似于以下提示，`java`未找到，则还未安装。同时也看到下面给出几个jdk在线安装的命令：

``` bash
sogrey@sogrey-VirtualBox:~/桌面$ java -version

Command 'java' not found, but can be installed with:

sudo apt install openjdk-11-jre-headless  # version 11.0.11+9-0ubuntu2~20.04, or
sudo apt install default-jre              # version 2:1.11-72
sudo apt install openjdk-13-jre-headless  # version 13.0.7+5-0ubuntu1~20.04
sudo apt install openjdk-16-jre-headless  # version 16.0.1+9-1~20.04
sudo apt install openjdk-8-jre-headless   # version 8u292-b10-0ubuntu1~20.04

sogrey@sogrey-VirtualBox:~/桌面$ 
```

我们试着安装jdk8 。

#### 2. 在线安装
根据提示我们输入以下命令，安装jdk8：
``` bash
sudo apt install openjdk-8-jre-headless
```
> 注意：此处需要输入sudo密码

#### 3. 验证安装是否成功
输入以下命令，输出版本号，安装成功。
``` bash
sogrey@sogrey-VirtualBox:~/桌面$ java -version
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (build 1.8.0_292-8u292-b10-0ubuntu1~20.04-b10)
OpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)
sogrey@sogrey-VirtualBox:~/桌面$ 
```

#### 4.卸载JDK

``` bash
sogrey@sogrey-VirtualBox:~/桌面$ whereis java
java: /usr/bin/java /usr/share/java /usr/share/man/man1/java.1.gz
sogrey@sogrey-VirtualBox:~/桌面$ 
```

卸载

``` bash
sudo apt-get autoremove default-jdk
```

## CentOS
