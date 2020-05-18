import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import MusicComponent from '../../../../childComponents/music'
import Welcome from '../../../../childComponents/welcome'
import welcomeImg from '../../../../../assets/images/welcomeImg.jpg';
const NoStyledMusic = ({ history, classes }) => {
  return <div className={classes.container}>
    <div className={classes.background}>
      <div className={classes.Column}>
        <Welcome
          title="Müzik / RAP"
          content="Kendimi bildim bileli Rap müzik dinleyicisiyim (2008-2009)
          Uzun bir süre sadece dinleyici olarak kaldım bazen kendim 4lükler uyduruyordum ama hep kafamda kalıyordu
          2018 yılında bir şeyler karalamaya başladım kayıtlar aldım ama hiç hoşuma gitmediği için sildim ve bir süre için bıraktım ama
          1 yıl sonrasında tekrardan daha bilinçli bir şekilde yazmaya ve kayıt almaya başladım mix-mastering açısından kendimi geliştirdim ve 
          geliştirmeye devam ediyorum birçok parça yayınladım bunlara YouTube kanalımdan ulaşabilirsiniz"
          titleFontSize="35px"
          fontSize="18px"
          img={welcomeImg}
          width="80%"
          height="auto"
        />
      </div>
      <div className={classes.musicColumn}>
        <MusicComponent
          title="EGO"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=zDJ2bbQwuN0"
        />
        <MusicComponent
          title="BPM"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=4_1eJzAuO6o"
        />
        <MusicComponent
          title="Üstüme Gelmeyin"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=4_1eJzAuO6o"
        />
        <MusicComponent
          title="Vurgun"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=VeYn75QwMjw"
        />
        <MusicComponent
          title="HEP TEK"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=gUXrBF10INA"
        />
        <MusicComponent
          title="Bilmiyorum Nedenini"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=5evP444xZHg"
        />
        <MusicComponent
          title="Suçlu Onlar"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=2cutYDqqSb4"
        />
        <MusicComponent
          title="Ayrılık"
          img={welcomeImg}
          width="100%"
          height="auto"
          url="https://www.youtube.com/watch?v=I_35fpCNbgY"
        />
      </div>
    </div>
  </div>
}
const Music = injectShet(style)(NoStyledMusic);
export default Music;