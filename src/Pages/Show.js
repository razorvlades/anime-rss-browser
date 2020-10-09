import React, { useState, useEffect } from 'react';

export const Show = (props) => {

    const {
        item
    } = props.location.state;

    const [doc, setDoc] = useState('');

    useEffect(() => {
        console.log(item.link);
        const getShowData = async () => {
            const res = await fetch('/show?url=' + item.link);
            const json = await res.json();
            setDoc(json.doc);
        }

        getShowData();
        
    }, []);

    return (
        <div>
            {doc}
        </div>
    )
}