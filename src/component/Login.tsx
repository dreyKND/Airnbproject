import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
import mobile from "../images/logolacas.png"
import mail2 from "../images/mail2.svg"
import facebook from "../images/facebook.svg"
import google from "../images/google.svg"
import { signInWithPopup } from 'firebase/auth';
import { auth,GoogleAuthProvider } from '../firebase/Setup';

interface logProps {
    setLog?: any
}

const Login = (props: logProps) => {
    const [email, setEMail] = useState(false)
    const googleSign = async () => {
        try {
            await signInWithPopup(auth,new GoogleAuthProvider)

        } catch (err) {
            console.error(err);

        }
    }
    console.log(auth)

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-stone-gray-800 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className=" p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">

                        <div className=" p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex ">
                            <h1 onClick={() => props.setLog(false)} className=" cursor-pointer">X</h1>
                            <h3 className=" ml-36 text-base font-bold leading-6 text-gray-bg-yellow-900 text-red-900 " id="modal-title">Connexion ou inscription</h3>
                        </div>
                        <hr className=' mt-4' />
                        <h1 className=' ml-5 font-semibold text-2xl mt-6 text-red-900 '>Bienvenue à la Casa</h1>
                        {email ? <input type="text" className=' ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black block h-12 mt-4 w-11/12 outline-none p-2.5' placeholder="Email" required />
                            : <PhoneInput placeholder='phone number' inputStyle={{ height: "50px", width: "455px", fontSize: "17px" }} containerStyle={{ marginTop: "15px", marginLeft: "20px" }} />}
                        {email && <input type="text" className=' ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black block h-12 mt-4 w-11/12 outline-none p-2.5' placeholder="Mot de passe" required />}

                        <h1 className=' ml-5 text-xs mt-3 '>Nous vous appellerons ou vous enverrons un SMS pour confirmer votre numéro. Les frais standards d'envoi de messages et d'échange de données s'appliquent. Politique de confidentialité</h1>
                        <button className="bg-red-900 ml-5 h-12 text-white font-bold py-2 px-4 w-11/12 border border-spacing-1 rounded mt-3 border-black">
                            {email ? "accepter et Continuer" : "Continuer"}
                        </button>
                        <h1 className=' text-center mt-3'>or</h1>
                        <div className=' cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-lg border-black'>
                            <img src={facebook} className=" w-6 h-6 ml-3" />
                            <h1 className='ml-24 '>Continuer avec facebook</h1>
                        </div>
                        <div onClick={ googleSign} className=' cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
                            <img src={google} className=" w-6 h-6 ml-3" />
                            <h1 className='ml-24 '>Continuer avec google</h1>
                        </div>
                        {!email ? <div onClick={() => setEMail(true)} className=' cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
                            <img src={mail2} className=" w-6 h-6 ml-3" />
                            <h1 className=' ml-24'>Continuer avec une adresse e-mail</h1>
                        </div>
                            : <div onClick={() => setEMail(true)} className=' cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
                                <img src={mobile} className=" w-6 h-6 ml-3" />
                                <h1 className=' ml-24'>Continuer avec votre numéro</h1>
                            </div>}

                    </div>
                </div>
            </div>
        </div>


    )
}
export default Login;
