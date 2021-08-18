import './nav.css';

const Nav = () => {
    return(
        <div className = 'Nav'>
            <ul>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-home Nav-icon'></i>
                    Home
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-folder Nav-icon'></i>
                    Message
                </li>
                <li className = 'Nav-item'>
                    SHARE
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-folder Nav-icon'></i>
                    Ranking
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-folder Nav-icon'></i>
                    Challenge
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-folder Nav-icon'></i>
                    Party
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-link Nav-icon'></i>
                    Connect
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-folder Nav-icon'></i>
                    Parade
                </li>
                <li className = 'Nav-item'>
                    <i className = 'fas fa-users Nav-icon'></i>
                    Group
                </li>
            </ul>
        </div>
    )
}

export default Nav;