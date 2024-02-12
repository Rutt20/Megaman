export const NavigationLink = ({
    text,
    link
}) => {
    return(
        <a className='nav-link' href={link}>
            {text}
        </a>
    );
}