import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./Navbar.js"
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div 
        style={{
        backgroundColor: 'beige' 
        }}
      >
      
        <Navbar />

        <br></br>
        <br></br>
        <br></br>

        <h1>ระบบวางแผนการสั่งซื้อวัตถุดิบ</h1>  
        <h2>บริษัท ตัวอย่างต้นแบบ จำกัด</h2>  
        <h2>117 หมู่ 5 ต.บ้านใหม่ อ.ท่าม่วง จ.กาญจนบุรี 71110 </h2>  

        <br></br>
        <br></br>
        <br></br>

        <hr />
        <h6 mb-1>แอพพลิเคชั่นนี้ ได้รับการคุ้มครองลิขสิทธิ์ตามกฎหมาย พ.ศ.2522</h6>
        <h6>พัฒนาโดย อ.ชรินทร์  อุปพันธ์พงศ์ชัย</h6>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> */}
      
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
