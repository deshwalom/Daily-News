// API KEY: b11b8ea7e0c94eb1867505fc34d73ffb
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,

  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  
  pagesize=15;
  state={
  progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div>
      <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(this.state.progress)}
      />
      </div>
      <NavBar/>
       <Routes>
         <Route exact path='/' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="general" key="general"/>}/>
         {/* <Route exact path='/about' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="sports"/>}/> */}
         <Route exact path='/business' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="business"  key="business"/>}/>
         <Route exact path='/entertainment' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="entertainment" key="entertainment"/>}/>
         <Route exact path='/general' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="general" key="general"/>}/>
         <Route exact path='/health' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="health" key="health"/>}/>
         <Route exact path='/science' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="science" key="science"/>}/>
         <Route exact path='/sports' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="sports" key="sports"/>}/>
         <Route exact path='/technology' element= {<News setProgress={this.setProgress} pageSize={this.pagesize} country="in" category="technology" key="technology"/>}/>
       
       </Routes>
       
        

      </div>
      </Router>
    )
  }
}





