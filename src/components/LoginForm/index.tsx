import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form, Input, Button } from './styles';

const LoginForm: React.FC = () => {
    const [ id, setId ] = useState('');

    const history = useHistory();

    const handleLogin = () => {
        localStorage.setItem('@goodreadsID', id);

        history.push('/');
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
                
                <Button type="submit">Access</Button>
            </Form>
        </Container>
    );
}

export default LoginForm;