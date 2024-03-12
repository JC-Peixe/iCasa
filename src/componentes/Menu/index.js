import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu(){
    
    return (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/inicio">
                Início
               </MenuLink>
                <MenuLink to="/inicio">
                    Quem Somos
                </MenuLink> 
                <MenuLink to='/inicio'>
                    Atividades
                </MenuLink> 
                <MenuLink to='/inicio'>
                    Agenda
                </MenuLink> 
                <MenuLink  to='/inicio'>
                    Ofertas
                </MenuLink>
            </nav>
        </header>
    )
}