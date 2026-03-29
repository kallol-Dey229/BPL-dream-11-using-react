import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const SelectedPlayers = ({selectedPlayers,setSelectedPlayers, setCoin, coin}) => {
    const handleDeleteSelectedPlayer = (player) =>{

        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)

    }
    return (
        <div>
            <div className='space-y-5'>
                {
                selectedPlayers.length === 0 ? 
                <div className='h-100 flex items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-2xl'>No players selected yet</h2>
                    <p>Go to available tab to select players</p>
                </div> 
                : selectedPlayers.map((player,index)=>{
                    return(
                        <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                            <div className='flex items-center gap-6'>
                                <img src={player.playerImg} alt={player.playerName} className='h-18.75 w-auto rounded-md'/>
                                <div>
                                    <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser /> {player.playerName}</h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>
                            <button className='btn text-red-500' onClick={()=> handleDeleteSelectedPlayer(player)}><MdDelete /></button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;