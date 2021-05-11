import React, { useState, useEffect } from 'react';
import MyCard from './components/MyCard.js';
import MyFooter from './components/MyFooter.js';
import MySearch from './components/MySearch.js';
import NavBar from './components/NavBar.js';
import MyLeftCollection from './components/MyLeftCollection.js';
import MyRightCollection from './components/MyRightCollection.js';
import MyFlag from './components/MyFlag.js';
import MyIntro from './components/MyIntro.js';

const App = () => {
  const baseURL = 'https://disease.sh/v3/covid-19';
  const [tab, setTab] = useState('World');
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

  // TODO: combine handleOverview, handleTaiwan, and handleHK into one function
  const handleOverview = () => {
    fetch(baseURL + '/all')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        setTab('World');
        setData(jsonData);
      });
  };

  const handleTaiwan = () => {
    fetch(baseURL + '/countries/taiwan')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        setTab('Taiwan');
        setData(jsonData);
      });
  };

  const handleHK = () => {
    fetch(baseURL + '/countries/hong%20kong')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        setTab('HK');
        setData(jsonData);
      });
  };

  const updateInputValue = event => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    fetch(baseURL + '/countries/' + inputValue)
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        if (jsonData.message) {
          // has message IFF invalid country/region
          alert(toCap(inputValue) + ' is not a valid country/region!');
        } else {
          // valid country/region
          setTab(toCap(inputValue) || 'N/A');
          setData(jsonData);
        }
      });
    document.getElementById('inputField').value = '';
  };

  const toCap = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateTitle = () => {
    let title = '';
    if (!data.countryInfo) {
      title = tab;
    } else {
      title = data.country;
    }
    return `COVID-19 ${title} Data`;
  };

  // componentDidMount()
  useEffect(() => {
    console.log('componentdidMount');
    handleOverview();
    document.title = updateTitle();
  }, []);

  // componentDidUpdate()
  useEffect(() => {
    console.log('componentdidUpdate');
    document.title = updateTitle();
  }, [data]);

  const casesPerOneMillion = data.casesPerOneMillion ? data.casesPerOneMillion : 'N/A';
  const todayCases = data.todayCases || data.todayCases === 0 ? data.todayCases : 'N/A';
  const todayDeaths = data.todayDeaths || data.todayDeaths === 0 ? data.todayDeaths : 'N/A';
  const flagURL = data.countryInfo
    ? data.countryInfo.flag
    : 'https://thumbs.dreamstime.com/t/red-world-map-danger-concept-vector-illustration-37080268.jpg';

  let countryISO3 = '';
  if (!data.countryInfo) {
    countryISO3 = tab;
  } else if (data.countryInfo.iso3 === 'NO DATA') {
    countryISO3 = data.country;
  } else {
    countryISO3 = data.countryInfo.iso3;
  }

  return (
    <div>
      <NavBar
        tab={tab}
        handleOverview={handleOverview}
        handleTaiwan={handleTaiwan}
        handleHK={handleHK}
      />
      <div className="row">
        <MySearch
          updateInputValue={updateInputValue}
          handleKeyDown={handleKeyDown}
          handleSubmit={handleSubmit}
        />
        <MyFlag flagURL={flagURL} />
        <MyIntro />
      </div>

      <div className="row">
        <MyLeftCollection
          countryName={data.country ? data.country : tab}
          recovered={data.recovered}
          casesPerOneMillion={casesPerOneMillion}
          cases={data.cases}
          deaths={data.deaths}
        />
        <MyRightCollection
          countryName={data.country ? data.country : tab}
          todayCases={todayCases}
          todayDeaths={todayDeaths}
        />
      </div>

      <div className="row">
        <MyCard
          str={`Total Cases (${countryISO3})`}
          value={data.cases}
          imageLink={'https://cdn.geekwire.com/wp-content/uploads/2020/03/200304-corona-micro.jpg'}
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
};

export default App;
