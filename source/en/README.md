---
home: true
heroImage: /img/logo.jpg
actionText: Get Started →
actionLink: /zh/guide/
features:
- title: Features one
  details: The details of features one。
- title: Features two
  details: The details of features two
- title: Features three
  details: The details of features three
---

<p align="center">
<b>Vuepress template project, convenient and quick to build vuepress project.</b>
</p>

::: tip Tips
This project is for learning only, not for commercial use. The data is from the Internet. Please let me know if you have any rights.
:::

---
### Friend chain

Add a friend chain here.

---
<!-- 自定义footer -->
<p align="center">
Hosted by <a href="https://pages.github.com" target="_blank" style="font-weight:bold">Github Pages</a> | <a href="https://sogrey.github.io/about/mit.html" target="_blank">MIT License</a> | © 2019 <a href="https://sogrey.github.io" target="_blank">Sogrey</a> | Are there any <a href="https://github.com/Sogrey/Linux-start/issues/new" target="_blank">Issue</a> ?
</p>
<br><br>










---
home: true
heroImage: /img/logo.png
actionText: Get Started →
actionLink: /en/guide/
features:
- title: Simple
  details: MyBatis-Plus is an powerful enhanced tool for MyBatis. it provides many efficient operations for MyBatis. and you can seamlessly switch to MyBatis-Plus from MyBatis.
- title: Powerful
  details: MyBatis-Plus can automatically inject basic SQL fragments, have a powerful and flexible where condition wrapper, using it can save you a lot of development time.
- title: Extensibility
  details: MyBatis-Plus has many useful plugins(e.g. code generator, auto paging, performance analysis and so on), it has provided everything you need. why not try?
footer: Apache License 2.0 | © 2016-2018 baomidou
---

### The latest version

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>latest-version</version>
</dependency>
```

<p align="center">
Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight:bold">Coding Pages</a> & <a href="https://pages.github.com" target="_blank" style="font-weight:bold">Github Pages</a>
</p>

<script>
export default {
  mounted () {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", "https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.json", false)
    xmlHttp.send(null)
    var versionInfo = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    var codeNodeList = document.querySelectorAll('code')
    for (var i = 0; i < codeNodeList.length; i++) {
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('latest-version', versionInfo)
    }
  }
}
</script>