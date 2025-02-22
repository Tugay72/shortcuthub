import './sideBar.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CodeOutlined, DesktopOutlined, ToolOutlined, GlobalOutlined, DatabaseOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        key: 'home',
        label: 'Home',
        icon: <HomeOutlined />,
    },
    {
        key: 'os',
        label: 'Operating Systems',
        icon: <DesktopOutlined />,
        children: [
            { key: 'windows', label: 'Windows' },
            { key: 'macos', label: 'macOS' },
            { key: 'linux', label: 'Linux' }
        ]
    },
    {
        key: 'ides',
        label: 'IDEs',
        icon: <CodeOutlined />,
        children: [
            { key: 'vscode', label: 'VS Code' },
            { key: 'intellij', label: 'IntelliJ IDEA' },
            { key: 'pycharm', label: 'PyCharm' },
            { key: 'eclipse', label: 'Eclipse' },
            { key: 'xcode', label: 'Xcode' }
        ]
    },
    {
        key: 'tools',
        label: 'Development Tools',
        icon: <ToolOutlined />,
        children: [
            { key: 'git', label: 'Git' },
            { key: 'docker', label: 'Docker' },
            { key: 'postman', label: 'Postman' },
            { key: 'terminal', label: 'Terminal & CLI' }
        ]
    },
    {
        key: 'browsers',
        label: 'Web Browsers',
        icon: <GlobalOutlined />,
        children: [
            { key: 'chrome', label: 'Google Chrome' },
            { key: 'firefox', label: 'Mozilla Firefox' },
            { key: 'edge', label: 'Microsoft Edge' },
            { key: 'safari', label: 'Safari' }
        ]
    },
    {
        key: 'database',
        label: 'Databases',
        icon: <DatabaseOutlined />,
        children: [
            { key: 'mysql', label: 'MySQL' },
            { key: 'postgresql', label: 'PostgreSQL' },
            { key: 'mongodb', label: 'MongoDB' },
            { key: 'redis', label: 'Redis' }
        ]
    }
];



const SideBar = () => {

    const navigate = useNavigate();

    const onClick = (e) => {
        if (e.keyPath.includes('home')) {
            navigate('/homepage')
        }

        else if (e.keyPath.includes('create_post')) {
            navigate('/create_post')
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