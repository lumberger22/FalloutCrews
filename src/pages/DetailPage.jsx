import './DetailPage.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

export default function DetailPage() {

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

    return (
        <div className="DetailPage">
            <h1 className='detail--title'>Survivor Details</h1>
            <hr />
            <div className="details">
                <h1>{post.name}</h1>
                <div className="stats">
                    <h3 className="detail--strength">Strength: {post.strength}</h3>
                    <h3 className="detail--health">Health: {post.health}</h3>
                    <h3 className="detail--weapon">Weapon: {post.weapon}</h3>
                </div>
            </div>
            <p className='back'><a href='/crew'>Back to Crew</a></p>
        </div>
    )
}