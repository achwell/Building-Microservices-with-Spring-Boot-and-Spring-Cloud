import axios from 'axios'
import {Employee} from "../types/Employee";
import {Department} from "../types/Department";
import {Organization} from "../types/Organization";

const EMPLOYEE_SERVICE_BASE_URL = "http://localhost:9191/api/employees";

const EMPLOYEE_ID = 1;

class EmployeeService{

    getEmployee(){
        return axios.get<{employee: Employee,department: Department,organization: Organization}>(EMPLOYEE_SERVICE_BASE_URL + '/' + EMPLOYEE_ID);
    }

}

export default new EmployeeService
