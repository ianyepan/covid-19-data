import React, { Component } from 'react';
import MyCard from './components/MyCard.js';
import MyFooter from './components/MyFooter.js';
import MySearch from './components/MySearch.js';
import NavBar from './components/NavBar.js';
import MyLeftCollection from './components/MyLeftCollection.js';
import MyRightCollection from './components/MyRightCollection.js';
import MyFlag from './components/MyFlag.js';
import MyIntro from './components/MyIntro.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'World',
      data: {},
      inputValue: '',
    };
  }

  handleOverview = () => {
    fetch('https://corona.lmao.ninja/all')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'World',
          data: jsonData,
        }));
      });
  };

  handleTaiwan = () => {
    fetch('https://corona.lmao.ninja/countries/taiwan')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'Taiwan',
          data: jsonData,
        }));
      });
  };

  handleHK = () => {
    fetch('https://corona.lmao.ninja/countries/hong%20kong')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'HK',
          data: jsonData,
        }));
      });
  };

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    console.log('Submitted!!!!!!');
    fetch('https://corona.lmao.ninja/countries/' + this.state.inputValue)
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: this.toCap(state.inputValue) || 'N/A',
          data: jsonData,
        }));
        console.log(this.state.data.flag);
      })
      .catch(() => {
        alert(this.toCap(this.state.inputValue) + ' is not a valid country/region!');
      });
    document.getElementById('inputField').value = '';
  };

  toCap = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  componentDidMount() {
    this.handleOverview();
  }

  render() {
    const { data } = this.state;
    const casesPerOneMillion = data.casesPerOneMillion ? data.casesPerOneMillion : 'N/A';
    const todayCases = data.todayCases || data.todayCases === 0 ? data.todayCases : 'N/A';
    const todayDeaths = data.todayDeaths || data.todayDeaths === 0 ? data.todayDeaths : 'N/A';
    const flagURL = data.countryInfo
      ? data.countryInfo.flag
      : 'https://thumbs.dreamstime.com/t/red-world-map-danger-concept-vector-illustration-37080268.jpg';
    return (
      <div>
        <NavBar
          tab={this.state.tab}
          handleOverview={this.handleOverview}
          handleTaiwan={this.handleTaiwan}
          handleHK={this.handleHK}
        />
        <div className="row">
          <MySearch
            updateInputValue={this.updateInputValue}
            handleKeyDown={this.handleKeyDown}
            handleSubmit={this.handleSubmit}
          />
          <MyFlag flagURL={flagURL} />
          <MyIntro />
        </div>

        <div className="row">
          <MyLeftCollection
            tab={this.state.tab}
            recovered={data.recovered}
            casesPerOneMillion={casesPerOneMillion}
            cases={data.cases}
            deaths={data.deaths}
          />
          <MyRightCollection
            tab={this.state.tab}
            todayCases={todayCases}
            todayDeaths={todayDeaths}
          />
        </div>

        <div className="row">
          <MyCard
            str={`Total Cases (${this.state.tab})`}
            value={data.cases}
            imageLink={
              'https://cdn.geekwire.com/wp-content/uploads/2020/03/200304-corona-micro.jpg'
            }
          />
          <MyCard
            str={`Total Deaths (${this.state.tab})`}
            value={data.deaths}
            imageLink={
              'https://cryptoiscoming.com/wp-content/uploads/2020/03/corona-4893215_1280.jpg'
            }
          />
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default App;
