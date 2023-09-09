const totalScore = { playerChoice : 0, computerChoice:0 }
function getComputerChoice() {
  const rpsChoice = ['Rock','Paper','Scissors']
  const randomChoice = Math.floor(Math.random()*3)
  return rpsChoice[randomChoice]
}
function getResult(playerChoice,computerChoice) {
  let score = 0
  if(playerChoice == computerChoice){
    score = 0
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }else{
    score = -1
  }
  return score
}
function showResult(score,playerChoice,computerChoice){
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if(score == -1){
    resultDiv.innerText = 'You Lose!'
  }else if(score==0){
    resultDiv.innerText = "It's a Tie"
  }else{
    resultDiv.innerText = 'You Won!'
  }
  handsDiv.innerText = `👱: ${playerChoice} vs 🤖: ${computerChoice}`
  playerScoreDiv.innerText = ` Your Score : ${totalScore['playerChoice']}`
}
function onClickRps(rpsButton){
  // console.log({rpsButton})
  const computerChoice = getComputerChoice()
  const playerChoice = rpsButton
  const score = getResult(playerChoice,computerChoice)
  if(score==1){
    totalScore['playerChoice']+=score
    totalScore['computerChoice']-=score
  }else{
    totalScore['computerChoice']-=score
    totalScore['playerChoice']+=score
  }
  console.log({computerChoice})
  console.log({playerChoice}) 
  console.log({score})
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)

}
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(button => {
    button.onclick = () => onClickRps(button.value)
  })
  const endGameDiv = document.getElementById('endGameButton')
  endGameDiv.onclick = () => endGame()
}
function endGame(){
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
  totalScore['playerChoice'] = 0
  totalScore['computerChoice'] = 0

}
playGame()