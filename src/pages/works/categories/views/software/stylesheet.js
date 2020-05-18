import { jss } from 'react-jss';
import  couret  from '../../../../../assets/font/fab.otf';
import  background  from '../../../../../assets/images/1.jpg';
export const style = {
    '@font-face': {
        fontFamily: 'couret',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${couret})`,
    },
    container: {
        width: "100%",
        backgroundColor: "#27282C",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        color: "#f5f5f5",
        listStyle: "none",
        justifyContent: "space-between",
        fontFamily:"couret",
        flexDirection: "column",
        height: "100vh",
        flexWrap:"wrap"
    },
    background:{
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.80)",
        display:"flex",
        flexDirection: "column",
    }
};
export default style;


