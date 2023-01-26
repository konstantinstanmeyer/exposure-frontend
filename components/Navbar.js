export default function Navbar(){
    return(
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
                    <Link className="w-5 mx-auto" href="/signup">
                        <img className="invert-[.45] hover:invert-[.65] hover:cursor-pointer transition-all " src="profile.png" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}