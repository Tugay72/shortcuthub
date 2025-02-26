import './create_post.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { Card, Form, Input, Button, Select, ConfigProvider } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons";
import Theme from '../../Theme';

const { TextArea } = Input;

const languages = [
    {
        value: 'c',
        label: 'C'
    },
    {
        value: 'c++',
        label: 'C++'
    },
    {
        value: 'csharp',
        label: 'C'
    },
    {
        value: 'dart',
        label: 'Dart'
    },
    {
        value: 'go',
        label: 'Go'
    },
    {
        value: 'java',
        label: 'Java'
    },
    {
        value: 'javascript',
        label: 'Javascript'
    },
    {
        value: 'kotlin',
        label: 'Kotlin'
    },
    {
        value: 'php',
        label: 'PHP'
    },
    {
        value: 'python',
        label: 'Python'
    },
    {
        value: 'ruby',
        label: 'Ruby',
    },
    {
        value: 'rust',
        label: 'Rust',
    },
    {
        value: 'swift',
        label: 'Swift',
    },
    {
        value: 'typescript',
        label: 'TypeScript',
    },
    {
        value: 'other',
        label: 'Other',
    }
]

const CreatePost = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('a')
    };

    const onLanguageChange = (value) => {
        console.log(value)
    }

    const onLanguageSearch = (value) => {
        console.log(value)
    }


    return (
        <div className="create-post-main">
            <div className='create-post-container'>
                <ConfigProvider theme={Theme}>
                    <span className='go-back'>
                        <Button onClick={() => navigate('/homepage')}>🢀</Button>
                    </span>

                    <h2>Suggest Us!</h2>
                    <Form
                        name="createPost"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                        style={{
                            width: '80%',
                            color: 'white'
                        }}
                    >
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: "Please enter a title!" }]}
                            label='Title'
                        >
                            <Input allowClear />
                        </Form.Item>

                        <Form.Item
                            name="description"
                            rules={[{ required: true, message: "Please enter a description!" }]}
                            label='Description'
                        >
                            <TextArea
                                allowClear
                                showCount
                                autoSize={{ minRows: 6, maxRows: 6 }}
                                maxLength={300} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block
                                style={{
                                    width: '50%',
                                    display: 'flex',
                                    alignSelf: 'end',
                                    justifySelf: 'center',

                                }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        </div>
    );
}

export default CreatePost;