import Nav from "../components/Nav";
import Top from "../components/Top";
import {
  Radar,
  Eye,
  ChefHat,
  Leaf,
  ShieldCheck,
  Users,
  Star,
  Handshake,
  Heart,
  Check,
  ChevronRight,
  Phone,
} from "lucide-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigator = useNavigate();

    const team = [
  {
    name: "Dheeraj Sharma",
    role: "Founder",
    img: "/images/man.png",
  },
  {
    name: "Neetu Sharma",
    role: "Co-Founder",
    img: "/images/woman.png",
  },
  {
    name: "Vaibhavi Sharma",
    role: "Manager",
    img: "/images/woman2.png",
  },
  {
    name: "Vishnu",
    role: "Chef",
    img: "/images/chef.png",
  },
  {
    name: "Rajeev",
    role: "Chef",
    img: "/images/chef2.png",
  },
  {
    name: "Kuldeep",
    role: "Co-manager",
    img: "/images/man2.png",
  }
];

  return (
    <>
      <Top />

      {/* HERO SECTION */}
{/* HERO SECTION */}
<div className="relative h-[60vh] border border-amber-400 border-[2px] overflow-hidden">

  {/* Background Layer */}
  <div className="absolute inset-0 bg-[url('/images/backG.png')] bg-contain bg-no-repeat bg-right "></div>

  {/* Image overlay (IMPORTANT FIX) */}
  <div className="absolute inset-0 bg-white/30"></div>

  {/* Decorative background image */}
  <div className="absolute inset-0 bg-[url('https://tse3.mm.bing.net/th/id/OIP.MN1gY2L87m6TSNUZGFQwhgHaE8?w=996&h=664&rs=1&pid=ImgDetMain&o=7&rm=3')] bg-contain bg-no-repeat md:bg-right h-full bg-center opacity-40 lg:opacity-100"></div>

  {/* CONTENT LAYER */}
  <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-24">

    <p className="text-amber-400 text-[16px] sm:text-[18px] md:text-[20px] font-bold">
      ABOUT US
    </p>

    <h1 className="text-[32px] sm:text-[45px] md:text-[65px] text-black font-[Prata] font-bold leading-tight">
      Serving Smiles
    </h1>

    <p className="text-[60px] sm:text-[90px] md:text-[115px] font-['Great_Vibes'] text-amber-400 leading-none">
      Since 1997
    </p>

    <p className="text-[16px] sm:text-[22px] md:text-[30px] text-black font-[Sofia] mt-2">
      Four decades of passion, dedication and
      <span className="block">delicious food that brings people together.</span>
    </p>

  </div>
</div>

      {/* STORY SECTION */}
      <div className="bg-white flex flex-col justify-center items-center lg:flex-row gap-[20px] lg:gap-[40px] mt-[50px] px-4 lg:px-[80px]">
        <img
          className="rounded-[15px] w-full max-w-[500px] h-auto object-cover"
          src="/images/about.png"
          alt=""
        />

{/* For nearly three decades, Guruji Caterers has been weaving culinary magic and orchestrating flawless celebrations across the grand landscapes of Himachal Pradesh. What started as a passionate family vision in 1997 has evolved into the region's premier all-in-one event specialist. */}
        <div>
          <p className="text-[16px] sm:text-[18px] flex items-center gap-2">
            OUR STORY
            <span className="h-[3px] w-[50px] sm:w-[70px] bg-amber-400"></span>
          </p>

          <h1 className="font-[Prata] text-[28px] sm:text-[35px] lg:text-[40px] font-bold ">
            A Legacy of Taste <span className="block">and Trust</span>
          </h1>

          <p className="font-['Great_Vibes'] text-amber-500 text-[23px] sm:text-[26px]">
            Setting the Gold Standard for Mountain Hospitality Since 1997.
          </p>

          <p className="text-[16px] sm:text-[18px] lg:text-[20px] pt-[10px]">
           For nearly three decades, Guruji Caterers has been weaving culinary magic and orchestrating flawless celebrations across the grand landscapes of Himachal Pradesh. What started as a passionate family vision in 1997 has evolved into the region's premier all-in-one event specialist.
          </p>

          <p className="text-[16px] sm:text-[18px] lg:text-[20px] pt-[15px]">
            We believe that an extraordinary gathering requires a perfect harmony of flavors, atmosphere, and seamless execution. By blending deep-rooted Himachali traditions with modern global execution, we don't just host functions—we build core lifelong memories.
          </p>

          <p className="font-[Tangerine] text-[27px] sm:text-[32px] lg:text-[35px] font-bold pt-[15px] text-amber-500">
            - The Manik Caterers Family
          </p>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-[40px] px-4">
        
        {/* MISSION */}
        <div className="h-auto lg:h-[350px] w-full lg:w-[600px] bg-[url('/images/blackBg.png')] bg-cover rounded-[20px] p-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-[65px] w-[65px] border border-[gold] rounded-full flex items-center justify-center">
              <Radar className="w-10 h-10 text-[gold]" />
            </div>

            <h1 className="text-white text-[24px] sm:text-[30px] font-[Prata] font-bold mt-3">
              OUR MISSION
            </h1>

            <p className="text-white text-[18px] sm:text-[21px] font-[Sofia]">
             We don't just cook food; we build trust with our clients. Our team goes above and beyond to bring great flavors, beautiful tents, and lively music to every corner of Himachal. Seeing the joy on your guests' faces and knowing they loved every bit of the party is what keeps us excited every single day.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="h-auto lg:h-[350px] w-full lg:w-[600px] bg-[url('/images/whiteBg.png')] bg-cover rounded-[20px] p-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-[65px] w-[65px] bg-[orange] border border-black rounded-full flex items-center justify-center">
              <Eye className="w-10 h-10 text-black" />
            </div>

            <h1 className="text-white text-[24px] sm:text-[30px] font-[Prata] font-bold mt-3">
              OUR VISION
            </h1>

            <p className="text-black text-[18px] sm:text-[21px] font-[Sofia] font-bold">
             We don't just cook food; we build trust with our clients. Our team goes above and beyond to bring great flavors, beautiful tents, and lively music to every corner of Himachal. Seeing the joy on your guests' faces and knowing they loved every bit of the party is what keeps us excited every single day.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-white mt-[40px] px-4">
        <h1 className="text-[24px] sm:text-[30px] font-[Prata] text-center flex justify-center items-center gap-2">
          <span className="h-[3px] w-[60px] sm:w-[130px] bg-amber-400"></span>
          OUR VALUES
          <span className="h-[3px] w-[60px] sm:w-[130px] bg-amber-400"></span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-[40px] place-items-center">
          {[
            [Leaf, "QUALITY"],
            [ShieldCheck, "HYGIENE"],
            [Users, "PASSION"],
            [Handshake, "COMMITMENT"],
            [Star, "INNOVATION"],
            [Heart, "INTEGRITY"],
          ].map(([Icon, title], i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-[60px] w-[60px] rounded-full border border-[goldenrod] flex items-center justify-center">
                <Icon className="text-[goldenrod]" />
              </div>
              <p className="font-bold mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="bg-[url('/images/bg2.png')] bg-cover bg-center mt-[40px] py-10 px-4">
        <h1 className="text-center text-[20px] sm:text-[30px] font-[public_sans] flex justify-center items-center gap-2">
          <span className="h-[3px] w-[80px] sm:w-[200px] bg-amber-400"></span>
          MEET OUR TEAM
          <span className="h-[3px] w-[80px] sm:w-[200px] bg-amber-400"></span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-[30px]">
          {team.map((member, i) => (
    <div
      key={i}
      className="border rounded-[20px] w-[180px] sm:w-[200px] bg-white"
    >
      <img
        className="h-[250px] w-full object-contain"
        src={member.img}
        alt={member.name}
      />

      <div className="bg-black text-center text-[20px] font-bold text-white p-2 rounded-b-[20px]">
        <p>{member.name}</p>
        <p className="text-amber-400">{member.role}</p>
      </div>
    </div>
  ))}
        </div>
      </div>

      {/* PROMISE */}
      <div className="bg-white mt-[50px] px-4 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row">
          <div className="bg-[url('/images/bg.png')] bg-cover p-6 w-full lg:w-[700px] rounded-l-[20px]">
            <p className="text-[orange] font-bold">OUR PROMISE</p>

            <h1 className="text-[24px] sm:text-[35px] font-[Prata] font-bold">
              We Promise More Than Just Great Food
            </h1>

            <ul className="text-[16px] sm:text-[20px] mt-4 space-y-3">
              {[
                "Fresh ingredients and authentic flavours.",
                "Timely service with attention to detail.",
                "Customised menus for every occasion.",
                "Memorable experiences for guests.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <div className="h-[25px] w-[25px] bg-[orange] rounded-full flex items-center justify-center">
                    <Check />
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <img
            className="w-full lg:w-[600px] h-auto object-cover rounded-r-[20px]"
            src="https://img.freepik.com/premium-photo/traditional-indian-wedding-buffet-with-delicious-cuisine_641503-145964.jpg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="relative min-h-[30vh] bg-black rounded-[15px] border border-amber-400 mt-[40px] mx-4 lg:mx-[50px] p-6">
                <div className="flex flex-col lg:flex-row lg:mx-[70px]">
        {/* <div className="absolute inset-0 bg-[url('/images/glass.png')] bg-contain bg-right bg-no-repeat"></div> */}

        <div className="flex flex-col lg:flex-row justify-between items-center">
          
             <div className="flex flex-col gap-[15px]">

          <div className="flex flex-col justify-center items-center">
            <p className="text-amber-400 text-[30px] sm:text-[60px] font-['Great_vibes']">
              Let's Create
            </p>
            <p className="text-white text-[24px] sm:text-[45px] font-[Prata]">
              Unforgettable Memories
            </p>
           <p className="text-white text-[18px] font-['Public_Sans'] sm:text-[25px] pt-[10px]">From intimate gatherings to grand celebrations, <span className="block">we are here to make every moment special.</span></p>
          
            </div>

            <div className="flex flex-col justify-center items-center">
          <button onClick={()=> navigator("/contact")} className="bg-[gold] rounded-[10px] h-[55px] w-full sm:w-full sm:text-[23px] mt-4 lg:mt-0 flex items-center justify-center gap-2 font-bold">
            Book Your Event Now
            <ChevronRight />
          </button>


          <div className="flex items-center gap-2 mt-4 lg:mt-0 sm:text-[25px]">
            <Phone className="text-amber-400" />
            <p className="text-white ">+91 7876167162</p>
          </div>
          </div>
        
        </div>
        </div>
             
             <img
            className="w-full lg:w-[400px] lg:ml-auto mt-[30px] h-auto object-cover rounded-r-[20px]"
            src="/images/glass.png"
          />
          </div>
      </div>

      <Footer />
    </>
  );
}