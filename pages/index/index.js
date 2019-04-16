// pages/index/index.js
var infoData = require('../main/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imageUrls: [
      {
        url: '../../images/pingguo.jpg'
      },
      {
        url: '../../images/yamaxun.jpg'
      }
    ],
    
    iconUrl:"../../images/1.png",
    introduce:"暂无",
    platform:"facebook",
    country:"美国",
    name:"十点读书",
    domain:"社交",
    fans:"1000w",
    targetArray:[
    ],
    resultArray:[],
    
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var targetArray = [];
    var that = this
    
      
    if (options.type == 'weixin') {
      console.log('weixin')
      targetArray = infoData.weixinInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
          
          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
    } else if (options.type == 'weibo') {
      targetArray = infoData.weiboInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    } else if (options.type == 'douyin') {
      targetArray = infoData.douyinInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    } else if (options.type == 'facebook') {
      targetArray = infoData.facebookInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    } else if (options.type == 'instagram') {
      targetArray = infoData.instagramInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    } else if (options.type == 'youTube') {
      targetArray = infoData.youTubeInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    } else if (options.type == 'twitter') {
      targetArray = infoData.twitterInfoArray
      var n = targetArray.length
      for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

          console.log(targetArray[j].fans)
          if (targetArray[i].fans < targetArray[j].fans) {
            var temp = targetArray[i]
            targetArray[i] = targetArray[j]
            targetArray[j] = temp
          }
        }
      }
      for (var i = 0; i < n; i++) {
        targetArray[i].id = i + 1
      }
    }
    else if(options.type==0){
      if(options.index==0){
        targetArray = infoData.facebookInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
        if(options.inputValue!=''){
          var inputValue = options.inputValue
          for(var i = 0;i<inputValue.lenght;i++){
            
          }
        }
      } else if (options.index == 1){
        targetArray = infoData.instagramInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      } else if (options.index == 2){
        targetArray = infoData.youTubeInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      } else if (options.index == 3){
        targetArray = infoData.twitterInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      } else if (options.index == 4) {
        targetArray = infoData.weiboInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      } else if (options.index == 5) {
        targetArray = infoData.weixinInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      } else if (options.index == 6) {
        targetArray = infoData.douyinInfoArray
        var n = targetArray.length
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {

            console.log(targetArray[j].fans)
            if (targetArray[i].fans < targetArray[j].fans) {
              var temp = targetArray[i]
              targetArray[i] = targetArray[j]
              targetArray[j] = temp
            }
          }
        }
        for (var i = 0; i < n; i++) {
          targetArray[i].id = i + 1
        }
      }
      
      
    }

    

    this.setData({
      iconUrl: options.iconUrl,
      introduce: options.introduce,
      platform: options.platform,
      country: options.country,
      name: options.name,
      domain: options.domain,
      fans: options.fans,
      targetArray: targetArray,
    })
    

      

    
  },

  sort:function(targetArray){
    for(var i=0;i<targetArray.lenght;i++){
      for(var j = i+1;j<targetArray.length;j++){
        if(targetArray[i].fans<targetArray[j].fans){
          var temp = targetArray[i]
          targetArray[i] = targetArray[j]
          targetArray[j]  =temp
        }
      }
    }
    
    return targetArray;
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