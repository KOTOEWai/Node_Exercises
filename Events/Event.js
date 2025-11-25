
// EventEmitter က Node.js ထဲမှာ Event-Driven Architecture အတွက်အသုံးများတယ်။
//ဖြစ်ပျက်မှုတစ်ခုခု (Event) ကို နားထောင်ပြီး (Listen) တုံ့ပြန်ခြင်း (Respond) ကို လွယ်ကူစေပါတယ်။

/*
ဆိုကြပါစို့... 
- သင့်ရဲ့ ဖုန်းမှာ "မက်ဆေ့ချ်အသစ်ရောက်ပြီ" ဆိုတဲ့ event ဖြစ်တိုင်း
- သင့်ကို notification ပို့ပေးတာ → Event Emitter လိုမျိုးပါပဲ
*/



const EventEmit = require('events');
const EventEmitter = new EventEmit();

// Event ကို နားထောင်ခြင်း (Listen)
EventEmitter.on("start",(message)=>{
    console.log("Hello",message);
})
EventEmitter.on("end",(message)=>{
    console.log("Goodbye",message);
});
// Event ကို ထုတ်ပေးခြင်း (Emit)
EventEmitter.emit("start","Welcome to Node.js Event Emitter Example");
EventEmitter.emit("end","See you again!");

//=========================================//==========================================================//

//remove listener
const farewellListener = (message)=>{
    console.log("Farewell:",message);
}
EventEmitter.on("farewell",farewellListener);
EventEmitter.removeListener("farewell",farewellListener);

//=========================================//==========================================================//


// One-time listener
EventEmitter.once("onlyOnce",(message)=>{
    console.log("This will be logged only once:",message);
});
EventEmitter.emit("onlyOnce","First Call");
EventEmitter.emit("onlyOnce","Second Call - This won't be logged");



//=========================================//==========================================================//


const DownloadManager = require("./Extend_EventEmitter");

const downloader = new DownloadManager();

// Add event listeners
downloader.on("start", (file) => {
  console.log(`Download started for: ${file}`);
});

downloader.on("progress", (percent) => {
  console.log(`Downloading... ${percent}%`);
});

downloader.on("complete", (file) => {
  console.log(`Download completed: ${file}`);
});


// Start download
downloader.download("movie.mp4");

