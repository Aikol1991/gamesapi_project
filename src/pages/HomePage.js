import { useState, useEffect } from "react";
import axios from "axios";

// components
import { Game } from "../components/Game";

export const HomePage = () => {

    const [ games, setGames ] = useState([]);
	
	useEffect(() => {
		const handleGameList = () => {
			const options = {
				method: 'GET',
				url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
				headers: {
					'X-RapidAPI-Key': '6dcf197816mshb5f2b7027c5ecb5p103122jsnc9f217766b5e',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
				}
			};
			axios.request(options).then(function(response){
				setGames(response.data);
			}).catch(function (error) {
				console.error(error);
			})
		}
		handleGameList();
	}, [])

  return (
    <div className="home">
      {games.map((game, index) => {
          return (
            <Game
              key={index}
              game={game}
            />
          )
        })
      }
		</div>
  )
}