import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/5/1.png";
import Img2 from "assets/images/blogs/5/2.png";
import Img3 from "assets/images/blogs/5/3.png";
import Img4 from "assets/images/blogs/5/4.png";

export const Post6: React.FC = () => {
  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        Интеграция Keitaro x Leadshub
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <p className="BlogPost__text">
            Для успешной интеграции Keitaro с Leadshub необходимо следовать
            четким шагам. Первым этапом является регистрация в личном кабинете с
            использованием промокода <b>LEADSHUB20</b>, который предоставляет
            скидку 20% на первую покупку для новых клиентов, действительную в
            течение трех месяцев.
          </p>

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
              December 15, 2023
            </span>
          </div>

          <h2 className="BlogPost__title-2">
            Выбор сервера, установка, настройка.
          </h2>

          <p className="BlogPost__text">
            Выбор и настройка сервера играют ключевую роль. Рекомендуется
            выбирать VPS или VDS сервер с операционной системой CentOS 8/9
            Stream, поскольку трекер не устанавливается на веб-хостинг. Гео
            сервера также важно для оптимизации скорости обмена запросами,
            поэтому лучше выбрать сервер, находящийся ближе к гео целевого
            оффера.
          </p>

          <p className="BlogPost__text">
            Выбираем сервер исходя из относительно ожидаемых объемов кликов.
          </p>

          <a data-fancybox="gallery" href={Img1}>
            <img className="BlogPost__img" src={Img1} />
          </a>

          <h2 className="BlogPost__title-2">
            Необходимые требования к серверу включают:
          </h2>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              Чистый сервер, без панели управления;
            </li>
            <li className="BlogPost__ordered-list-item">
              CentOS 8 Stream или CentOS 9 Stream;
            </li>
            <li className="BlogPost__ordered-list-item">Виртуализация KVM;</li>
            <li className="BlogPost__ordered-list-item">Минимум 20GB SSD.</li>
          </ul>

          <h2 className="BlogPost__title-2">
            Установка трекера осуществляется через терминал с помощью команды:
          </h2>
          <p className="BlogPost__quote">ssh root@ip_сервера</p>
          <p className="BlogPost__text">
            Когда появится ECDSA key fingerprint is..., напишите Y и нажмите
            ENTER. Введите пароль и нажмите ENTER.
          </p>
          <p className="BlogPost__text">
            <b>Команда установки keitaro.</b> Скопируйте и выполните в
            терминале:
          </p>
          <p className="BlogPost__quote">
            curl keitaro.io/kctl.sh | bash -s -- install
          </p>
          <p className="BlogPost__text">
            Подождите окончания установки, скопируйте адрес панели управления и
            откройте в браузере.
          </p>
          <p className="BlogPost__quote">http://xxx.xxx.xxx.xxx/admin</p>
          <p className="BlogPost__text">
            Вводим ключ лицензии, выбираем валюту, в которой кейтаро будет вести
            статистику, а также указываем часовой пояс. Валюту и часовой пояс
            можно в дальнейшем изменить в настройках.
          </p>
          <p className="BlogPost__text">
            Нажимаем <b>Сохранить</b> {"-->"}{" "}
            <b>Создаем логин и пароль для входа в панель управления Кейтаро</b>{" "}
            {"-->"} нажимаем <b>Create</b> {"-->"} <b>Готово.</b> Keitaro
            установлен на сервер.
          </p>

          <h2 className="BlogPost__title-2">
            Домен. Покупка, настройка, добавление в Кейтаро.
          </h2>
          <p className="BlogPost__text">
            Покупаем домен у любого регистратора доменов.
          </p>
          <p className="BlogPost__text">
            Домен в Keitaro необходим для работы кампаний по защищенному HTTPS
            соединению, чтобы избежать потерь трафика и обеспечить доступность
            кампаний для вашей целевой аудитории. Парковка домена необходима для
            корректной работы трекера и отдельных функций. Домен в Keitaro
            работает как ссылка на содержимое кампании.
          </p>
          <p className="BlogPost__text">
            Обязательно используем чистый домен для работы с Keitaro:
            недопустимо использовать домен сразу и для Keitaro и для стороннего
            софта, хостингов и т.д.
          </p>
          <p className="BlogPost__text">
            Итак, <b>мы приобрели домен</b>. Теперь нам нужно его припарковать в
            трекере.
          </p>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              Нажмите на вкладку Домены.
            </li>
            <li className="BlogPost__ordered-list-item">
              Нажмите на кнопку Добавить.
            </li>
          </ol>
          <p className="BlogPost__text">
            Домен добавили. Далее логинимся по домену с https протоколом.
            Переходим в адресную строку браузера и вводим:
          </p>
          <p className="BlogPost__quote">https://ваш_домен/admin</p>

          <h2 className="BlogPost__title-2">
            Создаем оффер и настраиваем постбеки в Leadshub.
          </h2>
          <p className="BlogPost__text">
            Нажимаем вкладку в трекере{" "}
            <b>Партнерские сети {"-->"} Выбираем шаблон Leadshub.pro</b>
          </p>
          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>
          <p className="BlogPost__text">
            Копируем <b>Postback URL</b> и идем с ним в партнерку. Заходим в
            <b>Настройки {"-->"} Глобальные постбеки</b> и устанавливаем
            постбек. Статус ставим - любой.
          </p>
          <p className="BlogPost__text">
            Берем ссылку в партнерке из нужного оффера. Переходим в трекер
            кейтаро, открываем раздел <b>Офферы {"-->"} Создать</b>.
          </p>
          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>
          <p className="BlogPost__text">
            Указываем название. Выбираем нашу партнерскую сеть (в трекере уже
            есть наш шаблон, выбираем <b>Leadshub.pro</b>). В поле URL указываем
            трекинговую ссылку, взятую из личного кабинета партнерки.
          </p>
          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>

          <p className="BlogPost__text">
            В конец ссылки указываем <b>sub1={"{subid}"}</b>, но это не
            обязательно, т.к. это самостоятельно сделает трекер. В <b>sub1</b> у
            вас будет передаваться кликайди кейтаро, который нужен для их
            трекинга.
          </p>
          <p className="BlogPost__text">
            Теперь, когда сервер установлен, трекер настроен, домен припаркован,
            оффер создан и постбеки сконфигурированы, проведите предварительный
            тест для проверки корректности настроек. После успешного
            тестирования можно начинать залив трафика, следя за логами для
            дальнейшего анализа и оптимизации. Таким образом, вы завершите
            процесс интеграции Keitaro с Leadshub, обеспечив эффективное
            управление трафиком и достижение поставленных целей.
          </p>
        </div>
      </div>
    </>
  );
};
