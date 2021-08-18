import './trend.css';

const Trend = () => {
    return(
        <div className = 'Trend'>  
            <ul>
                <li className = 'Trend-item'>
                    <p>World</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Following</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Popular</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Post</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Gender</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Location</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
                <li className = 'Trend-item'>
                    <p>Profession</p>
                    <i className = 'fas fa-chevron-down'></i>
                </li>
            </ul>
        </div>
    )
}

export default Trend;