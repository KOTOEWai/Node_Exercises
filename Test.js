/**
 * ⏰ 2 စက္ကန့်ကြာ စောင့်ဆိုင်းပြီး အောင်မြင်မှု (သို့) ပျက်ကွက်မှုကို ပြန်ပေးသော Promise
 * @param {boolean} success - အောင်မြင်စေလိုလျှင် true, ပျက်ကွက်စေလိုလျှင် false
 */
function waitAndReturn(success) {
    return new Promise((resolve, reject) => {
        // Asynchronous operation starts here (e.g., a timer, database query)
        console.log(`--- Promise started. Expecting success: ${success} ---`);

        setTimeout(() => {
            if (success) {
                // If the condition is met, call resolve()
                resolve("Data loaded successfully after 2 seconds."); 
            } else {
                // If an error occurs, call reject()
                reject(new Error("Network connection timed out."));
            }
        }, 2000); // Wait for 2000 milliseconds (2 seconds)
    });
}

// ----------------------------------------------------
// A. Successful Execution (အောင်မြင်သည့်အခြေအနေ)
console.log('\n>>> A. Testing SUCCESSFUL Promise...');

waitAndReturn(true)
    .then(result => {
        console.log('✅ RESOLVED:', result);
    })
    .catch(error => {
        console.log('❌ REJECTED:', error.message); // This block will be skipped
    });


// ----------------------------------------------------
// B. Failure Execution (ပျက်ကွက်သည့်အခြေအနေ)
console.log('\n>>> B. Testing FAILED Promise...');

waitAndReturn(false)
    .then(result => {
        console.log('✅ RESOLVED:', result); // This block will be skipped
    })
    .catch(error => {
        console.log('❌ REJECTED:', error.message);
    });

// Note: The two operations will run almost simultaneously, 
// and their results will appear after about 2 seconds.

/*
* ⏱️ Output timeline:
* 0s: >>> A. Testing SUCCESSFUL Promise...
* 0s: --- Promise started. Expecting success: true ---
* 0s: >>> B. Testing FAILED Promise...
* 0s: --- Promise started. Expecting success: false ---
* 2s: ✅ RESOLVED: Data loaded successfully after 2 seconds.
* 2s: ❌ REJECTED: Network connection timed out.
*/