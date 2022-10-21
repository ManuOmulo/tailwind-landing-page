import { useState } from 'react'
import NavComponent from "../components/nav"

let myClass = "block hamburger md:hidden focus:outline-none"
let mobileClass = "hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"

const Nav = () => {
  const [newName, setNewName] = useState(myClass)
  const [navClass, setNavClass] = useState(mobileClass)
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)

    if (isOpen) {
      setNavClass("absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md")
      return setNewName(`open ${myClass}`)
    }
    setNavClass(mobileClass)
    return setNewName(myClass)
  }

  return (
    <div>
      <NavComponent handleClick={toggleOpen} customName={newName} navClassName={navClass}/>
    </div>
  )
}

export default Nav