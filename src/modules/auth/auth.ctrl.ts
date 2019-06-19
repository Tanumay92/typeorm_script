import { Request, Response } from 'express';
import { EmployeeEntity } from '../../entities/employee-entity';
import { EmployeeRepo } from './auth.repostitory';


export let login = async(req : Request, res : Response) => {
//    let email = req.body.email;
     console.log(req.body);
     let empRepo : EmployeeRepo = new EmployeeRepo(); 

     let emp : EmployeeEntity = new EmployeeEntity();
     
     emp.email = req.body.email;
     empRepo.login(emp)
     .then((result : any) => {
         console.log(result);
         res.json({
             status : true,
             statusCode : 200,
             data : result,
             message : 'Data fetched successfully!'
         })
     }).catch((err) => {
         console.log(err);
     })
}