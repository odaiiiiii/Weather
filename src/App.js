import React, { Component } from 'react';
import './css/style.css';

// components
import Form from './components/Form.js';
import Weather from './components/Weather.js';

// IMAGES
import img1 from './images/s13.jpg';  
import img2 from './images/p1.jpg';
// import img3 from './images/m1.jpg';

import img4 from './images/a3.jpg';        
// import img5 from './images/a11.jpg';




import img6 from './images/m11.jpg';        

// import img7 from './images/m7.jpg';    
// import img8 from './images/m10.jpg';

import Error from './components/Error';
import Loading from './components/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Amman",                                               
      Country: "Jordan",
      temp: 0 ,
      icon: "01d",
      temp_min:0,
      temp_max:0,
      desc:"Please select a city and country",
      status:false,
      err:false,
      loading:false

      
    };
  }

  API_KEY = "a67fbdd6d341bf8a6fdfcc72f0dfa463";

  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.City.value;                    
    const Country = e.target.elements.Country.value;

    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city},${Country}&appid=${this.API_KEY}`;

  
    this.setState({loading:true})
    
    const response = await fetch(URL_API);
    const data = await response.json();                              
   
       if(response.status === 200){
        this.setState({
          city: city,
          Country: Country,
          temp: this.convertToCelsius(data.main.temp),
          temp_max: this.convertToCelsius(data.main.temp_max),
          temp_min: this.convertToCelsius(data.main.temp_min),
          desc: data.weather[0].description,
          icon: data.weather[0].icon ,
          status :true,
          err:false,
          loading:false
          
        });
       }

       else{
        this.setState({
          status:false,
          err:true,
          loading:false

        })
        
       }

    }


      convertToCelsius=(temp)=>{
    return   Math.floor(temp -273.15)
  }

 
  componentDidMount() {
    const images = [img1,img2,img4,img6];
    let currentIndex = 0;                                           
                                                                      
    this.changeBackgroundImage = () => {      
      document.body.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    };

    this.intervalId = setInterval(this.changeBackgroundImage, 10000);
    this.changeBackgroundImage();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }





  render() {
    return (
      <div className='app-container'>
        <div className='overlay'>
          
          <Form getData={this.getData} />
          {this.state.loading ?  <Loading/> : ""}
          {this.state.status  ?<Weather data={this.state} /> : ""}
          {this.state.err  ?<Error  /> : ""}

        </div>
      </div>
    );
  }
}

export default App;
