import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({name: "", strength: 0, health: 0, weapon: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crew')
          .insert({name: post.name, strength: post.strength, health: post.health, weapon: post.weapon})
          .select();
      
        window.location = "/crew";
    }

    return (
        <div>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="strength">Strength (between 0 and 10):</label>
                <input type="range" id="strength" name="strength" min="0" max="10" onChange={handleChange} /><br />
                <br/>

                <label for="health">Health (between 0 and 10):</label>
                <input type="range" id="health" name="health" min="0" max="10" onChange={handleChange} /><br />
                <br/>

                <label for="weapon">Weapon</label><br />
                <input type="text" id="weapon" name="weapon" onChange={handleChange} /><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost