import AffiliatedPages from "./AffiliatedPages"
import Promotion from "./Promotion"

const Rightside=()=>{
    return(
        <div className="hidden lg:block">
            <Promotion/>
            <AffiliatedPages/>

        </div>
    )
}

export default Rightside