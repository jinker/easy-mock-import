## easy-mock-import
接口数据导出导入工具

## 操作
假设需要从A站点a项目导出至B站点b项目

工具: Chrome浏览器

1. `git clone https://github.com/jinker/easy-mock-import.git`
2. `cUrl`: 在A站点a项目界面获取项目mock列表ajax接口`cUrl`, 如：`curl 'http://mock.xxx.xx/api/mock?project_id=5a237f84b151d83fc77629f1&page_size=2000&page_index=1&keywords=' -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1YTIzN2YyMmIxNTFkODNmYzc3NjI5ZWUiLCJleHAiOjE1MTM0ODUzNDcsImlkIjoiNWEyMTNiNmE2YzFiMDUyZmIwMDZlZDhmIiwiaWF0IjoxNTEyMjc1NzQ2fQ.yg92Ato45XGRHS6T6jAecsp6l-ne4zO2G-xK66SIba4' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36' -H 'Accept: application/json, text/plain, */*' -H 'Referer: http://mock.myscrm.cn/group/5a237f5eb151d83fc77629ef?name=%08yunke' -H 'Cookie: easy-mock_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1YTIzN2YyMmIxNTFkODNmYzc3NjI5ZWUiLCJleHAiOjE1MTM0ODUzNDcsImlkIjoiNWEyMTNiNmE2YzFiMDUyZmIwMDZlZDhmIiwiaWF0IjoxNTEyMjc1NzQ2fQ.yg92Ato45XGRHS6T6jAecsp6l-ne4zO2G-xK66SIba4' -H 'Connection: keep-alive' --compressed`
3. `targetProjectId`: 在B站点b项目（需已存在，如没有，则需先创建），获取项目id，页面链接最后部分，如`http://mock.myscrm.cn/project/5a237f84b151d83fc77629f1`，项目id为`5a237f84b151d83fc77629f1`
4. `requestHeaders`: 在B站点上获取一个ajax接口headers
5. 将上述三个参数粘贴至`index.js`文件对应变量中
6. 运行：`yarn start`, 或`npm start`

PS: 获取`cUrl`与`requestHeaders`都在Chrome浏览器的网络面板中
- 选中请求右键->Copy->Copy as cUrl
- 选中请求右键->Copy->Copy request headers
