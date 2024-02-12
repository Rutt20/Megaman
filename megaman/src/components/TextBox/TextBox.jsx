import './styles.css';

export const TextBox = ({
    id,
    title,
    val,
    handleOnInput,
    error
}) => (
    <div className='textbox-container'>
        <label className='font-white textbox-label'>{title}</label>
        <textarea  
            id={id}
            className='textbox'
            rows={8}
            value={val}
            wrap={'on'}
            onChange={() => handleOnInput()}/>
        <p className='input-error'>{error}</p>
    </div>
);