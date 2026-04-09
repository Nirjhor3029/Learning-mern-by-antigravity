import React from 'react'

function InfoCard(props) {
    const { title, description } = props;
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default InfoCard