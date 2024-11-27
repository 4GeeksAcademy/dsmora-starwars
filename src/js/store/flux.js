const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			favorites: []
		},
		actions: {
			loadSomeData: () => {

				const store = getStore();

				if (store.vehicles.length === 0) {
					fetch('https://www.swapi.tech/api/vehicles/')
						.then(resp => resp.json())
						.then(respJson => {
							const response = respJson.results;
							setStore({ vehicles: response })
						})
				}


			},
			addFavorite: (id) => {
				const favorites = getStore().favorites;

				const newFavorites = [...favorites, id];
				setStore({ favorites: newFavorites })

			},
			removeFavorite: (id) => {
				const favorites = getStore().favorites;
				const newFavorites = favorites.filter(item => item !== id);
				setStore({ favorites: newFavorites })
			}
		}
	};
};

export default getState;
