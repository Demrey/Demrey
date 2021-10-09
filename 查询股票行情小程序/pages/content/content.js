// pages/content/content.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var stockCode = options.stockId
      var stockCodeHead = null
      if (stockCode[0] == 0 | 3) {
        stockCodeHead = 'sz'
      }
      if (stockCode[0] == 6) {
        stockCodeHead = 'sh'
      }

      wx.request({
        url: 'http://web.juhe.cn:8080/finance/stock/hs?gid=' + stockCodeHead + stockCode + '&key=6dc837bb0ac0ab5fa40841ae3f260302',
        success: (res)=> {
          console.log(res)
          this.setData({
            stockName: res.data.result[0].dapandata.name,
            currentPrice: res.data.result[0].dapandata.dot,
            currentPic: res.data.result[0].dapandata.nowPic,
            currentRiseOrFall: res.data.result[0].dapandata.rate + '%',

            todayMax: '高' + (res.data.result[0].data.todayMax * 1).toFixed(2),
            todayStartPri: '开' + (res.data.result[0].data.todayStartPri * 1).toFixed(2),
            traNumber: '量' + ( res.data.result[0].dapandata.traNumber / Math.pow(10,4) ).toFixed(2) + '万',

            todayMin: '低' + (res.data.result[0].data.todayMin * 1).toFixed(2),
            yestodEndPri: '昨' + (res.data.result[0].data.yestodEndPri * 1).toFixed(2),
            traAmount: '额' + ( res.data.result[0].data.traAmount / Math.pow(10,8) ).toFixed(2) + '亿',

            minLineChart: res.data.result[0].gopicture.minurl,
            dayLineChart: res.data.result[0].gopicture.dayurl,
            weekLineChart: res.data.result[0].gopicture.weekurl,
            monthLineChart: res.data.result[0].gopicture.monthurl
          })
        }
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

    },

    cardChange: function (res) {
      var idx = res.detail.currentIndex;
      console.log(res)
      var address = null;

      switch (idx)
        {
          case 0: address=this.data.minLineChart;
          break;

          case 1: address=this.data.dayLineChart;
          break;

          case 2: address=this.data.weekLineChart;
          break;

          case 3: address=this.data.monthLineChart;
          break;
        }

        this.setData({
          pictureUrl: address
        })
    }
})