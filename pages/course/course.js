// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessonData: [
      {
        path: "/img/goodLesson (1).png",
        title: "创意DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isFull: false,
        name: "创意DIY"
      },
      {
        path: "/img/goodLesson (2).png",
        title: "创意美食班",
        subTitle: "适宜2-3岁的宝宝",
        isFull: true,
        name: "创意美食"
      },
      {
        path: "/img/goodLesson (3).png",
        title: "素描班",
        subTitle: "适宜8岁以上的儿童",
        isFull: false,
        name: "素描"
      },
      {
        path: "/img/goodLesson (4).png",
        title: "色彩班",
        subTitle: "适宜6岁以上的儿童",
        isFull: true,
        name: "色彩班"
      },
      {
        path: "/img/goodLesson (5).png",
        title: "速写班",
        subTitle: "适宜8岁以上的儿童",
        isFull: false,
        name: "速写班"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  toLessonInfo: function (event) {
   
    var lessonName = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/course/lessonInfo/lessonInfo?lessonName=' + lessonName
    });
  }
})