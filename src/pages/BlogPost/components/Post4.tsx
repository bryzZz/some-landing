import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/3/1.png";
import Img2 from "assets/images/blogs/3/2.jpeg";
import Img3 from "assets/images/blogs/3/3.png";
import Img4 from "assets/images/blogs/3/4.png";

export const Post4: React.FC = () => {
  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Сервисы для создания рекламных креативов на телефоне
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={Img1} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {["Gambling", "Схемы"].map((tag) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              November 16, 2023
            </span>
          </div>

          <p className="BlogPost__text">
            Хорошо сделанный креатив - залог успешного залива трафика. И если ты
            не хочешь нанимать дизайнера, то можешь сделать сам дизайн на
            телефоне. В этой статье мы сделали подборку из 10 приложений, в
            которых у тебя точно получится сделать годный креатив.
          </p>

          <h2 className="BlogPost__title-2">
            6 сервисов для создания фото креативов на телефоне
          </h2>

          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              <b>GoDaddy.</b> Здесь удобно создавать уникальные заставки для
              социальных сетей, таких как посты, истории, обложки и многое
              другое. Есть возможность создания видео-постов, видео-историй и
              других анимированных макетов. Можно работать со слоями.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Picsart.</b> В бесплатной версии этого приложения есть всё
              необходимое для обработки — от простых и удобных инструментов до
              функций на базе искусственного интеллекта. Здесь удобно смешивать
              несколько картинок путем наложения.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Canva.</b> Даже если вы не профессиональный дизайнер, вы с
              легкостью сможете сделать статичный рекламный креатив за 10 минут
              в Canva. Просто воспользуйтесь уже имеющимися шаблонами и
              подгоните под себя.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Leto.</b> Если вы не нашли нужный вам шрифт в других
              приложениях, то точно найдете его здесь. Здесь есть более 500
              цветных и каллиграфических шрифтов, 4000+ трендовых стикеров и
              более 1000 фонов.
            </li>
            <p className="BlogPost__text">
              Кстати, большинство шрифтов включают обширную языковую поддержку.
              Для кириллицы языковая поддержка в русском, белорусском,
              украинском, болгарском и казахском языках.
            </p>
            <p className="BlogPost__text">
              Для Западной Европы, Центральной и Юго-Восточной Европы:
              албанский, боснийский, каталанский, датский, голландский,
              английский, эстонский, фарерский, филиппинский, финский,
              французский, галисийский, индонезийский, ирландский, итальянский,
              малайский, португальский, словенский, испанский, шведский,
              турецкий, валлийский.
            </p>
            <li className="BlogPost__ordered-list-item">
              <b>Bazaart.</b> Идеальное приложение для создания фотоколлажей.
              Здесь с легкостью можно вырезать объекты, убирать задний фон и
              лишние предметы.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Retouch.</b> Это единственное платное приложение из этого
              списка. В нем можно незаметно удалить лишние предметы, а также
              клонировать уже имеющиеся.
            </li>
          </ol>

          <h2 className="BlogPost__title-2">
            4 приложения для создания видео креативов на телефоне
          </h2>

          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>

          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              <b>CapCut.</b> Самое лучшее приложение для создания
              видео-креативов. Благодаря простой в использовании функции вам не
              нужно обладать обширными знаниями в области редактирования видео.
            </li>

            <p className="BlogPost__text">
              Из преимуществ:
              <ul className="BlogPost__unordered-list">
                <li className="BlogPost__unordered-list-item ml-5">
                  простой интерфейс;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  много переходов;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  обрезка и кадрирование;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  инструменты для масштабирования;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  эффекты для цветокоррекции;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  фильтры и темы;
                </li>
                <li className="BlogPost__unordered-list-item ml-5">
                  наложение титр.
                </li>
              </ul>
            </p>
            <li className="BlogPost__ordered-list-item">
              <b>Inshot.</b> Удобное приложение для быстрого монтажа видео:
              обрезка и удаление части видео, разделение и объединение роликов,
              настройка скорости. Доступны различные фильтры и эффекты, можно
              наложить музыку или, наоборот, убрать звуковое сопровождение.
              Также можно добавлять стикеры и текст.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Prequel.</b> В этой программе представлен широкий выбор
              фильтров с предварительным просмотром. Каждый снимок можно
              украсить, поместив на передний план всяческие визуальные объекты с
              прозрачным фоном. Фото можно преобразовать в короткое видео,
              наложив фоном звуковое сопровождение.
            </li>
            <li className="BlogPost__ordered-list-item">
              <b>Instories.</b> Внутри приложения Instories вы найдете 25+
              коллекций шаблонов и 300+ макетов для создания анимированных
              роликов.
            </li>
          </ol>

          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>
        </div>
      </div>
    </>
  );
};
