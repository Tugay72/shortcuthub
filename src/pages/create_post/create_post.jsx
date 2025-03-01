import './create_post.css';
import { useNavigate } from 'react-router-dom';


import { Button, ConfigProvider, message } from 'antd';
import Theme from '../../Theme';
const CreatePost = () => {

    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Successfully copied to clipboard!',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Error while copying to clipboard!',
        });
    };

    const handleClick = () => {
        navigator.clipboard.writeText('devdelta72@gmail.com')
            .then(() => success())
            .catch(err => error());
    };

    return (
        <div className="create-post-main">
            <ConfigProvider theme={Theme}>
                {contextHolder}
                <div className='create-post-container'>
                    <span className='go-back'>
                        <Button onClick={() => navigate('/homepage')}>🢀</Button>
                    </span>
                    <h2>Suggest Us!</h2>
                    <h3>devdelta72@gmail.com</h3>
                    <Button type="primary"
                        onClick={handleClick}
                        style={{
                            width: '40%',
                            margin: '24px',
                        }}>
                        Copy
                    </Button>
                </div>
            </ConfigProvider>
        </div>
    );
}

export default CreatePost;