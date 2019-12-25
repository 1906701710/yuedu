// pages/explore/explore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhankai:"../../weui-miniprogram/down/caidan/weizhankai/sign-blue.png",
    weizhankai: "../../weui-miniprogram/down/caidan/zhankai/caidan.png",
    show:false,
    noshow:true,
    booksarr: "",
    bookname:"",
    author:"",
    readerphoto:[],
    bookallarr:[],
    sbooksarr: "",
    sbookname: "",
    sauthor: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    this.setData({
      bookallarr: app.globalData.gbooksarr,
      readerphoto: app.globalData.gauthorarr.slice(0,5)
    })
  },
  isshow:function(){
    
    this.setData({
      show:false,
      noshow:true,
      zhankai: "../../weui-miniprogram/down/caidan/weizhankai/sign-blue.png",
      weizhankai: "../../weui-miniprogram/down/caidan/zhankai/caidan.png",
    })
  },
  seeall:function(e){
    var idx = e.currentTarget.dataset.num
    // this.data.bookallarr
    this.setData({
      show: true,
      noshow: false,
      zhankai: "../../weui-miniprogram/down/caidan/zhankai/sign-blue.png",
      weizhankai: "../../weui-miniprogram/down/caidan/weizhankai/caidan.png",
      sbooksarr: this.data.bookallarr[idx].touxiang,
      sbookname: this.data.bookallarr[idx].bookname,
      sauthor: this.data.bookallarr[idx].writername
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