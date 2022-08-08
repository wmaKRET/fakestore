import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectAllItems } from "../../features/itemsSlice";
import StoreItem from "./item/StoreItem";
import "./store.scss";

const Store = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  return (
    <div className="store">
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
    </div>
  );
};

export default Store;
