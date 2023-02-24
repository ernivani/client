import React from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

export function Home(props) {

    const { t } = useTranslation();



    return (
        <div>
            <h1>{t('home')}</h1>
            <Link to="/log">{t('login_button')}</Link>
        </div>
    );

}