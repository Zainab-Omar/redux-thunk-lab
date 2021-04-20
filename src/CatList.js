// import { render } from 'enzyme';
import React from 'react'

const CatList = props => {
    return(
        <div>
         {props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)}
        </div>
    )
}


export default CatList;