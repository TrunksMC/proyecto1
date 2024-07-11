/**
* Importamos useRef para enganchar elementos del formulario a una variable y
* useState para enganchar a un elemento un estado de inicio y una funcion que permite
* cambiar el estado de dicho elemento
*/
import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
/**
* Componente fusion entre Title y Form
*/
export const MyPlaylist = () => {
    const urlRef = useRef();
    const favoriteRef = useRef();
    const [playlist, setPlaylist] = useState([{id:uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
                {id:uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
                {id:uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
                {id:uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }
    ]); 
    /**
    * Funcion flecha para agregar nueva cancion
    */
    const addSong = () => {
        /**
        * Aca capturamos los datos de los inputs previamente enganchados con el hook useRef
        */
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;
        /**
        * Creamos un nuevo objeto con las propiedades url y favorite.
        */
        const newSong = {
        id:uuid(),
        url: url,
        favorite: favorite
        }
        /**
        * Añadimos el nuevo objeto a la lista playlist, mas adelante cambiaremos la forma de
        * agregar elementos a la lista
        */
        playlist.push(newSong);
        /**
        * Comprobamos con un clg que el nuevo objeto se agrego a la lista
        */
        console.log(playlist);
    }
               
    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo
                del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                    Favorite
                    </label>
                </div>
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circlefill"></i></button>
                <button className='btn btn-danger ms-2'><i class="bi bitrash"></i></button>
            </div>
            <div>
                <SpotifyPlayer url=""favorite={true}/>
            </div>
            <div>
                {
                    playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite} key={song.id}/>)
                }
            </div>
        </div>
    )
}