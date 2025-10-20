import Feed from "./Feed"
import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"

const FeedMain=()=>{
    return(
        <div className="min-h-screen text-white flex items-start justify-center gap-5   mx-auto lg:px-10 mt-3 ">
            <LeftSidebar/>
            <Feed/>
            <RightSidebar/>
        </div>
    )
}

export default FeedMain