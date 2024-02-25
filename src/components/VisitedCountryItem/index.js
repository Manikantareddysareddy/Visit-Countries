import './index.css'

const VisitedCountryItem = props => {
  const {VisitedItem, removeVisitedCountry} = props
  const {id, name, imageUrl} = VisitedItem

  const removeCountry = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="visited-list-item">
      <img src={imageUrl} alt="thumbnail" className="imageEl" />
      <div className="remove-container">
        <p className="visited-list-heading">{name}</p>
        <button type="button" className="remove-Btn" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
