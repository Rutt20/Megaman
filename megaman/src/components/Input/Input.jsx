import './styles.css';

export const Input = ({
    id,
    title,
    type,
    handleOnInput,
    val,
    min,
    error
}) => (
    <div className='input-container'>
        <p className='font-white label-input'>{title}</p>
        <input 
            id={id}
            className='input-style'
            type={type}  
            onChange={() => handleOnInput()}
            value={val}
            min={min}
            required/>
        <p className='input-error'>{error}</p>
    </div>
);
