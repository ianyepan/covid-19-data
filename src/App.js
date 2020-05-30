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
    fetch('https://corona.lmao.ninja/v2/all')
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
    fetch('https://corona.lmao.ninja/v2/countries/taiwan')
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
    fetch('https://corona.lmao.ninja/v2/countries/hong%20kong')
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
    fetch(this.baseURL + '/v2/countries/' + this.state.inputValue)
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        if (jsonData.message) { // has message <=> invalid country/region
          alert(this.toCap(this.state.inputValue) + ' is not a valid country/region!');
        } else { // valid country/region
          this.setState(prevState => ({
            tab: this.toCap(prevState.inputValue) || 'N/A',
            data: jsonData,
          }));
        }
      })
    document.getElementById('inputField').value = '';
  };

  toCap = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  updateTitle = () => {
    const { data } = this.state;
    let title = '';
    if (!data.countryInfo) {
      title = this.state.tab;
    } else {
      title = data.country;
    }
    return `COVID-19 ${title} Data`;
  };

  // set initial state on page load
  componentDidMount() {
    this.handleOverview();
    document.title = this.updateTitle();
  }

  componentDidUpdate() {
    document.title = this.updateTitle();
  }

  render() {
    const { data } = this.state;
    const casesPerOneMillion = data.casesPerOneMillion ? data.casesPerOneMillion : 'N/A';
    const todayCases = data.todayCases || data.todayCases === 0 ? data.todayCases : 'N/A';
    const todayDeaths = data.todayDeaths || data.todayDeaths === 0 ? data.todayDeaths : 'N/A';
    const flagURL = data.countryInfo
      ? data.countryInfo.flag
      : 'https://thumbs.dreamstime.com/t/red-world-map-danger-concept-vector-illustration-37080268.jpg';

    let countryISO3 = '';
    if (!data.countryInfo) {
      countryISO3 = this.state.tab;
    } else if (data.countryInfo.iso3 === 'NO DATA') {
      countryISO3 = data.country;
    } else {
      countryISO3 = data.countryInfo.iso3;
    }

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
            countryName={data.country ? data.country : this.state.tab}
            recovered={data.recovered}
            casesPerOneMillion={casesPerOneMillion}
            cases={data.cases}
            deaths={data.deaths}
          />
          <MyRightCollection
            countryName={data.country ? data.country : this.state.tab}
            todayCases={todayCases}
            todayDeaths={todayDeaths}
          />
        </div>

        <div className="row">
          <MyCard
            str={`Total Cases (${countryISO3})`}
            value={data.cases}
            imageLink={
              'https://cdn.geekwire.com/wp-content/uploads/2020/03/200304-corona-micro.jpg'
            }
          />
          <MyCard
            str={`Total Deaths (${countryISO3})`}
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
