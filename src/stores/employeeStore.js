import {
  decorate,
  observable,
  action,
  runInAction,
  computed,
  configure
} from "mobx";

configure({ enforceActions: true });

export default class EmployeeStore {
  constructor(employeeService) {
    this.service = employeeService;
  }
  employeesList = [];
  nameLetterSearch = "a";

  addEmployee(e) {
    console.log(`adding employee ${JSON.stringify(e)}`);
    this.employeesList.push(e);
  }

  fetchEmployees = async () => {
    console.log("Fetching employees");
    const employees = await this.service.getEmployees();
    runInAction(() => {
      console.log("employees fetched updating state");
      this.employeesList = employees;
    });
  };

  get totalEmployees() {
    return this.employeesList.length;
  }

  get totalLongNames() {
    return this.employeesList.filter(e => e.name.length >= 18).length;
  }

  get nameStartSearch() {
    return this.employeesList.filter(
      e => e.name.slice(0, 1).toLowerCase() === this.nameLetterSearch
    ).length;
  }
  set nameStartSearch(l) {
    console.log(`setting search letter: ${l}`);
    this.nameLetterSearch = l.toLowerCase();
  }

  clearList() {
    console.log("calling clear list");
    this.employeesList = [];
  }
}

decorate(EmployeeStore, {
  employeesList: observable,
  //if enforcing actions, these actions
  //below must be defined.
  fetchEmployees: action,
  clearList: action,
  addEmployee: action,
  totalEmployees: computed,
  totalLongNames: computed,
  nameStartSearch: computed
});
