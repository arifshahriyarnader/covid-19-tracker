import React from 'react';
import './App.css';
import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import coronaImage from './images/covid.png';



class App extends React.Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    //fetch the all countries
    const dataFetch = await fetchData();
    //set the state
    this.setState({data:dataFetch});
  }
  handleCountryChange = async (country) =>{
     //fetch the data
    const dataFetch = await fetchData(country);
    //set the state
    this.setState({data:dataFetch, country:country})
    console.log(dataFetch);
  }
  render(){
    //destructuring state
    const {data,country} =this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
