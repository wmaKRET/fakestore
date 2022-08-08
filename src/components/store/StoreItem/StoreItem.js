import "./store-item.scss";

const StoreItem = () => {
  return (
    <div className="item">
      <h2 className="item__title">Item Title</h2>
      <img className="item__img" src="url" alt="item title" />
      <div className="item__panel">
        <p className="item__price">15 usd</p>
        <div className="item__menu">
          <p className="item__menu-remove">-</p>
          <p className="item__menu-amount">0</p>
          <p className="item__menu-add">+</p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
