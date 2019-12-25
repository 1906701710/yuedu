// pages/seek/seek.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booksarr: "",
    hotseek:""
  },
  homepage:function(){
    wx.switchTab({
      url: '../homepage/homepage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    console.log(app.globalData.gbooksarr)
    this.setData({
      booksarr: app.globalData.gbooksarr.slice(0, 3),
      hotseek: app.globalData.ghotarr
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