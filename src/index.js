import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hi from './Hi';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <div>
        <Header/>
        <App/>
        <Footer/>
    </div>
  ,document.getElementById('root')
 
);


// let h1 = document.createElement("h1");
//    h1.textContent="hello this is imperative programming";
//    h1.classList.add("header");
//    document.getElementById("root").append(h1);


reportWebVitals();
