var app = new Vue({
    el: '.bilibili_home_page',
    data: {
        //头部导航栏
        home_top_navigation_list: ["海贼王", "元龙", "狐妖小红娘"],
        top_navigation_bar_left: ["主站", "番剧", "游戏中心", "直播", "会员购", "漫画", "赛事", "下载APP"],
        top_navigation_bar_right: ["大会员", "消息", "动态", "收藏", "历史", "创作中心"],

        //分类
        //大类
        broad_heading_ul_li: ["首页", "动态", "热门", "频道"],
        //细分
        content_subdivision_list_up: ["动画", "音乐", "舞蹈", "知识", "生活", "时尚", "娱乐", "放映厅"],
        content_subdivision_list_down: ["番剧", "国创", "游戏", "科技", "鬼畜", "咨讯", "影视"],
        content_subdivision_list_float: ["搞笑", "家具房产", "手工", "绘画", "日常", "短片", "预告"],
        // 功能分类
        content_functional_classification: ["专栏", "活动", "小黑屋", "直播", "课堂", "新歌热榜"],

        //热点视频
        hot_video_img: ["金Bili辉煌的一天",
            "FPX VS LNG",
            "转世重生前没喝孟婆汤吧！",
            "林浩 | 李成阳 |这还是极挑抢金条那两？",
            "《封神之战》",
            "峡 谷 分 析 师",
        ],
        
        inputValue: "",
        browsing_history_show_or_not1: 0,
        home_page_advertising_video: [
            {
                up: "来霍格沃茨学习魔法",
                down: "哈利波特魔法觉醒",
            },
            {
                up: "【一看你就饿】辣油浇肉呲溜一嗦，每根粉都好吃到飙泪！",
                down: "哔哩哔哩纪录片",
            }, 
            {
                up: "每天建模一小时，【接单】赚外块！",
                down: "建模大师",
            },
            {
                up: "《我退休的妈妈用她离谱的声线唱古风歌》",
                down: "拯救世界的狗子",
            },
        ],
    },
    methods: {
        add: function () {
            this.home_top_navigation_list.push(this.inputValue);
        },
        remove: function (index) {
            // console.log("删除");
            // console.log(index);
            this.home_top_navigation_list.splice(index, 1);
        },
        clear: function () {
            this.home_top_navigation_list = [];
        },
        show_browsing_history1: function () {
            this.browsing_history_show_or_not1 = 1;
        },
        hide_browsing_history1: function () {
            document.addEventListener("click", e => {
                var box = document.getElementById("search_record_box_id");
                if (!box.contains(e.target)) {
                    // console.log("在外");
                    this.browsing_history_show_or_not1 = 0;
                }
            })
        },

    },


})