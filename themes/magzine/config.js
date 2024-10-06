const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: '了解更多',

  MAGZINE_HOME_HIDDEN_CATEGORY: '分享杂文', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: '量化指标答疑|助您精准把握数据核心。',
  MAGZINE_HOME_DESCRIPTION:
    '借助阿优派，获得助您通往交易成功之路的工具和帮助。',
  MAGZINE_HOME_TIPS: '量化时代来临，这是属于超级个体的狂欢盛宴！',
 
  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '推荐',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '推荐文章',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // 右侧面板深色模式

  MAGZINE_POST_LIST_COVER: true, // 文章列表显示图片封面
  MAGZINE_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MAGZINE_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MAGZINE_POST_LIST_TAG: true, // 列表显示文章标签

  MAGZINE_POST_DETAIL_CATEGORY: true, // 文章显示分类
  MAGZINE_POST_DETAIL_TAG: true, // 文章显示标签

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  MAGZINE_SOCIAL_CARD_TITLE_1: '工具频道',
  MAGZINE_SOCIAL_CARD_TITLE_2: '加入社群讨论分享',
  MAGZINE_SOCIAL_CARD_TITLE_3: '点击加入社群',
  MAGZINE_SOCIAL_CARD_URL: 'https://www.baidu.com',

  // 页脚菜单
  MAGZINE_FOOTER_LINKS: [
    {
      name: '相关链接',
      menus: [
        {
          title: '通达信',
          href: 'https://www.tdx.com.cn'
        },
        {
          title: '文华财经',
          href: 'https://www.wenhua.com.cn'
        },
        {
          title: '无限易',
          href: 'https://infinitrader.quantdo.com.cn'
        },
        {
          title: '期权论坛',
          href: 'https://www.optbbs.com'
        }
      ]
    },
    {
      name: '量化交易平台',
      menus: [
        { title: '聚宽(JoinQuant)', href: 'https://www.joinquant.com' },
        {
          title: '迅投QMT',
          href: 'https://www.thinktrader.net'
        },
        {
          title: '果仁',
          href: 'https://www.guorn.com'
        },
        {
          title: '米筐(Ricequant)',
          href: 'https://www.ricequant.com'
        },
        {
          title: '掘金量化',
          href: 'www.myquant.cn'
        }
      ]
    },
    {
      name: '量化交易平台',
      menus: [
        {
          title: '优矿(Uqer)',
          href: 'https://www.uqer.io'
        },
        {
          title: '天勤',
          href: 'https://www.shinnytech.com/tianqin/'
        },
        {
          title: 'SuperMind',
          href: 'https://quant.10jqka.com.cn'
        },
        {
          title: 'Bigquant',
          href: 'https://www.bigquant.com'
        },
        { title: '真格', href: 'https://quant.pobo.net.cn' }
      ]
    },
    {
      name: '解决方案',
      menus: [
        { title: '建站工具', href: 'https://www.tangly1024.com/' },
        { title: 'NotionNext', href: 'https://docs.tangly1024.com/about' }
      ]
    }
  ],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: true, // 显示分类
  MAGZINE_MENU_TAG: true, // 显示标签
  MAGZINE_MENU_ARCHIVE: true, // 显示归档
  MAGZINE_MENU_SEARCH: true, // 显示搜索

  MAGZINE_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
