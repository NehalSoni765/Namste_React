/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1> parent
 *      <h2>I'm h2 tag</h2> sibling
 *  </div>
 * </div>
 *
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm h1 tag")
  )
);

const siblings = React.createElement(
    "div",
    {
      id: "parent",
    },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
      React.createElement("h2", { id: "heading" }, "I'm h2 tag"),
    ])
  );
  const nestedSiblings = React.createElement(
    "div",
    {
      id: "parent",
    },
    [React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
      React.createElement("h2", { id: "heading" }, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
        React.createElement("h2", { id: "heading" }, "I'm h2 tag"),
      ])]
  );
    

const heading = React.createElement(
  "h1",
  {
    id: "heading", //attributes
  },
  "Hello World from react!"
); //children

console.log(heading); //returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedSiblings); //it converting heading object into h1 element and put it
