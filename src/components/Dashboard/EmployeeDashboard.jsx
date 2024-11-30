import React from 'react'
import Header from '../other/Header'
import TaskListsNumbers from '../other/TaskListsNumbers'
import TaskList from '../TaskList/TaskList'
// import toast from 'react-hot-toast'


const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 overflow-hidden h-screen bg-[#1c1c1c]'>

        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListsNumbers data={props.data}/> 
        <TaskList data={props.data}/>


      

        
       






    </div>
  )
}

export default EmployeeDashboard