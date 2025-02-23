import './sideBar.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

import items from './siderBar_items'



const SideBar = () => {

    const navigate = useNavigate();

    const onClick = (e) => {
        if (e.keyPath.includes('home')) {
            navigate('/homepage')
        }

        else if (e.keyPath.includes('suggest')) {
            navigate('/suggest')
        }

        else {
            let tag = e.keyPath[0];
            navigate(`/homepage/${tag}`);
        }


    };
    return (
        <div className='sidebar-main'>
            <Menu
                onClick={onClick}
                style={{
                    width: 196,
                    height: '100%',
                    background: 'none'
                }}
                defaultOpenKeys={['languages', 'more']}
                mode="vertical"
                items={items}
            />
        </div>
    );
};

export default SideBar;