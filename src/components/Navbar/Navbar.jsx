// import React from 'react';
import dollarImg from '../../assets/dollar 1.png'

const Navbar = ({coin}) => {
    return (
        <div class="navbar bg-base-100 shadow-sm ">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <button class="flex justify-between items-center gap-2 font-bold text-xl">
                    {coin} coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;