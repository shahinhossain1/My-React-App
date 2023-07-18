import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Add = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shahin');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        //console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{

            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog has been added.');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit= {handleSubmit}>

                <lable>Blog Title:</lable>
                <input type= "text" required value={title} onChange = {(e) => setTitle(e.target.value) } />

                <lable>Blog Body:</lable>
                <textarea reaquired value={body} onChange = {(e) => setBody(e.target.value) }> </textarea> 

                <lable>Blog Author:</lable>
                <select value={author} onChange = {(e) => setAuthor(e.target.value) }> 
                    <option value="shahin">Shahin</option>
                    <option value="leo">Leo</option>
                    <option value="mario">Mario</option>
                </select>

                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }

            </form>
        </div>
     );
}
 
export default Add;