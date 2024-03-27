import maison from "../images/maison.jpg"
import chambres from "../images/chambres.jpg"
import nouveautés from "../images/nouveautés.jpg"
import villa from "../images/villa.jpg"
import cuisines from "../images/cuisines.jpg"
import piano from "../images/piano.jpg"
import Appartement from "../images/Appartement.jpg"


const Menubar = () => {
return(
<div className=" flex justify-between pt-8 cursor-pointer ">

<div className=" ml-11 mr-11 ">
<img src={maison} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline "> maison </h1>
</div>
<div className=" ml-11 mr-11 cursor-pointer ">
<img src={chambres} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >chambre</h1>
</div>
<div className=" ml-11 mr-11 cursor-pointer ">
<img src={Appartement} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >Appartement</h1>
</div>

<div className=" ml-11 mr-11 cursor-pointer ">
<img src={nouveautés} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >nouveautés</h1>
</div>
<div className=" ml-11 mr-11 cursor-pointer ">
<img src={villa} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >villa</h1>
</div>
<div className=" ml-11 mr-11 cursor-pointer ">
<img src={cuisines} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >cuisines</h1>
</div>
<div className=" ml-11 mr-11 cursor-pointer ">
<img src={piano} className=" w-6 h-6" />
<h1 className="text-xs font-semibold hover:underline" >piano</h1>
</div>




</div>
)
}
export default Menubar;
