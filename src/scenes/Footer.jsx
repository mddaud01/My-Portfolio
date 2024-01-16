import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            MOHAMMAD DAUD
          </p>
          <div>
            <ul className="flex justify-between items-center gap-4">
              <li><a href="#">Home </a></li>
              <li><a href="#">About Me  </a></li>
              <li><a href="#">Contact Me </a></li>
              <li><a href="#">Features </a></li>
            </ul>
          </div>
          <p className="font-playfair text-md text-yellow">
            ©2022 DAUD. THIS IS MINE.
          </p>
        </div>
        
      </div>
    
    </footer>
  );
};

export default Footer;
