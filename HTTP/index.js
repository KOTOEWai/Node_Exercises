/*

HTTP Module ဆိုတာဘာလဲ?

http module က Node.js ထဲမှာတင် built-in ပါပြီး
Web Server တစ်ခုကို အလွယ်တကူ create လို့ရအောင်လုပ်ထားတဲ့ tool လို့ပြောလို့ရတယ်။

Browser က Server ကို Request ပို့ → Server က Response ပြန်ပေး
ဒီလုပ်ငန်းစဉ်များအားလုံးကို handle ပေးနိုင်တယ်။

*/
const http = require('http');
const server = http.createServer((req, res) => {
const fs = require('fs');
   // res.writeHead(200,{"Content-Type": "text/plain" })


   // res.statusCode = 200;
  //  res.setHeader('Content-Type', 'text/plain');
  //  res.end('Hello World');


 /* res.setHeader('Content-Type', 'application/json');
  const superHero = {
           firstName: "Bruce",
           LastName: "Wayne",
           age: 40,
  }
  res.end(JSON.stringify(superHero));
  */


 //  res.setHeader('Content-Type', 'text/html');
  // res.end('<h1>Hello World</h1>');


 // res.writeHead(200,{"Content-Type": "text/html" })
 // const html = fs.readFileSync('./index.html',"utf-8");
 // res.end(html)
 
 res.end(req.url)
 if(req.url === '/'){
    res.end('Home Page')
 }
 else if(req.url === '/about'){
    res.end('About Page')
 }
 else if(req.url === '/contact'){
    res.end('Contact Page')
 }
 else{
    res.writeHead(404,{"Content-Type": "text/html" })
    const html = fs.readFileSync('./404.html',"utf-8");
    res.end(html)
 }
 
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

