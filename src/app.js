import React, { Component } from "react";
import { observer } from "mobx-react";
import Table from "./table";
import Controls from "./controls";
import { Message } from "./message";

export default class App extends Component {
  onAddEmployee = e => {
    //this.props.employeeStore.addEmployee(e);
    this.props.modalStore.showModal();
  };

  onClear = () => {
    this.props.employeeStore.clearList();
  };

  onCloseModal = () => {
    this.props.modalStore.closeModal();
  };

  componentDidMount() {
    if (this.props.employeeStore.totalEmployees === 0) {
      this.props.employeeStore.fetchEmployees();
    }
  }

  render() {
    console.log("App is rendering");
    const { employeeStore, modalStore } = this.props;
    let headers = ["Avatar", "Name", "Title"];
    const letterSearch = "F";
    employeeStore.nameStartSearch = letterSearch;
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls onAdd={this.onAddEmployee} onClear={this.onClear} />
        <Message
          text={`You have a total of : ${
            employeeStore.totalEmployees
          } employees`}
        />
        <Message
          text={`You have ${
            employeeStore.totalLongNames
          } employees with names that have more than 5 characters`}
        />
        <Message
          text={`You have ${
            employeeStore.nameStartSearch
          } employees with names that start with "${letterSearch}"`}
        />

        <Table employees={employeeStore.employeesList} headers={headers} />
      </div>
    );
  }
}

App = observer(App);
