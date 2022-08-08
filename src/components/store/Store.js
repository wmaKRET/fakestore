import "./store.scss"
import StoreItem from "./item/StoreItem"

const Store = () => {
  return (
    <div className="store">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
    </div>
  )
}

export default Store