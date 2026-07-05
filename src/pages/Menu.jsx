import Nav from "../components/Nav";
import { MessageCircleMore, NotepadText, Utensils, Sparkles, Soup, Ham, Sprout, Leaf, KeyRound, ArrowRight, Phone} from "lucide-react";
import Top from "../components/Top";
import Footer from "../components/Footer";

export default function Menu(){
    return(
        <>
        <Top/>

        <div className="relative bg-[midnightblue] min-h-[60vh] leading-tight px-5 md:px-[70px] pt-[15px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('./src/images/menu.png')] bg-contain md:bg-right bg-center bg-no-repeat opacity-40 lg:opacity-100"></div>

            <div className="relative">
            <p className="text-amber-400 font-['Public_Sans'] text-[17px] font-bold flex">CUSTOMED CRAFTED MENUS <div className="h-[2px] w-[60px] ml-[10px] bg-amber-400 mt-[7px]"></div></p>
            <p className="text-white font-['great_vibes'] text-[65px] font-bold md:text-[55px] pt-[25px]">Your Event.</p>
            <p className="text-white font-['great_vibes'] text-[65px] font-bold md:text-[55px] ">Your Theme.</p>
            <p className="text-amber-400 font-['great_vibes'] text-[65px] font-bold md:text-[55px] ">Your Menu.</p>
            <p className="text-[20px] md:text-[24px] font-[prata] text-white pt-[15px] font-bold">We don't believe in one-size fits-all menus, <span className="block">Every dish we create is inspired by your story. </span><span className="block">crafted around your theme and perfectly</span> <span className="block">curated for your guests.</span></p>
            {/* <button className="bg-amber-400 mt-[15px] text-[20px] font-[Prata] text-[red] font-bold rounded-[20px] p-[7px]">PLAN YOUR MENU</button> */}
       </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-[20px] bg-[url('./src/images/backG.png')] bg-cover bg-no-repeat">
            <p className="text-[32px] font-[prata] flex pt-[20px]"><div className="bg-amber-400 h-[3px] w-[70px] mr-[10px] mt-[20px]  "></div> OUR MENU CREATION JOURNEY <div className="bg-amber-400 h-[3px] w-[70px] ml-[10px] mt-[20px]"></div></p>
            <div className="flex flex-col lg:flex-row items-center mt-[50px] gap-10 px-5">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black rounded-full h-[70px] w-[70px]"><MessageCircleMore className="h-14 w-14 text-red-600 pt-[10px] pl-[10px]" /></div>
                    <p className="text-black font-bold font-['public_sans'] text-[18px] pt-[15px]">01</p>
                    <p className="text-black font-bold font-[monospace] text-[24px] underline uppercase">Consult</p>
                    <p className="text-black font-['public_sans'] text-[21px] font-bold text-center pt-[10px]">We understand your event, preferences, theme and expectations.</p>
                </div>
                <div className="bg-red-600 h-[3px] w-[80px] lg:w-[250px] mt-[30px] hidden lg:block"></div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black rounded-full h-[70px] w-[70px]"><NotepadText className="h-14 w-14 text-red-600 pt-[10px] pl-[10px]" /></div>
                    <p className="text-black font-bold font-['public_sans'] text-[18px] pt-[15px]">02</p>
                    <p className="text-black font-bold font-[monospace] text-[24px] underline uppercase">Plan</p>
                    <p className="text-black font-['public_sans'] text-[21px] font-bold text-center pt-[10px]">Our Chefs and planners design a bespoke menu just for you.</p>
                </div>
                <div className="bg-red-600 h-[3px] w-[80px] lg:w-[250px] mt-[30px] hidden lg:block"></div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black rounded-full h-[70px] w-[70px]"><Utensils className="h-14 w-14 text-red-600 pt-[10px] pl-[10px]" /></div>
                    <p className="text-black font-bold font-['public_sans'] text-[18px] pt-[15px]">03</p>
                    <p className="text-black font-bold font-[monospace] text-[24px] underline uppercase">Prepare</p>
                    <p className="text-black font-['public_sans'] text-[21px] font-bold text-center pt-[10px]">We source the finest ingredients and craft with passion.</p>
                </div>
                 <div className="bg-red-600 h-[3px] w-[80px] lg:w-[250px] mt-[30px] hidden lg:block"></div>

                <div className="flex flex-col justify-center items-center pb-[15px]">
                    <div className="bg-black rounded-full h-[70px] w-[70px]"><Sparkles className="h-14 w-14 text-red-600 pt-[10px] pl-[10px]" /></div>
                    <p className="text-black font-bold font-['public_sans'] text-[18px] pt-[15px]">04</p>
                    <p className="text-black font-bold font-[monospace] text-[24px] underline uppercase">Deliver & Delight</p>
                    <p className="text-black font-['public_sans'] text-[21px] font-bold text-center pt-[10px]">Impeccable service and unforgettable culinary experience.</p>
                </div>

            </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[30px]">
            <p className="text-[32px] font-[prata] flex"><div className="bg-amber-400 h-[3px] w-[70px] mr-[10px] mt-[20px]  "></div> OUR SIGNATURE EXPERIENCES <div className="bg-amber-400 h-[3px] w-[70px] ml-[10px] mt-[20px]"></div></p>
            
            <div className="flex flex-wrap justify-center gap-[30px] mt-[30px] px-5">
                <div className="bg-[url('./src/images/chaat.png')] bg-cover bg-center bg-no-repeat h-[250px] w-full sm:w-[300px] border border-amber-400 rounded-[20px]">
                         <div className="bg-[darkblue]/40 h-[105px] w-full sm:w-[300px] mt-[145px] pl-[20px] pt-[20px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[20px] font-bold">Live Chaat Counters</p>
                            <p className="text-white text-[15px] font-['Public_sans']">An interactive burst of flavours made live for your guests.</p>
                           </div> 
                </div>

                 <div className="bg-[url('./src/images/pasta.png')] bg-cover bg-center bg-no-repeat h-[250px] w-full sm:w-[300px] border border-amber-400 rounded-[20px]">
                         <div className="bg-[darkblue]/40 h-[105px] w-full sm:w-[300px] mt-[145px] pl-[20px] pt-[20px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[20px] font-bold">Live Pasta Stations</p>
                            <p className="text-white text-[15px] font-['Public_sans']">Authentic preparations, crafted just the way you like.</p>
                        </div>
                </div>

                <div className="bg-[url('./src/images/sweet.png')] bg-cover bg-center bg-no-repeat h-[250px] w-full sm:w-[300px] border border-amber-400 rounded-[20px]">
                         <div className="bg-[darkblue]/40 h-[105px] w-full sm:w-[300px] mt-[145px] pl-[20px] pt-[20px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[20px] font-bold">Indian Desserts</p>
                            <p className="text-white text-[15px] font-['Public_sans']">Indulgent sweets and desserts to elevate your celebration.</p>
                        </div>
                </div>

                <div className="bg-[url('./src/images/mocktail.png')] bg-cover bg-center bg-no-repeat h-[250px] w-full sm:w-[300px] border border-amber-400 rounded-[20px]">
                         <div className="bg-[darkblue]/40 h-[105px] w-full sm:w-[300px] mt-[145px] pl-[20px] pt-[20px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[20px] font-bold">Mocktail Experiences</p>
                            <p className="text-white text-[15px] font-['Public_sans']">Refreshing handcrafted drinks to add the perfect touch.</p>
                        </div>
                </div>
                   
         </div>  
        </div>

        <div className="bg-[whitesmoke] flex flex-col justify-center items-center mt-[30px]">
           <p className="text-[27px] font-[monospace] flex"><div className="bg-amber-400 h-[3px] w-[70px] mr-[10px] mt-[20px]  "></div> BUILT AROUND YOUR NEEDS <div className="bg-amber-400 h-[3px] w-[70px] ml-[10px] mt-[20px]"></div></p>

            <div className="flex flex-wrap justify-center gap-[20px] mt-[20px] mb-[20px] px-5">
            <div className="bg-[antiquewhite] pl-[25px] pr-[25px] pt-[15px] pb-[15px] flex flex-col justify-center items-center rounded-[20px]">
                <Soup className="h-14 w-14 text-amber-400"/>
                <p className="text-[22px] font-bold font-[cursive]">Jain & Satvik</p>
                <p className="text-[20px]">Pure , mindful <span className="block">and delicious</span></p>
            </div>

                 <div className="bg-[antiquewhite] pl-[25px] pr-[25px] pt-[15px] pb-[15px] flex flex-col justify-center items-center rounded-[20px]">
                <Ham className="h-14 w-14 text-amber-400"/>
                <p className="text-[22px] font-bold font-[cursive]"> Veg & Non-Veg </p>
                <p className="text-[20px]"> Provides different<span className="block">types of cuisines</span></p>
            </div>

            
                 <div className="bg-[antiquewhite] pl-[25px] pr-[25px] pt-[15px] pb-[15px] flex flex-col justify-center items-center rounded-[20px]">
                <Leaf className="h-14 w-14 text-amber-400"/>
                <p className="text-[22px] font-bold font-[cursive]">Regional Specials</p>
                <p className="text-[20px]"> Flavours from<span className="block">across India.</span></p>
            </div>

            
                 <div className="bg-[antiquewhite] pl-[25px] pr-[25px] pt-[15px] pb-[15px] flex flex-col justify-center items-center rounded-[20px]">
                <Sprout className="h-14 w-14 text-amber-400"/>
                <p className="text-[22px] font-bold font-[cursive]">Seasonal Ingredients</p>
                <p className="text-[20px]"> Fresh, local and<span className="block">of the season.</span></p>
            </div>

            <div className="bg-[antiquewhite] pl-[25px] pr-[25px] pt-[15px] pb-[15px] flex flex-col justify-center items-center rounded-[20px]">
                <KeyRound className="h-14 w-14 text-amber-400"/>
                <p className="text-[22px] font-bold font-[cursive]">Custom Requests</p>
                <p className="text-[20px]"> Your ideas,<span className="block">our creativity.</span></p>
            </div>
           </div>
        </div>

        <div className="mt-[20px] mx-5 mb-[40px] rounded-[20px]  bg-[url('https://wallpaperaccess.com/full/2363800.jpg')] bg-cover bg-center bg-no-repeat min-h-[40vh]">
        
        <div className="lg:flex">
        <div className="relative px-5 lg:ml-[300px] ml-[50px] pt-[30px]">
            {/* <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/image-that-exudes-festive-spirit-indian-chaat-white-plate-against-restaurant-table-bac_801714-7899.jpg')] bg-contain bg-right bg-no-repeat min-h-[40vh] rounded-[20px]"></div> */}
        <p className="text-[30px] lg:text-[40px] text-white font-['great_vibes']">Let's Create Something</p>
        <p className=" font-[Prata] text-[35px] md:text-[50px] text-amber-400 underline">Extraordinary Together!</p>
        <p className="text-[22px] text-white font-[Prata] font-bold ">Share your ideas and we will curate a menu that's <span className="block">as unique as your celebration.</span></p>

           <button className="bg-amber-400 flex gap-[15px] text-[19px] font-[Prata] font-bold rounded-[10px] p-[7px] ml-0 md:ml-[330px] mt-[15px]">Discuss Your Menu With Us <div className="rounded-full bg-amber-400 border border-black border-[2px] h-[25px] w-[25px] " ><ArrowRight className="text-black h-6 w-6"/></div></button>
         <div className="flex ml-[300px] pt-[8px]"><div className="bg-black h-[25px] w-[25px] rounded-full border border-amber-400 ml-[15px]"><Phone className="text-amber-400 h-5 w-5 pl-[5px]" /></div>
           <p className="text-[18px] font-[cursive] pl-[10px] font-bold text-white">CALL AT : +917876167162</p></div>
          
           </div>
        
        <img className="h-[320px] w-full lg:w-[520px] rounded-[20px] mt-[20px] lg:mt-0 border border-amber-400 border-[5px] lg:border-none" src="https://img.freepik.com/premium-photo/image-that-exudes-festive-spirit-indian-chaat-white-plate-against-restaurant-table-bac_801714-7899.jpg" alt="" />
       </div>
        </div>

        <Footer/>
        </>
    )
}