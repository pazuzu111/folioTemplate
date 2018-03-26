import React from 'react';

const Items = props => {

    const items = () => {

        return (
           <a href={props.src}> <div className="post" style={{background: props.color}}>
                <i className={props.icon}></i>
                <hr/>
                <h3>{props.name}</h3>
                <h5>{props.tech}</h5>
                <h4>{props.info}</h4>
            </div>
          </a>
        )
    }

    return (
        <div className="posts">
            {items()}
        </div>
    )
}

export default Items
