import React from 'react'

function HomePage({onLogout}){
    return(
        <div className='Home-page'>
            <h2>Welcome Back!</h2>
            <button onClick ={onLogout}>Logout</button>
        </div>
    )
}


export default HomePage