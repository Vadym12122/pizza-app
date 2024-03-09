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

    const decrease = () => {
        dispatch(cartActions.remove(props.id));
    };

    const remove = () => {
        dispatch(cartActions.delete(props.id));
    };

    return (
        <div className={styles["item"]}>
            <div
                className={styles["image"]}
                style={{ backgroundImage: `url('${props.image}')` }}
            ></div>
            <div className={styles["description"]}>
                <div className={styles["name"]}>{props.name}</div>
                <div className={styles["price"]}>{props.price}&nbsp;грн</div>
            </div>
            <div className={styles["actions"]}>
                <button className={styles["minus"]} onClick={decrease}>
                    <img src="/minus-icon.svg" alt="Видалити з корзини" />
                </button>
                <div className={styles["number"]}>{props.count}</div>
                <button className={styles["plus"]} onClick={increase}>
                    <img src="/plus-icon.svg" alt="Добавити в корзину" />
                </button>
                <button className={styles["remove"]} onClick={remove}>
                    <img src="/delete-icon.svg" alt="Видалити все" />
                </button>
            </div>
        </div>
    );
}

export default CardItem;
