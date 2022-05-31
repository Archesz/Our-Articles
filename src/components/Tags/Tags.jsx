import React from 'react'
import './Tags.scss'

const tags = ["Machine Learning", "Deep Learning", "NLP", "Data Visualization"]

function Tags(props){
    return (
        <div className="tags-container">

            <span className="tags-title">Tópicos</span>
            <select className="tags-select">
                <option value="">Selecione um tópico</option>
                {tags.map((tag, index) => {
                    return(
                        <option value={tag} key={index}>{tag}</option>
                    )
                })}
            </select>

            <label className="tags-title">Buscar por:</label>
            <input type="text" className="tags-input"/>
        </div>
    )
}

export default Tags