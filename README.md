# auto-daily-bonus

get daily bonus using nodejs for [Anankke/SSPanel-Uim: SSPanel V3 魔改再次修改版](https://github.com/Anankke/SSPanel-Uim) project
try to get daily bonus for every 12 hrs

# feature

1. stateless and can be deployed as serverless function
2. request >= 2.82
3. node > 10

# Cron

>[0 15 10 * * MON-FRI *](https://cloud.tencent.com/document/product/583/9708#.E7.A4.BA.E4.BE.8B)

4. `0 0 1,9,17 * * * *` for 1,9,17 o'clock daily
5. `0 37 20 * * * *` for every day 10：15 for testing

# usage 

1. edit configure.js for your info
2. `npm install`
3. `npm test` to test for once 
4. `npm start` for every 12h

# note

use screen or other method to run the scripts in background

