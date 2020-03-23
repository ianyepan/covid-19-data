import React, { Component } from 'react';
import MyButton from './components/MyButton.js';
import MyCard from './components/MyCard.js';
import MyFooter from './components/MyFooter.js';
import MySearch from './components/MySearch.js';

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
    console.log(this.state.inputValue);
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

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
      })
      .catch(() => {
        alert(this.toCap(this.state.inputValue) + ' is not a valid country/region!')
      })
  };

  toCap = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  componentDidMount() {
    this.handleOverview();
  }

  render() {
    const { data } = this.state;
    const todayCases = data.todayCases ? data.todayCases : "N/A"
    const casesPerOneMillion = data.casesPerOneMillion ? data.casesPerOneMillion : "N/A"
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <p className="brand-logo" style={{ margin: 0 }}>
              COVID-19 Live Data: {this.state.tab}
            </p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <MyButton handleFn={this.handleOverview} str={'World Overview'} />
              </li>
              <li>
                <MyButton handleFn={this.handleTaiwan} str={'Taiwan Latest'} />
              </li>
              <li>
                <MyButton handleFn={this.handleHK} str={'HK Latest'} />
              </li>
              <li>
                <a
                  href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
                  target="_blank"
                >
                  WHO Coverage Map
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <MySearch updateInputValue={this.updateInputValue} handleKeyDown={this.handleKeyDown} handleSubmit={this.handleSubmit}/>

        <div className="col l1" style={{ marginLeft: 30, marginRight: 30 }}>
          <ui class="collection">
            <h6 className="collection-item active red lighten-2 z-depth-5">
              {'Latest Stats of: ' + this.state.tab}
            </h6>
            <li className="collection-item z-depth-2">Total Recovered: {data.recovered}</li>
            <li className="collection-item z-depth-3">Cases Today: {todayCases}</li>
            <li className="collection-item z-depth-3">Cases per million: {casesPerOneMillion}</li>
          </ui>
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
