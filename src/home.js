import Bloglist from './blogList';
import useFetch from './useFetch';


const Home=()=> {
    const{data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'chimamanda', id: 2 },
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 3 },
    // ]);
    // const [name, setName] = useState ('mario');


    // function handleDelete(id) {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
       
    // }
  
   
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            { blogs &&<Bloglist blogs={blogs} />}
            {/* <button onClick={() => setName('baby')}>change name</button>
            {/* <Bloglist blogs={blogs} handleDelete={handleDelete} /> */}

            {/* <Bloglist blogs={blogs.filter((blog)=>blog.author=== 'mario')} title="Mario blog" /> */}
        </div>
    );
}

export default Home;