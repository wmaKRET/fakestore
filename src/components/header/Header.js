import { BsCartFill } from "react-icons/bs";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        FakeStore
      </a>
      <div className="header__sections">
        <div>Men</div>
        <div>Women</div>
        <div>Jewelery</div>
      </div>
      <div className="header__cart">
        <BsCartFill size={20} />
      </div>
    </header>
  );
};

export default Header;
