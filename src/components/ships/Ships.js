import {useEffect, useState} from "react";
import {getShips} from "../../services/LaunchesServices";
import Ship from "../ship/Ship";

export default function Ships () {

    let [ships, setShips] = useState([]);

    useEffect(()=> {
        getShips().then(value => setShips([...value]))
    }, [])

    let show2020 =
        ships.filter(ship => ship.launch_year !== '2020')
    console.log(show2020)

    return (
        <div>
            {ships.filter(value => value.launch_year !== '2020').map((ship,index) => <Ship key={index} ship={ship}/>)}
        </div>


    );
}