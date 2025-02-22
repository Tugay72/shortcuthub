import './homepage.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd'

import Sidebar from '../../components/sideBar/sideBar'
import ShortcutContainer from '../../components/shortcut_container/shortcut_container';

import Theme from '../../Theme'

export default function Homepage() {

    let { tag } = useParams();
    let displayTag = tag || 'Home';

    return (
        <div className="homepage-main">
            <ConfigProvider theme={Theme}>
                <div className='homepage-container'>
                    <Sidebar />
                    <div className='homepage-content'>
                        <p>{displayTag}</p>
                        <div className='homepage-shortcuts'>
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                            <ShortcutContainer />
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div>
    )
}