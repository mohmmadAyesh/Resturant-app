import { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await api.get('/auth', {
                        headers: {'x-auth-token' : token }
                    });
                    setUser(res.data);
                } catch (err) {
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    const login = async (loginData) => {
        try{
            console.log('requesting username',loginData.username);
        const res = await api.post('/auth/login',{
            username:loginData.username,
            password:loginData.password,
        });
        localStorage.setItem('token', res.data.token);
        const userRes = await api.get('/auth');
        // console.log("user response: ",userRes);
        setUser(userRes.data);
        } catch (err) {
            console.log('errror');
            console.log(err);
            if(err.response.status === 400){
                return 'Invalid credentials';
            }
            return err.response.data.message;
        }
    };

    const signup = async (SignupData) => {
        const res = await api.post('/auth/signup', {
            username:SignupData.username,
            password:SignupData.password,
            name:SignupData.name
        });
        localStorage.setItem('token', res.data.token);
        const userRes = await api.get('/auth');
        setUser(userRes.data);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
