import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


export const Vehicle = () => {
    const [data, setData] = useState()
    const params = useParams();
    console.log(params);

    const { store, actions } = useContext(Context)

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.id}`)
            .then((resp) => resp.json())
            .then(respJson => setData(respJson.result.properties))
    }, [])

    if (!data) return null;

    console.log(data)

    return (
        <div>
            Detalle: {data.name}
            {
                store.favorites.includes(params.id) ?
                    <i onClick={() => actions.removeFavorite(params.id)} className="fa-solid fa-heart"></i> :
                    <i onClick={() => actions.addFavorite(params.id)} className="fa-regular fa-heart"></i>
            }
            <Link to='/'>
                Go to Home
            </Link>
        </div>
    );
}