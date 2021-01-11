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
    }]
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

    commands.push(parent)
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
  }];
}