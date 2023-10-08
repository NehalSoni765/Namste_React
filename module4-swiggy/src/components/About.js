import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  // componentDidMount() {
  //   //component comppleted then mount
  //   //useEffect of empty array dependancy
  //   console.log("parent component did mount");
  // }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About US Page</h1>
        <h2>This is Swiggy clone</h2>
        {/* use context API */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {/* below is a callback fucntion we need to use */}
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>{" "}
        </div>

        <User name={"Akshay Saini (function)"} />
        <UserClass name={"Akshay Saini (class)"} location="Mausuri" />
        {/* <UserClass name={"Akshay Saini (class)"} location="Mausuri" /> */}
      </div>
    );
  }
}

// const About = () => {
//     console.log("child render");
//   return (
//     <div>
//       <h1>About US Page</h1>
//       <h2>This is Swiggy clone</h2>
//       <User name={"Akshay Saini (function)"} />
//       <UserClass name={"Akshay Saini (class)"} location="Mausuri" />
//     </div>
//   );
// };

export default About;

/**
 * 
 * optmisiate child it path the render
 * - Parent constructor
  - Parent render
  - First Child constructor
  - First Child render
  - Second Child constructor
  - Second Child render
  <DOM UPDATE _ IN SINGLE BATCH> (dom manipulation is very expensive so it batch the )
  - Second child component did mount
  - First child component did mount
  - Parent component did mount
 * 
 * 
 */
