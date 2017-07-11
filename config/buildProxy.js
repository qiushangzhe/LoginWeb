var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./url.json').toString());
const url = "http://127.0.0.1:12345/";
var result = 'module.exports = {';
console.log(config);

for(var item in config){
    var buffer = config[item];
    result += `\n\t\/\/${buffer.title}\n\t'${buffer.url}':{\n\t\ttarget:'${url}',\n\t\tchangeOrigin:true,\n\t\tpathRewrite:{\n\t\t\t'^${buffer.url}':'${buffer.url}'\n\t\t}\n\t},`;
}
result += '\n}';
console.log(result);
fs.writeFile('proxy.js',result);
