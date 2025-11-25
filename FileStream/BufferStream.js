//Buffer ဆိုတာက Binary Data (0,1) ကို temporary သိမ်းထားတဲ့ memory block ဖြစ်တယ်။

const buf = Buffer.from('Hello'); // create a buffer from a string
const buf2 = Buffer.from("World");
const ConcatBuffer = Buffer.concat([buf, buf2]);
console.log(ConcatBuffer.toString());
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf.byteLength);
console.log(buf[0]);

//create empty buffer
/*const buf2 = Buffer.alloc(10);// create an empty buffer of 10 bytes
buf2.write("HelloMingalarpar")
console.log(buf2.toString());
console.log(buf2.toJSON());
console.log(buf2.byteLength);

/*
alloc() လိုပဲ ဖန်တီးပေမယ့် အစောပိုင်း data တွေကို ရှင်းလင်းပေးခြင်း မရှိ ပါဘူး။ ဒါကြောင့် မြန်နှုန်းပိုပေမယ့် လုံခြုံရေးအတွက် သတိထားသင့်ပါတယ်။
*/
const buf3 = Buffer.allocUnsafe(10);// create an empty buffer of 10 bytes
buf3.write("HelloMingalarpar")
console.log(buf3.toString());
console.log(buf3.toJSON());
console.log(buf3.byteLength);
console.log(buf.write('Lee'));

