import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { supabase } from '../client';

const Gallery = (props) => {

    const [crew, setCrew] = useState([]);

    useEffect(() => {

        const fetchCrew = async () => {
            const {data} = await supabase.from('Crew').select();
            setCrew(data); 
        }

        setCrew(props.data);
        fetchCrew();

    }, [props]);
    
    return (
        <div className="Gallery">
            {
                crew && crew.length > 0 ?
                crew.map((member,index) => 
                   <Card key={index} id={member.id} name={member.name} strength={member.strength} health={member.health} weapon={member.weapon}/>
                ) : <h2>{'No Crewmembers Yet'}</h2>
            }
        </div>  
    )
}

export default Gallery;