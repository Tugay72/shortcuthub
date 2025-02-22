import './navBar.css'
import { useNavigate } from 'react-router-dom';

import Led from './led/led';
import { Input, Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default function NavBar() {

    const navigate = useNavigate();

    return(
        <div className="navbar-main">
            <Led />
            <div className='navbar-container'>
                <h2>MergeApproved</h2>
                <Input.Search
                    style={{
                        width : '480px'
                    }}
                    placeholder='Search'
                />
                <Avatar
                    shape="circle" 
                    size={48} 
                    src={url}
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate('/profile')}
                />
            </div>
        </div>
    )
}