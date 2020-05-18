import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import Welcome from '../childComponents/welcome';
import welcomeImg from '../../assets/images/welcomeImg.jpg';

const NoStyledAboutMe = ({history ,classes}) => {
  return <div className={classes.container}>
  <div className={classes.headerBg}>
    <Welcome
      title="Ben, Görkem YILDIZ."
      img=""
      content="12 Eylül 2002 yılında Sivas'da doğdum. İstanbul'da yaşıyorum.
      Çok ufak yaşta bilgisayar ile tanıştım ve bu sırada oyunlar ve oyunların nasıl çalıştığını hep merak eden biriydim ve bu işlere
      2013-2014 yılları arasında yama yapımı ile başladım bunun öncesinde 'Game-Maker Studio' gibi basit oyun yapımı sunan programları kullansamda
      istediğim sonucu alamadım ve kendimi yama yapımlarının içinde buldum oyunlara çeşitli yamalar yaptım bir gün yaptığımız bir yama için arayüz
      programı ararken hayatımı önemli ölçüde etkileyen Furkan Atakan BOZKURT ile tanıştım e tabi ki NİBGAT'ı da tanımış oldum zaman ile NİBGAT bünyesine
      girip bir çok depertmanında görev aldım ve şuan uçuyorum kardeşim!"
      titleFontSize="40px"
      fontSize="20px"
      width="600px"
      height="300px"
    />
  </div>
</div>
}
const AboutMe = injectShet(style)(NoStyledAboutMe);
export default AboutMe;