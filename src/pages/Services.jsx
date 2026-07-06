import Nav from "../components/Nav";
import Top from "../components/Top";
import { UserStar, ShieldCheck, Store, Smile, Leaf, Users, ArrowRight,ArrowDown, ClipboardList, ChefHat, HandPlatter, PartyPopper, Soup, Salad, Pizza, CalendarDays, ReceiptText, Rose, TimerReset, Headset, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Services(){
    const navigator = useNavigate();
    return(
        <>
        <Top/>

        <div className="relative">
            <div className="bg-black h-[60vh]">

                <div className="absolute inset-0 bg-[url('/images/table.png')] lg:bg-contain bg-cover bg-center bg-no-repeat lg:bg-right h-[60vh] ">
                <div className="absolute inset-0 bg-black/60 lg:bg-black/10" ></div>
                
                   
                    <div className="relative flex flex-col sm:ml-16 lg:ml-[270px] mt-[40px]" >
                        
                        <p className="flex text-[22px] font-[monospace] text-center lg:text-left text-amber-400 pl-[95px]">OUR SERVICES <div className="h-[1px] w-[70px] bg-amber-400 ml-[10px] mt-[15px]"></div></p>
                        <h1 className="text-[55px] sm:text-[70px] text-center lg:text-left lg:text-[75px] text-white font-['Playfair_Display'] pl-[30px] lg:leading-tight">We Cater.</h1>
                        <p className="text-[70px] sm:text-[90px] text-center lg:text-left lg:text-[100px] font-['Great_vibes'] text-amber-400 lg:leading-tight">you Celebrate.</p>
                        <div className="h-[3px] w-[250px] bg-amber-500 ml-[60px]"></div>
                        <p className="lg:text-[24px] text-[20px] text-white font-[Prata] pt-[15px] text-center lg:text-left">From intimate gatherings to grand celebrations, <span className="block">we bring people together with exceptional food</span> <span className="block lg:pl-[70px]">and seamless service.</span></p>
                        

                    </div>



                </div>
            </div>
        </div>

                    <div className="ml-5 lg:ml-[35px] mt-[30px] mb-[25px] flex gap-[20px] max-lg:flex-col">

                    <div>
                        <p className="text-amber-400 font-bold font-['Public_Sans'] lg:text-[24px] text-[20px] tracking-widest">WHAT WE DO</p>
                        <h1 className="lg:text-[50px] text-[35px] font-[Prata]">Tailored Catering Experiences</h1>
                        <p className="lg:text-[20px] text-[16px] font-[Prata] ">Every occasion is unique. Our services are crafted to match your vision, <span className="block">theme, and expectations.</span></p>
                    </div>

                    <div className="flex mt-[20px] gap-3 flex-wrap lg:flex-nowrap max-lg:justify-center max-lg:items-center">
                        <div className="h-[150px] w-[2px] bg-[lightgrey] hidden lg:block"></div>
                        <div className="flex flex-col justify-center items-center" >
                            <UserStar className="text-amber-400 lg:w-20 lg:h-20 h-12 w-12 lg:pl-[30px]"/>
                            <p className="font-['Public_Sans'] font-bold lg:text-[20px] text-[16px]">Custom Menus</p>
                            <p className="lg:text-[18px] text-[14px]">Made just for you</p>
                        </div>

                        <div className="h-[150px] w-[2px] bg-[lightgrey] hidden lg:block"></div>
                        <div className="flex flex-col justify-center items-center" >
                            <ShieldCheck className="text-amber-400 lg:w-20 lg:h-20 h-12 w-12 lg:pl-[30px]"/>
                            <p className="font-['Public_Sans'] font-bold lg:text-[20px] text-[16px]">Premium Quality</p>
                            <p className="lg:text-[18px] text-[14px]">In every detail</p>
                        </div>

                        <div className="h-[150px] w-[2px] bg-[lightgrey] hidden lg:block"></div>
                        <div className="flex flex-col justify-center items-center" >
                            <Store className="text-amber-400 lg:w-20 lg:h-20 h-12 w-12 lg:pl-[30px]"/>
                            <p className="font-['Public_Sans'] font-bold lg:text-[20px] text-[16px]">Complete Setup</p>
                            <p className="lg:text-[18px] text-[14px]">We handle it all</p>
                        </div>

                        <div className="h-[150px] w-[2px] bg-[lightgrey] hidden lg:block"></div>
                        <div className="flex flex-col justify-center items-center">
                            <Smile className="text-amber-400 lg:w-20 lg:h-20 h-12 w-12 lg:pl-[30px]"/>
                            <p className="font-['Public_Sans'] font-bold lg:text-[20px] text-[16px]">Professional Staff</p>
                            <p className="lg:text-[18px] text-[14px]">Trained & courteous</p>
                        </div>

                        </div>
                    </div>

                      {/* h-[90vh] */}
                       
                    <div className="bg-black/90 mt-[40px] py-[60px] flex flex-col justify-center items-center">
                        <p className="flex text-amber-400 text-[30px] font-[Prata] text-center "> <div className="h-[2px] w-[100px] bg-amber-400 mt-[20px] mr-[20px] hidden lg:block"></div>CATERING SOLUTIONS FOR EVERY OCCASION<div className="h-[2px] w-[100px] bg-amber-400 mt-[20px] ml-[20px] hidden lg:block"></div></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[30px] justify-items-center px-4 mt-[40px]">
                        <div className="bg-[url('/images/wedding.png')] bg-cover bg-center bg-no-repeat h-[400px] w-full max-w-[270px] border border-amber-400 rounded-[20px] ">
                        <div className="bg-black/40 h-[175px] w-[270px] mt-[225px] pl-[20px] pt-[10px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[27px] font-bold">Wedding <span className="block">Catering</span></p>
                            <p className="text-white text-[17px] font-['Public_sans']">Exquitable menus and flawless service for your big day.</p>
                            <div className="h-[3px] w-[50px] mt-[10px] bg-amber-400"></div>
                        </div>
                        </div>

                        <div className="bg-[url('/images/Corpevents.png')] bg-cover bg-center bg-no-repeat h-[400px] w-full max-w-[270px] border border-amber-400 rounded-[20px]">
                        <div className="bg-black/40 h-[175px] w-[270px] mt-[225px] pl-[20px] pt-[15px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[27px] font-bold">Corporate Catering</p>
                            <p className="text-white text-[17px] font-['Public_sans']">Professional dining experiences that impress your guests.</p>
                            <div className="h-[3px] w-[50px] mt-[10px] bg-amber-400"></div>
                        </div>
                        </div>

                        <div className="bg-[url('/images/bday.png')] bg-cover bg-center bg-no-repeat h-[400px] w-full max-w-[270px] border border-amber-400 rounded-[20px]">
                        <div className="bg-black/40 h-[175px] w-[270px] mt-[225px] pl-[20px] rounded-[20px]">  
                            <p className="text-white font-[Prata] text-[27px] font-bold">Birthday & Family Celebrations</p>
                            <p className="text-white text-[17px] font-['Public_sans']">Delicious food that makes your special moments even more memorable.</p>
                            <div className="h-[3px] w-[50px] mt-[5px] bg-amber-400"></div>
                         </div>  
                        </div>

                        <div className="bg-[url('/images/outdoorEvents.png')] bg-cover bg-center bg-no-repeat h-[400px] w-full max-w-[270px] border border-amber-400 rounded-[20px]">
                         <div className="bg-black/40 h-[175px] w-[270px] mt-[225px] pl-[20px] pt-[20px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[27px] font-bold">Outdoor Events</p>
                            <p className="text-white text-[17px] font-['Public_sans']">From small get-togethers to large events.We've got you covered.</p>
                            <div className="h-[3px] w-[50px] mt-[10px] bg-amber-400"></div>
                            </div>
                        </div>

                        <div className="bg-[url('/images/parties.png')] bg-cover bg-center bg-no-repeat h-[400px] w-full max-w-[270px] border border-amber-400 rounded-[20px]">
                         <div className="bg-black/60 h-[175px] w-[270px] mt-[225px] pl-[20px] pt-[15px] rounded-[20px]">
                            <p className="text-white font-[Prata] text-[27px] font-bold">Social & Private Parties</p>
                            <p className="text-white text-[17px] font-['Public_sans']">Tailored menus,theme setups and dedicated service.</p>
                            <div className="h-[3px] w-[50px] mt-[10px] bg-amber-400"></div>
                            </div>
                        </div>

                        </div>

                    </div>

                    <div className="h-[50vh] flex max-lg:flex-col max-lg:h-auto ">
                        <div className="flex gap-[30px] w-full max-lg:justify-center max-lg:items-center bg-black">
                        <div className="pl-[30px] pt-[20px]">
                            <p className="text-[orange] text-[16px] font-['Public_sans']">OUR APPROACH</p>
                            <h1 className="text-white font-[Prata] text-[40px]">More Than Just Food </h1>
                            <p className="text-amber-400 font-['Great_vibes'] text-[45px] ">It's an Experience</p>

                            <ul className="flex flex-col gap-[7px]">
                                <li className="flex gap-[15px] text-white"><div className="bg-black border border-amber-400 border-[3px] rounded-full h-[35px] w-[35px]"><Leaf className="text-amber-400 h-8 w-6"/></div>We listen to your needs.</li>
                                <li className="flex gap-[15px] text-white"><div className="bg-black border border-amber-400 border-[3px] rounded-full h-[35px] w-[35px]"><Leaf className="text-amber-400 h-8 w-6"/></div>We plan with precision</li>
                                <li className="flex gap-[15px] text-white"><div className="bg-black border border-amber-400 border-[3px] rounded-full h-[35px] w-[35px]"><Leaf className="text-amber-400 h-8 w-6"/></div>We deliver with perfection</li>
                                <li className="flex gap-[15px] text-white"><div className="bg-black border border-amber-400 border-[3px] rounded-full h-[35px] w-[35px]"><Leaf className="text-amber-400 h-8 w-6"/></div>You enjoy every moment</li>
                            </ul>
                        </div>

                        <img className="h-[50vh] w-full max-w-[110px] max-lg:flex-row" src="/images/flower.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[40px] mr-[20px] max-lg:mt-[30px] max-lg:mb-[30px]">
                    <div className="flex lg:flex-row flex-col max-lg:overflow-x-auto mt-[20px] gap-2 flex-wrap lg:flex-nowrap max-lg:justify-center max-lg:items-center">
                        <div className="flex flex-col gap-[20px] justify-center items-center">
                            <div className="bg-black h-[70px] w-[70px] border border-amber-400 border-[2px] rounded-full"><Users className="text-amber-400 h-16 w-14 pl-[10px]"/></div>
                            <p className="font-bold text-[26px] font-[Prata]">Understand</p>
                            <p className="text-[16px] font-['Public_Sans'] text-center">We understand your <span className="block">vision and requirements.</span></p>
                            <div className="h-[3px] w-[50px] bg-amber-400 mt-[10px]"></div>
                        </div>

                        <ArrowRight className="h-14 w-14 text-amber-400 mt-[60px] hidden lg:block"/>
                        
                        <ArrowDown className="h-16 w-16 text-amber-400 400 mt-[20px] mb-[20px] lg:hidden block"/>

                         <div className="flex flex-col gap-[20px] justify-center items-center">
                            <div className="bg-black h-[70px] w-[70px] border border-amber-400 border-[2px] rounded-full"><ClipboardList className="text-amber-400 h-16 w-14 pl-[10px]"/></div>
                            <p className="font-bold text-[26px] font-[Prata]">Design</p>
                            <p className="text-[16px] font-['Public_Sans'] text-center">We create a custom <span className="block">menu & plan for you.</span></p>
                            <div className="h-[3px] w-[50px] bg-amber-400 mt-[10px]"></div>
                        </div>

                        <ArrowRight className="h-14 w-14 text-amber-400 mt-[60px] hidden lg:block"/>
                         <ArrowDown className="h-16 w-16 text-amber-400  mt-[20px] mb-[20px] lg:hidden block"/>

                        <div className="flex flex-col gap-[13px] justify-center items-center">
                            <div className="bg-black h-[70px] w-[70px] border border-amber-400 border-[2px] rounded-full"><ChefHat className="text-amber-400 h-16 w-14 pl-[10px]"/></div>
                            <p className="font-bold text-[26px] font-[Prata]">Prepare</p>
                            <p className="text-[16px] font-['Public_Sans'] text-center">Our chefs prepare<span className="block">with the finest</span> <span className="block">ingredients.</span></p>
                            <div className="h-[3px] w-[50px] bg-amber-400 mt-[10px]"></div>
                        </div>

                        <ArrowRight className="h-14 w-14 text-amber-400 mt-[60px] hidden lg:block"/>
                        <ArrowDown className="h-16 w-16 text-amber-400 mt-[20px] mb-[20px] lg:hidden block"/>

                        <div className="flex flex-col gap-[13px] justify-center items-center">
                            <div className="bg-black h-[70px] w-[70px] border border-amber-400 border-[2px] rounded-full"><HandPlatter className="text-amber-400 h-16 w-14 pl-[10px]"/></div>
                            <p className="font-bold text-[26px] font-[Prata]">Serve</p>
                            <p className="text-[16x] font-['Public_Sans'] text-center">Our team delivers<span className="block">seamless service</span> <span className="block">with a smile.</span></p>
                            <div className="h-[3px] w-[50px] bg-amber-400 mt-[10px]"></div>
                        </div>

                        <ArrowRight className="h-14 w-14 text-amber-400 mt-[60px] hidden lg:block"/>
                         <ArrowDown className="h-16 w-16 text-amber-400 mt-[20px] mb-[20px] lg:hidden block"/>

                        <div className="flex flex-col gap-[13px] justify-center items-center lg:pr-[0] ">
                            <div className="bg-black h-[70px] w-[70px] border border-amber-400 border-[2px] rounded-full"><PartyPopper className="text-amber-400 h-16 w-14 pl-[10px]"/></div>
                            <p className="font-bold text-[26px] font-[Prata]">Celebrate</p>
                            <p className="text-[16px] font-['Public_Sans'] text-center">You relax <span className="block"> & enjoy, we take </span> <span className="block">care of the rest.</span></p> 
                            <div className="h-[3px] w-[50px] bg-amber-400 mt-[10px]"></div>
                        </div>


                    </div>
                    </div>


                    </div>

                    <div className="relative bg-black h-[50vh] border-[2px] border-t-amber-400 border-black">
                        <div className=" absolute inset-0 lg:bg-[url('/images/spices.png')] bg-hidden lg:bg- bg-contain bg-right bg-no-repeat flex flex-col leading-tight">
                            

                        <div className="mt-[40px] pl-[25px]">
                            <p className="text-amber-400  font-['Public_Sans'] lg:text-[18px] text-[16px] tracking-wider font-bold">CULINARY EXCELLENCE</p>
                            <h1 className="text-white font-[Prata] lg:text-[50px] text-[30px]">Diverse Cuisines, Endless Delights</h1>
                            <div className="bg-amber-400 h-[3px] w-[50px] mt-[15px]"></div>

                        <div className="mt-[30px] flex max-lg:overflow-x-auto gap-2">
                                
                                <div className="flex flex-col">
                                    <img className="h-[100px] w-[100px]" src="/images/choleBhature.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">Punjabi</p>
                                </div>
                                
                                <div className="h-[150px] w-[2px] bg-[lightgrey] ml-[15px]"></div>

                                <div className="flex flex-col">
                                    <img className="h-[100px] w-[100px]" src="/images/pizza.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">Fast Food</p>
                                </div>
                                
                                <div className="h-[150px] w-[2px] bg-[lightgrey] ml-[15px]"></div>

                                <div className="flex flex-col ml-[15px]">
                                    <img className="h-[100px] w-[100px]"  src="/images/southIndian.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">South-Indian</p>
                                </div>
                                
                                <div className="h-[150px] w-[2px] bg-[lightgrey] ml-[15px]"></div>

                                <div className="flex flex-col ml-[15px]">
                                    <img className="h-[100px] w-[100px]"  src="/images/momos.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">Chinese</p>
                                </div>
                                
                                <div className="h-[150px] w-[2px] bg-[lightgrey] ml-[15px]"></div>

                                 <div className="flex flex-col ml-[15px]">
                                    <img className="h-[100px] w-[100px]"  src="/images/indian.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">Indian</p>
                                </div>
                                
                                <div className="h-[150px] w-[2px] bg-[lightgrey] ml-[15px]"></div>

{/*                                 
                                 <div className="flex flex-col ml-[15px]">
                                    <img className="h-[100px] w-[100px]"  src="/images/burger.png" alt="" />
                                    <p className="text-white text-[20px] font-['Public_Sans'] pl-[15px]">Italian</p>
                                </div> */}
                                </div>
            
                            
                            </div>

                            

                            
                            
                        </div>
                    </div>

                    
                    <div className="pb-10 lg:pb-0">
                            
                        <div className="flex lg:flex-row max-lg:flex-col max-lg:justify-center max-lg:items-center items-start gap-8">
                    <div className="flex flex-col h-auto lg:h-[30vh] max-lg:justify-center max-lg:items-center pt-[30px] pl-5 lg:pl-[50px]">
                        <p className="text-[gold] text-[18px] font-bold">WE HANDLE EVERYTHING</p>
                        <h1 className="text-[35px] font-[Prata]">So You Can Enjoy Stress-Free</h1>
                        

                        <div className="flex mt-[20px] gap-3 flex-wrap lg:flex-nowrap max-lg:justify-center max-lg:items-center">
                            <div className="border border-amber-400 rounded-[10px] h-[150px] w-[180px] max-sm:w-[160px] flex flex-col justify-center items-center">
                                <CalendarDays className="text-amber-400 h-16 w-16" />
                                <p className="font-bold text-[18px]">Menu Planning</p>
                                <p className="text-[16px]">Customized for you</p>
                            </div>

                            <div className="border border-amber-400 rounded-[10px] h-[150px] w-[180px] max-sm:w-[160px] flex flex-col justify-center items-center">
                                <ReceiptText className="text-amber-400 h-16 w-16" />
                                <p className="font-bold text-[18px] text-center">Food Preparation</p>
                                <p className="text-[16px]">Hygienic & fresh</p>
                            </div>

                            <div className="border border-amber-400 rounded-[10px] h-[150px] w-[180px] max-sm:w-[160px] flex flex-col justify-center items-center">
                                <Rose className="text-amber-400 h-16 w-16" />
                                <p className="font-bold text-[18px]">Event Setup</p>
                                <p className="text-[16px]">Beautifully arranged</p>
                            </div>

                            <div className="border border-amber-400 rounded-[10px] h-[150px] w-[180px] max-sm:w-[160px] flex flex-col justify-center items-center">
                                <Headset className="text-amber-400 h-16 w-16" />
                                <p className="font-bold text-[18px] text-center">Service & Hospitality</p>
                                <p className="text-[16px]">Trained staff </p>
                            </div>

                            <div className="border border-amber-400 rounded-[10px] h-[150px] w-[180px] max-sm:w-[160px] flex flex-col justify-center items-center">
                                <TimerReset className="text-amber-400 h-16 w-16" />
                                <p className="font-bold text-[18px]">Clean Up</p>
                                <p className="text-[16px]">We leave it spotless</p>
                            </div>
                            


                            </div>

                    </div>
                    
                            <div className="lg:h-[230px] h-[350px] w-[450px] max-lg:w-[90%] mt-[60px] mb-[30px] ml-[60px] max-lg:ml-0 rounded-[20px] bg-black max-lg:flex-col max-lg:justify-center max-lg:items-center lg:flex-row">
                                <h1 className="text-white font-[Prata] pl-[20px] text-[30px] pt-[25px] font-bold">Ready to Plan Your Event ?</h1>
                                <p className="text-[20px] text-white pl-[20px]">Let us create a memorable experience <span className="block">for you and your guests.</span></p>
                               <div className="flex"><button onClick={()=>navigator("/contact")} className="bg-[gold] rounded-[10px] lg:h-[30px] h-[80px] w-[200px] max-sm:w-[160px] ml-[30px] mt-[20px] text-[brown] text-[18px] flex gap-[20px] pl-[10px] font-['Public_Sans'] font-bold">Book your event <div className="bg-[brown] h-[24px] w-[24px] rounded-full mt-[2px]"><ChevronRight className="text-amber-400 h-6 w-6" /></div></button>
                                 <img className="h-[100px] w-[150px] ml-[40px] mb-[100px]" src="/images/platter.png" alt="" /></div>

                               
                            </div>
                            </div>
                           </div>
                            <Footer/>
        </>
    )
}