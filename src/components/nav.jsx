import logo from "../assets/logo.svg"

const NavComponent = ({ handleClick, customName, navClassName }) => {
  return (
    <nav className="relative container mx-auto p-6">

      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>

        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>

        <a href="#" className="hidden p-2 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
          Get Started
        </a>

        <button onClick={handleClick} className={customName}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div id="menu" className={navClassName}>
          <a href="#" className="hover:text-brightRed">Pricing</a>
          <a href="#" className="hover:text-brightRed">Products</a>
          <a href="#" className="hover:text-brightRed">About Us</a>
          <a href="#" className="hover:text-brightRed">Careers</a>
          <a href="#" className="hover:text-brightRed">Community</a>
        </div>
      </div>
    </nav>
  )
}

export default NavComponent