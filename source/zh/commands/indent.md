# indent - 格式化C语言的源文件

indent命令 可辨识C的原始代码文件，并加以格式化，以方便程序员阅读、修改等操作。


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
indent  [选项]  [源文件] 
indent  [选项]  [源文件] [-o 目标文件]
```

## 选项

``` bash
-bad：                   # 在声明区加上空白行；
-bap：                   # 添加空白行；
-bbb：                   # 在注释后面添加空白行；
-bc：                    # 在声明段中，如果出现逗号就换行；
-bl：                    # if（或是else、for等）与后面执行区段的“{”不同行，且“}”
                         # 自成一行-bli<缩排格数>设置{}缩排的格数；
-br：                    # if（或是else、for等）与后面执行区段的“{”同行，且“}”自成一行；
-bs：                    #  在sizeof之后空一格；
-c<栏数>：               #  将注释置于程序右侧指定的栏位；
-cd<栏数>：              #  将注释置于声明右侧指定的栏位；
-cdb：                   #  注释符号自成一行；
-ce：                    # 将else置于“}”（if执行区段的结尾）之后；
-ci：<缩排格数>：        #  叙述过长而换行时，指定换行后缩排的格数；
-cli<缩排格数>：         #   使用case时，switch缩排的格数；
-cp<栏数>：              # 将注释置于else与elseif叙述右侧指定的栏位；
-cs：                    # 在case之后空一格；
-d<缩排格数>：           #  针对不是放在程序码右侧的注释，设置其缩排格数；
-di<栏数>：              # 将声明区段的变量置于指定的栏位；
-fc1：                   # 针对放在每行最前端的注释，设置其格式；
-fca：                   # 设置所有注释的格式；
-gnu：                   # 使用指定的GNU格式，该参数为默认值；
-i<格数>：               #  设置缩排的格数；
-ip<格数>：              #  设置参数的缩排格数；
-kr：                    #  指定使用Kernighan&Ritchie的格式；
-lp：                    #  叙述过长而换行，且叙述中包含了括号时，
                         #  将括号中的每行起始栏位内容垂直对其排列；
-nbad：                  #  在声明区段后不要加上空白行；
-nbap：                  #  在程序后面不添加空白行；
-nbbb：                  #  在注释段后面不添加空白行；
-nbc：                   #  在声明段中，即使出现逗号，也不换行；
-ncdb：                  #  注释符号不自成一行；
-nce：                   #  不将else置于“}”后面；
-ncs：                   #  不在case后面空一格；
-nfc1：                  #  不要格式化放在每行最前端的注释；
-nfca：                  #  不用格式化任何的注释；
-nip：                   #  参数不要缩排；
-nlp：                   #  叙述过长而换行，且叙述中包含了括号时，
                         #  不用将括号中的每行起始栏位垂直对其排列；
-npcs：                  #  在调用函数名之后，不要添加空格；
-npro：                  #  不要读取indent的配置文件“.indent.pro”；
-npsl：                  #  程序类型与程序名称放在同一行；
-nsc：                   #  注释左侧不要添加星号；
-nsob：                  #  不用处理多余的空白行；
-nss：                   #  若for或while区段仅有一行时，在分号前不加空格；
-nv：                    #  不显示详细的信息；
-orig：                  #  使用berkeley格式；
-pcs：                   #  在调用函数名与“{”之间添加空格；
-psl：                   #  程序类型置于程序名称的前一行；
-sc：                    #  在每行注释左侧添加星号；
-sob：                   #  删除多余的空白行；
-ss：                    #  若for或swile区段仅有一行时，在分号前加上空格；
-st：                    #  将结果显示在标准输出设备上；
-T：                     #  数据类型名称缩排；
-ts<格数>：              #  设置tab的长度； 

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

使用indent命令将C语言源文件"test.c"中所有的sizeof后面添加一个空格，输入如下命令：
``` bash
[sogrey@bogon newDir]$ > test.c
[sogrey@bogon newDir]$ cat test.c
#include "stdio.h"
#include "string.h"
#include "stdlib.h"
int main()
{
  short int sa=10;
  int a=10;
  long la=10;
  float f = 20;
  double d=20;
  char ch='c';
  char str[]="ABC";
  char *p=str;
  struct str{
  double d;
  char ch;
  int data;
 }str_wu;
 struct str1{
  char ch;
  double d;
  int data;
 }str_wu1;
    printf("sizeof(short):%d\n",sizeof(sa));
    printf("sizeof(int):%d\n",sizeof(a));
    printf("sizeof(long):%d\n",sizeof(la));
    printf("sizeof(float):%d\n",sizeof(f));
    printf("sizeof(double):%d\n",sizeof(d));
    printf("sizeof(char):%d\n",sizeof(ch));
    printf("sizeof(string):%d\n",sizeof(str));
    printf("sizeof(point address):%d\n",sizeof(p));
    printf("sizeof(Point):%d\n",sizeof(*p));
    printf("sizeof(Struct):%d\n",sizeof(str_wu));
    printf("sizeof(Struct):%d\n",sizeof(str_wu1));
    system("pause");
}
[sogrey@bogon newDir]$ indent -bs test.c
[sogrey@bogon newDir]$ cat test.c
#include "stdio.h"
#include "string.h"
#include "stdlib.h"
int
main ()
{
  short int sa = 10;
  int a = 10;
  long la = 10;
  float f = 20;
  double d = 20;
  char ch = 'c';
  char str[] = "ABC";
  char *p = str;
  struct str
  {
    double d;
    char ch;
    int data;
  } str_wu;
  struct str1
  {
    char ch;
    double d;
    int data;
  } str_wu1;
  printf ("sizeof(short):%d\n", sizeof (sa)); 
  printf ("sizeof(int):%d\n", sizeof (a));
  printf ("sizeof(long):%d\n", sizeof (la));
  printf ("sizeof(float):%d\n", sizeof (f));
  printf ("sizeof(double):%d\n", sizeof (d));
  printf ("sizeof(char):%d\n", sizeof (ch));
  printf ("sizeof(string):%d\n", sizeof (str));
  printf ("sizeof(point address):%d\n", sizeof (p));
  printf ("sizeof(Point):%d\n", sizeof (*p));
  printf ("sizeof(Struct):%d\n", sizeof (str_wu));
  printf ("sizeof(Struct):%d\n", sizeof (str_wu1));
  system ("pause");
}
[sogrey@bogon newDir]$ 
```
执行上面的命令后，用户可以打开指定的源文件查看在sizeof后面是否都添加了一个空格。由于该命令的参数非常多，所以用户可以根据实际需要选择适合的参数进行使用即可。
