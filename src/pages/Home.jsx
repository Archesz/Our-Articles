import React from 'react'
import Tags from '../components/Tags/Tags'
import Ref from '../components/Ref/Ref'
import '../styles/home.scss'

import json from '../Data/refs.json'
const refs = json['Refs']

function Home() {
    return (
        <div className="container">

            <Tags />

            {refs.map((ref, index) => {
                return(
                    <Ref author={ref.Author} title={ref.Title} tag={ref.Tag} link={ref.Link} key={index}/>
                )
            })}

        </div>
    )
}

export default Home