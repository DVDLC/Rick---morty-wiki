
function LocationInfo( { data })  {
    
    return(
        <section className='location-info' >
            <h2>{ data?.name }</h2>
            <div>
                <p><b>type: </b>{ data?.type }</p>
                <p><b>dimension: </b> { data?.dimension } </p>
                <p>
                    <b>population: </b>
                </p>
            </div>
        </section>
    )
}

export default LocationInfo

