import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { supabase } from '../client';
import './Gallery.css';

const Gallery = (props) => {

    const [crew, setCrew] = useState([]);
    const [check, setCheck] = useState(0);

    useEffect(() => {

        const fetchCrew = async () => {
            const {data} = await supabase.from('Crew').select();
            setCrew(data);
            setCheck(check + 1);
        }

        setCrew(props.data);
        fetchCrew();

    }, [props]);
    
    return (
        <>
            <div className="Gallery--page">
                <div className="Gallery">
                    {
                        check > 0 ? (crew && crew.length > 0 ?
                        crew.map((member,index) => 
                        <Card key={index} id={member.id} name={member.name} strength={member.strength} health={member.health} weapon={member.weapon}/>
                        ) : <h2>{'No Crewmembers Yet'}</h2>
                    ) : null
                    }
                </div> 
            </div>
        </>
    )
}

export default Gallery;