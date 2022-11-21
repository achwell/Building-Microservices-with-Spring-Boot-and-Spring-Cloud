import {useEffect, useState} from "react";
import EmployeeService from '../service/EmployeeService';
import {Department} from "../types/Department";
import {Employee} from "../types/Employee";
import {Organization} from "../types/Organization";

const EmployeeComponent = () => {

    const [employee, setEmployee] = useState<Employee>()
    const [department, setDepartment] = useState<Department>()
    const [organization, setOrganization] = useState<Organization>()

    useEffect(() => {
        EmployeeService.getEmployee().then((response) => {
            setEmployee(response.data.employee)
            setDepartment(response.data.department)
            setOrganization(response.data.organization)
            console.log(employee)
            console.log(department)
            console.log(organization)
        })

    }, [])

    return (
        <div><br/><br/>
            <div className='card col-md-6 offset-md-3'>
                {employee && <>
                    <h3 className='text-center card-header'> View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong>Employee First Name: </strong> {employee.firstName}</p>
                        </div>
                        <div className='row'>
                            <p><strong>Employee Last Name: </strong> {employee.lastName}</p>
                        </div>
                        <div className='row'>
                            <p><strong>Employee Email: </strong> {employee.email}</p>
                        </div>
                    </div>
                </>}
                {department && <>
                    <h3 className='text-center card-header'> View Department Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong>Department Name: </strong> {department.departmentName}</p>
                        </div>
                        <div className='row'>
                            <p><strong>Department Description: </strong> {department.departmentDescription}</p>
                        </div>
                        <div className='row'>
                            <p><strong>Department code: </strong> {department.departmentCode}</p>
                        </div>
                    </div>
                </>}
                {organization && <>
                    <h3 className='text-center card-header'> View Organization Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong> Organization Name: </strong> {organization.organizationName} </p>
                        </div>
                        <div className='row'>
                            <p><strong> Organization Description: </strong> {organization.organizationDescription} </p>
                        </div>
                        <div className='row'>
                            <p><strong> Organization Code: </strong> {organization.organizationCode} </p>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}
export default EmployeeComponent
