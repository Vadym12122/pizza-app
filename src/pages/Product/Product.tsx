import { Await, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { Suspense, useCallback } from "react";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { Spinner } from "../../components/Spinner/Spinner";

export function Product() {
    const data = useLoaderData() as { data: Product };

    const dispatch = useDispatch<AppDispatch>();

    const { id } = useParams();

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(cartActions.add(parseInt(String(id), 11)));
    };

    const navigate = useNavigate();

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <div className={styles["head"]}>
                    <Await resolve={data.data}>
                        {({ data }: { data: Product }) => (
                            <Headling className={styles["title"]}>
                                <div
                                    className={styles["button-back"]}
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    <img src="/arrow-left.svg" alt="arrow" />
                                </div>
                                {data.name}
                            </Headling>
                        )}
                    </Await>
                    <Button
                        className={styles["head-button"]}
                        onClick={add}
                        appearence="small"
                    >
                        <img src="/public/cart-icon.svg" alt="cart-icon" />В
                        корзину
                    </Button>
                </div>

                <Await resolve={data.data}>
                    {({ data }: { data: Product }) => (
                        <div className={styles["cart"]}>
                            <div
                                className={styles["cart-image"]}
                                style={{
                                    backgroundImage: `url('${data.image}')`,
                                }}
                            ></div>

                            <div className={styles["content"]}>
                                <div className={styles["price"]}>
                                    <div className={styles["name"]}>Ціна</div>
                                    <div>{data.price}&nbsp;грн</div>
                                </div>

                                <div className={styles["rating"]}>
                                    <div className={styles["name"]}>
                                        Рейтинг
                                    </div>
                                    <div className={styles["rating"]}>
                                        <div>{data.rating}&nbsp;</div>
                                        <img
                                            src="/star-icon.svg"
                                            alt="Іконка зірки"
                                        />
                                    </div>
                                </div>

                                <div className="ingred">
                                    Склад:&nbsp;{data.ingredients.join(", ")}
                                </div>
                            </div>
                        </div>
                    )}
                </Await>
            </Suspense>
        </>
    );
}
