
import Login from './components/Auth/login'
import './App.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from './context/AuthProvider'






function App() {
  const [user, setuser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  const [userData,setUserData] = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);
       setuser(userData.role)
      setLoggedInUserData(userData.data);
      setLocalStorage();
  
    }
  },[])
  // console.log(AuthData)


  const handleLogin = (email, password) => {

    if (email == 'admin@123' && password == '123') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      // setLoggedInUserData(employees);
      toast.success("Welcome Admin")

    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setuser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data: employee}))
        toast.success("Welcome " + employee.first_name);


      } else {
        toast.error("Incorrect Login Detail")
      }


    }
    else {
      toast.error("Incorrect Login detail");


    }



  }








  return (
    <>


      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == 'admin' ? <AdminDashboard changeUser={setuser} /> :
        (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={LoggedInUserData} /> : null)}


    </>
  )
}

export default App
