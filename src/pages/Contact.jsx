import Nav from "../components/Nav";
import Top from "../components/Top";
import { ChefHat, HandHeart, HandPlatter, User, Mail, Phone, CalendarDays, CalendarRange, Users, Pen, Send,PhoneCall,Clock } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";



export default function Contact(){
    
const [eventType, setEventType] = useState("");
const [eventDate, setEventDate] = useState("");

async function queryHandler(data){
  try{
    let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/contact", {

      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(data)
    });

    console.log(response);

    if(!response.ok)
      return toast.error("Something went wrong!!", {position:"bottom-center"});

    toast.success("Enquiry Sent!!", {position:"bottom-center"});

  }catch(error){
    console.log(error);
    toast.error("Could not proceed with your request at the moment!!")

  }
}

const formHandler = (e) => {
  e.preventDefault();
  const credentials = {name: e.target.name.value, email:e.target.email.value, phone:e.target.phone.value, eventType: e.target.eventType.value, eventDate: e.target.eventDate.value, guestCount:e.target.guestCount.value, specifyEvent: e.target.specifyEvent?.value || "", message:e.target.message.value };
  queryHandler(credentials);
}
    return(

      

        <>
        <Top />
     

        <div className="relative bg-black min-h-[65vh]">
           <div className="absolute inset-0 bg-[url('/images/contactBg.png')] bg-contain bg-no-repeat bg-center lg:bg-right opacity-55 lg:opacity-100"></div>
           
           <div className=" relative flex flex-col justify-center items-center pt-[50px] lg:pt-[30px] lg:justify-start lg:items-start px-6 lg:pl-[80px] pt-[20px]">
                <p className="flex text-[22px] text-amber-400 font-[monospace]">GET IN TOUCH <div className="h-[2px] w-[50px] bg-amber-400 ml-[30px] mt-[15px] "></div></p>
                <p className="text-[40px] md:text-[50px] lg:text-[60px] text-white font-[Prata] leading-tight ">We'd Love to Hear</p>
                <p className="font-['Great_Vibes'] text-[50px] md:text-[60px] lg:text-[67px] text-amber-500 leading-tight">From You.</p>
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-[Prata] text-white pt-[25px] font-bold">Planning an event? We're all ears—and all flavors. <span className="block"> Your perfect event starts with a simple message.</span> </p>
                
              <div className="flex gap-[25px] mt-[25px] ml-0 lg:ml-[-30px]">
                <div className="flex flex-col justify-center items-center">
                    <ChefHat className="text-amber-400 h-14 w-14" />
                    <p className="text-[20px] text-white font-[cursive]">Custom Menus</p>
                </div>

                <div className="hidden md:block h-[100px] w-[2px] bg-[gray]"></div>

                <div className="flex flex-col justify-center items-center">
                    <HandHeart className="text-amber-400 h-14 w-14" />
                    <p className="text-[20px] text-white font-[cursive]">Personalized Service</p>
                </div>

                <div className="hidden md:block h-[100px] w-[2px] bg-[gray]"></div>

                <div className="flex flex-col justify-center items-center">
                    <HandPlatter className="text-amber-400 h-14 w-14" />
                    <p className="text-[20px] text-white font-[cursive]">Memorable Experiences</p>
                </div>
            </div>
            </div>
           

        </div>

                   
          <div className="bg-[rgb(253,247,241)] min-h-screen pt-[60px] px-5 lg:px-[60px] pb-[40px]">
    
          <div className="flex flex-col lg:flex-row gap-[40px]">

    <form onSubmit={formHandler}>
            <p className="text-[30px] font-['Public_Sans'] flex ">SEND US A MESSAGE <div className="h-[2px] w-[50px] bg-amber-400 ml-[30px] mt-[15px] "></div></p>
            <p className="pt-[20px] font-['Public_Sans'] text-[24px]">Fill out the form below and our team will get back to you <span className="block">shortly.</span></p>
            
            
        <div className="flex gap-[15px]">
            <div className="flex gap-[15px] h-[60px] w-full md:w-[370px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]"><User className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" /> <input className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]" name="name" type="text" placeholder="Your Name" /></div>
            <div className="flex gap-[15px] h-[60px] w-full md:w-[370px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]"><Mail className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" /> <input className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]" name="email" type="email" placeholder="Email Address" /></div>
        </div>

          <div className="flex gap-[15px] h-[60px] w-full lg:w-[750px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]"><Phone className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" /> <input className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]" name="phone" type="number" placeholder="Phone Number" /></div>
          <div className="flex gap-[15px] h-[60px] w-full lg:w-[750px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]"><CalendarRange className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" />
          
           <select className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange] text-[orange]"
          name="eventType"
          value={eventType}
           onChange={(e) => setEventType(e.target.value)}
           >
            <option value="" disabled>
                Event Type/Occasion
            </option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="anniversary">Anniversary</option>
            <option value="conference">Conference / Seminar</option>
            <option value="housewarming">Housewarming Party</option>
            <option value="festival">Festival Celebration</option>
            <option value="private">Private Gathering</option>
            <option value="school">School / College Event</option>
            <option value="charity">Charity Event</option>
            <option value="other">Other</option>
            </select>
            
        {eventType === "other" && (
        <input
          name="specifyEvent"
          type="text"
          placeholder="Please specify your event"
          className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]"
        />
      )}
            </div>

        <div className="flex flex-col md:flex-row gap-[20px]">          
         <div className="relative border border-[orange] rounded-lg h-[60px] w-[370px] mt-[15px] flex mt-[15px] pl-[15px]">
             <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 text-[orange]" />

            <input
            name="eventDate"
              type="date"
              className="text-transparent focus:text-orange-500 valid:text-orange-500 font-['Public_Sans'] pl-[60px] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]"
            />
        </div>

        <div className="flex gap-[15px] h-[60px] w-[360px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]"><Users className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" /> <input className="font-['Public_Sans'] text-[23px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]" name="guestCount" type="number" placeholder="Guest Count (Approx.)" /></div>
      
    </div>

        <div className="flex gap-[15px] h-[200px] w-full lg:w-[750px] border border-[orange] rounded-[5px] mt-[15px] pl-[15px]">
            <Pen className="h-12 w-12 text-[orange] pt-[15px] pl-[7px]" /> 

            <textarea
            name="message"
              placeholder="Your Message"
              className="font-['Public_Sans'] pt-[15px] text-[23px] h-[180px] w-[740px] bg-[rgb(253,247,241)] outline-none placeholder-[orange]"
            ></textarea>

        </div>

        <button className="bg-black mt-[20px] lg:mb-[30px] rounded-lg text-center w-full lg:w-[750px] h-[60px] flex gap-[15px] justify-center items-center text-amber-400 font-[Prata] text-[25px]">SEND A MESSAGE <Send className="text-amber-400 h-8 w-8" /></button>

     </form>

          <div className="hidden lg:block h-[720px] w-[2px] bg-[lightgray]"></div>

         <div className="lg:ml-[40px] mt-[30px]">
             <p className="text-[30px] font-[Prata] font-bold flex flex-col gap-[15px]">GET IN TOUCH <div className="h-[3px] w-[100px] bg-amber-400 ml-[30px] mt-[5px] "></div></p>

<div className="flex flex-col gap-[60px] mt-[30px]">

  <div className="flex gap-[20px] items-start">
    <div className="bg-black rounded-full border border-amber-500 h-[70px] w-[70px] flex justify-center items-center shrink-0">
      <PhoneCall className="h-9 w-9 text-amber-500" />
    </div>

    <div className="flex flex-col text-[23px] font-[cursive]">
      <p>Call Us</p>
      <p className="text-[20px]">+91 7876167162</p>
      <p className="text-[20px]">+91 8851118452</p>
    </div>
  </div>

  <div className="flex gap-[20px] items-start">
    <div className="bg-black rounded-full border border-amber-500 h-[70px] w-[70px] flex justify-center items-center shrink-0">
      <Mail className="h-9 w-9 text-amber-500" />
    </div>

    <div className="flex flex-col text-[23px] font-[cursive]">
      <p>Email Us</p>
      <p className="text-[20px]">info@manikcaterers.com</p>
    </div>
  </div>

  <div className="flex gap-[20px] items-start">
    <div className="bg-black rounded-full border border-amber-500 h-[70px] w-[70px] flex justify-center items-center shrink-0">
      <Clock className="h-9 w-9 text-amber-500" />
    </div>

    <div className="flex flex-col text-[23px] font-[cursive]">
      <p>Working Hours</p>
      <p className="text-[20px]">Mon-Sun</p>
      <p className="text-[20px]">7:00 AM - 10:00 PM</p>
    </div>
  </div>

</div>
 
         </div>
     </div>
    </div>

     <Footer/>
        </>
        
    )
}