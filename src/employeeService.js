export default class employeeService {
  async getEmployees() {
    return fetch("https://5b757ec2deca780014ec9fab.mockapi.io/employees").then(
      r => r.json()
    );
  }
}
