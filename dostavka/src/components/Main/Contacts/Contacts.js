import style from './Contacts.module.css';
import Button from '../../UI/Button';
import Facebook from '../../../assets/svg/facebook.svg';
import Youtube from '../../../assets/svg/video_play_button.svg';
import Instagram from '../../../assets/svg/instagram.svg';
const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style['contacts-content']}>
        <h2 className={style['contacts-content__title']}>Контакти</h2>
        <div className={style['contacts-content__description']}>
          <p className={style['contacts-content__adress']}>
            <span className={style['contacts-content__info']}>
              Наша адреса:
            </span>
            Місто Київ, Оболонський район, село Ільїнке, вулиця
            Експериментальна, 10.
          </p>
          <p className={style['contacts-content__mail']}>
            <span className={style['contacts-content__info']}>Наша почта:</span>
            cergi8273@gmail.com
          </p>
        </div>
        <div className={style['contacts-reservation']}>
          <Button>Забронювати столик</Button>
          <p className={style['contacts-reservation__info']}>
            <span className={style['contacts-reservation__number']}>
              +38 (097) 566-23-50З
            </span>
            Звоніть або залишайте заявку
          </p>
          <div className={style['contacts-social']}>
            <span className={style['contacts-social__info']}>
              Ми в соц-мережах
            </span>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={Facebook} alt="facebook"></img>
            </a>
            <a
              href="https://www.youtube.com/watch?v=VSw07DYxiMo&ab_channel=SergeiSamus"
              target="_blank"
            >
              <img src={Youtube} alt="youtube"></img>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Instagram} alt="instagram"></img>
            </a>
          </div>
        </div>
      </div>
      <span className={style['contacts-position']}>Ми тут!</span>
    </div>
  );
};
export default Contacts;
