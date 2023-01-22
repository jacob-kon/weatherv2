import weatherImage from './weather.jpg'
export default function Images({city, region, temp, feelsLike, valid}){
    return(
        <div className="imageWraper">
            <img src={weatherImage} alt="vally" />
            <div className='fields'>
                {!valid && <h2 className='warning'>please enter a valid Zip code</h2>}
                <h4>City:  {city}</h4>   
                <h4>Region:  {region}</h4>
                {temp !== '' ?<h4>Temperature: {temp} Degrees</h4> :<h4>Temperature:</h4>}
                {feelsLike !== '' ? <h4>Feels like {feelsLike} Degrees</h4> :<h4>Feels Like:</h4>} 
                
            </div>
        </div>
        
    )
}

