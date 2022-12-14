<template>
  <header-main :headerButtonContent="headerButtonContent" />

  <main class="main">
    <section class="education">
      <div class="container">
        <h2 class="title">Информация для начинающих водителей</h2>
        <div class="education__item">
          <h3>Что делать, если попал в ДТП?</h3>
          <p>Вот общий порядок действий при ДТП:</p>
          <ol>
            <li>
              Заглушите двигатель. Ключ от автомобиля сразу же уберите
              в карман — чтобы не потерять в суматохе. Включите стояночный
              тормоз и «аварийку».
            </li>
            <li>
              Поставьте знак аварийной остановки. В соответствии с ПДД знак
              аварийной остановки должен быть установлен на расстоянии 15 метров
              от вашей машины в населенном пункте и в 30 метрах вне населенного
              пункта. Перед тем как выйти из автомобиля, наденьте
              светоотражающий жилет
            </li>
            <li>
              Постарайтесь оказать первую помощь пострадавшим. Оцените
              последствия ДТП и выясните, есть ли пострадавшие. Если есть,
              срочно вызовите скорую по телефонам 112, 103 либо 03.
              До ее приезда не оставляйте пострадавших.
            </li>
            <li>
              Сфотографируйте поврежденные автомобили. Лучше сделать это как
              можно быстрее и уйти с проезжей части, чтобы не попасть под колеса
              других машин.
            </li>
            <li>
              Оцените серьезность случившегося ДТП, чтобы понять, можно ли
              оформить аварию по европротоколу или потребуется вызывать на место
              сотрудников ГИБДД.
            </li>
            <li>Зарегистрируйте ДТП в страховой компании.</li>
          </ol>
        </div>

        <div class="education__item">
          <h3>Как заправить машину?</h3>

          <ol>
            <li>
              Определите, с какой стороны находится лючок бензобака вашего
              автомобиля. На приборной панели есть стрелка рядом со значком
              бензоколонки. Обычно она показывает, с какой стороны находится
              бензобак. Если он находится слева, то к нужной колонке вы должны
              подъехать с левой стороны. Если справа, то, соответственно, с
              правой стороны.
            </li>
            <li>
              Подъедьте таким образом, чтобы шланги колонки оказались напротив
              лючка бензобака.
            </li>
            <li>
              Остановите автомобиль, заглушите двигатель и поставьте его на
              ручной тормоз. Закройте окна и возьмите ключ от машины. Когда вы
              уйдете оплачивать бензин, лучше, чтобы машина была закрытой.
            </li>
            <li>
              Чаще всего на колонке есть правила пользования заправкой. Можете
              ознакомиться с ними, если думаете, что что-то забыли. Первое —
              откройте лючок.
            </li>
            <li>
              Открутите крышку с бензобака. В современных машинах для крышки
              предусмотрен специальный разъем в крышке лючка или веревочка. Если
              этого нет, то постарайтесь положить крышку туда, где вы ее точно
              не забудете и где с нее не потечет бензин на автомобиль.
            </li>
            <li>
              Теперь можно взять заправочный пистолет от шланга с необходимым
              бензином. Обязательно держите его вертикально, вверх носиком, пока
              несете до бензобака. Не опускайте вниз, чтобы избежать разливания
              бензина. 
            </li>
            <li>
              Вставьте пистолет в бак автомобиля. Проверьте, тот ли тип топлива
              вы собираетесь заправить. 
            </li>
            <li>
              Нажмите на курок пистолета и зафиксируйте его. Вы должны услышать
              щелчок. Благодаря этому, пока вы производите оплату и
              возвращаетесь к авто, бензин будет заливаться в бак. 
            </li>
            <li>Посмотреть и запомнить номер колонки.</li>
            <li>
              Пройдите на кассу и оплатите бензин. Назовите оператору номер
              колонки, номер бензина и его количество в литрах или сумму, на
              которую хотите заправиться.
            </li>
            <li>
              Когда заправка окончена, нажмите на курок и вытащите пистолет.
              Держите его, как и в прошлый раз, вертикально — вверх носиком.
            </li>
            <li>Верните пистолет на место.</li>
            <li>Закрутите крышку бензобака.</li>
            <li>Закройте лючок бензобака.</li>
          </ol>
        </div>
      </div>
    </section>
  </main>

  <footer-main />
</template>

<script>
import HeaderMain from "@/components/HeaderMain/index.vue";
import FooterMain from "@/components/FooterMain/index.vue";

export default {
  components: { HeaderMain, FooterMain },
  data: () => ({
    headerButtonContent: "Назад",
  }),
};
</script>

<style lang="scss" scoped>
.education {
  margin: 20px 0 100px 0;
  font-size: 12px;

  &__item {
    margin: 20px 0 30px 0;
  }

  h3 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
  }

  ol {
    font-size: 10px;
    padding-left: 12px;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
