import { useNavigate } from 'react-router-dom';

const Logout = ({ onLoginUpdate }) => {
    const navigate = useNavigate();

    return (     
        <button onClick={() => {
        onLoginUpdate(false);
        navigate('/')
        }}>Logout</button> 
    )
}

export default Logout


