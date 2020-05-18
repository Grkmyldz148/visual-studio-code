import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import Categori from '../childComponents/category';


const NoStyledWorks = ({ history, classes }) => {
    return <div className={classes.container}>
        <div className={classes.content}>
            <Categori
                title="Müzik"
                content="Müzik üretmeyi çok seviyorum. Doğada ki nizam beni çok etkiler ve o nizam ölçüsünde müzik üretirim.
                Bazen ise matematik... Zaten hiçbir şey tesadüf değildir. Kaliteli bir bilişim ürünü yada bir müzik emin olun ki gerçek hayatta ki
                başka bir şeyin benzeridir."
                bgcolor="rgba(57, 44, 114, 0.2)"
                url="/muzik"
                linkTitle="Devamı ve projelerimi görmek için tıklayın..."
            />
            <Categori
                title="Yazılım"
                content="Hayatım boyunca hep, aynı anda çok iş kabiliyetine sahip olmayı istedim. Örneğin ' ana işim bilişim ' ve ben bilişim dışında müzik ile de ilgileniyorum. İş dediysem öyle sabah 7 akşam 5 gidip gelinen işi kast etmiyorum. ' Çalışmak ' gece - gündüz demeden ne gerekiyorsa o iş için çabalamaktan bahsediyorum."
                width="6000px"
                height="300px"
                bgcolor="rgba(47, 121, 76, 0.2)"
                url="/yazilim"
                linkTitle="Devamı ve projelerimi görmek için tıklayın..."
            />
            <Categori
                title="Grafik"
                content="İşte karşılığı bulunmaz bir nimet. Muhabbet. Dostlarla beraber manzaralı çok hafif kalabalık bir ortamda rahat rahat sohbet ederken
                çay yudumlamanın hazzını hiç bir şeyde bulamıyorum. Beraber çalışırken bile yaşadığımız muhabbetlerin haddi hesabı yok."
                bgcolor="rgba(121, 47, 47, 0.2)"
                url="/grafik"
                linkTitle="Devamı ve projelerimi görmek için tıklayın..."
            />
        </div>
    </div>
}
const Works = injectShet(style)(NoStyledWorks);
export default Works;