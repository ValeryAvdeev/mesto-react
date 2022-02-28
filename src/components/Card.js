function Card(props){
  console.log(props.card)

  const handleClick = () => {
    console.log(props.card)
    props.onCardClick(props.card)
  };

  return (
    <div className="place">
      <button className="button button_item_delete button_delete" type="button"></button>
      <img
        src={props.link}
        alt="картинка."
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__content">
        <h2 className="place__title">{props.title}</h2>
        <div className="place__like">
          <button type="button" className="button button_item_like"></button>
          <span className="place__like-amount">{props.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;