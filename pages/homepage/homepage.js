
// const app = getApp()

// var startX, endX;

// var moveFlag = true;// 判断执行滑动事件
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    taxonarr: [],
    authorarr:[],
    booksarr:[],
    hotarr: [],
    
    rs: [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),],
    gs:[
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ],
    bs:[
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),    
    ],
    // page: 1,
    // ani1: '',
    // ani2: ''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const app = getApp();
    this.setData({
      taxonarr: app.globalData.gtaxonarr,
      authorarr: app.globalData.gauthorarr,
      booksarr: app.globalData.gbooksarr.splice(0,6),
      hotarr: app.globalData.ghotarr,
    })
  },
  seekinput:function(){
    wx.navigateTo({
      url: '../seek/seek',
    })
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

  }
})