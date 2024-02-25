import './index.css'

const CountryItem = props => {
  const {Item, chnageisVisited} = props
  const {id, name, isVisited} = Item

  const changeIsVisited = () => {
    chnageisVisited(id)
  }

  return (
    <li className="list-item">
      <p className="list-heading">{name}</p>

      {isVisited === true ? (
        <p className="Visited-Btn">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={changeIsVisited}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
