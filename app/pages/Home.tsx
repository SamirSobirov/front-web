import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div data-rsssl="1" id="panel" data-spy="scroll" data-target="#navbar">
      <div id="slider">
        <div className="container-fluid no-margin">
          <div
            id="carousel-1"
            className="carousel slide carousel-fade"
            data-ride="carousel"
            data-interval="5000"
          >
            <ol className="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0" className=""></li>
              <li data-target="#carousel-1" data-slide-to="1" className=""></li>
              <li data-target="#carousel-1" data-slide-to="2" className="elem"></li>
              <li data-target="#carousel-1" data-slide-to="3" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              
            </div>
            <img
              src="https://devio.uz/wp-content/themes/devio/images/mouse.png"
              alt="Scroll down"
              title="Scroll down"
              className="scroll hidden-xs"
            />
          </div>
        </div>
      </div>

      <header className="navbar navbar-fixed-top" id="top" style={{ background: 'none' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9 menu">
              <nav className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                  <li><a href="#">Услуги</a></li>
                  <li><a href="#">Плюсы</a></li>
                  <li><a href="#">Портфолио</a></li>
                  <li><a href="#">Цены на сайты</a></li>
                  <li><a href="#contacts">Контакты</a></li>
                </ul>
                <div className="navbar-right">
                  <p className="navbar-text hidden-sm hidden-xs">+998 (90) 505 90 05</p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container greeting">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-black font-bold'>
              Создай сайт для своего бизнеса.<small></small>
            </h1>
          </div>
          <div className="col-md-6 online_request_block">
            <form
              className="online_request formRequest bg-[#2630b969]"
              method="post"
              name="myform"
              autoComplete="off"
            >
              <span >Онлайн заявка</span>
              <h6 className="reuqest_title text-red-600">
                Оставьте свою заявку он-лайн и получите до 10% скидки
              </h6>
              <div className="form_elems">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Ваше имя"
                  className="input_reuqest fullname"
                  autoComplete="off"
                  required
                />
                <input
                  type="tel"
                  name="userphone"
                  placeholder="Номер телефона:"
                  className="input_reuqest userphone"
                  autoComplete="off"
                  required
                />
                <select name="region" className="input_reuqest region">
                  <option value="" disabled selected>
                    Регион
                  </option>
                  <option value="Андижанская обл.">Андижанская обл.</option>
                  <option value="Бухарская обл.">Бухарская обл.</option>
                  <option value="Джизакская обл.">Джизакская обл.</option>
                  <option value="Каракалпакия">Каракалпакия</option>
                  <option value="Кашкадарьинская обл.">Кашкадарьинская обл.</option>
                  <option value="Навоийская обл.">Навоийская обл.</option>
                  <option value="Наманганская обл.">Наманганская обл.</option>
                  <option value="Самаркандская обл.">Самаркандская обл.</option>
                  <option value="Сурхандарьинская обл.">Сурхандарьинская обл.</option>
                  <option value="Сырдарьинская обл.">Сырдарьинская обл.</option>
                  <option value="Ташкент">Ташкент</option>
                  <option value="Ташкентская обл.">Ташкентская обл.</option>
                  <option value="Ферганская обл.">Ферганская обл.</option>
                  <option value="Хорезмская обл.">Хорезмская обл.</option>
                </select>
                <button type="submit" className="btn_green">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add Services component here */}
      
    </div>
  );
};

export default HomePage;