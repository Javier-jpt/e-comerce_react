import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Users/UserContext';
import { useContext, useState } from 'react';


function Login () {
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');
  const [error, setError] = useState({
    message: '',
    ok: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (formEmail === 'pascualjpt@gmail.com' && formPass === '123') {
      updateUserData({
        email: formEmail,
      });
      navigate('/home');
    } else {
      setError({
        message: 'Error',
        ok: true,
      });
    }
  };

  const handleEmailForm = (e) => {
    const value = e.target.value;
    setFormEmail(value);
  };

  const handlePassForm = (e) => {
    const value = e.target.value;
    setFormPass(value);
  };

  return (
    <div className='Login'>

      <form className='Form' onSubmit={(e) => handleLogin(e)}>
        <label className='Label' htmlFor="email">Email:</label>
        
        <input className='Input' type="email" name="email" value={formEmail} onChange={(e) => handleEmailForm(e)}/>
        
        <label className='Label' htmlFor="password">Password:</label>
        
        <input className='Input' type="password" name="password" value={formPass} onChange={(e) => handlePassForm(e)}/>
        
        <button className='Button' type="submit">Login Button</button>
        
      </form>
      {error.ok && <p>The email or password is not correct!</p>}
    </div>
  );
}

export default Login ;