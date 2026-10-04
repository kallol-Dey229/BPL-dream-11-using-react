import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise);
    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
//
    return (
        <div className='container mx-auto my-15'>
            <div className='flex justify-between gap-4 items-center mb-5'>
                {selectedType === 'available' ? <h2 className='font-bold text-3xl'>Available players</h2> : <h2 className='font-bold text-3xl'>Selected players({selectedPlayers.length}/{players.length})</h2>}

                <div>
                    <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === 'available' ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

                    <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === 'selected' ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedType === 'available' ? (<AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>) : (<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>)}
        </div>
    );
};

export default Players;