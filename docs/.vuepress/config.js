module.exports = {
    title: '孙涛的vuepress',
    head: [],
    description: 'Just playing around',
    theme: '@vuepress/theme-default',
	著作权归https://www.pdai.tech所有。
链接：https://www.pdai.tech/md/about/blog/blog-build-vuepress.html

plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
              margin: 16
            }
        }],
        // see: https://vssue.js.org/guide/vuepress.html#usage
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'realpdai',//拥有存储库的帐户/组
            repo: 'tech-arch-doc-comments',//用于存储评论的存储库名称
            clientId: 'xxxxxxxxxxx',//您的oauth应用的
            clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx',//oauth应用程序的
        }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
       
        // ...
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            {
                text: '接口', items: [
                    { text: '微信小程序', link: '/interface/wxapi/' },
                    { text: '网站', link: '/interface/web/' }
                ]
            },
            { text: '我的博客', link: 'https://www.cnblogs.com/flypig666' },
            { text: '我的码云', link: 'https://gitee.com/flypig666/projects' },
        ],
        sidebar: [
        {
          title: '开发指南',
          collapsable: false,
           children: [
		   ['./guide/suntao', '孙涛的测试文档']   
           ]
        },
        {
          title: '组件',
          collapsable: false,
		children: [
		 ['./guide/one','icon 图标'],
        ['./guide/two','button 按钮'],
        ['./guide/interface/wxapi/three','input 输入框']
		]
        },
       
      ],

}
}