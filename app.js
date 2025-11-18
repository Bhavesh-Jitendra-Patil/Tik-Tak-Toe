let boxes = document.querySelectorAll(".box");
let resetBut = document.querySelector(".resetBtn");
let gameButton = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turno = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

 const resetBtn = () =>{
    let turno = false;
    enableBoxes ();
    msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(turno === true){

            box.innerText = "X";
            turno = false;
        }
        else{

            box.innerText = "O";
            turno = true;
        }
        box.disabled = true;

        checkWinner ();
    });
});


const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (Winner) =>{
   msg.innerText = `Congractulation, Winner is ${Winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes ();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){

            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" , pos1Val); 
                showWinner(pos1Val);
            };
        };

    };
};

 resetBut.addEventListener("click", resetBtn)
 gameButton.addEventListener("click", resetBtn)