import {useTheme} from 'hooks/useTheme';
import {useEffect} from 'react';
import {setCookie} from 'helpers/helpers';
import 'styles/index.css';
import LoginAuth from 'components/LoginAuth';
import AuthProvider from 'providers/AuthProvider/ui/AuthProvider';
import {Route, Routes} from 'react-router-dom';

function App() {
  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    setCookie('token', 'Bearer sfaefad', 1);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <AuthProvider>
        <button onClick={toggleTheme}>toggle</button>

        <Routes>
          <Route path='/' element={
            <div className='authBlock'>
              <LoginAuth />
            </div>
          } />

          <Route path='/posts' element={<div>posts</div>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
