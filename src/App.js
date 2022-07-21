import Character from "./components/Character";

function App() {
    return (
        <div>
            <Character
                id={1}
                name={'Rick SanchezRick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
            <Character
                id={2}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
            <Character
                id={4}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
            <Character
                id={9}
                name={'Agency Director'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/9.jpeg'}/>
            <Character
                id={16}
                name={'Amish Cyborg'}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/16.jpeg'}/>
            <Character
                id={17}
                name={'Annie'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/17.jpeg'}/>
        </div>
    );
}

export default App;
