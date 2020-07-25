import React, { useState } from 'react';

import { Container, Form, Input } from './styles';

const LoginForm: React.FC = () => {
    const [ id, setId ] = useState('');

    const handleLogin = () => {

    }

    return (
        <Container>
            <h1>Login into Goodreads</h1>

            <Form onSubmit={ handleLogin }>
                <Input 
                    placeholder="Github ID" 
                    value={ id }
                    onChange={ e => setId(e.target.value) }
                />
                

            </Form>
        </Container>
    );
}

export default LoginForm;