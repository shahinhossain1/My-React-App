import React from 'react';
import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

//sfc

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    {/*
    const [blogs, setBlogs] = useState([
     {title: 'My First React App', body: 'lorem ipsum.........', author: 'Shahin', id: 1},
     {title: 'Winter Collection 2023', body: 'lorem ipsum.........', author: 'Joe', id: 2},
     {title: 'Eid-UL Fitr 2023', body: 'lorem ipsum.........', author: 'Shahin', id: 3},
    ]);

    const [name, setName] = useState('Mario');
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }
    */}

    return ( 
       <div className="home">
       {error && <div>{error}</div>}
       {isPending && <div>Loading... </div>}
       {blogs && <BlogList blogs= {blogs} title= "All Blogs" />}

       {/*<BlogList blogs= {blogs.filter((blog) => blog.author === 'Shahin')}  title= "Shahin's Blogs" />
       <button className="butt" onClick= {()=> setName('Luigi')}>Click Here</button>
       <p>{name}</p> */}

       </div> 

     );
}
 
export default Home;