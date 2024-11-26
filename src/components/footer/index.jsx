import React from "react";
import style from "./footer.module.scss";
import logo from "../img/Logo.svg";
import apple from "../img/apple.svg";
import play from "../img/playMarket.svg";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_left}>
          <div className={style.logo__img}>
            <img src={logo} alt="" />
            <div className={style.sosial}>
              <img src={apple} alt="" />
              <img src={play} alt="" />
            </div>
          </div>
          <div className={style.footer__link}>
            <p>Компания</p>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
            <a href="#">Партнерская программа</a>
            <a href="#">Сообщить о мошенничестве</a>
          </div>

          <div className={style.footer__link}>
            <p>СЛУЖБА ПОДДЕРЖКИ</p>
            <a href="#">Служба поддержки</a>
            <a href="#">Предложить продукт</a>
            <a href="#">Статус заказа</a>
            <a href="#">Доставка</a>
          </div>

          <div className={style.footer__link}>
            <p>Продавцам и партнёрам</p>
            <a href="#">Доставлять заказы</a>
            <a href="#">Открыть пункт выдачи</a>
            <a href="#">Предложить помещение</a>
            <a href="#">Стать партнером MyTab</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
