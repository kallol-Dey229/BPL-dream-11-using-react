import React from 'react';
import Card from '../../../ui/card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    players.map((player, index) => {
                        return (
                            <Card key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default AvailablePlayers;