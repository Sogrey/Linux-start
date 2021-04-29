module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/Linux-start/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  lang: "zh-CN",
  title: "Linux 入门",
  description: "入坑Linux",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "Linux 入门",
      description: "入坑Linux",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Linux start",
    //   description: "Linux start"
    // }
  },
  head: [
    ["link", {
      rel: "icon",
      href: "/favicon.ico"
    }],
    ["link", {
      rel: "stylesheet",
      href: "/css/style.css"
    }],
    //     ['script', {
    //       id: "scriptImporter"
    //     }, `
    //     (function() { 
    //     var script = document.createElement("script"); 
    //     script.src = "/js/linux-commands.js";
    //     setTimeout(() => document.body.append(script))
    //     })(); 
    // `]
  ],
  themeConfig: {
    repo: "Sogrey/Linux-start",
    docsRepo: "Sogrey/Linux-start",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "指南",
            link: "/zh/"
          },
          // {
          //   text: "Linux命令手册",
          //   link: "/zh/commands/"
          // },
          {
            text: "参考资料",
            link: "/zh/reference/"
          }
        ],
        sidebar: {
          "/zh/": genGuideSidebar(true),
          "/zh/commands/": genCommandsSidebar(true),
          "/zh/reference/": genReferenceSidebar(true)
        }
      },
      // "/en/": {
      //   label: "English",
      //   selectText: "Languages",
      //   editLinkText: "Edit this page on GitHub",
      //   lastUpdated: "Last Updated",
      //   nav: [{
      //       text: "Guide",
      //       link: "/en/guide/"
      //     },
      //     {
      //       text: "Config",
      //       link: "/en/config/"
      //     },
      //     {
      //       text: "Ecosystem",
      //       items: [{
      //         text: "Baidu",
      //         link: "https://www.baidu.com"
      //       },
      //       {
      //         text: "Taobao",
      //         link: "http://www.taobao.com"
      //       },
      //       {
      //         text: "Iqiyi",
      //         link: "http://www.iqiyi.com/"
      //         }
      //       ]
      //     }
      //   ],
      //   sidebar: {
      //     "/en/guide/": genGuideSidebar(false),
      //     "/en/config/": genConfigSidebar(false)
      //   }
      // }
    }
  }
};

function genGuideSidebar(isZh) {
  return [{
    title: isZh ? "快速入门" : "Getting Start",
    collapsable: false,
    children: ["guide/", "guide/quick-start","guide/startup-disk-tools"]
  }, {
    title: isZh ? "Linux命令手册" : "Linux Commands",
    collapsable: false,
    children: getCommandsBySord('commands/')
  }, {
    title: isZh ? "参考资料" : "Reference",
    collapsable: false,
    children: ["reference/"]
  }];
}

function genCommandsSidebar(isZh) {
  return [{
    title: isZh ? "Linux命令手册" : "Linux Commands",
    collapsable: false,
    children: getCommandsBySord('')
  }];
}

function genReferenceSidebar(isZh) {
  return [{
    title: isZh ? "参考资料" : "Reference",
    collapsable: false,
    children: [""]
  }];
}

function getCommandsBySord(parentDir) {
  var LinuxCommands = getCommands();
  var commands = [];

  var parent = '';
  if (parentDir) {
    parent = parentDir;
    if (!parent.endsWith('/')) parent += '/';

    // commands.push(parent)  // 暂时去掉搜索主页
  }

  for (let i = 0; i < LinuxCommands.length; i++) {
    const linuxCommand = LinuxCommands[i];

    if (commands.indexOf(linuxCommand.command) == -1) {
      commands.push(parent + linuxCommand.command);
    }
  }

  commands.sort();
  console.log(commands, LinuxCommands);
  return commands;
}

var CommandTypes = {
  FileSystem: '文件系统',
  DirectoryManagement: '目录管理',
  Permissions: '权限管理',
  UserManagement: '用户管理',
  NetworkManagement: '网络管理'
};

function getCommands() {
  return [{
    command: 'ls',
    desc: '显示目录内容列表',
    tags: ['DirectoryManagement','FileSystem']
  }, {
    command: 'pwd',
    desc: '显示目录内容列表',
    tags: ['DirectoryManagement']
  }, {
    command: 'chmod',
    desc: '用来变更文件或目录的权限',
    tags: ['Permissions', 'FileSystem', 'DirectoryManagement']
  }, {
    command: 'cp',
    desc: '复制文件',
    tags: ['FileSystem']
  }, {
    command: 'cat',
    desc: '连接多个文件并打印到标准输出',
    tags: ['FileSystem']
  }, {
    command: 'rm',
    desc: '删除文件和目录',
    tags: ['FileSystem','DirectoryManagement']
  }, {
    command: 'tmpwatch',
    desc: '删除最近一段时间没有访问的文件',
    tags: ['FileSystem']
  }, {
    command: 'sort',
    desc: '对文本文件中所有行进行排序',
    tags: ['FileSystem']
  }, {
    command: 'whereis',
    desc: '查找二进制程序、代码等相关文件路径',
    tags: ['FileSystem','DirectoryManagement']
  }, {
    command: 'which',
    desc: '查找并显示给定命令的绝对路径',
    tags: ['FileSystem','DirectoryManagement']
  }, {
    command: 'lsattr',
    desc: '显示指定文件或者目录的属性',
    tags: ['FileSystem','DirectoryManagement']
  }, {
    command: 'chattr',
    desc: '改变文件的属性',
    tags: ['FileSystem']
  }, {
    command: 'cksum',
    desc: '检查文件的crc是否正确',
    tags: ['FileSystem']
  }, {
    command: 'stat',
    desc: '显示文件或者文件系统的状态信息',
    tags: ['FileSystem']
  }, {
    command: 'sum',
    desc: '计算文件的校验码和块数',
    tags: ['FileSystem']
  }, {
    command: 'mkdir',
    desc: '创建目录',
    tags: ['FileSystem','DirectoryManagement']
  }, {
    command: 'file',
    desc: '判断指定文件的文件类型',
    tags: ['FileSystem']
  }, {
    command: 'diffstat',
    desc: '显示diff命令输出信息的柱状图',
    tags: ['FileSystem']
  }, {
    command: 'diff',
    desc: '比较给定的两个文件的不同',
    tags: ['FileSystem']
  }, {
    command: 'diff3',
    desc: '比较3个文件的不同',
    tags: ['FileSystem']
  }, {
    command: 'cmp',
    desc: '比较两个文件是否有差异',
    tags: ['FileSystem']
  }, {
    command: 'comm',
    desc: '逐行比较两个已经排序过的文件',
    tags: ['FileSystem']
  }, {
    command: 'csplit',
    desc: '将一个大文件分割成小的碎片文件',
    tags: ['FileSystem']
  }, {
    command: 'fold',
    desc: '按照指定的宽度显示文件',
    tags: ['FileSystem']
  }, {
    command: 'paste',
    desc: '将多个文件按列队列合并',
    tags: ['FileSystem']
  }, {
    command: 'indent',
    desc: '格式化C语言的源文件',
    tags: ['FileSystem']
  }, {
    command: 'umask',
    desc: '显示或设置创建文件的权限掩码',
    tags: ['FileSystem']
  }, {
    command: 'tr',
    desc: '将字符进行替换压缩和删除',
    tags: ['FileSystem']
  }, {
    command: 'touch',
    desc: '创建新的空文件',
    tags: ['FileSystem']
  }, {
    command: 'split',
    desc: '分割任意大小的文件',
    tags: ['FileSystem']
  }, {
    command: 'patch',
    desc: '为开放源代码软件安装补丁程序',
    tags: ['FileSystem']
  }, {
    command: 'join',
    desc: '两个文件中指定栏位内容相同的行连接起来',
    tags: ['FileSystem']
  }, {
    command: 'spell',
    desc: '对文件进行拼写检查',
    tags: ['FileSystem']
  }, {
    command: 'ispell',
    desc: '检查文件中出现的拼写错误',
    tags: ['FileSystem']
  }, {
    command: 'colrm',
    desc: '删除文件中的指定列',
    tags: ['FileSystem']
  }, {
    command: 'col',
    desc: '过滤控制字符',
    tags: ['FileSystem']
  }, {
    command: 'wc',
    desc: '统计文件的字节数、字数、行数',
    tags: ['FileSystem']
  }, {
    command: 'uniq',
    desc: '显示或忽略重复的行',
    tags: ['FileSystem']
  }, {
    command: 'tee',
    desc: '从标准输入读取数据并重定向到标准输出和文件',
    tags: ['FileSystem']
  }, {
    command: 'ex',
    desc: '启动vim编辑器的ex编辑模式',
    tags: ['FileSystem']
  }, {
    command: 'ed',
    desc: '简单的单行文本编辑程序',
    tags: ['FileSystem']
  }, {
    command: 'emacs',
    desc: '功能强大的全屏文本编辑器',
    tags: ['FileSystem']
  }, {
    command: 'jed',
    desc: '主要用于编辑代码的编辑器',
    tags: ['FileSystem']
  }, {
    command: 'vi',
    desc: '功能强大的纯文本编辑器',
    tags: ['FileSystem']
  }, {
    command: 'sed',
    desc: '功能强大的流式文本编辑器',
    tags: ['FileSystem']
  }, {
    command: 'joe',
    desc: '强大的纯文本编辑器',
    tags: ['FileSystem']
  }, {
    command: 'pico',
    desc: '功能强大全屏幕的文本编辑器',
    tags: ['FileSystem']
  }, {
    command: 'cut',
    desc: '连接文件并打印到标准输出设备上',
    tags: ['FileSystem']
  }, {
    command: 'grep',
    desc: '强大的文本搜索工具',
    tags: ['FileSystem']
  }, {
    command: 'look',
    desc: '显示文件中以指定字符串开头的任意行',
    tags: ['FileSystem']
  }, {
    command: 'less',
    desc: '分屏上下翻页浏览文件内容',
    tags: ['FileSystem']
  }, {
    command: 'head',
    desc: '显示文件的开头部分',
    tags: ['FileSystem']
  }, {
    command: 'tail',
    desc: '在屏幕上显示指定文件的末尾若干行',
    tags: ['FileSystem']
  }, {
    command: 'tailf',
    desc: '在屏幕上显示指定文件的末尾若干行内容，通常用于日志文件的跟踪输出',
    tags: ['FileSystem']
  }, {
    command: 'tac',
    desc: '连接多个文件并以行为单位反向打印到标准输出',
    tags: ['FileSystem']
  }, {
    command: 'od',
    desc: '输出文件的八进制、十六进制等格式编码的字节',
    tags: ['FileSystem']
  }, {
    command: 'unexpand',
    desc: '将文件的空白字符转换为制表符',
    tags: ['FileSystem']
  }, {
    command: 'expand',
    desc: '将文件的制表符转换为空白字符',
    tags: ['FileSystem']
  }, {
    command: 'fmt',  
    desc: '读取文件后优化处理并输出',
    tags: ['FileSystem']
  }, {
    command: 'ar',
    desc: '建立或修改备存文件，或是从备存文件中抽取文件',
    tags: ['Compress']
  }, {
    command: 'tar',
    desc: '将许多文件一起保存至一个单独的磁带或磁盘归档，并能从归档中单独还原所需文件',
    tags: ['Compress']
  }, {
    command: 'bzmore',
    desc: '查看bzip2压缩过的文本文件的内容',
    tags: ['Compress']
  }, {
    command: 'bzcat',
    desc: '查看bzip2压缩过的文本文件的内容',
    tags: ['Compress']
  }, {
    command: 'bunzip2',
    desc: '解压缩bzip2压缩过的文件',
    tags: ['Compress']
  }, {
    command: 'gunzip',
    desc: '用来解压缩文件',
    tags: ['Compress']
  }, {
    command: 'zcat',
    desc: '显示压缩包中文件的内容',
    tags: ['Compress']
  }, {
    command: 'unzip',
    desc: '用于解压缩由zip命令压缩的压缩包',
    tags: ['Compress']
  }, {
    command: 'uncompress',
    desc: '用来解压.Z文件',
    tags: ['Compress']
  }, {
    command: 'unarj',
    desc: '解压缩由arj命令创建的压缩包',
    tags: ['Compress']
  }, {
    command: 'bzip2',
    desc: '将文件压缩成bz2格式',
    tags: ['Compress']
  }, {
    command: 'bzip2recover',
    desc: '恢复被破坏的.bz2压缩包中的文件',
    tags: ['Compress']
  }, {
    command: 'compress',
    desc: '使用Lempress-Ziv编码压缩数据文件',
    tags: ['Compress']
  }, {
    command: 'cpio',
    desc: '用来建立、还原备份档的工具程序',
    tags: ['Compress']
  }, {
    command: 'gzexe',
    desc: '用来压缩可执行文件',
    tags: ['Compress']
  }, {
    command: 'gzip',
    desc: '用来压缩文件',
    tags: ['Compress']
  }, {
    command: 'zip',
    desc: '可以用来解压缩文件',
    tags: ['Compress']
  }, {
    command: 'zforce',
    desc: '强制gzip格式的文件使用gz后缀名',
    tags: ['Compress']
  }, {
    command: 'lha',
    desc: '压缩或解压缩lzh格式文件',
    tags: ['Compress']
  }, {
    command: 'zipinfo',
    desc: '用来列出压缩文件信息',
    tags: ['Compress']
  }, {
    command: 'znew',
    desc: '将.Z压缩包重新转化为gzip命令压缩的.gz压缩包',
    tags: ['Compress']
  }, {
    command: 'chsh',
    desc: '用来更换登录系统时使用的shell',
    tags: ['UserManagement']
  }, {
    command: 'chfn',
    desc: '用来改变finger命令显示的信息',
    tags: ['UserManagement']
  }, {
    command: 'grpconv',
    desc: '用来开启群组的投影密码',
    tags: ['UserManagement']
  }, {
    command: 'grpunconv',
    desc: '用来关闭群组的投影密码',
    tags: ['UserManagement']
  }, {
    command: 'groupmod',
    desc: '更改群组识别码或名称',
    tags: ['UserManagement']
  }, {
    command: 'gpasswd',
    desc: 'Linux下工作组文件的管理工具',
    tags: ['UserManagement']
  }, {
    command: 'groupadd',
    desc: '用于创建一个新的工作组',
    tags: ['UserManagement']
  }, {
    command: 'groupdel',
    desc: '用于删除指定的工作组',
    tags: ['UserManagement']
  }, {
    command: 'groups',
    desc: '打印指定用户所在组的名称',
    tags: ['UserManagement']
  }, {
    command: 'grpck',
    desc: '用于验证组文件的完整性',
    tags: ['UserManagement']
  }, {
    command: 'useradd',
    desc: '创建的新的系统用户',
    tags: ['UserManagement']
  }, {
    command: 'userdel',
    desc: '用于删除给定的用户以及与用户相关的文件',
    tags: ['UserManagement']
  }, {
    command: 'usernetctl',
    desc: '被允许时操作指定的网络接口',
    tags: ['NetworkManagement']
  }, {
    command: 'users',
    desc: '打印当前主机所有登陆用户的名称',
    tags: ['UserManagement']
  }, {
    command: 'usermod',
    desc: '用于修改用户的基本信息',
    tags: ['UserManagement']
  }, {
    command: 'su',
    desc: '用于切换当前用户身份到其他用户身份',
    tags: ['UserManagement']
  }, {
    command: 'sudo',
    desc: '以其他身份来执行命令',
    tags: ['UserManagement']
  }, {
    command: 'pwck',
    desc: '用来验证系统认证文件内容和格式的完整性',
    tags: ['UserManagement']
  }, {
    command: 'logname',
    desc: '打印当前终端登录用户的名称',
    tags: ['UserManagement']
  }, {
    command: 'finger',
    desc: '用于查找并显示用户信息',
    tags: ['UserManagement']
  }, {
    command: 'passwd',
    desc: '用于让用户可以更改自己的密码',
    tags: ['UserManagement']
  }, {
    command: 'mmd',
    desc: '在ms-dos系统中创建目录',
    tags: ['DirectoryManagement']
  }, {
    command: 'ln',
    desc: '用来为文件创建链接',
    tags: ['DirectoryManagement']
  }, {
    command: 'cd',
    desc: '切换用户当前工作目录',
    tags: ['DirectoryManagement']
  }, {
    command: 'mv',
    desc: '用来对文件或目录重新命名',
    tags: ['DirectoryManagement']
  }, {
    command: 'rmdir',
    desc: '用来删除空目录',
    tags: ['DirectoryManagement']
  }, {
    command: 'find',
    desc: '在指定目录下查找文件',
    tags: ['DirectoryManagement']
  }, {
    command: 'chgrp',
    desc: '用来变更文件或目录的所属群组',
    tags: ['DirectoryManagement']
  }, {
    command: 'chown',
    desc: '用来变更文件或目录的拥有者或所属群组',
    tags: ['DirectoryManagement']
  }, {
    command: 'dump',
    desc: '用于备份ext2或者ext3文件系统',
    tags: ['FileSystem']
  }, {
    command: 'mkfs',
    desc: '用于在设备上创建Linux文件系统',
    tags: ['DirectoryManagement']
  }, {
    command: 'mke2fs',
    desc: '创建磁盘分区上的etc2/etc3文件系统',
    tags: ['FileSystem']
  }, {
    command: 'mkisofs',
    desc: '建立ISO 9660映像文件',
    tags: ['FileSystem']
  }, {
    command: 'mkswap',
    desc: '建立和设置SWAP交换分区',
    tags: ['FileSystem']
  }, {
    command: 'mknod',
    desc: '创建字符设备文件和块设备文件',
    tags: ['FileSystem']
  }, {
    command: 'mktemp',
    desc: '创建临时文件供shell脚本使用',
    tags: ['FileSystem']
  }, {
    command: 'restore',
    desc: '所进行的操作和dump指令相反',
    tags: ['FileSystem']
  }, {
    command: 'swapoff',
    desc: '关闭指定的交换空间',
    tags: ['FileSystem']
  }, {
    command: 'ex2fsck',
    desc: '检查ext2、ext3、ext4文件系统',
    tags: ['FileSystem']
  }, {
    command: 'swapon',
    desc: '激活Linux系统中交换空间',
    tags: ['FileSystem']
  }, {
    command: 'fsck',
    desc: '检查并且试图修复文件系统中的错误',
    tags: ['FileSystem']
  }, {
    command: 'grub',
    desc: '多重引导程序grub的命令行shell工具',
    tags: ['FileSystem']
  }, {
    command: 'lilo',
    desc: '安装核心载入开机管理程序',
    tags: ['FileSystem']
  }, {
    command: 'mount',
    desc: '用于挂载Linux系统外的文件',
    tags: ['FileSystem']
  }, {
    command: 'umount',
    desc: '用于卸载已经加载的文件系统',
    tags: ['FileSystem']
  }, {
    command: 'showmount',
    desc: '显示NFS服务器加载的信息',
    tags: ['FileSystem']
  }];
}
