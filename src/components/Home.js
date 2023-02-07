import React from 'react'
import Table from 'react-bootstrap/Table';
import Employee from './Employee'
import  Button  from 'react-bootstrap/Button';
import { FaUserPlus,FaUserEdit,FaTrashAlt } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Home() {

  const history=useNavigate();

  const handleDelete=(id)=> {
    alert('Deleted')
    let index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1);
    console.log(Employee);
    history('/');

    
  }
  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desg",desg);
    localStorage.setItem("salary",JSON.stringify(salary));


  }
  return (

    <div>
      
    <h1 className='text-primary text-center mt-5'>Employee Management</h1>
    <p className='text-center'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.
</p>
    <Link to={'/add'}>
    <Button className='btn btn-success'>Add <FaUserPlus/></Button>
    </Link>
    
    <h3 className='mt-5 text-center'>List of Employee</h3>

       <Table className='' striped bordered hover>
    <thead>
      <tr>
       
        <th>User name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        
        Employee && Employee.length > 0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.desg}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'edit'}>
                  <Button className='me-3'onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button>
                  </Link>
                  
                <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaTrashAlt/></Button></td>
                
            </tr>
            
        )):'Error'
       }
    </tbody>
  </Table>
  </div>
  )
}

export default Home