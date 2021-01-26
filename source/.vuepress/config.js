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
    children: ["guide/", "guide/quick-start"]
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
  Permissions: '权限管理'
};

function getCommands() {
  return [{
    command: 'ls',
    desc: '显示目录内容列表',
    tags: ['FileSystem']
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
    tags: ['FileSystem']
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
    tags: ['FileSystem']
  }, {
    command: 'which',
    desc: '查找并显示给定命令的绝对路径',
    tags: ['FileSystem']
  }, {
    command: 'lsattr',
    desc: '显示指定文件或者目录的属性',
    tags: ['FileSystem']
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
    tags: ['FileSystem']
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
  }];
}