var sliderWidth = 61; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      name: "",
      teacher: "酷老师",
      studyNumber: 998,
      // 随机播放一个视频
      currentUrl: "",
      movieList: [{
          url: "https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
          subTitle: "基本介绍",
          time: "02:59"
        },
        {
          url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
          subTitle: "注意事项",
          time: "02:55"
        },
        {
          url: "https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
          subTitle: "新手入门",
          time: "1:47"
        },
        {
          url: "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
          subTitle: "菜鸟起飞",
          time: "0:59"
        },
        {
          url: "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
          subTitle: "我们不一样",
          time: "04:24"
        },
        {
          url: "http://120.198.235.230/ugcyd.qq.com/d0508uphydh.p712.1.mp4?sdtfrom=v1010&guid=f198ba8b9368ecdb1ad2eb1eff92f5ad&vkey=C546606BB17B5391D32905295D2E114A10AE204988F3AD145FEAC68B01AF83A75FC22655C7ECF529F61A76BD918C688DB1AA27FDD1C3AE3703BF4A2FB43AC4BDEB769754311A0E3CEEBE36B3B9CAD7F70C6E2FCFEBDE8AF3FD3362A2900029CDEB17DBF955C69664B2EF7578EF276344C60A4C7C422F8636",
          subTitle: "从未自卑",
          time: "01:52"
        }
      ],
      // es6的多行文本
      desc: `这里有各种奇思妙想，
    有疯狂的简笔画，
    会教你用叉子打蝴蝶结，
    各种新奇玩意，
    只要你在生活中发现任何美好的事物，
    我们都能动手制作出来。
    陶艺体验、美味厨艺、创意手工、艺术涂鸦
    等多种不同艺术形式，给孩子留下美好的童年记忆。
    `,
      // 评论信息
      commentList: [{
          name: "刘妈妈",
          icon: "/img/motherL.gif",
          info: "宝宝很喜欢呢"
        },
        {
          name: "彭妈妈",
          icon: "/img/motherP.png",
          info: "宝宝吵着还要看"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "张妈妈",
          icon: "/img/motherZ.png",
          info: "我谢谢你啊"
        }
      ],
      // 导航信息
      tabs: ["目录", "详情", "评价"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index = Math.floor(Math.random() * this.data.movieList.length);
    
    var currentUrl = this.data.movieList[index].url;
   
    this.setData({
      currentUrl: currentUrl
    })
    wx.setNavigationBarTitle({
      title: options.lessonName+"班视频演示"
    });
    this.setData({
      name: options.lessonName
    });
    // 引入的tab
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(that.data);
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // tab
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  changeVideo: function (event) {
    console.log(event);
    // 绑定给data中currentUrl即可
    this.setData({
      currentUrl: event.currentTarget.dataset.url
    });
  },
  //购买课程
  toBuyLesson: function () {
    wx.navigateTo({
      url: "/pages/course/buyLesson/buyLesson"
    });
    }
})