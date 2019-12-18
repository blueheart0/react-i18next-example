import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import './App.css';
import './i18n';
import logo from './logo.svg';

function App() {
  const { t, i18n } = useTranslation('translation');
  console.log(t);
  console.log(i18n);
  function changeLang(lang){
        i18n.changeLanguage(lang)
  }
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/*<p>*/}
            {/*  Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            <Trans i18nKey={"translation:reactTitle"}/>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
                {t("learnReact")}
            </a>
              <div style={{display:"flex", marginTop:"30px"}}>
                  <button style={{width:"100px", height:"50px", fontSize:"15px"}} onClick={()=>{changeLang("ko")}}>
                      {t("lang.korean")}
                  </button>
                  <button style={{width:"100px", height:"50px", fontSize:"15px"}} onClick={()=>{changeLang("en")}}>
                      {t("lang.english")}
                  </button>
              </div>

          </header>
        </div>
  );
}

export default App;
