// pages/classified-search/clasearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classilydata:["科幻","职场","言情","艺术","科学","军事","科技","国防","神话","历史","搞笑","快讯","名人"],
    flag:false,
    booksarr: "",
    hotseek: ""
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
  highlight:function(e){
    console.log(e.currentTarget.dataset.num)
    this.setData({
      flag: e.currentTarget.dataset.num,
    })
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