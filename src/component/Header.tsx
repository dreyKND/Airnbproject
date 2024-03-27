import { useState } from 'react';
import search from "../images/search.svg"
import avatar from "../images/avatar.svg"
import menu_hamburger from "../images/menu_hamburger.svg"
import logolacas from "../images/logolacas.png"

import Login from './Login';
import Signup from './Signup';

const Header = () => {
    const [popUp, setPopUp] = useState(false)
    const [sign, setSign] = useState(false)
    const [log, setLog] = useState(false)


    return (
        <div className='flex border-b justify-between px-10 '>
            <img className=' w-24 ml-10 cursor-pointer' src={logolacas} />
            <div className=' ml-96 flex items-center rounded-3xl border border-gray-300 p-1 shadow-lg h-12'>
                <input type="text" id="first_name" className=' text-gray-900 text-sm rounded-3xl block w-28 text-center outline-none p-2.5' placeholder="Destination" required />|
                <input type="text" id="first_name" className=' text-gray-900 text-sm rounded-3xl block w-30 text-center outline-none p-2.5' placeholder='Nombre des jours' required />|
                <input type="text" id="first_name" className=' text-gray-900 text-sm rounded-3xl block w-30 text-center outline-none p-2.5' placeholder="Ajouter des voyageurs" required />
                <img src={search} />
            </div>
            <div onClick={() => setPopUp(!popUp)} className='  cursor-pointer flex border border-spacing-1 items-center rounded-full p-2 ml-80'>
                {popUp && <div className=' shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 p-1'>
                    <h1 onClick={() => setSign(true)} className=' text-sm font-semibold'>Sign up</h1>
                    <hr className=' text-sm mt-2' />

                    <h1 onClick={() => setLog(true)} className=' font-thin'>Log in</h1>

                </div>}
                <img className=' h-5 w-5' src={menu_hamburger} />
                <img className="  h-8 w-8 ml-3 " src={avatar} />

            </div>
            {sign && <Signup setSign={setSign} />}
            {log && <Login setLog={setLog} />}

        </div>
    )
}
export default Header;
