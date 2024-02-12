import './styles.css';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const NavigationBar = () => {
    return(
        <div className='nav-bar-container'>
            <NavigationLink text={'Home'} link={'/'}/>
            <NavigationLink text={'Bosses'} link={'/bosses'}/>
        </div>
    );
}