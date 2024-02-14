import { ProductCardProps } from "./ProductCard.props";
import styles from "../ProductCard/ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard(props: ProductCardProps) {
    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
                <div className={styles['price']}>
                    {props.price}&nbsp;
                    <span className={styles['currency']}>грн</span>
                </div>
                <button className={styles['add-to-cart']}>
                    <img src="/public/cart-button-icon.svg" alt="Добавити в корзину"/>
                </button>
                <div className={styles['rating']}>
                    {props.rating}&nbsp;
                    <img src="/public/star-icon.svg" alt="Іконка зірки"/>
                </div>
                </div>
                    <div className={styles['footer']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>
            </div>
        </Link>

    )
}

export default ProductCard;