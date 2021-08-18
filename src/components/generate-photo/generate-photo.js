import './generate-photo.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../loading/loading';
import { connect } from 'react-redux';

const GeneratePhoto = ({ searchedImages }) => {


    const [ images, setImages ] = useState([]);
    const [ clientId ] = useState('a28j8rTsjtJlc31Zxwzv7-WXNehfNDxwRTsI5TrYhh0');
    const [ loading, setLoading ] = useState(false);
    // const [ showMore, setShowMore ] = useState(false);
 
    useEffect( () => {

        const getPhotoHandler = async () => {
            try{
                const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${clientId}`);
                setImages(response.data);
                setLoading(true);
            }catch(error){
                console.log(error);
            }
        }

        getPhotoHandler();

    }, [])


    

    return(
        <div className = 'Photo'>

            {
                searchedImages?

                searchedImages.map( image => {
                    return  <div
                                className = 'Image-holder' key = { image.id }>
                                <img className = 'Image' src = {  image.urls.regular } alt = 'A photo'/>

                                <div className = 'Image-info'>
                                    <h4>{ `${image.user.first_name + ',' + ' ' + image.user.total_photos}` }</h4>
                                    <div>
                                        <i className = 'fas fa-map-marker-alt'></i>
                                        <p>{ image.user.location === 'null' ? 'Not available': image.user.location }</p>
                                    </div>
                                </div>
                            </div>

                })

                : ''
            }
            
            {
                ( images.length > 0 && (!searchedImages || searchedImages.length === 0) ) && images.map( image => {
                    return  <div
                                className = 'Image-holder' key = { image.id }>
                                <img className = 'Image' src = {  image.urls.regular } alt = 'A photo'/>

                                <div className = 'Image-info'>
                                    <h4>{ `${image.user.first_name + ',' + ' ' + image.user.total_photos}` }</h4>
                                    <div>
                                        <i className = 'fas fa-map-marker-alt'></i>
                                        <p>{ image.user.location === 'null' ? 'Not available': image.user.location }</p>
                                    </div>
                                </div>

                                
                            </div>

                })
            }

            {
                !loading ?

                <Loading /> 

                : ''
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        searchedImages: state.searchedImages
    }
}

export default connect(mapStateToProps)(GeneratePhoto);