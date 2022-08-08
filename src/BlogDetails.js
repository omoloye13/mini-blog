import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const{id}= useParams();
    const history=useHistory();
    //http://localhost:8000/blogs/
    const {data : blog, isLoading, error}=useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const handleClick = ()=>{
        
        fetch("https://jsonplaceholder.typicode.com/posts/" + blog.id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })

    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>In Progress...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Serial number {blog.id}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
                </div>
     );
}
 
export default BlogDetails;