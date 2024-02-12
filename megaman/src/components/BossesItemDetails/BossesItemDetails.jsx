import './styles.css';
import { BossesItem } from '../BossesItem/BossesItem';
import { BossesModal } from '../BossesModal/BossesModal';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoss } from '../../actions/bossesActions';

export const BossesItemDetails = () => {

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { bossId } = useParams();
    const dispatch = useDispatch();

    const toggleEdit = () => (setShowEdit(!showEdit));
    const toggleDelete = () => (setShowDelete(!showDelete));

    const boss = useSelector(state => state.boss);

    useEffect(() => {
        dispatch(fetchBoss(bossId));
    },[dispatch,boss])


    return(
        <div className='bosses-details-container black-box'>
            {boss && (
                <div className='wrapper'>
                    <div className='bosses-details-content'>
                        <div className='card-container'>
                            <BossesItem 
                                id={boss.id}
                                name={boss.name}
                                description={boss.description}
                                img={boss.img}
                                showButton={false}/>
                        </div>
                        <div className='bosses-text-container font-white'>
                            <div>
                                <h1>{boss.name}</h1>
                                <p>{boss.description}</p>
                            </div>  
                            <div className='bosses-details-button-container'>
                                <button 
                                    className='button-design details-button' 
                                    onClick={toggleEdit}>Edit</button>
                                <button 
                                    className='button-design details-button'
                                    onClick={toggleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='bosses-details-footer'>
                        <button className='button-design details-back-button '>
                            <Link to={'/bosses'}>Back to Bosses</Link>
                        </button>
                    </div>
 
                    {showEdit && (
                        <BossesModal 
                            itemId = { bossId }
                            onClose={toggleEdit}
                            name={boss.name}
                            isNew={false}
                            oldInfo={boss}/>
                    )}
                    {showDelete && (
                        <DeleteModal 
                            id={boss.id}
                            onClose={toggleDelete}
                            name={boss.name}/>
                    )}
                </div>
            )}
        </div>
    );
}