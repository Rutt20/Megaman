import './styles.css';
import { Link } from 'react-router-dom';

export const BossesItem = ({
    id,
    name,
    img,
    showButton
}) => {
    return(
        <div className='bosses-item-container black-box' style={{backgroundImage: `url(${img})` }}>
            <div className='bosses-item-header'>
                <div className='name-container'>
                    <h1>{name}</h1>
                </div>
                <div className='id-container'>
                    <h1>{id}</h1>
                </div>
            </div>
            <div className='bosses-item-footer'>
                {showButton && (
                    <button className='button-design bosses-item-button'>
                        <Link to={`/bosses/${id}`}>
                            Info
                        </Link>
                    </button>
                )}
            </div>
        </div>
    );
}