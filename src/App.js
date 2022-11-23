import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/main/main';
import Mainintro from './components/Mainintro/Mainintro';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Body from './components/Body/Body'
import Input from './components/input/input'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Main />
     <Mainintro />
     <Section />
     <Form />
     <Body />
     <Input />
     <Footer />
    </div>
  );
}

export default App;
