import { Link } from "react-router-dom";
const Bloglist = ({blogs}) => {
    // const blogs = props.blogs;
    // const titles=props.title;
    // const handleDelete=props.handleDelete();
    return (
        <div className="blog-list">
            {/* <h1>{titles}</h1> */}
            <h2>All Blogs!</h2>
            {blogs.map((blog) => (
                <div className="blog-view" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> {blog.body}</p>
                    {/* <button>Delete blog</button> */}
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </Link>

                </div>
            ))}
        </div>
    );
}
export default Bloglist;