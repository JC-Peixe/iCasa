import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu(){
    
    return (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/inicio">
                Início
               </MenuLink>
                <MenuLink to="/quemsomos">
                    Quem Somos
                </MenuLink> 
                <MenuLink to='/narua'>
                    Ações
                </MenuLink> 
                <MenuLink to='/agenda'>
                    Agenda
                </MenuLink> 
                <MenuLink  to='/ofertas'>
                    Ofertas
                </MenuLink>
            </nav>
        </header>
    )
}