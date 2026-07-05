import Nav from "../components/Nav";

export default function Top() {
  return (
    <div>
    
    <nav
      className="
      w-full
      flex
      flex-col 
      xl:flex-row
      items-center
      justify-between
      px-2
      sm:px-4
      lg:px-6
      py-1
    
      "
    >
      <img
        className="
        lg:ml-[50px]
        h-[200px]
        lg:h-[170px]
        w-[190px]
        sm:w-[240px]
        md:w-[300px]
        lg:w-[300px]
        xl:w-[380px]
        object-contain
        "
        src="/images/logo4.png"
        alt="Manik Caterers"
      />

      <Nav />
    </nav>
    </div>
    
  );
}