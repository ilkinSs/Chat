"use strict"

const footer = document.querySelector('.footer')
const container = document.querySelector('.container')
const trash = document.querySelector('.trash')
const sendMessage = document.querySelector('.sendMessage')

footer.onclick = function()
{
    container.classList.remove('d-none')
    footer.classList.add('d-none')
    footer.classList.remove('d-flex')
}

// burda chatin gorsenib gorsenmemeyini elemiwem))

const chatbox = document.querySelector('.chatbox')
const input = document.querySelector('input')

input.onkeydown = function(e)
{
    if(e.keyCode === 13){

        const inputValue = input.value.trim()
        
        if(inputValue === ''){
            return;
        }
        console.log(inputValue)
        if(inputValue[0].toUpperCase() !== inputValue[0]){
            const user2 = document.createElement('div')
            user2.className = "user2 d-flex justify-content-end"
            let user2Message = document.createElement('p')
            user2Message.innerText = inputValue
            let user2Img = document.createElement('img')
            user2Img.setAttribute("src", "img/user2.jpg");
            chatbox.appendChild(user2)
            user2.appendChild(user2Message)
            user2.appendChild(user2Img)
            input.value = ''

            user2.addEventListener('click', function(){
                if(!user2.classList.contains('selected')){
                    user2.classList.add('selected')
                   
                   

                }
                else{
                    user2.classList.remove("selected")
                   
                }
            });
            trash.addEventListener('click', function(){
                if(user2.classList.contains('selected')){
                    user2.remove()
                    trash.classList.add('d-none')
                }
            })
          
            user2.addEventListener("click",function(){
                for( let i = 0; i < chatbox.children.length; i++){
                    if(chatbox.children[i].classList.contains('selected')){
                        trash.classList.remove('d-none')
                        break
                    }
                    else if(!chatbox.children[i].classList.contains('selected')){
                        trash.classList.add('d-none')
                    }
                }
            })
        }else{
            const user1 = document.createElement('div')
            user1.className = "user1 d-flex"
            let user1Message = document.createElement('p')
            user1Message.innerText = inputValue
            let user1Img = document.createElement('img')
            user1Img.setAttribute("src", "img/user1.png");
            chatbox.appendChild(user1)
            user1.appendChild(user1Img)
            user1.appendChild(user1Message)
            input.value = ''
            user1.addEventListener('click', function(){
                if(!user1.classList.contains('selected')){
                    user1.classList.add('selected')
                   
                }
                else{
                    user1.classList.remove("selected")
                   
                }
            });
            trash.addEventListener('click', function(){
                if(user1.classList.contains('selected')){
                    user1.remove()
                    trash.classList.add('d-none')
                }
            })
            user1.addEventListener("click",function(){
                for( let i = 0; i < chatbox.children.length; i++){
                    if(chatbox.children[i].classList.contains('selected')){
                        trash.classList.remove('d-none')
                        break
                    }
                    else if(!chatbox.children[i].classList.contains('selected')){
                        trash.classList.add('d-none')
                    }
                }
            })
        }
    }
    }

    
 
// burda kamal abiynen inputun valuesini goturduk, ve bowluglara YOX dedik














//  const textInput = document.getElementById('text-input')
// //  const div = document.getElementById('input-base')


// textInput.onkeydown = function(e)
// {
//     if(e.keyCode === 13)
//     {
//         const userInput = textInput.value.trim();
//         console.log(userInput);
        
//         //let div = document.createElement('div');
//         // //div.innerText(userInput);
//         // document.body.div.appendChild(userInput);
        
        
// }
// }
            


//removes last element
// btnRemove.onclick = () => {
//     menu.lastChild.remove();
// }

// document.body.oncontextmenu = function(){
//     // const index = Math.round(Math.random() * colors.length - 1);
//     document.body.style.backgroundColor = RandomColorGenerator();
// }

// setInterval(function(){
//     document.body.style.backgroundColor = RandomColorGenerator();
// }, 1000)































//  let min=(a,b)=>{
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }



// console.log(min(5,5))




// let userInput = prompt('regemleri yaz')


//min(10,5);






// let a=4 
// let b=2

// let min =(a,b) => {
// //   if (a>b){
// //       return b;
// //   }
// //   else {return a}

// a>b ? return (b):null;

// }

// alert(min(a,b))


// function pow(x,n) {
//     let A = 1
//   for (let i = 0; i < n; i++) {
//       A *= x
//   }
//     return(A)
// }

// alert(pow(2,4))





// let array = [200, 10, 6, 23, 34];

// function filterRange(arr, a, b){
//     let results = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= a && arr[i] <= b){
//             results.push(arr[i]);
//         } 
        
//     }
//     return results;
// }



// alert(filterRange(array, 2, 24));