import React from 'react';
import './styles.css';

/**Importando as imagens*/
import logo from '../../assets/images/faciem1 (1).png';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps{
    title: string;
    description?: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="header-content">
                    <strong>{props.title}</strong>
                    {/* Se a props description for verdadeira, ou seja, existir
                    então mostrar o que vem depois do &&
                    */}
                    {props.description && <p>{props.description}</p>}

                    {/* Traz o que está dentro da tag <PageHeader> no TeacherList ou TeacherForm */}
                    {props.children}
                </div>                
            </header>
    );
}

export default PageHeader;