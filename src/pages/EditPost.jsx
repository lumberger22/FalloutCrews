import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditPost.css';

const EditPost = () => {
    const [post, setPost] = useState({
        name: '', strength: 0, health: 0, weapon: ''
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchCrew = async () => {
            const { data, error } = await supabase.from('Crew').select('*').eq('id', id).single();
            if (data) {
                setPost({
                    name: data.name,
                    strength: data.strength,
                    health: data.health,
                    weapon: data.weapon
                });
            }
            if (error) {
                console.error('Error fetching crew', error);
            }
        };

        fetchCrew();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const updatePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Crew')
            .update({
                name: post.name,
                strength: post.strength,
                health: post.health,
                weapon: post.weapon
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating post', error);
        } else {
            window.location = "/crew";
        }
    };

    const deletePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Crew')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting post', error);
        } else {
            window.location = "/crew";
        }
    };

    return (
        <div>
            <form autoComplete='off'>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="strength">Strength (between 0 and 10):</label>
                <input type="range" id="strength" name="strength" min="0" max="10" value={post.strength} onChange={handleChange} /><br />
                <br />

                <label htmlFor="health">Health (between 0 and 10):</label>
                <input type="range" id="health" name="health" min="0" max="10" value={post.health} onChange={handleChange} /><br />
                <br />

                <label htmlFor="weapon">Weapon</label><br />
                <input type="text" id="weapon" name="weapon" value={post.weapon} onChange={handleChange} /><br />
                <br />

                <input type="submit" value="Update" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    );
}

export default EditPost;