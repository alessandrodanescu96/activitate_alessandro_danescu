      const options = document.querySelectorAll(".options");
      let pScore = 0;
      let cScore = 0;

        var pScoreElement = document.getElementById("p-score");
        var cScoreElement = document.getElementById("c-score");
        
  
        options.forEach((option) => {
        option.addEventListener("click", function () {
          const pInput = this.value;
  
          const cOptions = ["Rock", "Paper", "Scissors"];
          const cInput = cOptions[Math.floor(Math.random() * 3)];
          
          updateMoves(pInput, cInput);
          compareInputs(pInput, cInput);
          updateScore();
          if(checkWinner()){
            pScore = cScore= 0;
            updateScore();
          }
        });
      });
  
      function updateMoves(pInput, cInput){
        document.getElementById("p-move").src = `./assets/${pInput}.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}.svg`;
      }
  
  
      function compareInputs(pInput, cInput) {
        const currentMatch = `${pInput} vs ${cInput}`;
        if (pInput === cInput) {
          alert(`${currentMatch} is a Tie`);
          return;
        }
  
        if (pInput === "Rock") {
          if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Paper
        else if (pInput === "Paper") {
          if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Scissors
        else {
          if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
      }
  
      function updateScore() {
        pScoreElement.textContent = pScore;
        cScoreElement.textContent = cScore;
      }
  
      function checkWinner() {
        var ABC = pScore === 5;
        if (ABC || cScore === 5) {
          const winner =
             ABC
              ? "You win the game! Congratulations!"
              : "Computer wins the game! Try again next time!";
          alert(winner);
          return true;
        }
        return false;
      }