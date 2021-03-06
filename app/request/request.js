function request(params){
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          success:result=>{
            resolve(result)
          },
          fail:err=>{
            reject(err)
          }
        })
    })
}
export default request