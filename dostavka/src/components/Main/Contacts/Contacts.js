import style from './Contacts.module.css';
const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style['contacts-content']}>
        <h2>Контакти</h2>
        <div>
          <p>
            <span>Наша адреса</span>
            Місто Київ, Оболонський район, село Ільїнке, вулиця
            Експериментальна, 10.
          </p>
          <p>
            <span>Наша почта </span>
            cergi8273@gmail.com
          </p>
        </div>
        <div>
          <button>Забронювати столик</button>
          <span>+38 (097) 566-23-50</span>
          <span>Звоніть або залишайте заявку</span>
          <div>
            <span>Ми в соцмережах</span>
            <a>
              <img></img>
            </a>
            <a>
              <img></img>
            </a>
            <a>
              <img></img>
            </a>
          </div>
        </div>
      </div>
      <span className={style['contacts-position']}>Ми тут!</span>
    </div>
  );
};
export default Contacts;
