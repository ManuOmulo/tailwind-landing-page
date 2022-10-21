import image from "../assets/illustration-intro.svg"

const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, sed maxime. Tenetur reprehenderit sunt adipisci hic minima, asperiores odit iste fugiat consequuntur quas neque. Sint iusto dolor assumenda at eaque?
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#" className="p-3 px-6 pt-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero