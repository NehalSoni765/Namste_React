import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>  ReactElement Js Object => HTMLElement(render)
const parent = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "H1 Tag"
);
console.log(parent);//return object

//jsx is (transpiled code before reaches to js engine which done by) parcel - babel
// JSX => babel transpiled => React.createElement =>  ReactElement Js Object => HTMLElement(render)
//react element
const jsxHeading = (<h1 id="heading">H1 Tag</h1>)
console.log(jsxHeading);//return jsxheading

//react element
const heading = (
  <h1 className="heading" tabIndex={5}>Namste react </h1>
)
const TitleElement = ()=>{
  return (<div id="container">

    <h1 className="heading" tabIndex={5}>Namste react Functional Component</h1>
  </div>)}

const HeadingElement = ()=>{
  return (<div id="container">
    <TitleElement/>
    {TitleElement()}
    <TitleElement></TitleElement>
    <h1 className="heading" tabIndex={5}>Namste react Functional Component</h1>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingElement/>);
