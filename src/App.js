import React from 'react';
import Tips from './lib/components/Tips';
import './index.css'

const data = [
  {
    img: "https://picsum.photos/400/300",
    title: "Add a comment to start a review",
    desc: "You can click a line number in the code to add an in-line comment, or add a summary comment using the textbox in the bottom right."
  },
  {
    img: "https://picsum.photos/400/400",
    title: "2",
    desc: "asdfasdfasdfa"
  },
  {
    img: "",
    title: "3",
    desc: "3243443"
  },
  {
    img: "https://picsum.photos/500/300",
    title: "4",
    desc: ""
  },
]

const App = () => { 
  return (
    <Tips data={data}></Tips>    
  );
}

export default App;
