import React, { useEffect, useState } from 'react';

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
        <div>
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
        <div>
            <div>
                {item.title}
            </div>
            <div>
                <a href={item.link}>
                    <img src={item.enclosure.url} width={200} ></img>
                </a>
            </div>
        </div>
    )

}