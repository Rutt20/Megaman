import './styles.css';
import { BossesList } from '../BossesList/BossesList';
import { BossesModal } from '../BossesModal/BossesModal';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchBosses } from '../../actions/bossesActions';

export const Bosses = () => {

    const [ addModal,setAddModal ] = useState(false);
    const toggleAddModal = () => (setAddModal(!addModal));
    const bosses = useSelector(state => state.bosses);
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBosses());
	},[dispatch])

    return(
        <div className='bosses-container'>
            <div className='bosses-header'>
                <div className='header-left header-box '></div>
                <button 
                    className='font-white header-text header-right header-box'
                    onClick={toggleAddModal}>
                    Add Boss
                </button>
            </div>
            <BossesList items={bosses}/>
            {addModal && (
                <BossesModal 
                    onClose={toggleAddModal}
                    name={''}
                    isNew={true}
                />
            )}
        </div>
    );
}