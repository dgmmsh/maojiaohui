// 第五届茂交会 · 云上展厅数据
// 商家和产品数据都存在这里，后台管理页导出的也是这个格式
// 注意：修改后需要重新上传部署才能生效
// 图片字段支持：图片URL 或 base64编码 或 留空（用emoji占位）

window.BOOTH_DATA = [
  {
    id: 1, no: "1号", name: "李万橘", cat: "fruit", catName: "水果生鲜",
    emoji: "🍊", bg: "bg-fruit",
    photo: "", // 商家封面图（URL或base64，留空显示emoji）
    desc: "茂名特色柑橘、橘红制品，产地直供",
    products: [
      { name: "茂名砂糖橘", desc: "产地直供·新鲜采摘", price: "¥28", unit: "/5斤装", emoji: "🍊", images: [] },
      { name: "化州橘红切片", desc: "理气化痰·药食同源", price: "¥68", unit: "/罐", emoji: "🍵", images: [] },
      { name: "沃柑礼盒装", desc: "节日送礼佳品", price: "¥58", unit: "/盒", emoji: "🎁", images: [] }
    ],
    contactName: "李生", phone: "138****8888",
    contactName2: "", phone2: "",
    wechatId: "liwanju_dg",
    wechatQr: "", // 微信二维码图片
    payQr: "",    // 收款码图片
    address: "东莞市茂名商会茂交会 1号展位"
  },
  {
    id: 2, no: "2号", name: "壹思月饼", cat: "mooncake", catName: "月饼食品",
    emoji: "🥮", bg: "bg-mooncake",
    photo: "",
    desc: "茂名传统手工月饼，金腿五仁发源地",
    products: [
      { name: "金腿五仁月饼", desc: "茂名传统风味·175g×4", price: "¥128", unit: "/盒", emoji: "🥮", images: [] },
      { name: "双黄白莲蓉", desc: "经典广式·150g×4", price: "¥108", unit: "/盒", emoji: "🌕", images: [] },
      { name: "流心奶黄月饼", desc: "新式口味·8个装", price: "¥138", unit: "/盒", emoji: "✨", images: [] }
    ],
    contactName: "陈经理", phone: "139****6666",
    contactName2: "", phone2: "",
    wechatId: "yisi_mooncake",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 2号展位"
  },
  {
    id: 3, no: "3号", name: "海龙阁月饼", cat: "mooncake", catName: "月饼食品",
    emoji: "🥮", bg: "bg-mooncake",
    photo: "",
    desc: "海龙阁品牌月饼，中秋送礼首选",
    products: [
      { name: "海龙阁金腿五仁", desc: "招牌款·1斤装", price: "¥168", unit: "/盒", emoji: "🥮", images: [] },
      { name: "蛋黄莲蓉月饼", desc: "经典口味·4个装", price: "¥118", unit: "/盒", emoji: "🌕", images: [] },
      { name: "月饼礼盒(豪华装)", desc: "6口味组合·送礼佳品", price: "¥268", unit: "/盒", emoji: "🎁", images: [] }
    ],
    contactName: "王经理", phone: "137****5555",
    contactName2: "", phone2: "",
    wechatId: "hailongge_dg",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 3号展位"
  },
  {
    id: 4, no: "4号", name: "肖声·优加顺酒", cat: "wine", catName: "酒水饮料",
    emoji: "🍶", bg: "bg-wine",
    photo: "",
    desc: "优加顺酒品牌运营，白酒、红酒全品类",
    products: [
      { name: "优加顺白酒(窖藏)", desc: "52度·500ml", price: "¥198", unit: "/瓶", emoji: "🍶", images: [] },
      { name: "红葡萄酒", desc: "干红·750ml", price: "¥128", unit: "/瓶", emoji: "🍷", images: [] },
      { name: "中秋礼盒套装", desc: "白酒+红酒组合", price: "¥298", unit: "/套", emoji: "🎁", images: [] }
    ],
    contactName: "肖总", phone: "136****4444",
    contactName2: "", phone2: "",
    wechatId: "youjia_shunjiu",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 4号展位"
  },
  {
    id: 5, no: "5号", name: "肖铭棠·品牌饮料", cat: "wine", catName: "酒水饮料",
    emoji: "🧃", bg: "bg-wine",
    photo: "",
    desc: "品牌饮料批发，果汁、茶饮、功能饮料",
    products: [
      { name: "鲜榨果汁礼盒", desc: "6瓶混合装·100%纯果汁", price: "¥88", unit: "/箱", emoji: "🧃", images: [] },
      { name: "草本凉茶", desc: "清热降火·24罐", price: "¥68", unit: "/箱", emoji: "🌿", images: [] },
      { name: "维生素功能饮料", desc: "运动补给·24罐", price: "¥98", unit: "/箱", emoji: "⚡", images: [] }
    ],
    contactName: "肖总", phone: "135****3333",
    contactName2: "", phone2: "",
    wechatId: "xiaomingtang_drink",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 5号展位"
  },
  {
    id: 6, no: "6号", name: "众果鲜源", cat: "fruit", catName: "水果生鲜",
    emoji: "🍇", bg: "bg-fruit",
    photo: "",
    desc: "众果鲜源·新鲜水果直供（三店联动）",
    products: [
      { name: "茂名荔枝干", desc: "特级·500g", price: "¥58", unit: "/袋", emoji: "🔴", images: [] },
      { name: "龙眼干", desc: "精选·500g", price: "¥48", unit: "/袋", emoji: "🟡", images: [] },
      { name: "鲜果礼盒", desc: "当季鲜果组合", price: "¥128", unit: "/盒", emoji: "🍎", images: [] }
    ],
    contactName: "店长", phone: "134****2222",
    contactName2: "", phone2: "",
    wechatId: "zhongguoxianyuan",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 6/7/8号展位"
  },
  {
    id: 9, no: "9号", name: "城搜云站", cat: "service", catName: "生活服务",
    emoji: "☁️", bg: "bg-service",
    photo: "",
    desc: "城搜云站·本地生活服务平台",
    products: [
      { name: "商家入驻服务", desc: "免费入驻·平台推广", price: "免费", unit: "起", emoji: "🏪", images: [] },
      { name: "云站建站服务", desc: "小程序+H5一体化", price: "¥999", unit: "/年起", emoji: "💻", images: [] },
      { name: "本地推广套餐", desc: "精准触达东莞用户", price: "面议", unit: "", emoji: "📣", images: [] }
    ],
    contactName: "城搜云站", phone: "133****1111",
    contactName2: "", phone2: "",
    wechatId: "chengsou_yz",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 9号展位"
  },
  {
    id: 10, no: "10号", name: "宏桥银耳儿·冼康群", cat: "food", catName: "餐饮美食",
    emoji: "🍜", bg: "bg-food",
    photo: "",
    desc: "银耳养生饮品、特色糖水、滋补甜品",
    products: [
      { name: "鲜炖银耳羹", desc: "即食·6杯装", price: "¥68", unit: "/盒", emoji: "🥣", images: [] },
      { name: "桃胶雪燕皂角米", desc: "养颜组合·500g", price: "¥88", unit: "/袋", emoji: "🌸", images: [] },
      { name: "红枣桂圆枸杞茶", desc: "养生茶包·30包", price: "¥48", unit: "/盒", emoji: "🍵", images: [] }
    ],
    contactName: "冼康群", phone: "132****0000",
    contactName2: "", phone2: "",
    wechatId: "yiner_hongqiao",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 10号展位"
  },
  {
    id: 11, no: "11号", name: "许和繁", cat: "general", catName: "综合",
    emoji: "🏪", bg: "bg-general",
    photo: "",
    desc: "综合商贸（双展位）",
    products: [
      { name: "日用百货批发", desc: "各类日用品·量大价优", price: "面议", unit: "", emoji: "🛒", images: [] },
      { name: "节庆礼品定制", desc: "企业团购·定制LOGO", price: "¥38", unit: "起/份", emoji: "🎁", images: [] }
    ],
    contactName: "许总", phone: "131****9999",
    contactName2: "", phone2: "",
    wechatId: "xuhefan_trade",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 11/12号展位"
  },
  {
    id: 13, no: "13号", name: "许文飞", cat: "general", catName: "综合",
    emoji: "📦", bg: "bg-general",
    photo: "",
    desc: "综合贸易·礼品批发",
    products: [
      { name: "商务礼品套装", desc: "企业定制·多款式", price: "¥58", unit: "起/套", emoji: "🎁", images: [] },
      { name: "年货礼盒", desc: "节庆礼包组合", price: "¥88", unit: "起/盒", emoji: "🧧", images: [] }
    ],
    contactName: "许总", phone: "130****8888",
    contactName2: "", phone2: "",
    wechatId: "xuwenfei_trade",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 13号展位"
  },
  {
    id: 14, no: "14号", name: "团圆阁·吴可文", cat: "mooncake", catName: "月饼食品",
    emoji: "🥮", bg: "bg-mooncake",
    photo: "",
    desc: "团圆阁月饼·家的味道",
    products: [
      { name: "团圆五仁月饼", desc: "传统配方·4个装", price: "¥98", unit: "/盒", emoji: "🥮", images: [] },
      { name: "豆沙月饼", desc: "细腻豆沙·6个装", price: "¥78", unit: "/盒", emoji: "🍯", images: [] }
    ],
    contactName: "吴可文", phone: "158****7777",
    contactName2: "", phone2: "",
    wechatId: "tuanyuange_moon",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 14号展位"
  },
  {
    id: 15, no: "15号", name: "留余轩沉香文化·许燕妮", cat: "agarwood", catName: "沉香文化",
    emoji: "🪵", bg: "bg-agarwood",
    photo: "",
    desc: "沉香文化·线香、精油、手串",
    products: [
      { name: "沉香线香(品鉴装)", desc: "天然沉香·20g", price: "¥128", unit: "/盒", emoji: "🕯️", images: [] },
      { name: "沉香精油", desc: "单方精油·5ml", price: "¥268", unit: "/瓶", emoji: "💧", images: [] },
      { name: "沉香手串", desc: "天然沉香木·男女款", price: "¥388", unit: "起/串", emoji: "📿", images: [] }
    ],
    contactName: "许燕妮", phone: "159****6666",
    contactName2: "", phone2: "",
    wechatId: "liuyuxuan_chenxiang",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 15号展位"
  },
  {
    id: 16, no: "16号", name: "津面道·叶总", cat: "food", catName: "餐饮美食",
    emoji: "🍜", bg: "bg-food",
    photo: "",
    desc: "津面道·地道面食连锁",
    products: [
      { name: "招牌牛腩面", desc: "到店消费·经典款", price: "¥22", unit: "/碗", emoji: "🍜", images: [] },
      { name: "手工饺子(生)", desc: "现包现卖·500g", price: "¥32", unit: "/份", emoji: "🥟", images: [] },
      { name: "特色酱料礼盒", desc: "秘制酱料·3瓶装", price: "¥68", unit: "/盒", emoji: "🧂", images: [] }
    ],
    contactName: "叶总", phone: "137****5555",
    contactName2: "", phone2: "",
    wechatId: "jinmiandao_ye",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 16号展位"
  },
  {
    id: 17, no: "17号", name: "固德口腔", cat: "service", catName: "生活服务",
    emoji: "🦷", bg: "bg-service",
    photo: "",
    desc: "固德口腔·专业口腔医疗服务",
    products: [
      { name: "口腔检查套餐", desc: "全面检查+拍片", price: "¥38", unit: "/次", emoji: "🔍", images: [] },
      { name: "超声波洁牙", desc: "深层清洁·去牙结石", price: "¥128", unit: "/次", emoji: "✨", images: [] },
      { name: "家庭口腔卡", desc: "全家一年·4人可用", price: "¥398", unit: "/年", emoji: "👨‍👩‍👧‍👦", images: [] }
    ],
    contactName: "固德口腔", phone: "0769-****8888",
    contactName2: "", phone2: "",
    wechatId: "goodental_dg",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 17号展位"
  },
  {
    id: 19, no: "19号", name: "张渝挺·索尔维亚酒", cat: "wine", catName: "酒水饮料",
    emoji: "🍷", bg: "bg-wine",
    photo: "",
    desc: "索尔维亚葡萄酒·原装进口",
    products: [
      { name: "索尔维亚干红", desc: "赤霞珠·750ml", price: "¥168", unit: "/瓶", emoji: "🍷", images: [] },
      { name: "索尔维亚起泡酒", desc: "白葡萄·750ml", price: "¥128", unit: "/瓶", emoji: "🥂", images: [] },
      { name: "红酒礼盒(双支)", desc: "送礼佳品·含礼盒", price: "¥298", unit: "/套", emoji: "🎁", images: [] }
    ],
    contactName: "张渝挺", phone: "138****6666",
    contactName2: "", phone2: "",
    wechatId: "suoerweiya_wine",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 19号展位"
  },
  {
    id: 27, no: "27号", name: "晓密之香·张国琼", cat: "agarwood", catName: "沉香文化",
    emoji: "🌸", bg: "bg-agarwood",
    photo: "",
    desc: "晓密之香·香道文化·天然香料",
    products: [
      { name: "盘香礼盒", desc: "沉香盘香·4小时·40盘", price: "¥88", unit: "/盒", emoji: "🌀", images: [] },
      { name: "香道入门套装", desc: "香炉+香粉+工具", price: "¥198", unit: "/套", emoji: "🏺", images: [] },
      { name: "香囊(随身)", desc: "天然香料·多款可选", price: "¥38", unit: "/个", emoji: "👛", images: [] }
    ],
    contactName: "张国琼", phone: "136****7777",
    contactName2: "", phone2: "",
    wechatId: "xiaomizhixiang",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 27号展位"
  },
  {
    id: 28, no: "28号", name: "陈志云", cat: "general", catName: "综合",
    emoji: "🛍️", bg: "bg-general",
    photo: "",
    desc: "综合商贸·特产批发",
    products: [
      { name: "茂名特产大礼包", desc: "8款特产组合", price: "¥168", unit: "/盒", emoji: "🎁", images: [] },
      { name: "企业团购定制", desc: "量大价优·可定制", price: "面议", unit: "", emoji: "🏢", images: [] }
    ],
    contactName: "陈志云", phone: "135****8888",
    contactName2: "", phone2: "",
    wechatId: "chenzhiyun_trade",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 28号展位"
  },
  {
    id: 29, no: "29号", name: "万年红食品", cat: "mooncake", catName: "月饼食品",
    emoji: "🧆", bg: "bg-mooncake",
    photo: "",
    desc: "万年红食品·传统糕点·月饼零食化",
    products: [
      { name: "迷你月饼(多口味)", desc: "零食化·12个装", price: "¥48", unit: "/袋", emoji: "🥮", images: [] },
      { name: "传统糕点礼盒", desc: "桃酥+蛋卷+杏仁饼", price: "¥78", unit: "/盒", emoji: "🍪", images: [] },
      { name: "月饼零食礼包", desc: "6种口味·24枚", price: "¥98", unit: "/袋", emoji: "🎒", images: [] }
    ],
    contactName: "万年红", phone: "134****9999",
    contactName2: "", phone2: "",
    wechatId: "wannianhong_food",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 29号展位"
  },
  {
    id: 30, no: "30号", name: "何名洪", cat: "general", catName: "综合",
    emoji: "🏪", bg: "bg-general",
    photo: "",
    desc: "综合商贸（双展位）",
    products: [
      { name: "日用百货批发", desc: "家居日用·品类齐全", price: "面议", unit: "", emoji: "🛒", images: [] },
      { name: "办公文具", desc: "企业采购·量大优惠", price: "¥9.9", unit: "起", emoji: "📎", images: [] }
    ],
    contactName: "何名洪", phone: "133****0000",
    contactName2: "", phone2: "",
    wechatId: "heminghong_trade",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 30/31号展位"
  },
  {
    id: 32, no: "32号", name: "数据线·梁好", cat: "service", catName: "生活服务",
    emoji: "🔌", bg: "bg-digital",
    photo: "",
    desc: "数码配件·数据线·充电设备",
    products: [
      { name: "快充数据线(三合一)", desc: "苹果/安卓/Type-C", price: "¥29.9", unit: "/条", emoji: "⚡", images: [] },
      { name: "无线充电器", desc: "15W快充·兼容多品牌", price: "¥68", unit: "/个", emoji: "🔋", images: [] },
      { name: "充电宝(20000mAh)", desc: "大容量·快充版", price: "¥99", unit: "/个", emoji: "🔌", images: [] }
    ],
    contactName: "梁好", phone: "132****1111",
    contactName2: "", phone2: "",
    wechatId: "lianghao_digital",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 32号展位"
  },
  {
    id: 33, no: "33号", name: "萧鼻祖", cat: "general", catName: "综合",
    emoji: "📿", bg: "bg-general",
    photo: "",
    desc: "特色手工艺品·文玩收藏",
    products: [
      { name: "菩提手串", desc: "精选·男女款", price: "¥68", unit: "起/串", emoji: "📿", images: [] },
      { name: "文玩核桃", desc: "把玩收藏·精选配对", price: "¥128", unit: "起/对", emoji: "🥜", images: [] }
    ],
    contactName: "萧鼻祖", phone: "131****2222",
    contactName2: "", phone2: "",
    wechatId: "xiaobizu_wanwan",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 33号展位"
  },
  {
    id: 38, no: "38号", name: "水洋春", cat: "wine", catName: "酒水饮料",
    emoji: "🍶", bg: "bg-wine",
    photo: "",
    desc: "水洋春酒·传统酿造（双展位）",
    products: [
      { name: "水洋春米酒", desc: "传统酿造·500ml", price: "¥88", unit: "/瓶", emoji: "🍶", images: [] },
      { name: "水洋春礼盒装", desc: "双瓶·送礼佳品", price: "¥168", unit: "/盒", emoji: "🎁", images: [] },
      { name: "陈年窖藏", desc: "5年陈酿·500ml", price: "¥268", unit: "/瓶", emoji: "🏺", images: [] }
    ],
    contactName: "水洋春", phone: "130****3333",
    contactName2: "", phone2: "",
    wechatId: "shuiyangchun_jiu",
    wechatQr: "", payQr: "",
    address: "东莞市茂名商会茂交会 38/39号展位"
  }
];

// 品类配置（后台添加商家时可选）
window.CATEGORY_CONFIG = [
  { key: "all", name: "全部", emoji: "🏠", bg: "" },
  { key: "mooncake", name: "月饼食品", emoji: "🥮", bg: "bg-mooncake" },
  { key: "fruit", name: "水果生鲜", emoji: "🍊", bg: "bg-fruit" },
  { key: "wine", name: "酒水饮料", emoji: "🍶", bg: "bg-wine" },
  { key: "agarwood", name: "沉香文化", emoji: "🪵", bg: "bg-agarwood" },
  { key: "food", name: "餐饮美食", emoji: "🍜", bg: "bg-food" },
  { key: "service", name: "生活服务", emoji: "☁️", bg: "bg-service" },
  { key: "general", name: "综合", emoji: "🏪", bg: "bg-general" }
];
