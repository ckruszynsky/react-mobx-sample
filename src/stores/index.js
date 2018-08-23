import EmployeeStore from "./employeeStore";
import ModalStore from "./modalStore";
import EmployeeService from "../employeeService";

const store = {
  employeeStore: new EmployeeStore(new EmployeeService()),
  modalStore: new ModalStore()
};

console.log(store);
export default store;
