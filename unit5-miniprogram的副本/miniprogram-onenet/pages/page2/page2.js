// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    a:580,
    cout:0,
    jianyi:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  circle:function(){
    var app=getApp()
    var that=this
   
    for(var i=0;i<app.globalData.light.datapoints.length;i++){
      if(app.globalData.light.datapoints[i].value>that.data.a){
       that.setData({
         count:that.data.count+1
       })
      }
    }
  },
  judge:function(){
    var that=this
    console.log(this.data.count)
    if(that.data.count>=55&that.data.count<=79){
      that.setData({
        count:that.data.count,
        a:that.data.a
      })
      return 0;
    }
    if(that.data.count>79) {
      that.setData({
        a:that.data.a+3,
        count:0
      })
      return 1;
    }
    if(that.data.count<55){
      that.setData({
        a:that.data.a-3,
        count:0,
      })
      
      return 1;
    }
},
    jianyi:function(){
      var that=this
      // that.setData({
      //   cout:1110
      // })
      
      
        if(that.data.cout>100){ 
          that.setData({
          jianyi:"您目前心率较快，若未正在进行剧烈运动，建议结合个人病情选择是否前往医院就医；若您目前正在剧烈运动，请结束运动后重新测试"})
        }
         
         
       if( that.data.cout<=100&&that.data.cout>=60){that.setData({
        jianyi:"您目前心率正常，若有不适请前往医院就诊"
      })}
          
        if(that.data.cout<60){ that.setData({
          jianyi:"您目前心率过缓，若您及家族未有任何心脏病史，并且您身体健康，应该为生理性现象，为正常现象不必担心；若您有上述情况，建议前往医院检查"
        })}
         
      console.log(that.data.jianyi)
    },
    
  
  onLoad: function (options) {
  var that=this
  const app=getApp();
  console.log(app.globalData.light.datapoints[1]);
  for(;that.judge()==1;){
    that.circle();
    console.log(that.data.a)
  } 
  that.setData({
    cout:Math.floor((this.data.count-19)/0.6)
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