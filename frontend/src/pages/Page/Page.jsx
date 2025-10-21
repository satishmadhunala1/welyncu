import Details from "./Details"
import Profile from "./Profile"
import Rightside from "./rightSide/Rightside"


const Page=()=>{
    return(
        <div className="min-h-screen lg:px-10 flex">
            <div className="lg:w-[80%]">
                <Profile/>
                <Details/>
            </div>
            <div className="lg:w-[20%]">
                <Rightside/>
            </div>

        </div>
    )
}

export default Page