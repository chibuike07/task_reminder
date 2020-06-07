import React from "react";
import List from "./List";
import { timeTo12HrFormat } from "./time_converter";
class Forms extends React.Component {
  interval;
  state = {
    search: "",
    time: "",
    timeTaker: "",
    task: "",
    todoList: []
  };

  handleSubmit = event => {
    //things to do on submit
    event.preventDefault(); //prevent sending of data to any server

    let task = this.state.task;
    let time = this.state.timeTaker;
    //got the state values
    if (task === "") {
      // things to do if task field is empty
      alert("task input should not be left empty");
      // this.refs.tasks.focus();
      return;
    } else if (time === "") {
      //things to do if time field is empty
      alert("time input should not be empty");
      console.log([event]);
      return;
    }
    //things to do if the form field is not empty
    this.setState({ todoList: this.state.todoList.concat({ task, time }) }); //adding the new task and time to the an array in the state
    event.currentTarget.reset(); //reset form field
  };
  handleChange = ({ target }) => {
    //setting the files values to the state
    this.setState({ [target.name]: target.value });
  };
  handleRemoveOneItem = list => {
    //remove the deleted task
    this.setState({
      //setting to the state the tasks that are not deleted back to the state
      todoList: this.state.todoList.filter(v => {
        return v !== list;
      })
    });
  };

  handleClearAllItem = () => {
    //setting the todoList array to an empty array in other words clearing all the tasks
    this.setState({ todoList: [] });
  };
  handleClock = () => {
    //handling the ticking clock
    let now = new Date(); //get date constructor
    let time = now.toLocaleTimeString(); //concerted time to a strings format24hrs
    this.setState({ time }); //setting time to the state
    this.interval = setTimeout(this.handleClock, 500); //set interval for clock ticking
  };
  handleCompare = () => {
    //compare the current clock with the user added time
    const { todoList, time } = this.state; //distructured some state values
    for (let compareTime of todoList) {
      //looping thru the client task array
      if (compareTime.time) {
        //makeing sure that the todolist contain time as one of the propertes
        let actualTime = timeTo12HrFormat(compareTime.time); //get the 24hrformat of the time
        if (time.indexOf(actualTime) !== -1) {
          //compare the client time and the clock to check if it match any of the current time
          console.log(`${compareTime.task}`); //consoling the task if the time match the clock current time
        }
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    //things to do on component did update
    if (prevState.todoList.length !== this.state.todoList.length) {
      //check if the client make any changes
      const storage = JSON.stringify(this.state.todoList); //stringifying the user task
      localStorage.setItem("reminder", storage); //setting it to the local storage
      console.log(localStorage.getItem("reminder"));
    }
    if (prevState.time !== this.state.time) {
      // compare client task time on clock update
      this.handleCompare();
    }
  }
  componentDidMount() {
    //things to do when the page loads
    this.handleClock(); //start up our clock
    console.log(this.state.count);

    if (localStorage.getItem("reminder") !== null || []) {
      //get if the user has any value in the local storage
      const storageData = JSON.parse(localStorage.getItem("reminder")); //getting the value and convert it to a json object
      this.setState({ todoList: storageData }); //set the data to the state
    }
  }

  componentWillUnmount() {
    //cleaning up the clock on page reload
    clearTimeout(this.interval);
  }

  render() {
    this.state.todoList.map(
      compareTodoListTimeValue =>
        compareTodoListTimeValue.time.indexOf(this.state.time) !== -1 &&
        alert(true)
    );
    let searFilter = this.state.todoList.filter(value =>
      value.task.includes(this.state.search)
    );

    return (
      <div atyle={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "20vh",
            width: "100%"
          }}
        >
          <h2>my TODOITEMS</h2>
          <span>{this.state.time}</span>
        </div>

        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 3
          }}
        >
          <input
            type="text"
            name="task"
            placeholder="add ur task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="timeTaker"
            placeholder="add time"
            value={this.state.timeTaker}
            onChange={this.handleChange}
          />
          <div style={{ MaxWidth: "100%", justifyContent: "center" }}>
            <button type="submit" style={{ width: "50vw", height: "5vh" }}>
              add ur tasks
            </button>
          </div>
        </form>
        <input
          type="search"
          placeholder="search"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <ul>
          {searFilter.map((values, index) => {
            return (
              <List
                todoitem={values}
                key={index}
                removeItem={this.handleRemoveOneItem}
              />
            );
          })}
        </ul>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncreaseCount}>increase</button>
        <button onClick={this.handleClearAllItem}>clearAll</button>
      </div>
    );
  }
}

export default Forms;
