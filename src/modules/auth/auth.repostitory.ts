import { EmployeeEntity } from '../../entities/employee-entity';
import { getManager } from 'typeorm';

export class EmployeeRepo {
    login (employee : EmployeeEntity){
        console.log(employee);
           return getManager().getRepository(EmployeeEntity).find({where : {email : employee.email}})
    }
}