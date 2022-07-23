import {useState, useEffect} from "react";

import ApiService from "../service/api.service";
import Album from "../components/Album";

export default function Albums () {

    let apiService = new ApiService('albums');
    let [albums, setAlbums] = useState([]);
    useEffect(()=> {
        apiService.getAll().then(value => setAlbums([...value]))
    }, [])

    return (
      <div>
          {albums.map(album => <Album key={album.id} album={album}/>)}
      </div>
    );
}