import React from 'react'

export default function Button({ onClick }) {
    return (
        <div className="ButtonContainer">
            <button type='button' className="Button" onClick={onClick}>Load more</button>
        </div>
    )
}