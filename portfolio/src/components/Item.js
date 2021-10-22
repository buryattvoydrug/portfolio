import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../scss/components/Item.scss'
import '../scss/components/Popup.scss'
import Popup from './Popup'

export default function Item({size,number}) {
  const [show, setShow] = useState(false)
  // setTimeout(()=>setShow(true),500)
  let item=document.getElementsByClassName('portfolio__title')[0]
  // if(item){
  //   console.log(item.getBoundingClientRect())
  // }
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
    
  };
  let heightCard=430
  let heightTitle=800
  if(window.innerWidth<768){
    heightCard=360
    heightTitle=550

  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if(item && item.getBoundingClientRect().bottom<=heightTitle-(heightCard*(number))){
      // console.log(item.getBoundingClientRect().bottom)
      setShow(true)
    }
    if(item && item.getBoundingClientRect().bottom>heightTitle-(heightCard*number)){
      setShow(false)
    }
  })

  const [popup,setPopup]=useState(false)
  const togglePopup=()=>{
    setPopup(!popup);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  return (
    <>
    <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="port"
                  unmountOnExit>
      <div className={"item"+' '+size}>
      <CSSTransition
                in={popup}
                timeout={1000}
                classNames="popup"
                unmountOnExit>
                <div className="popup-wrapper">
                  <div className="close" onClick={togglePopup}>
                    <img src="/images/CLOSE.png" alt=""/>
                  </div>
                  <Popup/>
                </div>
      </CSSTransition>
        <div className="item-block">
          <span className="item__type">Работа <br />для портфолио</span>
          <h3 className="item__title">Промо-сайт Audi</h3>
          <p className="item__text">Реализована <strong>базовая</strong> функциональность интернет магазина: вывод <strong>товаров</strong> по категориям и сортировка, корзина, система аккаунтов <strong>для сохранения корзины</strong>.</p>
          <ul className="item-list">
            <li>MERN stack</li>
            <li>Дизайн</li>
          </ul>
          <button className="item__button" onClick={togglePopup}>Подробнее</button>
        </div>
        {size==="large" && 
          <img src="/images/type1.png" alt="" className="item__img" />
        }
        {size==="medium" && 
          <img src="/images/type2.png" alt="" className="item__img" />
        }
        {size==="small" && 
          <img src="/images/type3.png" alt="" className="item__img" />
        }
      </div>
      </CSSTransition>
    </>
  )
}
