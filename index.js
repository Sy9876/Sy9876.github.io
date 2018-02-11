var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var server = http.createServer(function(request, response){

    var pathObj = url.parse(request.url, true);

    var staticPath = path.resolve(__dirname)

    var filePath = path.join(staticPath, pathObj.pathname)
    if(filePath.indexOf('favicon.ico') === -1){
        var fileContent = fs.readFileSync(filePath,'binary')
        response.write(fileContent, 'binary')
    }
    response.end()
})
server.listen(3000)
console.log('visit http://localhost:3000/index.html')
