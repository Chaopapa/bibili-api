const express = require("express");
const router = express.Router();
const handleRequest = require("../util/handleRequest");

router.get('/comment',(request, response)=>{
    let [path, search] = request.url.split("?");
    path = "/x/v2/reply";
    let options = {
      hostname: "api.bilibili.com",
      port: 80,
      path: `${path}?${search}`,
      method: "GET"
    };
  
    let r = handleRequest(options, response);
    r.end();
})

module.exports =  router;