import styles from "./Header.module.css"
import headericon from "../assets/react.svg"
import instagram from "../assets/instagram-logo-thin.svg"
import whatsapp from "../assets/whatsapp-logo-thin.svg"
import { useState } from "react";
 
export function Header(){
    return(
        <div className={styles.header}>
            <img src={headericon} alt="headericon" />
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#precos">Preços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <div className={styles.socials}>
                <button><img src={instagram} alt="instagram" /></button>
                <button><img src={whatsapp} alt="whatsapp" /></button>
            </div>
        </div>
    )
}