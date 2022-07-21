import Character from "./components/Character";

function App() {
  return (
      <div>
        <Character
            name={'Гомер Джей Сімпсон'}
            description={'батько родини, гладкий, лисий, ледачий і не дуже розумний. Він часто поводиться абсурдно, егоїстично і нетактовно, втім, залишається симпатичним.'}
            image={'https://www.onthisday.com/images/people/homer-simpson-medium.jpg'}/>
        <Character
            name={'Марджері «Мардж» Сімпсон'}
            description={'дружина Гомера, дівоче ім\'я — Був\'є. Домогосподарка, майже весь час проводить вдома, доглядаючи за наймолодшою дитиною Меґґі, а також за Бартом і Лісою, і навіть за чоловіком. Її найвідоміша особливість — блакитне волосся, зібране у високу зачіску.'}
            image={'https://www.freeiconspng.com/uploads/marge-simpson-png-11.png'}/>
        <Character
            name={'Бартоломео «Барт» Сімпсон'}
            description={'10-літній син Гомера і Мардж Сімпсон, найстарша дитина в сім\'ї, втіллення образу непослуха, бешкетника і посереднього учня в школі.'}
            image={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
        <Character
            name={'Ліса Мері Сімпсон'}
            description={'дочка Гомера і Мардж Сімпсон, надзвичайно розумна, не по літах розвинена, суспільно активна дівчинка. Любить джаз та грає на саксофоні, цікавиться філософією, наукою, історією. Активіст із захисту довкілля і прав тварин. Стала буддисткою і вегетаріанкою.'}
            image={'https://citaty.info/files/characters/638.png'}/>
        <Character
            name={'Маргарет «Меґґі» Сімпсон'}
            description={'найменша дочка Гомера в Мардж Сімпсон. Протягом усіх років серіалу не росте і завжди залишається немовлям у повзунках та підгузнику.'}
            image={'https://simg.nicepng.com/png/small/138-1386769_simpsons-png-pack-maggie-simpson.png'}/>
      </div>
  );
}

export default App;
