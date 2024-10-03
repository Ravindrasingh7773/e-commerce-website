import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';

const Logo = ({ ImgUrl = LogoImg }) => {
    return (
        <div className={styles.logo}>
            <Link to={`/`}>
                <img src={ImgUrl} alt="Logo" />
            </Link>
        </div>
    )

}

export default Logo;