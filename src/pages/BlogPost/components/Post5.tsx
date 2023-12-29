import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/4/1.jpg";
import Img2 from "assets/images/blogs/4/2.png";
import Img3 from "assets/images/blogs/4/3.png";
import Img4 from "assets/images/blogs/4/4.png";
import Img5 from "assets/images/blogs/4/5.png";
import Img6 from "assets/images/blogs/4/6.png";
import Img7 from "assets/images/blogs/4/7.png";
import Img8 from "assets/images/blogs/4/8.png";

export const Post5: React.FC = () => {
  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Кейс: Гемблинг на Колумбию с ROI 150%
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <p className="BlogPost__text">
            Лить гемблинг через Facebook с каждым днем становится только
            сложнее: показатель ROI падает, появляются частые штормы, а гемблинг
            приложения живут не очень долго. Что же тогда делать? Выход есть и
            называется он "Influence трафик"
          </p>

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
            Инфлюенс трафик, частности, на Латам, выгоден из-за дешевого трафика
            и к тому же лиды заинтересованы в заработке денег.
          </p>
          <p className="BlogPost__text">
            Что, по нашему мнению, необходимо знать, если вы ранее не работали с
            таким трафиком:
          </p>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Для хорошего конверта по бурж аудитории потребуется человек со
              знанием языка гео, либо уметь правильно использовать переводчик;
            </li>
            <li className="BlogPost__ordered-list-item">
              Нужно уметь правильно рассчитывать итоговую прибыль, не считать
              цифры в моменте, а в долгосроке;
            </li>
            <li className="BlogPost__ordered-list-item">
              Требуется завести дружеские отношения с личным менеджером и
              обращаться к нему с любым возникшим вопросом.
            </li>
            <li className="BlogPost__ordered-list-item">
              Уметь работать с возражениями и не бояться вливать больше трафика.
            </li>
          </ul>

          <p className="BlogPost__text">
            Моя команда работает с <b>Leadshub</b> и с инфлюенс сорсом уже на
            протяжении нескольких лет и ответственно заверяет, что этот вид
            трафика всегда давал высокие показатели и является самым стабильным
            по объемам.
          </p>

          <p className="BlogPost__text">
            Многие соло арбитражники начали привлекать трафик в эту вертикаль,
            так как вход существенно ниже чем в нишу крипты или нутры.
          </p>

          <h2 className="BlogPost__title-2">
            Перейдем к самому кейсу и цифрам:
          </h2>
          <p className="BlogPost__text">
            Это будет обычный кейс по инфлюенс трафику, с кратким мануалом по
            общению с целевой аудиторией и прозрачной статистикой за период
            пролива.
          </p>
          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <p className="BlogPost__text">Немного цифр:</p>
          <p className="BlogPost__text">Стоимость подписчика: 0,7-0,8$;</p>
          <p className="BlogPost__text">
            Выплата за лид: 45$ и 60$, в зависимости от бюджета нашего лида;
          </p>
          <p className="BlogPost__text">
            Conversion: sms2reg - 1к8, reg2dep - 1к2;
          </p>
          <p className="BlogPost__text">Расходы: $. Из них:</p>

          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Траты на трафик: $3420;
            </li>
            <li className="BlogPost__ordered-list-item">Акки фейсбук: $30;</li>
            <li className="BlogPost__ordered-list-item">
              Оплата услуг обработчиков: $750
            </li>
          </ul>

          <p className="BlogPost__text">Доход: $10660</p>
          <p className="BlogPost__text">ROI: ~153%</p>
          <p className="BlogPost__text">
            Спенд дейли 150-200$, трафик лился непрерывно на промежутке времени.
            Не забываем, что помимо нового трафика, нам пишут старые подписчики
            поэтому надо всегда смотреть в долгосрок. Поэтому рекомендуем 1
            неделю в месяц заливать трафика на несколько тысяч чтобы собрать
            базу.
          </p>
          <p className="BlogPost__text">Переходим к кейсу.</p>
          <p className="BlogPost__text">
            Чтобы начать работу, нам будет необходимо:
          </p>

          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Телеграм канал от 10 тыс. подписчиков и постами возрастом от 1
              месяца;
            </li>
            <li className="BlogPost__ordered-list-item">
              Навыки в настройке таргетированной рекламы фейсбука;
            </li>
            <li className="BlogPost__ordered-list-item">
              ФП (фанпейдж), с которого будет расшарен доступ для рекламных
              аккаунтов;
            </li>
            <li className="BlogPost__ordered-list-item">
              Начальный уровень Испанского языка и умение работать с
              переводчиками. Дело в том, что жители Латама общаются на Испанском
              языке.
            </li>
          </ul>

          <p className="BlogPost__text">
            Касаемо оффера, использовали Vulcan Vegas и Vulcan Bet с разными
            ставками для захвата всех аудиторий.
          </p>

          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>

          <p className="BlogPost__text">
            Это была теоретическая часть, приступим к практике.
          </p>
          <p className="BlogPost__text">Ниже пример канала👇🏻</p>

          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>

          <p className="BlogPost__text">
            Обязательно крутим подписчиков и просмотры на посты для большего
            траста.
          </p>
          <p className="BlogPost__text">Ниже пример креатива:</p>

          <a data-fancybox="gallery" href={Img5}>
            <img className="BlogPost__img" src={Img5} />
          </a>

          <p className="BlogPost__text">
            Не забываем менять креативы каждый месяц, суммы и фон обязательно.
            Креатив максимально простой и не банится в отличии от жестких на
            прилах.
          </p>
          <p className="BlogPost__text">
            В самой обработке новых подходов нет, все идет через личное общение
            с обработчиком.
          </p>

          <a data-fancybox="gallery" href={Img6}>
            <img className="BlogPost__img" src={Img6} />
          </a>
          <a data-fancybox="gallery" href={Img7}>
            <img className="BlogPost__img" src={Img7} />
          </a>
          <a data-fancybox="gallery" href={Img8}>
            <img className="BlogPost__img" src={Img8} />
          </a>

          <p className="BlogPost__text">
            Пример скрипта, можете использовать для своих проектов
          </p>
          <p className="BlogPost__text">
            Использовались алгоритмы с хорошим первым депозитом (20-30$), упор
            делался на быструю обработку.
          </p>
          <p className="BlogPost__text">
            Средний депозит игроков по этой связке $80, капу подняли и
            предложили повышение ставки.
          </p>
          <p className="BlogPost__text">
            В конце могу сказать, что инфлюенс максимально актуален в данный
            момент, к тому же менеджер Leadhub помог подобрать лучший оффер с
            рабочими платежками, что является частой проблемой. Всем удачи и
            больших профитов ✌🏻
          </p>
        </div>
      </div>
    </>
  );
};
