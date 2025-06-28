let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container");

let trun = true;

const resetGame = ()=>{
    trun = true;
    enabledBtn();
    msgContainer.classList.add("hide")
}

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box was click");
        if(trun === true){
            box.innerText = "X"
            trun = false;
            box.style.color ="red"
        }else{
            box.innerText = "O"
            box.style.color ="green"
            trun = true;
            
        }
    box.disabled = true;

    checkWinner();
    });
   
});

const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disabledBtn();
};

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);