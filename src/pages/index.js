import React, { Component } from 'react';
import Link from 'gatsby-link'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

var today = new Date();
var dd = today.getDate();
var ddPlus = (dd > 9) ? dd : "0" + dd;
var mm = today.getMonth()+1;
var mmPlus = (mm > 9) ? mm : "0" + mm;
var yyyy = today.getFullYear();

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}



//  var url = 'https://gd.mlb.com/components/game/mlb/year_' + yyyy+ '/month_'+ mmPlus + '/day_' + ddPlus + '/master_scoreboard.json';
 var url = 'https://gd.mlb.com/components/game/mlb/year_2011/month_09/day_20/master_scoreboard.json';



class App extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch(url)
      .then(results => results.json())
      .then(response => {
        const users = response.data.games.game;
        this.setState({ users });
      });
  }

  render() {
    return (
      <div className="App"  >
        <header className="App-header">          
          <h3 className="App-title">Baseball Games for {mm}/{dd}/{yyyy} </h3>
        </header>
        {this.state.users.map(user => {

          //detect if game has score yet and set score variable. Show 0 if not.
           let homeScore = 0;
           let awayScore = 0;
           if('linescore' in user){
            homeScore = user.linescore.r.home;
            awayScore = user.linescore.r.away;
          } else {
            homeScore + 0;             
           }
          
          return (
            <div style={{
              margin: 'auto',
              border: '2.5px solid #e0dbd1',
              backgroundColor: 'rgba(68, 82, 127, .9)',
              color: 'rgba(0, 0, 0, .8)',
              textAlign: 'center',
              width: 'auto'

            }} key={user.id}>
            <p>
            {user.home_team_name} {homeScore} vs. {user.away_team_name} {awayScore} Start Time: {user.time}est 
            </p>
          </div>
        );
      } 
      )
      }
      </div>
    );
  }
}




const IndexPage = () => (
  <div>

    <DatePicker />
    <div id='theGames'>
      <App />  
    </div>   
  </div>
)

export default IndexPage
