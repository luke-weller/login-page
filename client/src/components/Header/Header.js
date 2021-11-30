import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='logo'>Authentiactor</h1>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/register'>Register</Link></button>
            <button><Link to='/dashboard'>Dashboard</Link></button>
            <button><Link to='/preferences'>Preferences</Link></button>
            <button><Link to='/logout'>Logout</Link></button>
        </div>
    )
}

export default Header
