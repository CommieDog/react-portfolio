import { useState } from 'react';

import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  const [ page, setPage ] = useState("About Me");

  function isActivePage(pageName)
  {
    return pageName === page;
  }

  return (
    <div className="App">
      <Header isActivePage={isActivePage} onSetPage={setPage}/>
      <Body page={page} />
      <Footer />
    </div>
  );
}

export default App;
