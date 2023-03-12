import {setCookie} from 'helpers/helpers';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {loginFetch} from 'requests/authActions';

const LoginAuth = () => {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value, [e.target.name]: e.target.value,
    });
  };

  const submitLog = (e) => {
    e.preventDefault();

    if (!value.username || !value.password) return;

    loginFetch({...value})
        .then((data) => {
          const date = new Date().getMinutes();
          setCookie('token', data.data.token, 1);
          setCookie('user', data.data.data, 1);
          setCookie('minute', date, 1);
          navigate('/posts');
        });
  };

  return (
    <form onSubmit={submitLog} className='formAuth'>
      <input name='username' value={value.username} onChange={handleChange} placeholder="login"/>
      <input name='password' value={value.password} onChange={handleChange} placeholder="password"/>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginAuth;
