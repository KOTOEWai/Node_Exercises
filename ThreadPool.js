/*
Node.js – crypto Module ဆိုတာဘာလဲ? 

crypto က Node.js မှာ encryption (စာဝှက်ရေးခြင်း), hashing, random values ထုတ်ခြင်း, digital signatures, tokens စတဲ့ security-related operations တွေကိုလုပ်ဖို့အတွက် built-in library တစ်ခုပါ။

Browser JavaScript မှာ တိုက်ရိုက် crypto API မရှိဘဲ (modern Web Crypto API though),
Node.js က server-side အတွက် အလွန်စွမ်းအားပြင်းတဲ့ cryptography tools တွေကို crypto module ဖြင့်ပေးထားပါတယ်။

*/


//what is Thread Pool?
/*
Thread Pool ဆိုတာက operating system level မှာ threads တွေကို စီမံခန့်ခွဲဖို့အတွက် အသုံးပြုတဲ့ mechanism တစ်ခုပါ။
Threads တွေက program execution ရဲ့ smallest sequence of programmed instructions တွေဖြစ်ပြီး၊
thread pool က ဒီ threads တွေကို pre-create လုပ်ထားပြီး၊ လိုအပ်တဲ့အချိန်မှာ အလုပ်တွေကို assign လုပ်ပေးနိုင်ပါတယ်။

*/
//How to workd Thread Pool in Node.js?
/*
Node.js က single-threaded event loop architecture ကို အသုံးပြုတဲ့ runtime ဖြစ်ပေမယ့်၊
အချို့သော operations တွေကို (I/O operations, file system operations, cryptographic operations စတဲ့) 
multi-threading နည်းလမ်းဖြင့် ပြုလုပ်နိုင်ဖို့အတွက် thread pool ကို အသုံးပြုပါတယ်။
Node.js မှာ libuv library က thread pool ကို စီမံခန့်ခွဲပြီး၊
asynchronous operations တွေကို non-blocking way နဲ့ ပြုလုပ်နိုင်ဖို့ အထောက်အကူပြုပါတယ်။

*/

//This is ThreadPool Example for crypto module in Node.js

const crypto = require("crypto");

//console.log("Synchronous PBKDF2 Hashes:");
//console.log(crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512").toString("hex"));
//console.log(crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512").toString("hex"));


process.env.UV_THREADPOOL_SIZE = 6; // default is 4 you can change it up to 128
const Max_Calls = 6; // when Max_Calls is more than 4, you can see the difference clearly
//thread pool has default size of 4





// pbkdf2 is a password-based key derivation function
// to hash password before storing it in the database
const start = Date.now();
for (let i = 0; i < Max_Calls; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512",()=>{
     console.log(`Hash : ${i + 1}` , Date.now() - start);
  });
}
console.log("Asynchronous PBKDF2 Calls Initiated");

/*
အထက်ပါ code မှာ pbkdf2Sync() function ကို synchronous way နဲ့ အသုံးပြုပြီး password ကို hash လုပ်ထားပါတယ်။
ပြီးတော့ pbkdf2() function ကို asynchronous way နဲ့ အသုံးပြုပြီး password hashing ကို non-blocking way နဲ့ ပြုလုပ်ထားပါတယ်။

*/




/*
when we have only one call to pbkdf2 it 
takes one thread  which takes one core of CPU
this takes approximately 270 milliseconds to complete




when we have multiple calls to pbkdf2 it
  takes multiple threads from thread pool which takes multiple cores of CPU
  and we can see the performance improvement clearly when we increase the number of calls
  and also we can see the effect of changing the UV_THREADPOOL_SIZE environment variable  


*/