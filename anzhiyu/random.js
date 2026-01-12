var posts=["2026/01/05/hello-world/","2025/11/08/buttrfiy 主题配置/","2026/01/05/hexo-github-个人博客搭建/","2025/11/17/hexo配置/","2025/11/20/搜索功能/","2025/11/08/永久拼音链接 /","2025/12/02/添加今日诗词/","2025/12/09/那年今日/","2025/12/09/公告栏/","2025/11/08/中文拼音链接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };