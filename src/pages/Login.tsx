import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (email === '113sumitdhonde@gmail.com' && password === '1234') {
      dispatch(login({ email, password })); 
      navigate('/', { replace: true }); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        Log In
      </button>
    </div>
  );
};

export default Login;
