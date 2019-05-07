import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <div className="container">
          <h1> Author Quiz</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
}
function Book({title}){
  return ( <div className="answer" >
  <h4>{title}</h4></div>  );
}
function Turn({author, books}) {
  return (
    <div className="row turn" style={{ backgroundColor: "gray" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => 
          <Book title={title} key = {title}/>
        )}
      </div>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://g1.globo.com/">G1 </a> and are in
          the public domain
        </p>
      </div>
    </div>
  );
}

function App({ turnData }) {
  return (
    <>
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} />
        <Continue />
        <Footer />
      </div>
    </>
  );
}

export default App;
