const playerList = []
const playerLists = document.querySelector("#player-list");


function addPlayer(event) {
   
event.preventDefault()
  
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const country = document.querySelector("#country").value;
  const score = document.querySelector("#score").value;
  const playerData = {
    name:`${firstName} ${lastName}`, country:country, score:Number(score)
  }
  playerList.push(playerData)
  playerList.sort((player1, player2)=>parseInt(player2.score)- parseInt(player1))
  playerList.innerHTML = " "

  for(let i=0; i<playerList.length; i++){
    const player = playerList[i];
    const liEl = document.createElement("li");
    liEl.classList.add("bkc")
    const nameContent = document.createElement("span");
    const countryContent = document.createElement("span");
    const scoreContent = document.createElement("span");
    
    const increaseScore = document.createElement("button")
    const decreaseScore = document.createElement("button")
    increaseScore.innerText = "Increase"
    decreaseScore.innerText = "Decrease"
    increaseScore.setAttribute("onclick", `increaseScoreHandler(${i})`)
    decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${i})`)

  
    scoreContent.innerText = player.score;
    countryContent.innerText = player.country;
    nameContent.innerText = player.name
    console.log(nameContent)
    liEl.append(nameContent, countryContent, scoreContent, increaseScore, decreaseScore);
    console.log(firstName)
    playerLists.append(liEl);
  }
 
}
function refreshList(){
  
    playerList.sort((player1, player2)=>parseInt(player2.score)- parseInt(player1))
    playerList.innerHTML = " "

    for(let i=0; i<playerList.length; i++){
      const player = playerList[i];
      const liEl = document.createElement("li");
      liEl.classList.add("bkc")
      const nameContent = document.createElement("span");
      const countryContent = document.createElement("span");
      const scoreContent = document.createElement("span");
      
      const increaseScore = document.createElement("button")
      const decreaseScore = document.createElement("button")
      increaseScore.innerText = "Increase"
      decreaseScore.innerText = "Decrease"
      increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`)
      decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`)
  
    
      scoreContent.innerText = player.score;
      countryContent.innerText = player.country;
      nameContent.innerText = player.name
      console.log(nameContent)
      liEl.append(nameContent, countryContent, scoreContent, increaseScore, decreaseScore);
      console.log(firstName)
      playerLists.append(liEl);
}
}
function increaseScoreHandler(i){
    playerList[i].score += 5

}
function decreaseScoreHandler(i){
    playerList[i].score -=5
}
