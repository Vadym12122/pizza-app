import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";
import cn from 'classnames';

export function Layout() {

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src="/public/avatar.png" alt="Avatar"/>
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>alaricode@ya.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to="/" className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src="/public/menu-icon.svg" alt="Menu"/>
                    Меню
                </NavLink>
                <NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src="/public/cart-icon.svg" alt="Cart"/>
                    Корзина
                </NavLink> 
            </div>
            <Button className={styles['exit']}>
                <img src="/public/exit-icon.svg" alt="Exit"/>
                Вихід
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>;
}