const http = require('http');

// req = request, lo que recibe el servidor
// res = response, lo que devuelve el servidor
http.createServer((req,res)=>{
    /*console.log('Nueva peticion');
    res.writeHead(201,{'Content-Type':'text/html'});
    res.write('<h1>Estamos usando http ..</h1>');
    console.log(req.url)
    res.end();*/
    switch (req.url) {
        case '/perfil':
            res.writeHead(201,{'Content-Type':'text/html'});
            res.write('<h1>Bienvenido a tu perfil.</h1>');
            res.end();
            break;
        case '/users':
            // Simula la respuesta de una consulta a la BD
            const data = [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org"
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "phone": "010-692-6593 x09125",
                        "website": "anastasia.net"
                
                    },
                        {
                            "id": 3,
                            "name": "Clementine Bauch",
                            "username": "Samantha",
                            "email": "Nathan@yesenia.net",
                            "phone": "1-463-123-4447",
                            "website": "ramiro.info",
                        
                            }
            ];
            res.writeHead(201,{'Content-Type':'application/json'});
            res.write(JSON.stringify(data));
            res.end();
            break;
    
        default:
            res.write('<h1>la ruta no existe.</h1>');
            res.end();
            break;
    }
}).listen(5000);

console.log('Servidor funcionando ...');