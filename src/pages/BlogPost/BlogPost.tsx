import React from "react";

import { Recent } from "../Blog/components";

import { ReactComponent as Calendar } from "assets/icons/calendar.svg";
import ImgMain from "assets/images/Blog.jpg";
import Img1 from "assets/images/BlogPost-img-1.jpg";
import Img2 from "assets/images/BlogPost-img-2.jpg";
import Img3 from "assets/images/BlogPost-img-3.jpg";
import Img4 from "assets/images/BlogPost-img-4.png";
import Img5 from "assets/images/BlogPost-img-5.png";
import Img6 from "assets/images/BlogPost-img-6.jpg";
import Img7 from "assets/images/BlogPost-img-7.png";

import RecentImage1 from "assets/images/recent-post-1.jpg";
import RecentImage2 from "assets/images/recent-post-2.jpg";
import RecentImage3 from "assets/images/recent-post-3.jpg";

import "./style.css";
import { RecentPost } from "types";

const recentPosts: RecentPost[] = [
  {
    image: RecentImage1,
    title: "Health and fitness",
    date: "20 мая 2022",
    link: "0",
  },
  {
    image: RecentImage2,
    title: "Geography and places",
    date: "20 мая 2022",
    link: "0",
  },
  {
    image: RecentImage3,
    title: "Philosophy and thinking",
    date: "20 мая 2022",
    link: "0",
  },
];

export const BlogPost: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1211px] px-4">
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Кейс на Индию с ROI ~400%
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={ImgMain} />
          <span className="BlogPost__date">
            <Calendar />
            20 мая 2022
          </span>
          <div className="BlogPost__tags">
            {["Gambling", "Схемы", "Nutra"].map((tag) => (
              <p key={tag} className="BlogPost__tag">
                {tag}
              </p>
            ))}
          </div>
          <p className="BlogPost__text">
            Все меньше и меньше приложений живут в текущих реалиях на рынке
            Facebook. Удержать ROI с каждым днем все труднее, а запустить
            аккаунт на прилку становится не простой задачей.
          </p>
          <p className="BlogPost__text">
            Схемный трафик - это отличная альтернатива для тех, кто когда-либо
            работал с приложениями, тем более на таком гео, как Индия, где цены
            за клик минимальные.
          </p>
          <h2 className="BlogPost__title-2">
            Что нужно усвоить, если у вас нет опыта в схемах:
          </h2>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              Вы не сможете лить схемы в соло! - Да, большинство веб-мастеров
              делает это в соло, но имеет микропрофит и 1-2 лида дейли.
            </li>
            <li className="BlogPost__ordered-list-item">
              Если вы хотите зарабатывать по настоящему, вам потребуется
              обработчик с хорошим знанием английского либо человек, который
              хорошо пользуется переводчиком.
            </li>
            <li className="BlogPost__ordered-list-item">
              Знать все свои касты и правильно рассчитывать итоговый профит.
            </li>
            <li className="BlogPost__ordered-list-item">
              Доверять своему аффилейту, спрашивать по любому поводу и говорить
              о любых неприятностях.
            </li>
          </ol>
          <p className="BlogPost__text-highlighted">
            Наш медиа-баинг работает уже около года в направлении схем, и мы
            можем четко заверить, что схемный трафик всегда был и остается по
            сей день самым стабильным по объёму и качеству.
          </p>
          <p className="BlogPost__text">
            Многие рекламодатели относятся скептически к данному источнику,
            причина по которой они это делают проста - те самые соло вебы, кто
            не понимает, что заливая депы по 15$ со ставкой 40$ рекламодатель
            уходит в минус.
          </p>
          <p className="BlogPost__text">
            Ваша цель заработать денег не только себе, но и рекламодателю -
            иначе стабильной работы не выйдет!
          </p>
          <h2 className="BlogPost__title-2">Что за кейс? Какие цифры?</h2>
          <p className="BlogPost__text">
            Все просто - это обычный схемный кейс с мануалом по обработке и
            открытой статистикой. Кстати по поводу статистики, ниже
            предоставлены цифры нашего веб-мастера.
          </p>
          <img className="BlogPost__img" src={Img1} />
          <img className="BlogPost__img" src={Img2} />
          <p className="BlogPost__text">
            Так же, статистика от нашего медиа-баинга:
          </p>
          <img className="BlogPost__img" src={Img3} />
          <p className="BlogPost__text">Что же по итогу у нас получилось:</p>
          <div className="BlogPost__tiles">
            <div className="BlogPost__tile BlogPost__tile--half">
              <h3 className="BlogPost__tile-title">Цена диалога</h3>
              <p className="BlogPost__tile-text">
                <span className="BlogPost__text--accent">0.10$-0.30$</span>
              </p>
            </div>
            <div className="BlogPost__tile BlogPost__tile--half">
              <h3 className="BlogPost__tile-title">Ставка</h3>
              <p className="BlogPost__tile-text">
                <span className="BlogPost__text--accent">от 23$</span> (если у
                вас не было опыта работы) /{" "}
                <span className="BlogPost__text--accent">27-36$</span> (Если уже
                лили или льете)
              </p>
            </div>
            <div className="BlogPost__tile BlogPost__tile--half">
              <h3 className="BlogPost__tile-title">Конверт</h3>
              <p className="BlogPost__tile-text">
                sms2reg = <span className="BlogPost__text--accent">1к2/3</span>
                <br />
                reg2dep = <span className="BlogPost__text--accent">1к4</span>
              </p>
            </div>
            <div className="BlogPost__tile BlogPost__tile--half">
              <h3 className="BlogPost__tile-title">Затраты</h3>
              <p className="BlogPost__tile-text">
                <span className="BlogPost__text--accent">1.808$</span>
              </p>
            </div>
            <div className="BlogPost__tile BlogPost__tile--full">
              <p className="BlogPost__tile-text">
                Трафик: <span className="BlogPost__text--accent">917$</span>
                <br />
                Аккаунт instagram:
                <span className="BlogPost__text--accent">70$</span>
                <br /> Аккаунты FB:
                <span className="BlogPost__text--accent">45$</span>
                <br /> Зарплата обработчика:
                <span className="BlogPost__text--accent">776$</span>
              </p>
            </div>
          </div>
          <p className="BlogPost__quote">
            Профит: 7.768 - (917+70+45+776) ={" "}
            <span className="BlogPost__text--accent">5.960$</span> Итоговый ROI:{" "}
            <span className="BlogPost__text--accent">329.65 %</span>
          </p>
          <p className="BlogPost__text">
            При том, что аккаунт инсты это разовая затрата + по индии спендит от
            50-80$ в день с одного ака FB, банят их раз в 2-3 дня. За весь
            пролив мы потратили менее 15-ти аккаунтов.
          </p>
          <h2 className="BlogPost__title-2">
            С теорией закончили, переходим к практике!
          </h2>
          <p className="BlogPost__text">Для начала работы нам потребуется:</p>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              Instagram профиль, желательно от 2.000 подписчиков и контентом
              старше месяца.
            </li>
            <li className="BlogPost__ordered-list-item">
              Базовое умение настроить таргет в FB.
            </li>
            <li className="BlogPost__ordered-list-item">
              Трастовый фанпейдж, с которого будем разрадавать доступ на свои
              рекламные аки.
            </li>
            <li className="BlogPost__ordered-list-item">
              Базовые знания английского языка / Умение пользоваться
              переводчиком. Да-да, переводчиком нужно уметь пользоваться, т.к.
              большинство людей в Индии не образованны и не знают родного языка.
              95% населения общается на ломанном английском.
            </li>
          </ol>
          <p className="BlogPost__text">
            Где все это можно достать? У нас! Мы с легкостью поможем вам со
            всеми подготовками и посоветуем контакты проверенных селеров.
          </p>
          <p className="BlogPost__text">
            Если вы не захотели покупать готовый профиль, то все, что будет ниже
            поможет в его создании.
          </p>
          <p className="BlogPost__text-highlighted">
            Ваша задача составить историю о своем персонаже: кто вы, чем
            занимаетесь, чем зарабатываете, рассказать как круто вы отдыхаете в
            жарких странах и показать как много денег получаете.
          </p>
          <p className="BlogPost__quote">
            Очень важный момент! НИ В КОЕМ СЛУЧАЕ, НЕ КОПИРУЙТЕ ЧУЖОЙ ИНСТАГРАМ
            ПРОФИЛЬ!!! Если вы это сделаете 99%, что ваш инстаграм заблокируют
            или же 50% пришедшего трафика скажет, что вы фейк.
          </p>
          <p className="BlogPost__text">
            Придумывайте свои профили, модернизируйте шаблоны - делайте что-то
            уникальное, это в разы увеличивает конверт!
          </p>
          <p className="BlogPost__text">
            Пример простенького профиля для нашей связки:
          </p>
          <p className="BlogPost__text">
            Заполняйте профиль в Инстаграм соответствуя своей истории. Индия -
            это не то гео, где люди кидают глаз на профиль, но всё же требуется
            уделить этому серьезное внимание, т.к ваш конверт зависит от него.
          </p>
          <img className="BlogPost__img" src={Img4} />
          <img className="BlogPost__img" src={Img5} />
          <h2 className="BlogPost__title-2">Накручиваем подписки и актив</h2>
          <p className="BlogPost__text">
            Это очень индивидуальный момент, к которому вы должны относиться с
            трепетом и осторожностью.
          </p>
          <p className="BlogPost__text">
            Никуда не спешим, гео с 1.4 миллиардом человек за день не выжмут)
            Ваша задача сделать все качественно и точно в цель.
          </p>
          <p className="BlogPost__text">
            Заливаем контент, постепенно накручиваем актив, даем аккаунту
            отдохнуть не меньше суток. Таким образом, потихонечку приобретаем
            прокаченный аккаунт.
          </p>
          <p className="BlogPost__text">
            Мы потратили на накрутку:{" "}
            <span className="BlogPost__text--accent">13$</span>
          </p>
          <h2 className="BlogPost__title-2">Креативы</h2>
          <p className="BlogPost__text">
            Подойдите к выборке креатива с максимальным вниманием и не копируйте
            примеры, которые мы предоставляем в кейсе - это всего лишь примеры,
            которые должны направить вас в нужное русло мыслей!
          </p>
          <p className="BlogPost__text">
            Практически весь схемный трафик льется статикой - видео заходит
            очень слабо и как правило игнорируется юзером.
          </p>
          <p className="BlogPost__text">
            Ваша цель сделать простое крео, чтобы особо не отпугивать аудиторию
            еще на просмотре рекламы в надежде докрутить лида уже на моменте
            обработки.
          </p>
          <p className="BlogPost__text">Пример креатива:</p>
          <img className="BlogPost__img" src={Img6} />
          <p className="BlogPost__text">
            Все максимально просто) Показали хорошую машинку, вызвали интерес
            заработком и призвали написать нам.
          </p>
          <p className="BlogPost__text">
            Креатив должен быть максимально простым и не давить на юзера, ваша
            цель заставить его написать в директ - дальше уже работа за
            обработчиком!
          </p>
          <h2 className="BlogPost__title-2">Обработка лидов в действии</h2>
          <p className="BlogPost__text">
            Не будем придумывать и рассусоливать, вот сразу все в действии с
            потенциальным лидом
          </p>
          <img className="BlogPost__img" src={Img7} />
          <p className="BlogPost__text">
            Люди тут очень примитивные! Мы использовали подход с маленьким
            перводепом и последующими повторными депозитами.
          </p>
          <p className="BlogPost__text">
            Здесь все зависит от обработки и вашей цели - с легкостью можно
            закрывать лиды на 50$ редепами, да-да, такие бывают в Индии. Сейчас
            средний деп по всему потоку составил - 37$, что повлекло за собой ап
            ставки и снижение холда.
          </p>
          <p className="BlogPost__text">
            Не бойтесь придумывать свои подходы к людям - они откликаются не
            только на вашу рекламу ( задумайтесь 🙌 ) и когда они видят везде
            один и тот же скрипт общения - это с легкостью их спугнет и они
            убегут от вас.
          </p>
          <p className="BlogPost__text-highlighted">
            В вашем случае все может быть совершенно иначе - цифры могут быть
            куда хуже или лучше, все зависит от вас.
          </p>
        </div>
        <Recent
          className="hidden w-full max-w-[297px] md:block"
          posts={recentPosts}
        />
      </div>
    </div>
  );
};
