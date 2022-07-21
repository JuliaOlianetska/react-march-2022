export default function Ship ({ship}) {

    return (
        <div>
            <h4>{ship.mission_name}</h4>
            <p>launch year: {ship.launch_year}</p>
            <img src={ship.links.mission_patch_small} alt={'ship'}/>
        </div>
    );
}