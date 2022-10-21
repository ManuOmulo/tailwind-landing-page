const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maiores itaque architecto vitae quisquam quidem quia impedit consequuntur atque ipsam.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">

          {/* //? List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div className="text-left">
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea illo fuga sunt magnam corrupti deserunt sed aliquid quaerat voluptatibus perspiciatis, repellat illum magni neque nisi officiis dolorum possimus doloremque asperiores exercitationem nesciunt enim qui iure. Quis, mollitia, necessitatibus commodi quasi iste odio ducimus qui corrupti quos nihil, maiores illo.
              </p>
            </div>
          </div>

          {/* //? List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div className="text-left">
              <h3 className="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea illo fuga sunt magnam corrupti deserunt sed aliquid quaerat voluptatibus perspiciatis, repellat illum magni neque nisi officiis dolorum possimus doloremque asperiores exercitationem nesciunt enim qui iure. Quis, mollitia, necessitatibus commodi quasi iste odio ducimus qui corrupti quos nihil, maiores illo.
              </p>
            </div>
          </div>

          {/* //? List Item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div className="text-left">
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea illo fuga sunt magnam corrupti deserunt sed aliquid quaerat voluptatibus perspiciatis, repellat illum magni neque nisi officiis dolorum possimus doloremque asperiores exercitationem nesciunt enim qui iure. Quis, mollitia, necessitatibus commodi quasi iste odio ducimus qui corrupti quos nihil, maiores illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features