import Image1 from "../assets/avatar-anisha.png"
import Image2 from "../assets/avatar-ali.png"
import Image3 from "../assets/avatar-richard.png"

const Testimonials = () => {
  return (
    <section id="testimonials" className="">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={Image1} alt="profilePic" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam at aut saepe repellat suscipit exercitationem aliquam voluptatem odio eaque omnis ipsa perspiciatis incidunt quam, veniam numquam nulla animi eligendi. Quos id esse dolorum velit!
            </p>
          </div>

          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Image2} alt="profilePic" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Ali Brown</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam at aut saepe repellat suscipit exercitationem aliquam voluptatem odio eaque omnis ipsa perspiciatis incidunt quam, veniam numquam nulla animi eligendi. Quos id esse dolorum velit!
            </p>
          </div>

          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Image3} alt="profilePic" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Richard Branson</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam at aut saepe repellat suscipit exercitationem aliquam voluptatem odio eaque omnis ipsa perspiciatis incidunt quam, veniam numquam nulla animi eligendi. Quos id esse dolorum velit!
            </p>
          </div>
        </div>

        <div className="my-16">
          <a href="#" className="p-2 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials