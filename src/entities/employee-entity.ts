import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("employee")
export class EmployeeEntity {

    @PrimaryGeneratedColumn({
    })
    id : number;

    @Column({
        length : 155
    })
    email: string;

    @Column({
        length: 66
    })
    password : string;

    @Column({
        length : 155
    })
    first_name: string;

    @Column({
        length : 155
    })
    last_name: string;
    
    @Column({
        length: 10
    })
    country_code : string;

    @Column({
        length: 15
    })
    phone : string;

    @Column({
        length: 250
    })
    address : string;

    @Column({
        length: 2
    })
    state_code : string;

    @Column({
        length: 150
    })
    city_name : string;

    @Column({
        length: 10
    })
    zip_code : string;

    @Column()
    active : boolean;

    @Column()
    admin_access : boolean;

    @Column()
    dashboard_access : boolean;

    @Column()
    restaurant_access : boolean;

    @Column()
    menu_access : boolean;

    @Column()
    dashboard_read_only : boolean;

    @Column()
    employee_role_id : number;

    @Column({
        length: 45
    })
    session_key : string;    

    @Column({
        length : 100
    })
    password_reset_key : string;

    @Column({
        length : 100
    })
    password_reset_timestamp : string

    @Column()
    updated_at : Date

    // @Column()
    // updated_at : Date;
}