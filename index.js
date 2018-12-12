var unfurl = require('unfurled');
const util = require('util')


let targetUrl = process.argv[2];

console.log("Scanning " + process.argv[2]);

if (!targetUrl) return;

;(async function () {

  let result = await unfurl(targetUrl, {"ogp":true,"oembed":true,"twitter":true,"other":true})

  console.log('result', util.inspect(result, {showHidden: false, depth: null}))

})().catch(console.error)