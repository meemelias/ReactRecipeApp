import { useContext } from "react"
import RecipeItem from "../../components/recipe-list"
import { GlobalContext } from "../../context"

export default function Favorties(){
    const {favoritesList} = useContext(GlobalContext)

    
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">

        {
            favoritesList && favoritesList.length>0 ?
            favoritesList.map(item => <RecipeItem item={item}/>    )
            : <div className="lg:text-4xl text-xl text center text-black font-extrabold">Nothing to show.Please add something to cart</div>
        }
    </div>
}