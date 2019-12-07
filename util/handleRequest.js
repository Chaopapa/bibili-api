const http = require("http");
module.exports = (options,response) => {
  let result = "";
  return http.request(options, res => {
    res.on("data", buf => {
      result += buf;
    });
    res.on("end", () => {
      //设置响应头
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(result);
    });
  });
};
