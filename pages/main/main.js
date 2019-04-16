// pages/main/main.js
var infoData = require("data");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['Facebook', 'Instagram', 'YouTube', 'Twitter','微博','微信','抖音'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    isClick01:false,
    isClick02: false,
    isClick03: false,
    isClick04: false,
    isClick05: false,
    isClick06: false,
    isClick07: false,
    targetArray:[],
    inputValue:'',
    inputIsNotNone:false,
  },

  selectTap() {
    this.setData({
      show: !this.data.show,
      index: 0,
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var targetArray = infoData.facebookInfoArray
    var n = targetArray.length
    console.log("长度"+targetArray.length)
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

    for(var i = 0;i<n;i++){
      targetArray[i].id=i+1
    }
    
    this.setData({
      index:0,
      isClick01:true,
      targetArray:targetArray
    });
    console.log(this.data.targetArray)
  },

  click01:function(){
    var targetArray = infoData.facebookInfoArray
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
    this.setData({
      isClick01:!this.data.isClick01,
      isClick02:false,
      isClick03: false,
      isClick04: false,
      isClick05: false,
      isClick06: false,
      isClick07: false,
      index:0,
      targetArray: targetArray,
    });
  },

  click02: function () {
    var targetArray = infoData.instagramInfoArray
    var n = targetArray.length
    console.log(n)
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
    this.setData({
      isClick02: !this.data.isClick02,
      isClick01: false,
      isClick03: false,
      isClick04: false,
      isClick05: false,
      isClick06: false,
      isClick07: false,
      index: 1,
      targetArray: targetArray,
    });
  },

  click03: function () {
    var targetArray = infoData.youTubeInfoArray
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
    this.setData({
      isClick03: !this.data.isClick03,
      isClick02: false,
      isClick01: false,
      isClick04: false,
      isClick05: false,
      isClick06: false,
      isClick07: false,
      index: 2,
      targetArray: targetArray,
    });
  },

  click04: function () {
    var targetArray = infoData.twitterInfoArray
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
    this.setData({
      isClick04: !this.data.isClick04,
      isClick02: false,
      isClick03: false,
      isClick01: false,
      isClick05: false,
      isClick06: false,
      isClick07: false,
      index: 3,
      targetArray: targetArray,
    });
    
  },
  click05: function () {
    var targetArray = infoData.weiboInfoArray
    var n = targetArray.length
    console.log(n)
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
    this.setData({
      isClick05: !this.data.isClick05,
      isClick01: false,
      isClick03: false,
      isClick04: false,
      isClick02: false,
      isClick06: false,
      isClick07: false,
      index: 4,
      targetArray: targetArray,
    });
  },
  click06: function () {
    var targetArray = infoData.weixinInfoArray
    var n = targetArray.length
    console.log(n)
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
    this.setData({
      isClick06: !this.data.isClick06,
      isClick01: false,
      isClick03: false,
      isClick04: false,
      isClick02: false,
      isClick05: false,
      isClick07: false,
      index: 5,
      targetArray: targetArray,
    });
  },
  click07: function () {
    var targetArray = infoData.douyinInfoArray
    var n = targetArray.length
    console.log(n)
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
    this.setData({
      isClick07: !this.data.isClick07,
      isClick01: false,
      isClick03: false,
      isClick04: false,
      isClick02: false,
      isClick05: false,
      isClick06: false,
      index: 6,
      targetArray: targetArray,
    });
  },

  inputValue:function(e){
    var inputValue = e.detail.value
    var inputIsNotNone;
    if(inputValue==''){
      inputIsNotNone = false;
      console.log('ddddd');
    }else{
      inputIsNotNone = true;
    }
    this.setData({
      inputIsNotNone:inputIsNotNone,
      inputValue:inputValue
      
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