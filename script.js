// let pen={
//     fullname:"parker",
//     price:25,
//     rating:5,
//     isdeal:true,
//     offer:5


// }
// console.log(pen);
// const linkdin={
// fullname:"shruti bari",
// posts:195,
// isfollow:true,
// bio : Apna
// ,


// };

// let marks=[85,97,44,37,76,60];
// let sum = 0;

// for(let val of marks){
//   sum  += val; 
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class=${avg}`);


// offer

// let items =[250,645,300,900,50];
//  let i=0;
//  for (let val of items ){
//      let offer= val/10;
//     items[i]=items[i]-offer;

 
//  console.log(`value after offer=${items[i]}`);
//  i++;
//  }
//  for(let val of items){
//    i  += val; 
//  }
//  let avg = i/items.length;
//  console.log(`avg  of the class=${avg}`);
// for loop

// let items =[250,645,300,900,50];
// for(i=0;i<=items.length;i++){
//     offer=items[i]/10;
//     items[i]-=offer;
//     console.log(items);
// }

// let foodItems =["panner","chips","mango","apple","orange"];
// //  foodItems.push("banana");
//  console.log(foodItems);
//  console.log(foodItems.toString());
//  console.log(foodItems);


// tostring

// let marks=[34,78,56,78];
// console.log(marks);
// console.log(marks.toString());
// console.log(marks);


// concate
// let hero=["superman","ironman","spiderman"];
// let marell=["thor","batman"];
// let superhero = hero.concat(marell);
// console.log(superhero);

// unshift
// let marell=["thor","batman"];
// marell.unshift(shaktiman);

// shift
// let marell=["thor","batman"];
// let val=marell.shift();
// console.log("deleted",val);

// slice
// let foodItems =["panner","chips","mango","apple","orange"];

// console.log(foodItems);
// console.log(foodItems.slice(1,3));

// splice
// let foodItems =[1,2,3,4,5,6,7];

// console.log(foodItems);
// console.log(foodItems.splice(1,3));

// let arr=[1,2,3,4,5];
// arr.splice(2,2,104,105);

// add Element
// let arr=[1,2,3,4,5];
//  arr.splice(2,0,105);
// practise

// let company=["Bloomberg","microsoft","uber","Google","IBM","netflix"];
// let val=company.shift();
//  console.log("deleted",val);
// company.splice(2,1,"ola");
// company.push("Amazon");


// FUNCTIONS AND METHODS

// function myfunction(msg){
// console.log(msg);
// }
// myfunction("i love js");


// function sum(x,y){
//     console.log(x + y);
//      }
//    sum();

// local variable
// functions parameters are like vairable of function


// arrow functions

// const arrowsum = (a,b) =>{
//     console.log(a+b);
// };
// const arrowmulti = (a,b) =>{
//     console.log(a*b);
// };


// practise 

// function countvowels(str){
//     let count=0;
//     for(let char of str){
       
//        if(
//         char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
//        ){
// count++
//     }
// }
// return count;

// }
// const countVow = (str) =>{
//     let count=0;
//          for(let char of str){
           
//             if(
//             char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
//            ){
//      count++
//          }
//      }
//      return count;
// }

// for each function
//  let arr=[1,2,3,4,5];
//  arr.forEach(function myfun(val) {
//     console.log(val);

//  });
// let arr=[1,2,3,4,5];
//  arr.forEach((val,inx,arr)=> {
//     console.log(val,inx,arr);

//  });
// square
// let num=[1,2,3,4];
// num.forEach((num)=> {
//     console.log(num*num);
// });


// MAP method
// let nums=[67,89,90];
// let newarr=nums.map(val=>{
//    return (val*val);
// });
// console.log(newarr);


// FILTER
// let arr=[2,4,5,7,8,9];
// let newarr=arr.filter((val)=>{
// return val %2===0;
// });
// console.log(newarr);

// grater than 3

// let arr=[2,4,5,7,8,9];
// let newarr=arr.filter((val)=>{
// return val >3;
// });
// console.log(newarr);

// REDUCE METHOD
// let arr=[2,4,6,7];
// const output = arr.reduce((res,Current)=>{
// return res+Current;
// });
// console.log(output);

// largest no
// let arr=[2,4,6,7];
// const output = arr.reduce((res,Current)=>{
// return res>Current? res:Current;
// });
// console.log(output);

// practise
// let arr=[78,89,95,45,96,93];
// const marks = arr.filter((val)=>{
// return val>90;

// }
// );
// console.log(marks);
// promt
// let n = prompt("enter any no");
// let arr=[];
// for(i=1;i<=n;i++){
//     arr[i-1]=i;

// }
// console.log(arr);
// let sum = arr.reduce((res,curr)=>{
//     return res+curr;

// }
// );
// console.log(sum);
// let factorial = arr.reduce((res,curr)=>{
//     return res*curr;

// }
// );
// console.log(factorial);

// DOM

// window
// console.log()//print
// console.dir//documnet//properties methods
// dom is html model
//  console.dir(document.body);
// document.body.childNodes[3].innerText ="abcd";

// DOm Manupulation

// selecting with id
// let heading=document.getElementById("heading");
// console.dir(heading);

// selecting Elementby class
//  let heading =  document.getElementsByClassName("heading");
//  console.dir("heading");

// selecting element by tag name
// let paragrphs=document.getElementsByTagName("p");
// console.dir(paragrphs);

// Query SELECTOR
// let element =document.querySelector("p");
// console.dir(element);

// let allel = document.querySelector("p");
// console.dir(allel);

// practise

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "from apna college students";

//  let div = document.querySelectorAll(".box");
//  console.dir(box.innerText);
// div[0].innerText="new box";
// div[1].innerText="old box";
// div[2].innerText="slim box";

// with loops
// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText = `unique value ${idx}`;
//     idx++;
// }

//  ATrribute tag
// class div img scr are attributes
// let div= document.querySelector("div");
// console.log(div);

//  let id = div.getAttribute("id");
//  console.log(id);

// let para= document.querySelector("p");
// console.log(para.getAttribute("class"));

// set attribute
// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// style change
// Node.style

// let div= document.querySelector("div");
// div.style.backgroundColor ="green";
// div.innerText = "Hello";
// div.style.fontSize ="22px";

//  Button
// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("hi");
// newHeading.innerHTML="<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading);

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);
// newBtn.style.color ="white";
// newBtn.style.backgroundColor ="red";
// document.querySelector("body").prepend(newBtn);

// EVENTS

// Event handling


// let button= document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("btn1 was cliked");

// }

// Event object

// let btn1= document.querySelector("#btn1");
// btn1.onclick = (e)=>{
//     console.log("e");
//     console.log("e.type");

//     console.log("e.target");
// }

// EVENT LISTERNER
// btn1.addEventListener("click",()=>
// {
//     console.log("buttonwas clicked");
    
// });
// btn1.addEventListener("click",()=>
//     {
//         console.log("buttonwas clicked");
        
//     });

//     const handler3=()=>
//         {
//             console.log("button3 was clicked");
            
//         };
//         btn1.addEventListener("click",handler3);
           
        

        // btn1.removeEventListener("click",handler3);

           
        // TOggle Btn
        

        // let modeBtn = document.querySelector("#mode");
        // let currmode="light";
        // modeBtn.addEventListener("click",()=>{
        //     if(currmode==="light"){
        //         currmode="dark";
        //         document.querySelector("body").style.background="black";

        //     }
        //     else{
        //         currmode="light";
        //         document.querySelector("body").style.background="white";

        //     }
        //     console.log(currmode);
        // });

        // Tic Tac TOE
        let boxes =document.querySelectorAll(".box");
        let resetBtn = document.querySelector("#reset-btn");
        let newGameBtn = document.querySelector("#newbtn");
        let msgcontainer = document.querySelector(".msg-container");
        let msg = document.querySelector("#msg");

        let turnO = true;
     const winPatterns =[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]

     ];
     const resetGame = ()=>{
        turnO=true;
        enableBoxes();
        msgcontainer.classList.add("hide");
     };
     boxes.forEach((box) => {
        box.addEventListener("click", () => {
                console.log("box was clicked");
              if (turnO){
                box.innerText ="O";
                turnO = false;
              }
              else{
                box.innerText ="X";
                turnO = true;
              }
              box.disabled = true;
              checkwinner();

                });

     });
     const disableBoxes =()=>{
        for(let box of boxes){
                box.disabled = true;
        }
     }
     const enableBoxes =()=>{
        for(let box of boxes){
                box.disabled = false;
                box.innerText="";
        }
     }

     const showwinner = (winner)=>{
msg.innerText =`congratulations,winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();

     };
     const checkwinner = ()=>{
for(pattern of winPatterns){
      let pos1tval = boxes[pattern[0]].innerText;
      let pos2tval = boxes[pattern[1]].innerText;
      let pos3tval = boxes[pattern[2]].innerText;
      if  (pos1tval !=="" && pos2tval !=="" && pos3tval !==""){
        if(pos1tval ===  pos2tval && pos2tval ===  pos3tval ){
                console.log("winner",pos1tval);

                showwinner(pos1tval);
        }
      }

}
     };
     
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

        
    



