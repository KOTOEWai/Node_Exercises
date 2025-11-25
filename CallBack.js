//Callback Pattern ဆိုတာ
//➡ Function A မှာ Function B ကို parameter အဖြစ်ပေးပြီး
//➡ A လုပ်ဆောင်ပြီးရင် B ကို ပြန်ခေါ်အသုံးပြုတဲ့ pattern တစ်ခုပါ။

//Node.js က asynchronous architecture ဖြစ်တဲ့အတွက်
//callback pattern ကအရမ်းအရေးကြီးတယ်။



/*အလုပ်အပ်နှံခြင်း (Task Delegation)

Function A (သင်/ပိုင်ရှင်): သင်ဟာ မီးဖိုချောင်ထဲမှာ ချက်ပြုတ်နေတဲ့ Function A ဖြစ်ပါတယ်။

Function B (လက်ထောက်): Function A က အပြင်ကနေ ကြက်သွန်ဝယ်ခိုင်းဖို့ Function B ကို တာဝန်ပေးလိုက်တယ်။

Callback Function (လုပ်စရာအရာ): Function A က Function B ကို 
“မင်း ကြက်သွန်ဝယ်ပြီးတာနဲ့ ဒီ 'ဆီသတ်ပါ' ဆိုတဲ့ Function လေးကို ပြန်ခေါ်ပြီး လုပ်လိုက်နော်” ဆိုပြီး
 လုပ်စရာ function ကို စာအိတ်တစ်ခုလို ပေးလိုက်တယ်။

ဒီမှာ 'ဆီသတ်ပါ' ဆိုတဲ့ function က Callback ဖြစ်ပါတယ်။
 Function B ရဲ့ (ကြက်သွန်ဝယ်တဲ့) အလုပ် ပြီးဆုံးမှသာ Callback function (ဆီသတ်တဲ့အလုပ်) ကို
အလိုအလျောက် ပြန်ခေါ်ပေးတာ ဖြစ်ပါတယ်။
*/


//Example Code
function cookMeal(mealType, callback) {
   setTimeout(() => {
     console.log(`Cooking ${mealType}...`);
     callback();
   },3000)
    
  }
  
  function serveMeal() {
    console.log('Serving the meal. Enjoy your food!');
  }
  
  cookMeal('chicken', serveMeal);