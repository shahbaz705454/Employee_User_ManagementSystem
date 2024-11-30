import React, { useState } from 'react'

const Header = (props) => {

  const { data, changeUser } = props;

  // const [userName, setuserName] = useState('');

  // if(!data){
  //   setuserNam e('Admin')
  // }else{
  //   setuserName(data.first_name)
  // }

  console.log(props.data)
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser' , '');
    props.changeUser('');
    // window.location.reload();

  }

  const userName = data?.firstName || 'Admin';

 
  return (
    <div className='flex items-end justify-between'>
        
        <h1 className='text-2xl font-medium'>Hello! <br/><span className='text-3xl font-semibold'>{userName}</span> 👋 </h1>
        <button onClick={logOutUser} className='bg-red-500 px-3 py-2 rounded-md text-lg font-medium'>Log Out </button>

    </div>
  )
}

export default Header