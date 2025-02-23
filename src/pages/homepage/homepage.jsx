import './homepage.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ConfigProvider, Input } from 'antd'

import Sidebar from '../../components/sideBar/sideBar'
import ShortcutContainer from '../../components/shortcut_container/shortcut_container';

import Led from '../../components/navBar/led/led'
import Theme from '../../Theme'

import shortcuts_data from '../../shortcuts.json';

export default function Homepage() {

    let { tag } = useParams();
    let displayTag = tag || 'Home';
    displayTag = displayTag[0].toUpperCase() + displayTag.slice(1);
    const shortcuts = shortcuts_data[tag] || {};
    const [search, setSearch] = useState(null);

    const onSearch = (value, _e, info) => {
        setSearch(value)
    };

    return (
        <div className="homepage-main">
            <Led />
            <ConfigProvider theme={Theme}>
                <div className='homepage-container'>
                    <Sidebar />
                    <div className='homepage-content'>
                        {displayTag == null || displayTag == 'Home' ? (
                            null
                        ) : (
                            <span
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '32px'
                                }}>

                                <h2>{displayTag}</h2>
                                <Input.Search
                                    style={{
                                        width: '320px',
                                    }}
                                    placeholder='Search'
                                    onSearch={onSearch}
                                />
                            </span>
                        )}
                        <div className='homepage-shortcuts'>

                            {Object.keys(shortcuts).map(category => {
                                const filteredItems = shortcuts[category]
                                    .filter(item => search === null || item.action.toLowerCase().includes(search.toLowerCase()));

                                return filteredItems.length > 0 ? (
                                    <div key={category} style={{ marginBottom: '0' }}>
                                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(4, 1fr)',
                                                gap: '24px',
                                            }}>
                                            {filteredItems.map((item, index) => (
                                                <ShortcutContainer
                                                    key={index}
                                                    action={item.action}
                                                    shortcut={item.shortcut}
                                                />
                                            ))}
                                        </div>
                                        <br />
                                        <hr />
                                    </div>
                                ) : null;
                            })}

                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div>
    )
}
