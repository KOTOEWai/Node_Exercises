
# 🚀 What is Node.js Runtime?

Node.js Runtime is the environment that allows JavaScript to run **outside the browser**, such as on servers, terminals, or desktop systems.


## The Node.js System --- Architecture Overview

This diagram illustrates how **Node.js** internally works --- from
running JavaScript code to performing asynchronous operations using
**Libuv**, worker threads, and the event loop.

<img width="796" height="359" alt="image" src="https://github.com/user-attachments/assets/580d7305-cd71-448d-a4f0-126c91a2be56" />


## 🚀 1. Node.js Application

This is the JavaScript code written by the developer.

Examples:

console.log()

fs.readFile()

setTimeout()

Server logic, API endpoints, utilities

Everything starts from here.

## 2. JavaScript Engine (V8)

The V8 engine:

Parses JavaScript
Compiles it into machine code
Executes your JavaScript functions
But V8 cannot access the file system, network, or OS directly — it only executes JS.

## 3. Node.js Bindings (C++ Layer)

Node bindings are the bridge between JavaScript → C++ → Operating System.

They:

Translate JS functions (like fs, http, crypto) into system-level operations

Expose Node.js APIs to JavaScript

Allow JS to use OS features indirectly

Example:
fs.readFile() → Node.js Bindings → Libuv Thread Pool → OS

## 4. Libuv (Asynchronous I/O Engine)

This is the heart of the Node runtime.
libuv handles all asynchronous tasks.

It contains:

Event Queue

Event Loop

Thread Pool / Worker Threads

### 5. Event Loop 

The circle in the diagram.

The event loop decides:

When to execute a callback

When to wait

When to send tasks to worker threads

It runs forever as long as there is work to do.

The event loop makes Node.js:
✔ Non-blocking
✔ Asynchronous
✔ Fast

### 6. Worker Threads
These handle heavy/blocking tasks:

File system (read/write big files)

Network requests

DNS lookups

Compression

Encryption

When Node needs to run something slow or blocking, it sends it to worker threads.

While worker threads work, the event loop continues handling other tasks.

This is why Node.js can serve thousands of requests at once.


## Summary
Step-by-step:

1️⃣ Your JavaScript code runs in V8
2️⃣ You call something like fs.readFile()
3️⃣ Node Bindings send it to libuv
4️⃣ libuv puts it into the Event Queue
5️⃣ libuv’s Thread Pool works on the request (if blocking)
6️⃣ When done, libuv sends the callback to the Event Loop
7️⃣ Event Loop executes your callback in JavaScript
➡️ Your code continues smoothly

---
## 🚀 What is a Thread Pool in Node.js?

Node.js is known as a single-threaded environment (because your JavaScript runs on one main thread),
BUT Node.js internally uses multiple threads for heavy work.

These threads live in something called the Thread Pool.

Thread Pool = A group of background threads used by Node.js to handle slow or blocking tasks.



## Why does Node.js need a Thread Pool?

Because JavaScript is single-threaded,
if Node.js only used one thread, slow tasks would block the entire application.

Examples of slow/blocking tasks:

File system operations (fs.readFile, fs.writeFile)

DNS lookups

Compression (zlib)

Encryption (crypto.pbkdf2, crypto.scrypt)

Some network tasks

Instead of blocking the main thread, Node sends these tasks to the Thread Pool.

## How it Works

### 1. You call something like:
```js
fs.readFile("file.txt", callback);
```

### 2.Node cannot read the file using JavaScript alone
→ It hands the job to libuv.

### 3.libuv assigns it to one thread inside the Thread Pool.

### 4.That thread performs the file operation behind the scenes.

### 5.When finished, the result is sent back to the Event Loop.

### 6.The Event Loop runs your callback function.
---
## 🔢 Default Thread Pool Size

* Node.js Thread Pool has 4 threads by default.
* You can change it:

```js
set UV_THREADPOOL_SIZE=8
```


## 🧠 Important Note

Not all operations use the Thread Pool.

## 🟢 Uses Thread Pool:

* File system
* DNS (some)
* Crypto operations
* Compression (zlib)

## 🔵 Does NOT use Thread Pool:

* Most network operations (handled by OS kernels)

* Timers (setTimeout)

* Promises / microtasks
---



## 🚀 What is the Event Loop?


```
Event Loop ဆိုတာ Node.js ကို non-blocking, asynchronous (တစ်ပြိုင်နက်တည်း လုပ်ဆောင်နိုင်တဲ့) လုပ်ဆောင်မှုတွေကို single-threaded (အဓိက thread တစ်ခုတည်း) နဲ့ လုပ်နိုင်အောင် စီမံခန့်ခွဲပေးတဲ့ အဆောက်အအုံ (Architecture) တစ်ခုပါ။

အနှစ်ချုပ်အားဖြင့် Node.js မှာ JavaScript code တွေက thread တစ်ခုတည်းမှာ အလုပ်လုပ်ပါတယ်။ ဒါပေမဲ့ File I/O (ဖိုင်ဖတ်တာ၊ ရေးတာ)၊ Networking (ကွန်ယက် ချိတ်ဆက်တာ) လိုမျိုး အချိန်ကြာတဲ့ အလုပ်တွေကို စောင့်မနေဘဲ နောက်ထပ်အလုပ်တွေကို ဆက်လုပ်နိုင်ဖို့ Event Loop က စီစဉ်ပေးပါတယ်။

Libuv: Event Loop ကို implement လုပ်ထားတဲ့ libuv library ဟာ C/C++ နဲ့ ရေးသားထားပြီး၊ အချိန်ကြာတဲ့ I/O (Input/Output) လုပ်ငန်းတွေကို OS kernel (ကွန်ပျူတာရဲ့ စက်မောင်းနှင်မှုစနစ်) ကို လွှဲပြောင်းပေးပြီး (သို့မဟုတ်) Thread Pool ကိုသုံးပြီး နောက်ကွယ်မှာ အလုပ်လုပ်စေပါတယ်။

ဒီလို လုပ်ငန်းတွေ ပြီးသွားရင် callback function တွေကို Event Queue ထဲကို ထည့်ပေးပြီး၊ Event Loop က main thread မှာ အလုပ်မရှိတဲ့အချိန် (Call Stack လွတ်တဲ့အချိန်) မှာ အဲဒီ callback တွေကို ပြန်ထုတ်ယူပြီး execute လုပ်ပေးပါတယ်။
```
* The Event Loop is the “brain” of JavaScript’s runtime. Since JavaScript runs on a single thread, it cannot do many things at once by itself.
But real apps need to do many things:

* Read files

* Make API calls

* Wait for timers

* Handle user input

* Access databases

* Network communication

If JavaScript waited for each of these things blocking, the whole program would freeze.

So…
The Event Loop solves this problem.

---

* The Event Loop is a system inside JavaScript/Node.js that manages asynchronous tasks and decides when each callback should be executed.

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

```
* Output:
```js

A
D
C
B

```

Why?

### 1.A → main code

### 2.D → main code

### 3.C → microtask

### 4.B → macrotask (timer)

This is the event loop’s scheduling.

---
* 🖥 Event Loop in Node.js vs Browser
```
| Feature         | Browser            | Node.js                                    |
| --------------- | ------------------ | ------------------------------------------ |
| Web APIs        | DOM, fetch, timers | libuv thread pool, fs, net, timers         |
| Microtask Queue | Promises           | Promises + process.nextTick                |
| Extra Phases    | none               | 6 phases (timers, I/O, poll, check, close) |
```
### Node.js event loop is more complex because it handles real network + filesystem operations.

<img width="892" height="721" alt="image" src="https://github.com/user-attachments/assets/1da9de3c-6b3e-4c07-9454-14ebe8c840a7" />











