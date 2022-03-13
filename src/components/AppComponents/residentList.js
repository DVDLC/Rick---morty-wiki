import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSkull } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';




function ResidentList( { data } ) {

   
    function ResidentCard( { url } ){

        const [ character, setCharacter ] = useState( )



        useEffect( () => {
    
            axios.get( url )
                .then( res => setCharacter( res.data ))   
            
        }, [ url ])

        return(
            <div className='resident-card' >
                <img src={ character?.image } alt="" />
                <FontAwesomeIcon 
                    style={
                        {
                            position: 'absolute', 
                            left: '5px', 
                            top: '5px', 
                            color: ( character?.status === 'Alive' )? '#77dd77': 'cb3234' 
                        }} 
                    icon={ 
                        ( character?.status === 'Alive' )? faHeart: faSkull
                    }/>
                <div>
                    <p><b>Name:</b>  { character?.name } </p>
                    <p><b>Specie:</b> { character?.species }</p>
                    <p><b>Origin:</b> { character?.origin.name }</p>
                    <p><b>Gender:</b> { character?.gender }</p>
                </div>
            </div>
        )
    }

    return(
        <div className='card-container' >
            {
            data?.residents?.map( url => (
                <ResidentCard url={ url } key={ url }/>
            ))
            }
        </div>
    )
}

export default ResidentList
