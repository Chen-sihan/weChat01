import request from '../../request/request.js'
//Page Object
Page({
  data: {
    swiperList:[],
    cateList:[],
    floorList:[]
    
  },
  //options(Object)
  onLoad: function(options) {
    /*   //方式一
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success:result=>{
        this.setData({
          swiperList:result.data.message
        })
      }
    })
    */
    //封装后
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
      })
    })

    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    .then(result=>{
      this.setData({
        cateList:result.data.message
      })
    })

    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    .then(result=>{
      this.setData({
        floorList:result.data.message
      })
    })


  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  