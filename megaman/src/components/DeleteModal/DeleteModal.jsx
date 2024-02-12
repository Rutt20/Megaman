import './styles.css';
import { deleteBoss } from '../../actions/bossesActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const DeleteModal = ({
    id,
    onClose,
    name
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleDeleteBoss = () => {
        dispatch(deleteBoss(id)).then(() => navigate('/bosses'));
    }

    return(
        <div className='delete-modal'>
            <div className='delete-modal-container black-box'>
                <h1 className='delete-modal-title font-white'>
                    Are you sure you want to delete {name}?
                </h1>
                <div className='delete-modal-button-container'>
                    <button 
                        className='button-design delete-modal-button'
                        onClick={handleDeleteBoss}
                        >Yes</button>
                    <button 
                        className='button-design delete-modal-button'
                        onClick={onClose}>No</button>
                </div>  
                
            </div>
        </div>
    );
}