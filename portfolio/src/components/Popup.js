import React from 'react'
import '../scss/components/Popup.scss'


function Popup({ispopup}) {
    return (
    <>
         <div className="popup">
          <div className="todo-block">
            <div className="todo">
              <h3 className="todo__title">Задача</h3>
              <ul className="todo-list">
                <li className="todo__item">Разработать простой минималистичный дизайн, пользуясь референсами.</li>
                <li className="todo__item">Изучить основы стека технологий MERN.</li>
                <li className="todo__item">Попрактиковаться в использовании JavaScript библиотеки Redux для управления состояниями компонентов.</li>
                <li className="todo__item">Сделать работу для портфолио с понятной концепцией.</li>
              </ul>
            </div>
            <img src="/images/todo.png" alt="" className="todo__image" />
          </div>
          <div className="block first-block">
            <img src="/images/design.png" alt="" className="design__image" />
            <div className="first">
              <div className="title">
                <img src="/images/1.png" alt="" className="title__img" />
                <h2 className="block__title">Дизайн</h2>
              </div>
              <p className="block__text">
              За основу были взяты популярные <strong>международные</strong> интернет-магазины. А именно, <strong>ASOS и BeatyBay</strong>. Скромный функционал предполагаемого проекта требовал максимально <strong>простого</strong> дизайна, поэтому палитра стала <strong>черно-белой</strong>, а шрифтовая пара была подобрана следующая: <strong>Uni Sans Heavy CAPS и Archivo</strong>.
Вопрос <strong>анимации</strong> не стоял, в этой работе она не реализована.
              </p>
              <div className="link">
                <img src="/images/l-behance.svg" alt="" />
                <p className="link__text">
                Более подробно о дизайне этой работы, а также <strong>с другими кейсами</strong> по <strong>веб-дизайну</strong> можно ознакомиться на <strong>Behance →</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
                <li className="todo__item">Разработать простой минималистичный дизайн, пользуясь референсами.</li>
                <li className="todo__item">Изучить основы стека технологий MERN.</li>
              </ul>
            </div>
          </div>

          <div className="block left-block">
            <div className="">
              <div className="title">
                <img src="/images/2.png" alt="" className="title__img" />
                <h2 className="block__title">Backend</h2>
              </div>
              <p className="block__text">
              В этом пункте заложен весь смысл работы: <strong>ознакомиться</strong> с миром бекенда и научиться выполнять <strong>базовые вещи</strong>. Подключена база данных <strong>MongoDB</strong>, на <strong>Express JS</strong> написана серверная часть, отвечающая за get, create, delete, update товаров, а также их сортировка и фильтрация. Для сохранения <strong>корзины</strong> была реализована простейшая система аккаунтов. 
              </p>
            </div>
          </div>
          <div className="block right-block">
            <div className="">
              <div className="link">
                <img src="/images/l-github.svg" alt="" />
                <p className="link__text">
                <strong>Код</strong> проекта, а также другие <strong>мои работы</strong> можно найти на <strong>GitHub →</strong>
                </p>
              </div>
              <img src="/images/backend.png" alt="" className="block__img" />
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
                <li className="todo__item">Попрактиковаться в использовании JavaScript библиотеки Redux для управления состояниями компонентов.</li>
              </ul>
            </div>
          </div>

          <div className="block right-block">
            <div className="">
              <div className="title">
                <img src="/images/3.png" alt="" className="title__img" />
                <h2 className="block__title">Frontend</h2>
              </div>
              <p className="block__text">
              В этом пункте заложен весь смысл работы: <strong>ознакомиться</strong> с миром бекенда и научиться выполнять <strong>базовые вещи</strong>. Подключена база данных <strong>MongoDB</strong>, на <strong>Express JS</strong> написана серверная часть, отвечающая за get, create, delete, update товаров, а также их сортировка и фильтрация. Для сохранения <strong>корзины</strong> была реализована простейшая система аккаунтов. 
              </p>
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
                <li className="todo__item">Сделать работу для портфолио с понятной концепцией.</li>
              </ul>
            </div>
          </div>

          <div className="todo-block">
            <div className="todo">
              <h3 className="todo__title">Результат: <a href="/">проект</a> выложен на Heroku.</h3>
            </div>
            <img src="/images/todo2.png" alt="" className="todo__image" />
          </div>

        </div>

    </>
  )
}

export default Popup
