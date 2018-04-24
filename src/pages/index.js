import React, { Component } from 'react'
import Link from 'gatsby-link'

 var url = 'http://gd.mlb.com/components/game/mlb/year_2018/month_04/day_23/master_scoreboard.json';
// var numOfGames = data.data.games.game.length;
let firstGame = [];

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
     firstGame = myJson.data.games.game.map
     (function(homeTeam) {
       firstGame = homeTeam.away_team_name
       
     });
  });
  

      
  



//   console.log(data.data.games.game[0].away_team_name + ' vs '+ data.data.games.game[0].home_team_name)
// //inject home team
//   document.getElementById('homeTeam').innerHTML = data.data.games.game[0].home_team_name;
// // inject away team
//   document.getElementById('awayTeam').innerHTML = data.data.games.game[0].away_team_name;
// //inject current status of game
//   document.getElementById('status').innerHTML = data.data.games.game[0].status.status;
// //inject home score
//   document.getElementById('homeScore').innerHTML = data.data.games.game[0].linescore.r.home;
// //inject away score
//   document.getElementById('awayScore').innerHTML = data.data.games.game[0].linescore.r.away;
// //inject start time
// document.getElementById('startTime').innerHTML = data.data.games.game[0].time;

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


const IndexPage = () => (
  <div>
    <h1>Baseball Games of the Day!!</h1>
      <div id='theGames'>
      <Greeting isLoggedIn={true} />
    
    {/* <div id='game'>
    
      <p id='homeTeam' />
      <p id='homeScore'/>
      <p id='awayTeam'/>
      <p id='awayScore'/>
      <p id='startTime'/>
      <p id='status'/>
    </div> */}

</div>

    
  </div>
)

export default IndexPage
