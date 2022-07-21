function Character({id,name,status,species,gender,image}) {

    return (
        <div>
            <div>
                <h2 className={'name'}>{name}</h2>
                <h5>id number: {id}</h5>
                <h4>status: {status}</h4>
                <h4>species: {species}</h4>
                <h4>gender: {gender}</h4>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}
export default Character;