function Character({name, description, image}) {

    return (
        <div>
            <div>
                <h2 className={'name'}>{name}</h2>
                <p className={'desc'}>{description}</p>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}
export default Character;