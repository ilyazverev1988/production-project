import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {className} from "./helpers/classNames/className";



const App = () => {
const {theme, toggleTheme} = useTheme();
const bool = true;
    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Обо мне</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
