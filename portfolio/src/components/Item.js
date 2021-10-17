import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../scss/components/Item.scss'
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if(item && item.getBoundingClientRect().bottom<=550-(430*(number))){
      setShow(true)
    }
    // console.log(300-(100*number))
    if(item && item.getBoundingClientRect().bottom>550-(430*number)){
      setShow(false)
    }
  })
  return (
    <>
    <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="trans"
                  unmountOnExit>
      <div className={"item"+' '+size}>
        <div className="item-block">
          <span className="item__type">Работа <br />для портфолио</span>
          <h3 className="item__title">Промо-сайт Audi</h3>
          <p className="item__text">Реализована <strong>базовая</strong> функциональность интернет магазина: вывод <strong>товаров</strong> по категориям и сортировка, корзина, система аккаунтов <strong>для сохранения корзины</strong>.</p>
          <ul className="item-list">
            <li>MERN stack</li>
            <li>Дизайн</li>
          </ul>
          <button className="item__button">Подробнее</button>
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
