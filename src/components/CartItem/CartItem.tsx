import { CartItemProps } from "./CartItem.props";
import styles from "../CartItem/CartItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

function CardItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const decrease = () => {};

    const remove = () => {};

    return (
        <div className={styles["item"]}>
            <div
                className={styles["image"]}
                style={{ backgroundImage: `url('${props.image}')` }}
            ></div>
            <div className={styles["description"]}>
                <div className={styles["name"]}>{props.name}</div>
                <div className={styles["currency"]}>{props.price}&nbsp;</div>
            </div>
            <div className={styles["actions"]}>
                <button className={styles["button"]} onClick={decrease}>
                    <img src="/cart-button-icon.svg" alt="Видалити з корзини" />
                </button>
                <div>{props.count}</div>
                <button className={styles["button"]} onClick={increase}>
                    <img src="/cart-button-icon.svg" alt="Добавити в корзину" />
                </button>
                <button className={styles["remove"]} onClick={remove}>
                    <img src="/cart-button-icon.svg" alt="Видалити все" />
                </button>
            </div>
        </div>
    );
}

export default CardItem;
