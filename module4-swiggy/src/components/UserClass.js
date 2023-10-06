import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //we want to use this props into component that's why
    this.state = {
      count: 0, //initiallize a count
      useINfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    // console.log("child constructor");
  }
  async componentDidMount() {
    // //useEffect of empty array dependancy
    // // console.log("child component did mount");
    // const response = await fetch("https://api.github.com/users/akshayMarch7");
    // const data = await response.json();
    // console.log("data ", data);
    // this.setState({ useINfo: data });

    this.timer = setInterval(() => {
      console.log("interwal");
    }, 1000);
  }

  //similar to first use effect
  componentDidUpdate(prevProp, prevState) {
    console.log("component did update");
    // if(this.state.count!==prevState.count||this.state.count2!==prevState.count2){
    //   //means both values are different do what you need
    // }
    // useEffect(()=>{ //functional component
    // },[count,count2])
  }

  // componentDidUpdate(prevProp, prevState) {
  //   console.log("component did update");
  //   if (this.state.count !== prevState.count) {
  //     //means both values are different do what you need
  //   }
  //   if (this.state.count2 !== prevState.count2) {
  //     //means both values are different do what you need
  //   }
  //   // useEffect(()=>{ //functional component
  //   // },[count])

  //   // useEffect(()=>{ //functional component
  //   // },[count2])
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.useINfo;
    // const { name, location } = this.props;
    // const { count } = this.state;
    // console.log("child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>COntact: @akshaymarch7</h4>
        {/* <h5>Count : {count}</h5>
        <button
          onClick={
            () => this.setState({ count: count + 1 })
            //never update state variable directly
            // (this.state.count = this.state.count + 1)
          }
        >
          Click me
        </button> */}
      </div>
    );
  }
}

export default UserClass;
/**
 * functional
 * Load component > call API > set state (call reconcillation process) > re-render component
 *
 * react lifecycle
 * ----mounting -----
 * constructor(dummy)
 * render(dummy)
 * componentDidMount() (API call exceed)
 *  this.setState(State Variable)
 * ------- updating
 *  this.setState(Update State Variable)
 *  render component (DOM manipulation new data)
 *  componentDidUpdate()
 *
 *
 * ---un mounting ---
 * changing component from one page to another page(about->contact)
 *
 *
 */
