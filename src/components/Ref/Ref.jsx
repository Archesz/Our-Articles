import React from 'react'
import Tag from '../Tag/Tag'
import './Ref.scss'

function goToRef(link){
    window.location.href = link
}

function Ref(props) {
    return (
        <div className="ref-container" onClick={() => goToRef(props.link)}>
            
            <div className="ref-author">
                <div className="ref-avatar"></div>
                <span className="ref-author-name">{props.author}</span>
            </div>

            <div className="ref-infos">

                <div className="ref-infos-text">

                    <span className="ref-title">{props.title}</span>
                    <Tag tag={props.tag}/>

                </div>

                <div className="ref-image">

                </div>

            </div>

        </div>
    )
}

export default Ref