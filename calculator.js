// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);})}
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }`   
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }





let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('.item');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText=e.target.value;
        console.log("Button text is",buttonText);

        if(buttonText=='='){
            screen.value=eval(screen.value)
        }

        else if(buttonText=='AC'){
            screenvalue = "";
            screen.value=screenvalue 
        }

        else if(buttonText=='DEL'){
            screen.value=screen.value.slice[0,-1]
        }

        else{
            screenvalue+=buttonText;
            screen.value=screenvalue
        }

    })
}