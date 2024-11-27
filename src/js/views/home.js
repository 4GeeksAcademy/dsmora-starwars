import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const images = [
	'https://starwars-visualguide.com/assets/img/vehicles/7.jpg',
	'https://starwars-visualguide.com/assets/img/vehicles/6.jpg',
	'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'

]

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Vehicles!</h1>
			<div className="d-flex  flex-wrap">
				{
					store.vehicles.map(vehicle => (
						<div key={vehicle.uid} className="card m-4" style={{ width: "18rem" }}>
							<img src={'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'} class="card-img-top" alt="..." />
							<div className="card-body">
								{
									store.favorites.includes(vehicle.uid) ?
										<i onClick={() => actions.removeFavorite(vehicle.uid)} className="fa-solid fa-heart"></i> :
										<i onClick={() => actions.addFavorite(vehicle.uid)} className="fa-regular fa-heart"></i>
								}
								<h5 className="card-title">{vehicle.name}</h5>
								<Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">Go somewhere</Link>
							</div>
						</div>
					))
				}


			</div>
		</div>
	)
};
