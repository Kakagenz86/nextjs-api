'use client'

import { useState, useEffect } from "react";
import { getData } from '@/api/action'

const Menu = () => {
    const [menu, setMenu] = useState([]);

    const gethandleMenu = async () => {
        const data = await getData();
        setMenu(data?.data?.Data || []);
        // console.log(menu)
    }

    useEffect(() => {
        gethandleMenu()
    },[])

    return (
        <div>
        <h1>Menu</h1>
        {menu.map((item, index) => (
        <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
        ))}
    </div>
    );
}

export default Menu;