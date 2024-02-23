let count=0;
let id=0;
let count2=0
const startbtn=document.querySelector(".start");
let win=true
const Gameboard={
    rows:3,
    colum:3,
    gameboard:[[0,1,2],[3,4,5],[6,7,8]]
}

function createPlayers(){
    const player1={
        movement:"X",
        turn:1,
    }
    const player2={
        movement:"O",
        turn:2
    }
}





const update=()=>{
    alert("asd")
    gameboardcreate();
    end()

 
};
function displayDom(){

    const container=document.querySelector(".container")
    function player(){
        for (let i = 0; i < Gameboard.gameboard.length; i++) {
            for (let j = 0; j < Gameboard.gameboard[i].length; j++) {
                const div=document.createElement("div");
            
                div.className=` div a${id}`
                container.appendChild(div);
                id++
                div.addEventListener("click",(e)=>{
                    if(e.target.textContent=="O"||e.target.textContent=="X"){
                        div.style.cursor="default"
                    }else{
                        div.textContent="X";
                        div.style.color="green"
                        count++
                        console.log(Gameboard.gameboard,j)
                     
                        div.style.cursor="default";
                        detecwin("X");
                        console.log(win)
                        if(win){
                            computer()
                        }
                   
                        
                    
                     
                    }
                
                })
             
             
                
               
            }
         
        }
    }
   function computer(){

    const alldivs=document.querySelectorAll(".div");
    let random=Math.floor(Math.random()*9);
 
    if(alldivs[random].textContent=="O"||alldivs[random].textContent=="X"){
        computer()
    }else{
        count2++
 
        alldivs[random].textContent="O"
        alldivs[random].style.cursor="default"
        alldivs[random].style.color="red"
        setTimeout(() => {
            detecwin("O")
        }, 500);
    }




console.log(Gameboard.gameboard)

console.log(container)  
   }
   player()
  
}

function detecwin(marc){

    let trues=true;
    const dialog=document.querySelector("dialog");
    const alldivs=document.querySelectorAll(".div"); 
   for (let i = 0; i < 9; i++) {
        if(i==0 || i==3 || i==6){
            if(alldivs[i].textContent==marc && alldivs[i+1].textContent==marc && alldivs[i+2].textContent==marc){
                dialog.textContent=`The winner is: ${marc}`
                dialog.showModal();
                dialog.style.animation="ala 1s  alternate"
                win=false
                end()
            }else{
                continue
            }
        }
   }
   for (let i = 0; i < 3; i++) {
        if(alldivs[i].textContent==marc && alldivs[i+3].textContent==marc && alldivs[i+6].textContent==marc){
           
            dialog.textContent=`The winner is: ${marc}`
            dialog.showModal();
            dialog.style.animation="ala 1s  alternate"
            win=false
            end()
        }
  
}
for (let i = 0; i < 9; i++) {
    if(i==0){
        if(alldivs[i].textContent==marc && alldivs[i+4].textContent==marc && alldivs[i+8].textContent==marc){
            dialog.textContent=`The winner is: ${marc}`
            dialog.showModal();
            dialog.style.animation="ala 1s  alternate"
            win=false
            end()
        }
    }
    else if(i==2){
        if(alldivs[i].textContent==marc && alldivs[i+2].textContent==marc && alldivs[i+4].textContent==marc){
            dialog.textContent=`The winner is: ${marc}`
            dialog.showModal();
            dialog.style.animation="ala 1s  alternate";
            win=false
            end()
        }
    }else{
        continue
    }
    
}
console.log(trues)
 if(count==5 && trues){
    win=false
    dialog.textContent=`It a draw`
            dialog.showModal();
            dialog.style.animation="ala 1s  alternate";
     end()
    }
function end(){

    trues=false
    const container=document.querySelector(".container");
    const dialog=document.querySelector("dialog");
    dialog.addEventListener("click",()=>{
        dialog.close();
        
    container.innerHTML=``;

    })

  
    
}
  
    // if(gameboard.gameboard[0].every((ever)=>ever==marc)||
    //  gameboard.gameboard[1].every((ever)=>ever==marc)||
    //  gameboard.gameboard[2].every((ever)=>ever==marc)){
         
         
    //      alert(player)
    //      alert("adssaasdd")
    //      end()
    // }else if((gameboard.gameboard[0][0]==marc 
    // && gameboard.gameboard[1][1]==marc 
    // && gameboard.gameboard[2][2]==marc)
    // ||
    // (gameboard.gameboard[0][2]==marc 
    // && gameboard.gameboard[1][1]==marc 
    // && gameboard.gameboard[2][0]==marc) ){
    //  alert("adssadadsasddsa")
    //  alert(player)
    //  end()
    // }else if(gameboard.gameboard[0][0] ==marc
    //  &&gameboard.gameboard[1][0]==marc 
    //  && gameboard.gameboard[2][0]==marc){
    //      alert(player)
    //      end()
    //  }
    //  else if(gameboard.gameboard[0][1] ==marc
    //      &&gameboard.gameboard[1][1]==marc 
    //      && gameboard.gameboard[2][1]==marc){
    //          alert(player)
    //          end()
    //      }
    //      else if(gameboard.gameboard[0][2] ==marc
    //          &&gameboard.gameboard[1][2]==marc 
    //          && gameboard.gameboard[2][2]==marc){
    //              alert(player)
    //              end()
    //          }
     
    
    // else if(count==5){
    //  alert("empataste")
    //  end()
    // }
    
    
 }
 startbtn.addEventListener("click",()=>{
    win=true
    count=0;
    count2=0
    const container=document.querySelector(".container");
    container.innerHTML=``;
    displayDom()
 })

















// function gameboardcreate(){
   
//     console.log(Gameboard.gameboard[0])
//     console.log(Gameboard.gameboard[1]);
//     console.log(Gameboard.gameboard[2])
    
//     function playerMove(){
//         console.log(count)
     
        
//                 let column=prompt("ingrese la  columna")
//                 let row=prompt("ingrese la  fila");
//                 if(column>=3 ||row>=3||column==""||row==""){
//                     alert("seleccione una casilla valida")
//                     playerMove()
//                 }else{
//                     if(Gameboard.gameboard[column][row]=="X"||Gameboard.gameboard[column][row]=="O"){
//                         alert("el valor ya fue insertado en esa posicion");
//                         playerMove()
//                    }else{
//                     count++
//                     Gameboard.gameboard[column][row]="X";
//                     console.clear()
//                     console.log(Gameboard.gameboard[0])
//                     console.log(Gameboard.gameboard[1]);
//                     console.log(Gameboard.gameboard[2]);
                  
//                     detecwin(Gameboard,"X","ganaste")
//                     computer()
                    
                  
//                    }
                
             
        
//             }
    
        
       
//     }
//     function computer(){
       
        
//             let column=Math.floor(Math.random()*3);
//             let row=Math.floor(Math.random()*3);
//             if(Gameboard.gameboard[column][row]=="O"||Gameboard.gameboard[column][row]=="X"){
//                 computer()
//            }else{
//             Gameboard.gameboard[column][row]="O";
//             console.clear()
//             console.log(Gameboard.gameboard[0])
//             console.log(Gameboard.gameboard[1]);
//             console.log(Gameboard.gameboard[2])
            
//                 detecwin(Gameboard,"O","Perdiste")
//                 playerMove()
            
            
           
       
//         }
   
     
   
//     }
//     playerMove()


// }
