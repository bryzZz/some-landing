import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/0/1.jpg";
import Img2 from "assets/images/blogs/0/2.png";
import Img3 from "assets/images/blogs/0/3.png";
import Img4 from "assets/images/blogs/0/4.png";
import Img5 from "assets/images/blogs/0/5.png";
import Img6 from "assets/images/blogs/0/6.jpg";

export const Post1: React.FC = () => {
  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Актуальные подходы и связки при работе с Инфлюенс трафиком
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
            Актуальные подходы в инфлюенс-трафике дают возможность эффективно
            продвигать гемблинг через различные социальные платформы, включая
            Facebook. Сейчас покажем самые актуальные и новые методы:
          </p>

          <h2 className="BlogPost__title-2">
            В работе мы используем 3 основных подхода:
          </h2>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">Новостной</li>
            <li className="BlogPost__ordered-list-item">Банки</li>
            <li className="BlogPost__ordered-list-item">"Женский"</li>
          </ol>

          <h2 className="BlogPost__title-2">Разберем каждый по порядку:</h2>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Один из ключевых аспектов успешного гемблинга - привлечение новых
              игроков. Новости - это способ привлечения внимания пользователей и
              вызвать их интерес к платформе. Новости предлагают дополнительное
              содержание для существующих игроков, что помогает удерживать их
              внимание и поддерживать интерес к игровой платформе. Поэтому
              новостной подход в гемблинге - это эффективный способ привлечения,
              удержания и мотивации игроков.
            </li>
            <a data-fancybox="gallery" href={Img2}>
              <img className="BlogPost__img" src={Img2} />
            </a>
            <li className="BlogPost__ordered-list-item">
              Банки - это подход взявший свою основу из креативов на прилки,
              максимально простой и лайтовый подход, к тому же показывает
              стабильный результат. Мы используем зачастую смс от банка в
              мобильном приложении или на заставке телефона. Примеры наших крео
              также предоставим ниже
            </li>
            <a data-fancybox="gallery" href={Img3}>
              <img className="BlogPost__img max-h-[690px]" src={Img3} />
            </a>
            <li className="BlogPost__ordered-list-item">
              Женский подход относительно новый по отношению к
              вышеперечисленным, и до сих пор показывает отличный результат со
              старта. Суть подхода в том, что мы используем инфлюенсера девушку
              или маму ребенком. Этот подход имеет лучший конверт тк не заезжен
              и не выгорел, проверьте и результат не заставит себя ждать.
            </li>
            <a data-fancybox="gallery" href={Img4}>
              <img className="BlogPost__img max-h-[690px]" src={Img4} />
            </a>
          </ul>

          <h2 className="BlogPost__title-2">
            Немного статистики с этими подходами:
          </h2>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">Смс - 0.5-0.7$</li>
            <li className="BlogPost__ordered-list-item">
              Лучший показатель рег2деп на женском подходе
            </li>
            <li className="BlogPost__ordered-list-item">Стр 1-3%</li>
            <li className="BlogPost__ordered-list-item">
              Рои 100-250% (зависит от недели и донора)
            </li>
            <li className="BlogPost__ordered-list-item">
              Офферы с которыми работали: Playzee, Ice casino.
            </li>
            <li className="BlogPost__ordered-list-item">
              Выплата за депозит - 40-55$
            </li>
          </ol>

          <a data-fancybox="gallery" href={Img5}>
            <img className="BlogPost__img max-h-[690px]" src={Img5} />
          </a>

          <p className="BlogPost__text">
            Статистика за 15 дней пролива со средним спендом 100$, ГЕО Перу
            (инст/тг)
          </p>
          <p className="BlogPost__text">
            Пример нашего инстаграма выше, аккаунт активный.
          </p>

          <a data-fancybox="gallery" href={Img6}>
            <img className="BlogPost__img max-h-[690px]" src={Img6} />
          </a>

          <h2 className="BlogPost__title-2">Вывод:</h2>
          <p className="BlogPost__text">
            Инфлюенс в гемблинге - это эффективный способ привлечения, удержания
            и мотивации игроков. Использование инфлюенс трафика помогает
            увеличить видимость гемблинг-платформы, привлечь новых игроков и
            улучшить показатель ROI. Сотрудничество с инфлюенсерами позволяет
            достичь целевой аудитории, которая имеет интерес к гемблингу или
            связанным темам, что способствует повышению конверсии и росту
            доходов.
          </p>
        </div>
      </div>
    </>
  );
};
