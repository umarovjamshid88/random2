// var num1 = +prompt('1 num');
// var num2 = +prompt('2 num');
// var ans;
// var op;
// function random(){
//      let num = Math.floor(Math.random()*4+1);
//      return num;
//     }    
//     if(random() == 1){
//           op = '+';
//     }else if(random() == 2){
//           op =  '-';
//     }else if(random() == 3){
//          op =  '/';
//     }else if(random() == 4){
//          op =  '*';
//     }else{
//         op = '+';         
//     }    
//     var otv = +prompt(num1 +op+ num2); 
//     var ans = num1 + op + num2;    
//     if (op == '+'){
//         ans = num1 + num2
//     }else if(op ==  '-'){
//         ans = num1 - num2
//     }else if(op ==  '/'){
//         ans = num1 / num2
//     }else if(op ==  '*'){
//         ans = num1 * num2
//     }  
//    if (ans == otv) {
//        console.log('yes');
//    } else {
//        console.log('no');
//    }

   
// console.log(otv);
// console.log(ans);



function ran(min, max){
    let num = Math.floor(Math.random()*(max+1-min) + min);
    return num;
}
function random(){
        let ranam = Math.floor(Math.random()*4+1);
        return ranam;
    } 
     
var minInt = +prompt('enter minimum number');
var maxInt = +prompt('enter maximim number');
var sum =  +prompt('how many task you want to do');
var countTrue = 0;
var countWrong = 0;
var op;
for(let i = 0; i < sum; i++ ){
    var num1 = ran(minInt,maxInt);
    var num2 = ran(minInt,maxInt);       
     if(random() == 1){
           op = '+';
        }else if(random() == 2){
            op = '-';
        }else if(random() == 3){
            op = '/';
        }else if(random() == 4){
            op = '*';
        }  else{
            op = '+';
        }
    var prim = +prompt(num1 + op + num2 + '=');
    var ans = num1 + op + num2;    
    if (op == '+'){
        ans = num1 + num2
    }else if(op ==  '-'){
        ans = num1 - num2
    }else if(op ==  '/'){
        ans = num1 / num2
    }else if(op ==  '*'){
        ans = num1 * num2
    }  
    if (ans == prim) {
        countTrue++;
        console.log('you are right ' );
    } else {
        countWrong++;
        console.log('you are wrong ' + ' right answer is ' + ans );
    }
}
console.log('we had ' + sum + ' tasks' + ' you answerd to ' + countTrue + ' question right '  + ' and ' + ' you answered to ' + countWrong + ' question wrong do it well next time');