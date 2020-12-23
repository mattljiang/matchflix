import { Router } from 'express';
import React, { Component } from 'react';
import { Switch } from 'react-router';
import '../styles.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";

class Landing extends Component {
    constructor(props) {
      super(props);
    }

    //  componentDidMount() {
    //     const apiUrl= " ";
    //     fetch(apiUrl) 
    //     .then((response) => response.json())
    //     .then((data) =>  )
    // }
      // fetch request to Netflix API
      // create array of <option> tags 

    render() {
     // add event listener to startsession button that invokes event handler
     // event handler
      // 1) send a post request to server
      // 2) when server respodns with url, store this url in state
      // render a component with the url onto the screen

     return(
    
       <div>
         
        <div >
          <h1>Matchflix</h1>
          <img id="logo" src ="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f2357447098721.5873f49f96f1f.png"></img>
        </div>

        <div id="startsession">
          {/* <form action="/startsession" method="POST"> */}
            <label for="genres">Select a genre:</label>
            <select name="genres" id="genres">
              <option value="801369">Action</option>
              <option value="4698">Animation</option>
              <option value="48586">Children & Family</option>
              <option value="31694">Comedy</option>
              <option value="3979">Critically Acclaimed Films</option>
              <option value="6839">Documentaries</option>
              <option value="5763">Drama</option>
              <option value="8711">Horror</option>
              <option value="875">Indie</option>
              <option value="1492">Sci-Fi & Fantasy</option>
              <option value="46588">Thrillers</option>
            </select>
            <input id="startsession" type="submit" value="Start Session"></input>
          {/* </form> */}
            {/* <URL component url='state.url'> */}
        </div>
       </div>
     );
    }
  }



  // 14:{2 items
  //   "genre":"Critically-acclaimed Independent Films"
  //   "netflixid":875
  //   }
    
  //   29:{2 items
  //   "genre":"Sci-Fi & Fantasy"
  //   "netflixid":1492
  //   }
    
  //   70:{2 items
  //   "genre":"Critically Acclaimed Films"
  //   "netflixid":3979
  //   }
    
  //   82:{2 items
  //   "genre":"Animation"
  //   "netflixid":4698
  //   }
    
  //   106:{2 items
  //   "genre":"Drama"
  //   "netflixid":5763
  //   }
    
  //   129:{2 items
  //   "genre":"Documentaries"
  //   "netflixid":6839
  //   }
    
  //   154:{2 items
  //   "genre":"Horror Films"
  //   "netflixid":8711
  //   }
    
  //   452:{2 items
  //   "genre":"Action"
  //   "netflixid":801362
  //   }
    
  //   278:{2 items
  //   "genre":"Classic Thrillers"
  //   "netflixid":46588
  //   }
    
  //   282:{2 items
  //   "genre":"Classic Children & Family Films"
  //   "netflixid":48586
  //   }
    
  //   262:{2 items
  //   "genre":"Classic Comedies"
  //   "netflixid":31694
  //   }
    




export default Landing;

// Landing
    // Logo name
        // DropDown 
        // Start Session Button