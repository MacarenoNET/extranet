'use client';

import s from './navigation.module.scss';

interface INavigation {
    headertransparent: string;
    logo: string;
    color: string;
}

const Navigation: React.FC<INavigation> = (props) => {

    return (
        <div className={s.nav}>
            <input type="checkbox" />
            <div className={s.navheader}>
                <div className={s.navtitle}>
                    JoGeek
                </div>
            </div>
            <div className={s.navbtn}>
                <label>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className={s.navlinks}>
                <a href="//github.io/jo_geek" target="_blank">Github</a>
                <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
            </div>
        </div>
    )

}
export default Navigation;