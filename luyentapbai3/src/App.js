
import './App.css';
import Nav from './Component/Nav';
import Header from './Component/Header';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import React, { Component } from 'react'

class Lifecycle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={bien1:"khởi tạo"}
  }
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("ham shouldComponentUpdate");
    return true;
   }
   componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
   }
   componentDidUpdate(prevProps, prevState) { 
    console.log("componentDidUpdate");
   } 
   
  componentWillMount() {
    console.log("khoi tao componentWillMount");
  }
  componentDidMount() { 
    console.log("khoi tao componentDidMount ");
   }
   capNhapState =()=>{
    this.setState({
      bien:"trang thai duoc update"
    })
   }
  render() {
    return (
      <div>
        <button onClick={()=>this.capNhapState({})}> nhan di</button>
      </div>
    );
  }
}

function App() {
  return (
    <div >
      <Nav/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      <Lifecycle/>
    </div>
  );
}

export default App;
