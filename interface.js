document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("click", handleClick)
    })
})
function handleClick(event){
    let square = event.target
    let position = square.id
   if (handleMove(position)== true){

        setTimeout(()=>{
            alert("Fim de jogo - O vencedor foi " + playerTime)
        },10)
       
   }
    uptadeSquares();
}

function uptadeSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        let position = square.id
      let symbol = board[position]  
      if(symbol !=""){
          square.innerHTML = `<div class='${symbol}'></div>`
      }
    })
}