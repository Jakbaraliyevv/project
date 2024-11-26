import React from "react";
import { useState } from "react";
import style from "./korzina.module.scss";
import bonka from "../img/bonka.png";
import bonka2 from "../img/bonka2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay } from "@fortawesome/free-solid-svg-icons";

function Korzina() {
  return (
    <div className={style.korzina}>
      <div className="container">
        <div className={style.korzina__top}>
          <h4>
            Главная <span>• Корзина</span>
          </h4>
          <h1>Корзина</h1>
        </div>
        <div className={style.korzina__bottom}>
          <div className={style.korzina__bottom__left}>
            <div className={style.left__top}>
              <h3>Добавленные товары</h3>
            </div>
            <div className={style.left__middle}>
              <div className={style.check__boladi}>
                <label className={style.label1} htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  California Gold Nutrition
                </label>

                <button>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>

              <div className={style.summ_card}>
                <div className={style.middle__left}>
                  <img src={bonka} alt="" />
                  <div className={style.check}>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className={style.middle__right}>
                  <div className={style.middle__text}>
                    <h3>
                      California Gold Nutrition <br /> Gold C, 1000 мг
                    </h3>
                    <button>
                      <FontAwesomeIcon icon={faXmark} className={style.xmark} />
                    </button>
                  </div>
                  <div className={style.middle__mark}>
                    <h3>33 860 сум</h3>
                    <div className={style.plusMinus}>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.summ_card}>
                <div className={style.middle__left}>
                  <img src={bonka} alt="" />
                  <div className={style.check}>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className={style.middle__right}>
                  <div className={style.middle__text}>
                    <h3>
                      Bioactive Complete, <br />
                      B-complex, 60 capsulesг
                    </h3>
                    <button>
                      <FontAwesomeIcon icon={faXmark} className={style.xmark} />
                    </button>
                  </div>
                  <div className={style.middle__mark}>
                    <h3>33 860 сум</h3>
                    <div className={style.plusMinus}>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={(style.left__middle, style.middle2)}>
              <div className={style.check__boladi2}>
                <label className={style.label2} htmlFor="checkbox2">
                  <input type="checkbox" id="checkbox2" />
                  Life extension
                </label>

                <button>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>

              <div className={style.summ_card}>
                <div className={style.middle__left}>
                  <img src={bonka2} alt="" />
                  <div className={style.check}>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className={style.middle__right}>
                  <div className={style.middle__text}>
                    <h3>
                      California Gold <br />
                      Nutrition Gold C, 1000 мг
                    </h3>
                    <button>
                      <FontAwesomeIcon icon={faXmark} className={style.xmark} />
                    </button>
                  </div>
                  <div className={style.middle__mark}>
                    <h3>33 860 сум</h3>
                    <div className={style.plusMinus}>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.korzina__bottom__right}>
            <div className={style.zakaz1}>
              <h3>Детали заказа</h3>
            </div>
            <div className={style.zakaz2}>
              <p>Промокод</p>
              <div className={style.Применить}>
                <input type="text" placeholder="Введите промокод" />
                <button type="submit">Применить</button>
              </div>
            </div>
            <div className={style.zakaz3}>
              <div className={style.zakaz_sum}>
                <p>Предваритьельная стоимость</p>
                <h4>67 720 сум</h4>
              </div>
              <div className={style.zakaz_sum}>
                <p>Услуги сервиса</p>
                <h4>7 000 сум</h4>
              </div>
              <div className={style.zakaz_sum}>
                <p>Доставка</p>
                <h4>20 000 сум</h4>
              </div>
              <div className={style.zakaz_sum}>
                <p>Скидки по промокоду</p>
                <h4>-20 000 сум</h4>
              </div>
            </div>
            <div className={style.zakaz4}>
              <div className={style.Итого}>
                <h4 className={style.h4}> Итого</h4>
                <h4>74 720 сум</h4>
              </div>
              <button type="submit">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korzina;
