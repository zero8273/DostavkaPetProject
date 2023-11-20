import style from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav>
      <ul className={style.nav__list}>
        <li>
          <a href="#">Холодні страви </a>
        </li>
        <li>
          <a href="#">Гарячі страви</a>
        </li>
        <li>
          <a href="#">М"ясні страви</a>
        </li>
        <li>
          <a href="#">Супи</a>
        </li>
        <li>
          <a href="#">Страви з риби</a>
        </li>
        <li>
          <a href="#">Гриль меню</a>
        </li>
        <li>
          <a href="#">Фірмові страви </a>
        </li>
        <li>
          <a href="#">Напої </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
