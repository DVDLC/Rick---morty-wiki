import { useState, useEffect } from "react"
import axios from 'axios';


export const useFetch = ( url, endpoint ) => {

    const[ data, setData ] = useState( null ),
         [ isPending, setIsPending ] = useState( true ),
         [ error, setError ] = useState( null )

    useEffect(() => {

        const getData = async( baseUrl, endPoint ) => {

            try{

                const instance = axios.create({
                    baseURL: baseUrl,
                })
            
                const resp = await instance.get( endPoint )
                
                if( resp.status !== 200 ){
                    return{ 
                        err: true, 
                        status:resp.status, 
                        statusText: !resp.statusText? 'Ocurrio un error': resp.statusText, 
                    };
                }
 
                setIsPending( false )
                setData( resp.data )
                setError({ err: false })
                
            } catch( error ){
                setIsPending( isPending )
                setError({ err: true })
            }
        }

        getData( url, endpoint ) 

    }, [ url, endpoint, isPending ])
    
    return{
        data,
        isPending,
        error
    }

}