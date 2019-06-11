module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    themeConfig: {
        search: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'CSS', link: '/CSS/REAMDE' },
        ],
        sidebar: {
            '/CSS/': [{
                title: '入门',
                collapsable: false,
                children: [ // 子菜单
                    'REAMDE', // 可在docs目录下创建install目录，此路径表示读取install目录下的README.md文件
                ]
            }]
        }
    }
};