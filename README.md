# auto-daily-bonus

get daily bonus using nodejs for [Anankke/SSPanel-Uim: SSPanel V3](https://github.com/Anankke/SSPanel-Uim) project
try to get daily bonus for every 12 hrs

# feature

1. stateless and can be deployed as serverless function
2. ~~`axios` instread of `axios` which doesnt support promise~~ failed to read data of login request, got `''` instead, may got 302 block from cf. use mannual promise to support request which returns Request rather than Promise(axios returns Promise).
3. node > 10

# qcloud

>[cron](https://cloud.tencent.com/document/product/583/9708#.E7.A4.BA.E4.BE.8B)

1. `0 0 1,9,17 * * * *` for 1,9,17 o'clock daily
1. test button can be found at the edit page, but I always fail to edit edit the code
1. get 302 redirect at checkin stage for couldfare audit. It's not a good idea to host it in cloud since most of them has CDN which blocks automate access to the webstie from cloud.
1. there's limits on logging in cloud function testing, return big object in resolve for output value and then view it instead.

# usage 

1. edit configure.js for your info
2. `npm install`
3. `npm test` to test for once 
4. `npm start` for every 12h

# note

use screen or other method to run the scripts in background


