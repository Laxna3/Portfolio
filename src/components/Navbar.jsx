import logo from "../assets/laxna.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <p>
          <a href="#hero">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#skills">Skills</a>
        </p>
        <p>
          <a href="#experience">Experience</a>
        </p>
        <p>
          <a href="#projects">Projects</a>
        </p>
        <button className="bg-purple-500 p-2 text-black rounded-xl text-sm">
          <a
            href="https://drive.google.com/file/d/1AVpDad1walEQil7A3umJbEh79VqUcsmY/view?usp=drivesdk "
          >
            View CV
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
