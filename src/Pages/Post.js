//Method 1
//const Post = ({match}) => {
  //  return (
     //   <h2> ID is={match.params.id}</h2>
    //)
//}

//export default Post

//method 2
import { useLocation, useParams } from "react-router"

const Post = () => {
    const { id }= useParams();
    const query = new URLSearchParams(useLocation().search)
    return (
      <>  
        <h2> ID is={id}</h2>
        <h2>{query.get("first")}</h2>
        </>
    )
}

export default Post


