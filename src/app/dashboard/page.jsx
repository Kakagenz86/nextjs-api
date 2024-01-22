import React from 'react';
import { getData } from '../../api/action';

const Dashboard = async () => {
    const data = await getData();
    const menu = data?.data?.Data || [];
    // console.log(menu)
    
    return (
    <div>
        <h1>Dashboard</h1>
        {menu.map((item, index) => (
        <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
        ))}
    </div>
    )
}


export default Dashboard;
