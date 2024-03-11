import styles from "./Spinner.module.css";

export const Spinner = () => (
    <div>
        <h1>Загрузка...</h1>
        <div className={styles["container"]}>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small/pizza-isolated-illustration-ai-generative-png.png"
                id={styles["rotatingText"]}
            ></img>
        </div>
    </div>
);
