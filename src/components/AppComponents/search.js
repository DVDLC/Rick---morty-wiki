import React, { useState } from 'react';
import { useFetch } from '../../Hooks/useFecth'
import LocationInfo from './locationInfo';
import ResidentList from './residentList';
import './App.css'

function SearchBox() {
  const baseUrl = 'https://rickandmortyapi.com/api/',
    [search, setSearch] = useState(""),
    [ data, setData ] = useState({})


  // Peticiones en hook perzonalizad0
  const UserInput = () => {
    let { data } = useFetch( baseUrl, `location/${ search }` )
    
    return(
      <button className='btn-search' onClick={ () => setData( data )}> Search </button>
    )
  }
  
  return(
    <div className='App-container' >
      <label className="label">
          <input 
            className="input__field" 
            type="text" 
            placeholder='city/place' 
            onChange={ e => setSearch( e.target.value ) }
          />
          <UserInput/>
      </label>
      <LocationInfo data={ data }/>
      <ResidentList data={ data }/> 
    </div>
  )

}


// Componente resultante
function Results() {

  return(
    <>
      <SearchBox/>
    </>
  )
  
}

export default Results;


