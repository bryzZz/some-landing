import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/1/1.png";
import Img2 from "assets/images/blogs/1/2.png";
import Img3 from "assets/images/blogs/1/3.png";

export const Post2: React.FC = () => {
  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Все о рекламе в Telegram Ads
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={Img3} />
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
            Согласно данным портала Inclient.ru, в 2022 году Telegram чаще всего
            загружали в Индии (70,48 млн), России (24,15 млн), США (20,03 млн),
            Индонезии (19,61 млн) и Бразилии (18,04 млн). Мессенджер популярен
            среди пользователей в России, Белоруссии, Украине, Казахстане и США.
            Кроме того, по итогам 2022 года аудитория Telegram выросла с 25,5
            млн до 48,8 млн пользователей.
          </p>
          <p className="BlogPost__text">
            «Сейчас Telegram уступает только WhatsApp, и с каждым годом разрыв
            сокращается. Неудивительно, что наши конкуренты обеспокоены», —
            отметил Дуров.
          </p>
          <p className="BlogPost__text">
            Запуск первой официальной рекламы превратил Telegram в одну из самых
            перспективных платформ для маркетинга на ближайшее время. Давайте
            разберемся как она работает.
          </p>
          <p className="BlogPost__text">
            <a target="_blank" href="https://promote.telegram.org/">
              Telegram Ads
            </a>{" "}
            — это рекламный кабинет для настройки таргетированной рекламы в
            публичных каналах мессенджера. Реклама показывается во всех открытых
            каналах с аудиторией более 1 000 подписчиков. Чтобы запустить
            рекламу, нужно написать текст объявления, задать ставку и выбрать
            целевую аудиторию.
          </p>

          <p className="BlogPost__text">
            Объявление должно состоять из заголовка, текста и кнопки:
          </p>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Заголовок — название канала с активной ссылкой на него.
            </li>
            <li className="BlogPost__ordered-list-item">
              Текст может быть длиной до 160 символов.
            </li>
            <li className="BlogPost__ordered-list-item">
              Кнопка может вести на канал, в бот или на сообщение в канале.
              него.
            </li>
          </ul>
          <p className="BlogPost__text">
            Картинки, гифки и видео прикреплять нельзя, но можно использовать в
            объявлениях эмодзи
          </p>

          <a data-fancybox="gallery" href={Img1}>
            <img className="BlogPost__img" src={Img1} />
          </a>

          <h2 className="BlogPost__title-2">Как устроена реклама </h2>
          <p className="BlogPost__text">
            Telegram Ads предлагает уникальную модель оплаты рекламы - CPM
            (стоимость за 1000 показов). Вам нужно указать свою ставку, то есть
            цену, которую вы готовы заплатить за 1000 показов. Минимальная
            ставка составляет всего 2 евро.
          </p>
          <p className="BlogPost__text">
            Для определения показов используется автоматический аукцион первой
            цены, что означает, что вы соревнуетесь за показы своих объявлений.
            Чем выше ваша ставка, тем больше вероятность, что ваше объявление
            будет показано.
          </p>
          <p className="BlogPost__text">
            Вам предоставляется возможность выбора мест размещения объявлений -
            автоматически или вручную. Вы также можете настроить таргетинг на
            подписчиков своего собственного канала или на основе интересов
            пользователей. Также есть возможность указать исключения - темы или
            каналы, в которых вы не хотите показывать рекламу. Вот как работает
            таргетинг:
          </p>
          <p className="BlogPost__text">
            - При автоматической настройке вы выбираете тему, такую как
            путешествия, технологии или маркетинг, а площадка самостоятельно
            подбирает каналы для размещения вашего объявления. Вы не можете
            просматривать список каналов на самой площадке.
          </p>
          <p className="BlogPost__text">
            - При ручной настройке вы можете выбрать конкретные каналы, в
            которых хотите размещать объявление, указав ссылки на них. Вы можете
            указать до 100 каналов для одного объявления с учетом исключений.
          </p>
          <p className="BlogPost__text">
            - При использовании таргетинга по интересам пользователей вы можете
            задать страну, регион или город, а также указать сами интересы.
            Платформа определяет интересы пользователей на основе их подписок.
          </p>

          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <h2 className="BlogPost__title-2">Что нельзя рекламировать</h2>
          <p className="BlogPost__text">Есть несколько запрещенных тем:</p>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">Политика.</li>
            <li className="BlogPost__ordered-list-item">
              Азартные игры и казино.
            </li>
            <li className="BlogPost__ordered-list-item">
              Вредные финансовые продукты и услуги: микрокредиты, финансовые
              пирамиды и так далее.
            </li>
            <li className="BlogPost__ordered-list-item">
              Медицинские услуги, БАДы и лекарства.
            </li>
            <li className="BlogPost__ordered-list-item">
              Наркотики, табак, алкоголь.
            </li>
            <li className="BlogPost__ordered-list-item">
              Сети быстрого питания и фастфуд.
            </li>
            <li className="BlogPost__ordered-list-item">
              Оружие, боеприпасы, взрывчатые вещества.
            </li>
            <li className="BlogPost__ordered-list-item">
              Вредоносное ПО: спам и программы для взлома.
            </li>
            <li className="BlogPost__ordered-list-item">
              Плагиат и распространение материалов, защищенных авторским правом.
            </li>
            <li className="BlogPost__ordered-list-item">
              Кликбейт или реклама, вводящая в заблуждение.
            </li>
            <li className="BlogPost__ordered-list-item">
              Шокирующий или сексуальный контент.
            </li>
            <li className="BlogPost__ordered-list-item">
              Ненависть, насилие, дискриминация.
            </li>
          </ol>

          <p className="BlogPost__text">
            Подробнее о запретах на рекламу с примерами читайте в{" "}
            <a target="_blank" href="https://promote.telegram.org/guidelines">
              справке Telegram
            </a>
            .
          </p>

          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>

          <h2 className="BlogPost__title-2">
            Последние обновления Telegram Ads
          </h2>
          <p className="BlogPost__text">
            <b>1. Отдельное поле для URL-адресов:</b> Для запуска рекламы
            напрямую на сайт теперь появилось отдельное поле — для URL-адресов.
            Кроме того, вы можете добавить UTM-метки и ERid для более точной
            маркировки рекламы.
          </p>
          <p className="BlogPost__text">
            <b>2. Дополнительное поле для заголовка:</b> Если вы рекламируете
            сторонний сайт, то увидите доп. поле для ввода заголовка. Это дает
            вам дополнительные 40 символов текста, чтобы сделать ваше объявление
            более заметным.
          </p>
          <p className="BlogPost__text">
            <b>3. Гибкость ссылок:</b> Теперь можно вставить ссылку в кнопку или
            оставить ее в тексте объявления. Если ссылка остается в тексте, вы
            можете сократить ее по размеру. Обратите внимание, что ссылки в
            тексте и кнопке должны совпадать
          </p>
          <p className="BlogPost__text">
            <b>4. Новые данные в рекламном кабинете:</b> С помощью обновления
            Telegram Ads, вы можете увидеть дополнительную информацию о вашей
            рекламной кампании. Количество кликов, CPC и CTR - все это есть в
            вашем кабинете.
          </p>
          <p className="BlogPost__text">
            Все эти обновления делают Telegram Ads еще более мощным инструментом
            для достижения вашей аудитории и эффективного управления рекламными
            кампаниями.
          </p>
        </div>
      </div>
    </>
  );
};
