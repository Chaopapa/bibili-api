const express = require("express");
const router = express.Router();
const handleRequest = require("../util/handleRequest");

/**
 * 获取推荐视频
 */
router.get("/recommend/video", (request, response, next) => {
  let [path, search] = request.url.split("?");
  path = "/x/web-interface/ranking";
  let options = {
    hostname: "api.bilibili.com",
    port: 80,
    path: `${path}?${search}`,
    method: "GET"
  };

  let r = handleRequest(options, response);
  r.end();

  //    res.json({
  //        code:200,
  //        msg:'请求成功'
  //    })
});

/**
 * 获取推荐页轮播图
 */
router.get("/recommend/banner", (request, response) => {
  let [path, search] = request.url.split("?");
  path = "/x/web-show/res/loc";
  let options = {
    hostname: "api.bilibili.com",
    port: 80,
    path: `${path}?${search}`,
    method: "GET"
  };
  let r = handleRequest(options, response);
  r.end();
});
/**
 * 获取相似视频
 */
router.get("/video/like", (request, response) => {
  let [path, search] = request.url.split("?");
  path = "/x/web-interface/archive/related";
  let options = {
    hostname: "api.bilibili.com",
    port: 80,
    path: `${path}?${search}`,
    method: "GET"
  };

  let r = handleRequest(options, response);
  r.end();
});

/**
 * 获取直播页面中相关信息
 */
router.get("/live", (requset, response) => {
  let [path, search] = requset.url.split("?");
  path = "/room/v2/AppIndex/getAllList";
  let options = {
    hostname: "api.live.bilibili.com",
    port: 80,
    path: `${path}?${search}`,
    method: "GET"
  }

  let r = handleRequest(options, response);
  r.end();
})

//获取直播间的消息
router.get("/live/message",(request,response)=>{
    let [path,search] = request.url.split("?");
    path = "/AppRoom/msg";
    let options = {
      hostname:"api.live.bilibili.com",
      port:80,
      path:`${path}?${search}`,
      method:"GET"
    }
  })


module.exports = router;
