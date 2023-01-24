import Link from "next/link"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function HomePage(){
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    axios.post('http://localhost:3001/')
  }, [])

  const handleSignupClick = () => {
    
  }

  return(
    <div className="h-screen flex flex-col relative">
      <nav className="h-20 flex flex-row items-center w-full border-b-2 dark:border-gray-800 border-gray-300">
        <Link className="flex flex-row items-center lg:ml-10 md:ml-2" href="/">
          <h2 className="dark:text-gray-500 lg:text-3xl md:text-xl font-serif font-bold ml-2">exposure</h2>
          <img className="lg:w-10 hidden lg:inline ml-3 mr-2 my-1" src="/logo.png" />
        </Link>
        <input placeholder="search category" className="font-mono bg-gray-800 placeholder-gray-500 text-gray-500 indent-4 overflow-hidden w-1/3 h-10 rounded-md lg:ml-48 md:ml-12 focus:border-red-500" />
        <div className="ml-auto mr-8 flex flex-row items-center">
          <Link href="/new-post" className="text-gray-500 mx-4 font-bold font-mono text-lg px-2 hover:bg-gray-800/50 rounded-md transition-all duration-200 ml-16">
            + post
          </Link>
          <div className="bg-gray-800 rounded-md w-56 h-8 flex flex-row items-center justify-between border-[1px] border-gray-500">
            <img className="w-5 mx-auto invert-[.45] hover:invert-[.65] hover:cursor-pointer transition-all" src="friend_request.png" />
            <div className="w-[0.12rem] h-6 bg-gray-600" />
            <img className="w-5 mx-auto invert-[.45] hover:invert-[.65] hover:cursor-pointer transition-all" src="library.png" />
            <div className="w-[0.12rem] h-6 bg-gray-600" />
            <Link href="/signup">
              <img className="w-5 mx-auto invert-[.45] hover:invert-[.65] hover:cursor-pointer transition-all " src="profile.png" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex flex-row h-full">
        <div className="border-r-2 dark:border-gray-800 h-full overflow-y-hidden relative justify-center w-1/5">
          <div className="flex flex-col justify-center overflow-y-scroll">
            <p className="text-gray-600 font-bold text-4xl ml-4 mt-6">Hello,</p>
            <p className="text-gray-600 font-bold text-4xl ml-4 w-64 break-words">Konstantin</p>
            <div className="flex mx-4 bg-gray-800 rounded-md mt-1 border-2 border-gray-500">
              <img className="h-10 w-10 rounded-full object-cover m-4" src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" />
              <div className="flex flex-col my-auto">
                <p className="text-gray-500 text-sm font-bold">@kstanmeyer</p>
                <p className="text-gray-500 text-sm">impact: </p>
              </div>
            </div>
            <Link href="/browse" className="text-center text-gray-500 my-5 font-mono hover:text-gray-400 transition-all duration-200">browse</Link>
            <div className="w-2/5 h-[2px] mx-auto bg-gray-800" />
            <Link href="/suggest" className="text-center text-gray-500 my-5 font-mono hover:text-gray-400 transition-all duration-200">suggest</Link>
            <div className="w-2/5 h-[2px] mx-auto bg-gray-800" />
            <Link href="/random" className="text-center text-gray-500 my-5 font-mono hover:text-gray-400 transition-all duration-200">random</Link>
            <div className="w-36 mx-auto mt-auto">
              <Link href="/settings" className="flex flex-row h-10 items-center justify-center bg-gray-800 rounded-md w-full mb-4 hover:bg-gray-700">
                <img className="invert-[.45] hover:invert-[.65] w-6" src="/settings.png" />
                <p className="text-gray-500 font-bold font-mono ml-2">Settings</p>
              </Link>
              <p className="text-gray-500 hover:text-gray-400 text-sm hover:underline hover:cursor-pointer text-center">log out</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full">
        
        </div>
      </div>
    </div>
  )
}