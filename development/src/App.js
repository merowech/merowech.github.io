import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { About } from './components/about';
import { Resume } from './components/resume';
import { Contact } from './components/contact';
import { Publications } from './components/publications';

import $ from 'jquery';

import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import './App.css';

function App() {

  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      $.ajax({
        url:'./data.json',
        dataType:'json',
        cache: false,
        success: function(result){
          setData(prevState => ({
            ...prevState,
            resumeData: result
          }));
          setIsLoaded(true);
        },
        error: function(xhr, status, err){
          setIsLoaded(true);
          setError(err);
        }
      });
  }, [])

  if (error) {
    return (
      <div>Error: {error.message}</div>
    );
  } else if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  } else {
    console.log(data);
    return (
      <div className="App">
        <Header data={data.resumeData.main}/>
        <About data={data.resumeData.main}/>
        <Resume data={data.resumeData.resume}/>

        <Publications data={data.resumeData.contact}/>

        <Contact data={data.resumeData.contact}/>
      </div>
    );
  }
}


export default App;
