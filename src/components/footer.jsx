import logo from "../assets/logo-white.svg"
import Facebook from "../assets/icon-facebook.svg"
import Youtube from "../assets/icon-youtube.svg"
import Twitter from "../assets/icon-twitter.svg"
import Pinterest from "../assets/icon-pinterest.svg"
import Instagram from "../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between mx-auto px-6 py-10 space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Right Reserved
          </div>

          <div>
            <img src={logo} alt="logo" className="h-8"/>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={Facebook} alt="icon-facebook" className="h-8" />
            </a>

            <a href="#">
              <img src={Youtube} alt="icon-facebook" className="h-8" />
            </a>

            <a href="#">
              <img src={Twitter} alt="icon-facebook" className="h-8" />
            </a>

            <a href="#">
              <img src={Pinterest} alt="icon-facebook" className="h-8" />
            </a>

            <a href="#">
              <img src={Instagram} alt="icon-facebook" className="h-8" />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col text-white space-y-3 text-left">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>

          <div className="flex flex-col text-white space-y-3 text-left">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />

              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
            </div>
          </form>

          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer