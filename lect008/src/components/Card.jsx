import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card' >
        <img src={props.imgsrc || "https://hucklebeefarms.com/cdn/shop/articles/fluttering-beauties-10-fascinating-facts-about-butterflies-8689565.png?v=1764867360"} alt="" style={{width: "100%"}}/>
      <h2>{props.title || "Title of the card"}</h2>
      <p>
        {props.description || "Description and the related details of the card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium, deleniti dicta qui eveniet non veniam quos nostrum magnam, possimus voluptatum. Iste consequuntur eligendi a laudantium fugiat, aliquam animi quia libero enim corrupti facilis alias iure natus qui quis dolor magni odio. Accusamus, quis natus?z"}
      </p>
    </div>
  )
}

export default Card
