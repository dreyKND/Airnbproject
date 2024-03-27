import Maisonex from "../images/Maisonex.jpeg"
const Home = () => {
    return (

         <div className="max-w-sm rounded-t-xl overflow-hidden w-72 h-96  ml-11 mt-7">
             <img className="w-72 h-72 rounded-xl"  src={Maisonex} alt="Sunset in the mountains" />
             <div className=" py-1">
                 <h1 className="font-semibold ">Maison .Lubumbashi</h1>
                 <p className=' text-gray-500 text-sm'>
                     Maison equipé
                 </p>
                 <h1 className=' text-gray-500 text-sm'>Proposé par Audrey</h1>
                 <h1 className=' text-gray-500 text-sm'>1-6 Mai</h1>
                 <h2 className=' font-bold'>147$ par nuit</h2>
 
             </div>
 
         </div>


    )

}
export default Home;
