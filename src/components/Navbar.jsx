import logo from "../assets/laxna.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <p>
          <a href="Home.jsx">Home</a>
        </p>
        <p>
          <a href="About.jsx">About</a>
        </p>
        <p>
          <a href="Technologies.jsx">Technologies</a>
        </p>
        <p>
          <a href="Experience.jsx">Experience</a>
        </p>
        <p>
          <a href="Projects.jsx">Projects</a>
        </p>
        <button className="bg-purple-500 p-2 text-black rounded-xl text-sm">
          <a
            href="https://drive.google.com/file/d/1kTW2YqmjM6-IQvj3zY1Si3uNailJej88/view?usp=drive_link"
            download
          >
            Download CV
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
