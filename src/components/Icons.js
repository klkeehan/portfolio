import gitLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import mailicon from '../images/mail.png';
import '../App.css';

const Icons = () => {
    return (
        <div>
            <a href='https://www.linkedin.com/in/karissa-keehan/'><img src={linkedinLogo} className='icon' alt='LinkedIn logo'></img></a>
            <a href='https://github.com/klkeehan'><img src={gitLogo} className='icon' alt='GitHub logo'></img></a>
            <a href='mailto:klkeehan@gmail.com'><img src={mailicon} className='icon' alt='mail icon'></img></a>
        </div>
    );
};

export default Icons;