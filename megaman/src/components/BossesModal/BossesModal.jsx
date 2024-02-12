import './styles.css';
import { Input } from '../Input/Input';
import { TextBox } from '../TextBox/TextBox';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBoss, createBoss } from '../../actions/bossesActions';

export const BossesModal = ({
    itemId,
    onClose,
    name,
    isNew,
    oldInfo
}) => {
    const [ bossName, setBossName ] = useState('');
    const [ nameError, setNameError ] = useState('');
    const [ bossImg, setBossImg ] = useState('');
    const [ imgError, setImgError ] = useState('');
    const [ bossDescription, setBossDescription ] = useState('');
    const [ descriptionError, setDescriptionError ] = useState('');
    const [ infoDone, setInfoDone ] = useState(false); //make sure input value isn't always set to old info
    const dispatch = useDispatch();

    const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
        '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }

    function validateForm() {
        let isValid = true;

        //validate name input
        if (bossName == '') {
            setNameError("Name must be filled out");
            isValid = false;
        }else {
            setNameError('');
        }
        
        //validate image input
        if (bossImg == '') {
            setImgError("Image field must be filled out")
            isValid = false;
        }else if (!isValidUrl(bossImg)) {
            setImgError("Image must be valid url")
            isValid = false;
        }else{
            setImgError('');
        }

        //validate boss description
        if (bossDescription == '') {
            setDescriptionError("Description must be filled out");
            isValid = false;
        }else {
            setDescriptionError('');
        }

        return isValid;
      }

    const handleSaveButton = () => {
        const valid = validateForm();
        if (valid == false) {
            return
        }

        let bossItemObj = {
            id: itemId,
            name: bossName,
            img: bossImg,
            description: bossDescription
        }

        if(isNew) {
            dispatch(createBoss(bossItemObj));
        } else {
            dispatch(updateBoss(bossItemObj));
        }

        onClose();
    }

    const handleChange = () => {
        let name_input = document.getElementById('bossName');
        let img_input = document.getElementById('bossImg');
        let description_input = document.getElementById('bossDescription');
        if(name_input && img_input && description_input) {
            setBossName(name_input.value);
            setBossImg(img_input.value);
            setBossDescription(description_input.value);
        }

    }

    useEffect(() => {
        if(oldInfo && !infoDone) {
            setBossName(oldInfo.name);
            setBossImg(oldInfo.img);
            setBossDescription(oldInfo.description);
            setInfoDone(true);
        }
    },[]);

    return(
        <div className='boss-modal'>
            <div className='boss-modal-container black-box'>
                <button 
                    className='font-white boss-modal-back-button'
                    onClick={onClose}>X</button>
                <div className='boss-modal-content'>
                    {isNew ? (
                        <h1 className='font-white boss-modal-title'>Create New Boss</h1>
                        ):(
                            <h1 className='font-white boss-modal-title'>Editing {name}</h1>
                        )
                    }
                    <Input 
                        id = 'bossName'
                        title='Name'
                        val={bossName}
                        handleOnInput={handleChange}
                        error={nameError}
                        min="1"
                        />
                    <Input 
                        id = 'bossImg'
                        title='Image URL'
                        handleOnInput={handleChange}
                        error={imgError}
                        val={bossImg}
                        type="url"/>
                        
                    <TextBox 
                        id = 'bossDescription'
                        title={'Description'}
                        handleOnInput={handleChange}
                        val={bossDescription}
                        error={descriptionError}/>
                </div>
                <button 
                    className='button-design modal-save-buttton'
                    onClick={handleSaveButton}>
                    Save
                </button>
            </div>
        </div>
    );
}