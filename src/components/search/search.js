import './search.css';
import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Search = ({ dispatch }) => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ clientId ] = useState('a28j8rTsjtJlc31Zxwzv7-WXNehfNDxwRTsI5TrYhh0');

    const searchImagesHandler = async () => {
        try{
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${clientId}`);
            
            dispatch({ type: 'SET_SEARCHED_IMAGES', payload: response.data.results })
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className = 'Search'>
            <i id = 'search-icon' className = 'fas fa-search'></i>
            <input
                onChange = { (e) => setSearchValue(e.target.value)}
                type = 'search' id = 'search-input' placeholder = 'Find something...' 
            />
            <button
                onClick = { (e) => {
                    e.preventDefault();
                    searchImagesHandler();
                        
                    }
                }
                id = 'search-button'
            >
                Search
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps)(Search);