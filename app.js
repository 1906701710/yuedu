//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    wx.checkSession({
      　　　　success: function (res) {
        　　　　　　console.log("处于登录态");
              setTimeout(function(){
                wx.navigateTo({
                url: '../pages/my/my',
              })
              },2000)
      　　　　},
      　　　　fail: function (res) {
        　　　　　　console.log("需要重新登录");
        　　　　　　wx.login({})
      　　　　}
    　　})
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              
              console.log(JSON.parse(res.rawData).avatarUrl)
              this.globalData.avatarUrl = JSON.parse(res.rawData).avatarUrl
              console.log(this.globalData.avatarUrl)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    
  },
  globalData: {
    userInfo: null,
    avatarUrl: ""//用户头像
  }
})