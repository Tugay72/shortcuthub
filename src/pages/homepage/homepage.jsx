import './homepage.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ConfigProvider, Input } from 'antd'

import Sidebar from '../../components/sideBar/sideBar'
import ShortcutContainer from '../../components/shortcut_container/shortcut_container';

import Led from '../../components/navBar/led/led'
import Theme from '../../Theme'
import Footer from '../../components/footer/footer';

import shortcuts_data from '../../shortcuts.json';

export default function Homepage() {

    let { tag } = useParams();
    let displayTag = tag || 'Home';
    displayTag = displayTag[0].toUpperCase() + displayTag.slice(1);
    const shortcuts = shortcuts_data[tag] || {};
    const [search, setSearch] = useState(null);

    const onSearch = (value) => {
        setSearch(value);
    };

    return (
        <>
            <div className="homepage-main">
                <Led />
                <ConfigProvider theme={Theme}>
                    <div className='homepage-container'>
                        <Sidebar />
                        <div className='homepage-content'>
                            {displayTag == null || displayTag == 'Home' ? (
                                <div className="homepage-welcome">
                                    <h1>Welcome to ShortcutHub</h1>
                                    <p>Boost your productivity with the best keyboard shortcuts for your favorite apps, operating systems, and tools.</p>

                                    <div className="homepage-features">
                                        <div className="feature-card">
                                            <h3>🔍 Search Instantly</h3>
                                            <p>Quickly find the shortcuts you need with our powerful search feature.</p>
                                        </div>

                                        <div className="feature-card">
                                            <h3>📂 Organized by Categories</h3>
                                            <p>Browse shortcuts by categories like Design, Coding, Browsers, and more.</p>
                                        </div>

                                        <div className="feature-card">
                                            <h3>🚀 Improve Efficiency</h3>
                                            <p>Master keyboard shortcuts and speed up your workflow like a pro.</p>
                                        </div>

                                        <div className="feature-card">
                                            <h3>👍 Like & Vote</h3>
                                            <p>Upvote your favorite shortcuts to help others find the most useful ones.</p>
                                        </div>

                                        <div className="feature-card">
                                            <h3>💡 Suggest New Shortcuts</h3>
                                            <p>Have a shortcut we missed? Contribute and share it with the community!</p>
                                        </div>

                                        <div className="feature-card">
                                            <h3>🗣️ And Bla Bla Bla....</h3>
                                            <p>Start now! You are here to save time not to read this crap!</p>
                                        </div>
                                    </div>

                                    <p>Start exploring now and take your productivity to the next level!</p>
                                </div>
                            ) : (
                                <span
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '90%',
                                        gap: '16px',
                                        flexWrap: 'wrap'

                                    }}>

                                    <h2>{displayTag}</h2>
                                    <Input.Search
                                        style={{
                                            maxWidth: '240px',

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
                                            <div className='shortcut-items'>
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
            <Footer></Footer>
        </>
    )
}
