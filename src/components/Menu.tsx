import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { LANGUAGES } from '../constants/index';
import { useState } from 'react';

const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const Menu = () => {

    const { i18n, t } = useTranslation()

    const navigate = useNavigate();

    const [languageCode, setLanguageCode] = useState('en');

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log('currentPath', currentPath?.split("/")?.pop())
        const currentPath = window?.location?.pathname?.split("/")?.pop() || '';

        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
        setLanguageCode(lang_code);

        LANGUAGES.forEach((language) => {
            if(!currentPath?.includes(language?.code)) {
                console.log(currentPath)
                // navigate(`${currentPath}`);
        navigate(`${lang_code}/${currentPath}`);

            }

        })
    }

    return (
        <nav>
            <div>
                <NavLink className={isActive} to={`/${languageCode}`}>{t('home')}</NavLink>
                <NavLink className={isActive} to={`/${languageCode}/about`}>{t('about')}</NavLink>
            </div>

            <select defaultValue={i18n.language} onChange={onChangeLang}  >
                {
                    LANGUAGES.map(({ code, label }) => (
                        <option
                            key={code}
                            value={code}
                        >{label}</option>
                    ))
                }
            </select>
        </nav>
    )
}