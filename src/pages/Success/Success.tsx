import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Success.module.css";

export function Success() {
    const navigate = useNavigate();

    return (
        <div className={styles["success"]}>
            <img src="/pizza.png" alt="Pizza" />
            <div className={styles["text"]}>
                Ваше замовлення успішно формлене!
            </div>
            <Button appearence="big" onClick={() => navigate("/")}>
                Зробити новий
            </Button>
        </div>
    );
}
