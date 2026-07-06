import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Top from "../components/Top";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();

     const stats = [
    {
      number: "1997",
      text: "Finest in food industry since 1997",
      icon: "📅",
    },
    {
      number: "1000+",
      text: "Events Organised",
      icon: "👥",
    },
    {
      number: "500+",
      text: "Happy Customers Served",
      icon: "🙋",
    },
    {
      number: "300+",
      text: "Variety of Dishes",
      icon: "🍽️",
    },
  ];

    return (
        <div className="overflow-x-hidden">
        <Top />
        
        <Slider />
        

            
         
      <div className="flex flex-col w-full max-w-7xl mx-auto mt-[40px] text-center px-4 sm:px-6 lg:px-8 gap-[10px]">
 
           <h1 className="font-[Sofia] text-[28px] sm:text-[32px] lg:text-[37px] font-bold">Welcome to Manik Caterers</h1>

           <p className="font-[Tangerine] text-[22px] sm:text-[26px] lg:text-[30px] font-bold">— Setting the Gold to Diamond Standard for Luxury Events in Himachal</p>

            <p className="font-[cursive] text-[20px]">Searching for an extraordinary culinary and entertainment experience to elevate your next big milestone?</p>
            <p className="font-[arial] text-[18px]">Your search ends here!! provides a premium culinary experience and complete event infrastructure to fulfill your every hosting need. Be it a large wedding, corporate function, or intimate party, our full-range services cover exquisite catering, luxury tenting, and professional DJ setups. We bring seamless execution to every gathering across the hills so you can relax and enjoy your day.</p>

            <button onClick={()=> navigator("/services")} className="bg-[goldenrod] p-[15px] font-[cursive] text-white font-bold text-[23px] mt-[15px] ">Explore our services</button>
            
            </div>

           <div className="mt-[40px] bg-[beige] py-[60px]">
            <h1 className="font-[Prata] text-[24px] sm:text-[32px] lg:text-[40px] flex justify-center text-center px-4 pt-[60px]"> <div className="bg-[gold] w-[200px] h-[3px] mt-[30px] mr-[20px]"></div>  CELEBRATE EVERY OCCASION  <div className="bg-[gold] w-[200px] h-[3px] mt-[30px] ml-[20px]"></div></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[30px] justify-items-center px-4">

             <div className="bg-white h-[500px] w-full max-w-[330px] rounded-[20px] mt-[30px]">
                <img className="rounded-[20px] w-[300px] h-[230px] m-[15px]" src="/images/marriage.png" alt="" />
               <div className="flex"><img className="h-[80px] w-[80px] ml-[30px]" src="/images/wedLogo.png" alt="" /><p className="font-[Qwigley] text-[45px] pt-[10px] font-bold " >Marriage</p></div> 
                <p className="text-[18px] font-[arial] pt-[5px] pl-[20px] ">Spectacular venues and traditional Himachali Dham</p>
                <a className="text-[goldenrod] font-[cursive] text-[22px] flex font-bold pl-[20px] pt-[38px]" href="/services">Learn More <ArrowRight className="pt-[7px]"/></a>
             </div>

             <div className="bg-white h-[500px] w-full max-w-[330px] rounded-[20px] mt-[30px]">
                <img className="rounded-[20px] w-[300px] h-[230px] m-[15px]" src="/images/corporate.png" alt="" />
               <div className="flex"><img className="h-[80px] w-[80px] ml-[20px]" src="/images/corpLogo.png" alt="" /><p className="font-[Qwigley] text-[40px] pt-[10px] font-bold " >Corporate</p></div> 
                <p className="text-[18px] font-[arial] pt-[5px] pl-[15px] ">Executive parties and dinners held with welcoming to retirement events all included. </p>
                <a className="text-[goldenrod] font-[cursive] text-[22px] flex font-bold pl-[20px] pt-[22px] " href="/services">Learn More <ArrowRight className="pt-[7px]"/></a>
             </div>

            <div className="bg-white h-[500px] w-full max-w-[330px] rounded-[20px] mt-[30px]">
                <img className="rounded-[20px] w-[300px] h-[230px] m-[15px]" src="/images/Party.png" alt="" />
               <div className="flex"><img className="h-[80px] w-[80px] ml-[10px]" src="/images/partyLogo.png" alt="" /><p className="font-[Qwigley] text-[40px]  font-bold " >Birthdays & Anniversaries</p></div> 
                <p className="text-[18px] font-[arial]  pl-[15px]">Milestone birthday celebrations and elegant anniversary dining.</p>
                <a className="text-[goldenrod] font-[cursive] text-[22px] flex font-bold pl-[20px] pt-[12px]" href="/services">Learn More <ArrowRight className="pt-[7px]"/></a>
             </div>

             <div className="bg-white h-[500px] w-full max-w-[320px] rounded-[20px] mt-[30px]">
                <img className="rounded-[20px] w-[300px] h-[230px] m-[10px]" src="/images/Celebration.png" alt="" />
               <div className="flex"><img className="h-[80px] w-[80px] ml-[10px]" src="/images/celebLogo.png" alt="" /><p className="font-[Qwigley] text-[40px]  font-bold " >Indian Event Celebration</p></div> 
                <p className="text-[18px] font-[arial]  pl-[15px] ">Traditional seating layouts tailored to mountain themes.</p>
                <a className="text-[goldenrod] font-[cursive] text-[22px] flex font-bold pl-[20px] pt-[15px]" href="/services">Learn More <ArrowRight className="pt-[7px]"/></a>
             </div>

             </div>
            </div>



          <div className="min-h-screen bg-white py-[40px] px-4">

  <p className="text-[42px] sm:text-[55px] lg:text-[70px] font-[Tangerine] text-center underline mt-[30px]">
    Explore our menu
  </p>

  {/* SINGLE RESPONSIVE GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
    {[
      { img: "/images/juices.png", title: "Juices & Mocktails", count: "50+" },
      { img: "/images/dishes.png", title: "Indian Dishes", count: "50+" },
      { img: "/images/sweets.png", title: "Indian Sweets", count: "50+" },
      { img: "/images/fastFood.png", title: "Fast Food Options", count: "50+" },
      { img: "/images/dessert.png", title: "Dessert Types", count: "50+" },
      { img: "/images/liveCounter.png", title: "Live Counters", count: "50+" },
    ].map((item, index) => (
      <div
        key={index}
       className="relative overflow-hidden w-full max-w-[380px] aspect-[4/3] group rounded-lg">
      
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.img})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">{item.count}</h2>
          <p className="text-lg sm:text-xl">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

           <div className="relative min-h-screen mb-[30px]">

  {/* Background */}
  <div className="absolute inset-0 bg-[url('/images/backImage.png')] bg-cover bg-center"></div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content wrapper (IMPORTANT: relative now) */}
  <div className="relative z-10 flex flex-col items-center text-center pt-[70px] px-4">

    <p className="text-amber-400 text-[30px] font-cursive flex flex-col items-center">
      Our Journey
      <div className="w-[70px] h-[3px] bg-amber-400 mt-1"></div>
    </p>

    <h1 className="font-bold text-[30px] sm:text-[40px] lg:text-[50px] text-white font-[arial]">
      Moments Served. Memories Created.
    </h1>

    <p className="text-gray-300 text-[18px] sm:text-[22px] lg:text-[25px] mt-2">
      For over four decades, we have been crafting exceptional culinary experiences
      <span className="block">and unforgettable events.</span>
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mt-12 w-full max-w-6xl">
      {stats.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[280px] min-h-[250px] flex flex-col justify-center items-center 
          backdrop-blur-lg bg-white/10 rounded-[10px] text-center text-white 
          transition-all duration-500 shadow-2xl hover:scale-105 border border-white/20"
        >
          <div className="text-5xl mb-6">{item.icon}</div>
          <h2 className="text-5xl font-bold text-amber-400 mb-4">{item.number}</h2>
          <p className="text-lg text-gray-200">{item.text}</p>
        </div>
      ))}
    </div>

  </div>
</div>
                    
                     <div className="min-h-screen bg-white pt-[50px] mt-[25px] mb-[30px]">
               <h2 className="text-[42px] sm:text-[55px] lg:text-[70px] font-[Tangerine] text-center">What Our Clients Say...</h2>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[15px] px-4 justify-items-center">

               <div className="bg-[url('/images/post.png')] h-[350px] w-full max-w-[470px] bg-cover bg-center">
               <p className="lg:text-[16px] font-bold font-[cursive] lg:w-[75%] w-full pt-[100px] lg:pl-[150px] pl-[80px] pr-[50px]">"The food was exceptional and every guest appreciated the quality and presentation. The team handled everything professionally, making our family function completely stress-free."</p>
               </div>

               <div className="bg-[url('/images/post.png')] h-[350px] w-full max-w-[470px] bg-cover bg-center">
               <p className="lg:text-[16px] font-bold font-[cursive] lg:w-[75%] w-full pt-[100px] lg:pl-[150px] pl-[80px] pr-[50px]">"We booked them for our daughter's wedding, and they exceeded all expectations. From the menu variety to the service, everything was perfectly organized."</p>
               </div>

               <div className="bg-[url('/images/post.png')] h-[350px] w-full max-w-[470px] bg-cover bg-center">
               <p className="lg:text-[16px] font-bold font-[cursive] lg:w-[75%] w-full pt-[100px] lg:pl-[150px] pl-[80px] pr-[50px]">"Excellent food, punctual service, and a very cooperative staff. Our corporate event was a huge success thanks to their attention to detail and hospitality."</p>
               
               
               </div>
                
            
               </div>
               


                 
            </div>
            <Footer/>
            </div>
         
            
        
         )
      }