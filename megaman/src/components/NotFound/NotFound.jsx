import './styles.css';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div className='notfound-container'>
            <div className='notfound-text-container'>
                <h1 className='font-white font-outline'>You seem to have wondered off</h1>
                <button 
                    className='notfound-button main-font'>
                    <Link to={'/'}>
                    Back to Home
                    </Link>
                </button>
            </div>
        </div>
);