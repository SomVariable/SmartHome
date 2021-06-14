import axios from 'axios';
import { setUser } from '../reducers/userReduser';



export const registration = async (email, password, name, post, status) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password,
            name,
            post,
            status,
        })
        alert(response.data.message);
    } catch (e) {
        alert(e);
    }
    
}

export const login = (email, password, name, post, status) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password,
                name,
                post,
                status,
        })
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        console.log(response.data);
        } catch (e) {
            alert(e);
        }
    }
    
    
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, 
                {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
    
    
}