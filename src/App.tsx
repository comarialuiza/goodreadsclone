import React, { useEffect } from 'react';

// import { Container } from './styles';
import api from './services/api';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  async function handleGetData () {
    try {
      const res = await api.get('myBooks?uid=75098237');
      console.log(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;