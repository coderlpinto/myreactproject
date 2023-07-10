// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document

// JSX element, main

const mainStyles = {
  backgroundColor: "lightgrey",
  padding: "50px",
  borderRadius: "10px",
  marginTop: "50px",
  
};

const insideStyles = {
  backgroundColor: "lightblue",
};

const subStyles = {
  textAlign: "center",
  padding: "20px",
};

const sub = {
  backgroundColor: "coral",
  textAlign: "center",
  color: "white",
  borderRadius: "5px",
};

const inputStyles = {
  textAlign: "center",
  color: "white",
  borderRadius: "5px",
  boxSizing: "border-box",
  width: "100%",
  padding: "15px 32px",
} 

const main = (
  <main style={mainStyles}>
    <div style={insideStyles}>
      <div className="main-wrapper">
        <h1 className="title" style={subStyles}>
          SUBSCRIBE
        </h1>
      </div>
      <div>
        <p style={subStyles}>
          Sign up with your email address to receive news and updates.
        </p>
      </div>

      <div style={inputStyles}>
        <input type="text" value="First Name" />
        <input type="text" value="Last Name" />
        <input type="text" value="Email" />
        <br />
        <br />
        <div>
          <input type="text" value="Subscribe" style={sub} />
        </div>
      </div>
    </div>
  </main>
);

// JSX element, app
const app = <div className="app">{main}</div>;

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
