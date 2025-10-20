const Promotion=()=>{
    return(
        <div className="border border-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300 font-semibold"><span className="font-bold text-gray-400 text-[20px]">Vamshi</span>, explore jobs at Google that match your skills</p>

            <div className="mt-7 flex items-center gap-3">
                <img src="/google.jpeg" className="h-10 w-10 rounded-full" alt="" />
                <div>
                    <h1 className="font-semibold">Google</h1>
                    <p className="text-sm text-gray-400 ">Softwae Development</p>
                </div>
            </div>

            <button className="font-semibold text-blue-400 border border-blue-400 rounded-full px-4 py-2 mt-4 w-full text-center hover:bg-gray-900/70 cursor-pointer">See All Jobs</button>
        </div>
    )
}

export default Promotion