import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import Welcome from '../childComponents/welcome';
import welcomeImg from '../../assets/images/welcomeImg.jpg';
const NoStyledHome = ({history ,classes}) => {
  return <div className={classes.container}>
    <div className={classes.headerBg}>
      <Welcome
        title="Görkem YILDIZ | Kişisel Bilgi Sistemi"
        img={welcomeImg}
        content="Sistemimde; hakkımda bilgiye ,yaptığım işlere, katıldığım faaliyetlere, oynadığım oyunlara, dinlediğim ve yaptığım müziklere tutunda her türlü çalışmalarıma ulaşabilirsiniz..
        Benimle iletişime geçmek için lütfen sosyal medya hesaplarımı kullanın."
        titleFontSize="40px"
        fontSize="20px"
        width="100%"
        height="auto"
      />
    </div>
  </div>
}
const Home = injectShet(style)(NoStyledHome);
export default Home;