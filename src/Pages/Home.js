import React, { useEffect, useState } from 'react';
import '../css/home.css';
import {
    Link
} from 'react-router-dom';

export const Home = (props) => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {

        const retrieve_items = async () => {
            const res = await fetch('/feed');
            const json = await res.json();
            setItems(json);
        }

        retrieve_items();

    }, []);

    return (
        <div className="items_container">
            {
                items.map(item => <Item key={item.link} item={item}/>)
            }
        </div>
    )

}

const Item = (props) => {

    const {
        item
    } = props;

    return (
        <Link
            to={{
                pathname: '/series/' + item.title,
                state: {
                    item: item
                }
            }} 
            className='item'
        >
            <div>
                <img className='item_cover' src={item.enclosure.url} width={200}/>
            </div>
            <div className='item_title'>
                {item.title}
            </div>
        </Link>
    )

}