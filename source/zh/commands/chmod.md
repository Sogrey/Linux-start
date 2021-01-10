# chmod - 用来变更文件或目录的权限

改变文件或者目录的权限，可以用数字或者字母来标识权限。

- 通过符号组合的方式更改目标文件或目录的权限。
- 通过八进制数的方式更改目标文件或目录的权限。
- 通过参考文件的权限来更改目标文件或目录的权限。

在数字模式下：

- `0` 代表没有权限；
- `1` 代表可执行；
- `2` 代表可读；
- `4` 代表可写；

多个权限可以相加。

在字符模式下：

- `x` 代表执行；
- `r` 代表读；
- `w` 代表写；
- `g` 代表组权限；
- `o` 代表组内其他用户权限；
- `u` 代表用户权限

ls命令中，看到的权限分别是：`用户权限`、`组权限`、`组内其他用户权限`。


## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
<div class="svg suse">SUSE</div>
<div class="svg opensuse">openSUSE</div>
<div class="svg fedora">Fedora</div>
<div class="svg linuxmint">Linux Mint</div>
<!-- <div class="svg linuxfoundation">Linux Foundation</div> -->
<!-- <div class="svg mxlinux">MX Linux</div> -->
<div class="svg alpinelinux">Alpine Linux</div>
<div class="svg archlinux">Arch Linux</div>

## 语法

``` bash
chmod  [选项]  mode  file
chmod  [选项]  八进制模式  file
chmod  [选项]  –reference=RFILE  file
```

## 选项

``` bash
[sogrey@bogon 文档]$ chmod --help
用法：chmod [选项]... 模式[,模式]... 文件...
　或：chmod [选项]... 八进制模式 文件...
　或：chmod [选项]... --reference=参考文件 文件...
Change the mode of each FILE to MODE.
With --reference, change the mode of each FILE to that of RFILE.

  -c, --changes               # like verbose but report only when a change is made
  -f, --silent, --quiet       # suppress most error messages
  -v, --verbose               # output a diagnostic for every file processed
      --no-preserve-root      # do not treat '/' specially (the default)
      --preserve-root         # fail to operate recursively on '/'
      --reference=RFILE       # use RFILE's mode instead of MODE values
  -R, --recursive             # change files and directories recursively
      --help		          # 显示此帮助信息并退出
      --version		          # 显示版本信息并退出

Each MODE is of the form '[ugoa]*([-+=]([rwxXst]*|[ugo]))+|[-+=][0-7]+'.

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
请向<http://translationproject.org/team/zh_CN.html> 报告chmod 的翻译错误
要获取完整文档，请运行：info coreutils 'chmod invocation'
```
> 以上信息来自 CenrOS Linux 8

## 补充说明

chmod根据模式更改每个给定文件的文件模式位，该模式可以是要进行的更改的符号表示，也可以是表示新模式位的位模式的八进制数。符号模式的格式是[ugoa...][[+-=][perms...]...]，其中perms为集合rwxXst的零个或多个字母，或来自结合ugo的单个字母。可以给出多种符号模式，用逗号分隔。

字母ugoa控制哪些用户访问文件的权限将被更改：(u)拥有该文件的用户、（g）文件组中的其他用户、（o）不属于文件组的其他用户或所有用户(A)。如果所有这些都没有给出，那么效果就好像给定了“a”，但是在umask中设置的位不受影响。

运算符‘+’使所选的文件模式位被添加到每个文件的现有文件模式位中；‘-’使它们被删除；‘=‘使它们被添加，并使未提及的位被删除，除非目录的未提及的设置用户和组ID位不受影响。

字母“rwxXst”为受影响的用户选择文件模式位：(r)读、(w)写、(x)执行(或搜索目录)、(X)只在文件是目录或已对某些用户具有执行权限、(s)在执行时设置用户或组ID、(t)限制删除标志或粘性位时执行/搜索。您可以指定“ugo”其中的一个或多个字母：(u)授予拥有文件的用户的权限，(g)授予属于文件组的其他用户的权限，(o)授予上述两个类别中任何一个用户的权限。

数字模式是1到4个八进制数字(0-7)，通过将值4、2和1的位相加而得。省略的数字被假定为前导零。第一个数字选择设置用户ID(4)和设置组ID(2)，并限制删除或粘贴(1)属性。第二位数为拥有该文件的用户选择权限：读(4)、写(2)和执行(1)；第三位数选择文件组中具有相同值的其他用户的权限；第四位数字选择对不属于文件组的其他用户具有相同值的权限。

chmod从不更改符号链接的权限；chmod系统调用不能更改它们的权限。这不是一个问题，因为符号链接的权限从未被使用过。但是，对于命令行中列出的每个符号链接，chmod会更改指向文件的权限。相反，chmod忽略递归目录遍历过程中遇到的符号链接。

## 设置uid和gid

如果文件的组ID与用户的有效组ID或用户的辅助组ID不匹配，则chmod将清除常规文件的“set-group-ID”位，除非用户具有适当的权限。附加限制可能导致MODE或RFILE的“set-user-ID”和“set-group-ID”位被忽略.此行为取决于底层chmod系统调用的策略和功能。当有疑问时，检查底层系统行为。

chmod保留目录的“set-user-ID”和“set-group-ID”位，除非您显式地另外指定。您可以使用“u+s”和“g-s”这样的符号模式设置或清除位，也可以用数字模式设置(但不清楚)这些位。

## 限制删除标志或粘性位

受限制的删除标志或粘性位是一个位，其解释取决于文件类型。对于目录，它防止非特权用户删除或重命名目录中的文件，除非他们拥有该文件或目录；这称为目录的限制删除标志，通常在/tmp之类的可写目录中找到。对于一些旧系统上的常规文件，这一位将程序的文本映像保存在交换设备上，以便在运行时更快地加载；这称为粘性位。

## 举例

``` bash
[sogrey@bogon 文档]$ ls
ee.txt
[sogrey@bogon 文档]$ ls -lh ee.txt
-rw-------. 1 sogrey sogrey 12 1月  10 18:45 ee.txt
[sogrey@bogon 文档]$ chmod 777 ee.txt
[sogrey@bogon 文档]$ ls -lh ee.txt
-rwxrwxrwx. 1 sogrey sogrey 12 1月  10 18:45 ee.txt
```

<!-- <link rel="stylesheet" type="text/css" href="../../.vuepress/public/css/style.css"/> -->
<style>
.svg {
    height: 1.5rem;
    /* width: 1.5rem; */
    background-repeat: no-repeat;
    padding-left:30px;margin-right:16px;
    display:inline-block;
}
.svg.linux{
    fill: #2cc624;
    background-image: url("../../.vuepress/public/img/icos/linux.svg"); 
}
.svg.redhat,.svg.rhel{
    fill: #f00;
    background-image: url("../../.vuepress/public/img/icos/redhat.svg"); 
}
.svg.ubuntu{
    fill: #e95420;
    background-image: url("../../.vuepress/public/img/icos/ubuntu.svg"); 
}
.svg.centos{
    fill: #262577;
    background-image: url("../../.vuepress/public/img/icos/centos.svg"); 
}
.svg.suse,.svg.opensuse{
    fill: #73ba25;
    background-image: url("../../.vuepress/public/img/icos/opensuse.svg"); 
}
.svg.fedora{
    fill: #294172;
    background-image: url("../../.vuepress/public/img/icos/fedora.svg"); 
}
.svg.linuxmint{
    fill: #87cf3e;
    background-image: url("../../.vuepress/public/img/icos/linuxmint.svg"); 
}
.svg.linuxfoundation{
    fill: #003764;
    background-image: url("../../.vuepress/public/img/icos/linuxfoundation.svg"); 
}
.svg.mxlinux{
    fill: #000;
    background-image: url("../../.vuepress/public/img/icos/mxlinux.svg"); 
}
.svg.alpinelinux{
    fill: #0d597f;
    background-image: url("../../.vuepress/public/img/icos/alpinelinux.svg"); 
}
.svg.archlinux{
    fill: #1793d1;
    background-image: url("../../.vuepress/public/img/icos/archlinux.svg"); 
}
</style>