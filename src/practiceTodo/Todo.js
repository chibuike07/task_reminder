import React from "react";
import Lists from "./List";

class Forms extends React.Component {
  state = {
    todoItems: [],
    text: "",
    date: "",
    time: ""
  };

  handleRemoveAllItem = () => {
    this.setState({ todoItems: [] });
  };
  handleClock = () => {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if (hour < 10) {
      hour = "0" + hour;
    }
    let clock = hour + ":" + min + ":" + sec;
    this.setState({ time: clock });
    setTimeout(this.handleClock, 500);
    return clock;
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleTimeChange = e => {
    this.setState({ date: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text) {
      if (this.state.todoItems.includes(this.state.text)) {
        alert("yes");
        return;
      } else {
        this.setState(prevState => ({
          todoItems: prevState.todoItems.concat(
            this.state.text.toLowerCase() + " / " + this.state.date
          ),
          text: "",
          date: ""
        }));
      }
    } else {
      return;
    }
    console.log(this.state.todoItems);
    // }
  };
  handleRemoveOneItem = itemsNotRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(items => items !== itemsNotRemoved)
    }));
  };

  handleAlert = () => {
    const data = JSON.parse(localStorage.getItem("myUpdatTodo"));
    let d = data.map(v => {
      let res = v
        .split("/")[1]
        .trim()
        .split(":");
      return res;
    });
    let hours,
      minutes,
      hourMin,
      arr = [];
    if (d instanceof Array) {
      for (let time of d) {
        // console.log(time[0], time[1]);
        hours = new Date().setHours(time[0]);
        minutes = new Date().setMinutes(time[1]);
        hourMin =
          new Date(hours).getHours() + ":" + new Date(minutes).getMinutes();
        arr.push(hourMin);
      }
    }
    let y = this.handleClock()
      .toString()
      .split(":")
      .slice(0, 2)
      .join(":");
    console.log(y);
    // console.log(new Date().getHours(this.handleClock()));
    console.log(arr);
    arr.forEach(element => {
      if (element === y) {
        alert("yes");
        alert("no");
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("myUpdatTodo", jsonState);
      console.log(jsonState);
    }
  }
  componentDidMount() {
    this.handleClock();
    if (localStorage.getItem !== null || "") {
      const ParseData = JSON.parse(localStorage.getItem("myUpdatTodo"));
      this.setState({ todoItems: ParseData });
    }
    this.handleAlert();
  }
  render() {
    return (
      <div>
        <h2>my todo app</h2>
        <h2>{this.state.time}</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="text"
            placeholder="add ur todo.."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="time" onChange={this.handleTimeChange} />
          <button>addItems</button>
        </form>
        <Lists
          todoItems={this.state.todoItems}
          removeItem={this.handleRemoveOneItem}
        />
        {this.state.todoItems.length > 0 && (
          <button onClick={this.handleRemoveAllItem}>clear</button>
        )}
      </div>
    );
  }
}
export default Forms;
