// pages/search/search.js
var infoData = require("../main/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    selectData: ['Facebook', 'Instagram', 'YouTube', 'Twitter', '微博', '微信', '抖音'],
    index: 0,
    type:"",
    searchArray:[],
    inputValue:"",
    resultCount:"",
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
    
    var n = options.index
    var inputValue = options.inputValue
    this.setData({
      index:n,
      inputValue:inputValue
    })
    console.log(n)
    console.log(inputValue)
    var targetArray=[]
    if(n==0){
      targetArray = infoData.facebookInfoArray
    }else if(n==1){
      targetArray = infoData.instagramInfoArray
    }else if(n==2){
      targetArray = infoData.youTubeInfoArray
    }else if(n==3){
      targetArray = infoData.twitterInfoArray
    }else if(n==4){
      targetArray = infoData.weiboInfoArray
    }else if(n==5){
      targetArray = infoData.weixinInfoArray
    }else if(n==6){
      targetArray = infoData.douyinInfoArray
    }

    console.log(targetArray)
    var temp = []
    
    var h = inputValue.length

    for(var z = 0;z<targetArray.length;z++){
      var name = targetArray[z].name
      console.log(name)
      for(var g = 0;g<name.length-h+1;g++){
        var test = name.slice(g, g + h)
        console.log(test)
        if (inputValue == test) {
          temp.push(targetArray[z])
        }
      }
    }
    

    var m = temp.length
    console.log(m)
    for (var i = 0; i < m; i++) {
      for (var j = i + 1; j < m; j++) {

        
        if (temp[i].fans < temp[j].fans) {
          var temp1 = temp[i]
          temp[i] = temp[j]
          temp[j] = temp1
        }
      }
    }
    for (var i = 0; i < m; i++) {
      temp[i].id = i + 1
    }

    this.setData({
      targetArray:temp,
      resultCount:m
    })

  },

  inputValue: function (e) {
    var inputValue = e.detail.value
    var inputIsNotNone;
    if (inputValue == '') {
      inputIsNotNone = false;
      console.log('ddddd');
    } else {
      inputIsNotNone = true;
    }
    this.setData({
      inputIsNotNone: inputIsNotNone,
      inputValue: inputValue

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