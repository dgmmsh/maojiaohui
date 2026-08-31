// 第五届茂交会 · 云上展厅 全站配置
// 由后台管理导出，请勿手动修改格式
// 最后更新：2026-09-01

window.SITE_CONFIG = {
  // ===== 基本信息 =====
  siteName: "茂交会云上展厅",
  siteSubtitle: "东莞市茂名商会第五届",
  themeColor: "#b8362f",
  themeColor2: "#c2922c",

  // ===== 顶部栏 =====
  topbar: {
    logoText: "茂",
    title: "第五届茂交会·云上展厅",
    subtitle: "东莞市茂名商会 · 寻味金秋"
  },

  // ===== Hero 横幅区 =====
  hero: {
    kicker: "2026 · 第五届",
    title: "寻味金秋 ·",
    titleEm: "赋能未来",
    desc: "东莞市茂名商会茂交会 · 云上展厅\n手机微信直接逛，一键对接商家",
    // 三个统计数字
    stats: [
      { num: "21+", label: "参展商家" },
      { num: "50+", label: "特色产品" },
      { num: "6大", label: "品类专区" }
    ],
    // Hero 背景色（渐变）
    bgColor1: "#b8362f",
    bgColor2: "#8c2a24",
    // 也可以用背景图（留空则用渐变色）
    bgImage: ""
  },

  // ===== 分类导航 =====
  categories: [
    { key: "all", name: "全部", emoji: "🏠" },
    { key: "mooncake", name: "月饼食品", emoji: "🥮", bg: "bg-mooncake" },
    { key: "fruit", name: "水果生鲜", emoji: "🍊", bg: "bg-fruit" },
    { key: "wine", name: "酒水饮料", emoji: "🍶", bg: "bg-wine" },
    { key: "agarwood", name: "沉香文化", emoji: "🪵", bg: "bg-agarwood" },
    { key: "food", name: "餐饮美食", emoji: "🍜", bg: "bg-food" },
    { key: "service", name: "生活服务", emoji: "☁️", bg: "bg-service" }
  ],

  // ===== 精选展位 标题 =====
  featuredTitle: "精选展位",
  boothCountLabel: "共 {n} 家",

  // ===== 提示条 =====
  noticeText: "💡 点击任意展位查看产品详情与联系方式 · 示例数据，商家资料持续更新中",

  // ===== 底部导航 =====
  bottomBar: {
    home: { label: "首页", icon: "🏠" },
    share: { label: "分享", icon: "📤" },
    bigBtn: { label: "邀请朋友逛展", icon: "💬" },
    contact: { label: "联系主办方", icon: "📞" }
  },

  // ===== 联系方式 =====
  organizer: {
    name: "东莞市茂名商会秘书处",
    contact1: "黄嘉梁",
    phone1: "13923740820",
    contact2: "赖仕平",
    phone2: "13925818863",
    address: "东莞市茂名商会"
  },

  // ===== 分享文案 =====
  share: {
    title: "第五届茂交会云上展厅",
    desc: "20+茂名特产商家，手机微信直接逛，一键对接商家"
  }
};
