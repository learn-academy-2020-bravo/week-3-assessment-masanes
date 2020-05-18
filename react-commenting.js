// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. state stores the data down b
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. method/function that changes the state of userInput so when a value is added the userInput is updated
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructures useInput 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. changes the input value of robot*/} 
          onChange={ this.robot }
          {/* 5. */}
          value={ userInput }
        />

        <div>
          {/* 6. links components */}
          <GoodRobot
            {/* 7. passes userInput of parent to child*/}
            userInput={ userInput } 
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. returns the div and displayed all the info nested inside of it to parent
      <div>
        <h3>Good Robot</h3>
        {/* 9. passes the value */} 
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. //connects child component with parent component
export default GoodRobot
