// Write your code here.
import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={className}>
      <div className="c-body">
        <h1 className="head">{title}</h1>
        <p className="para">{description}</p>
        <div className="img">
          <img alt={title} src={imgUrl} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
