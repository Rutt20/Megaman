import './styles.css';
import { BossesItem } from '../BossesItem/BossesItem';

export const BossesList = ({items}) => {
    return(
        
        <div className='bosses-list-container'>
            {items.map(i => <BossesItem 
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.img}
                showButton={true}
            />)}
        </div>
    );
}
