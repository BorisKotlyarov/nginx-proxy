const {Modules, Server, Middlewares} = require('just-rest');

Modules.define({
    GET: {
        '/': function (request, response) {
            const CorsAllowHeaders = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Set-Cookies, Access-Token'
            };

            Object.keys(CorsAllowHeaders).forEach((item) => {
                response.setHeader(item, CorsAllowHeaders[item]);
            });
            response.resp(process.env);
        }
    }
});

new Server({Modules, port: 3002});