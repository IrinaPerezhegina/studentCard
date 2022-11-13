import React from "react";
import { Link, useHistory } from "react-router-dom";
import { renderPharse } from "../utils/renderPharse";

const MainPage = () => {
    const history = useHistory();
    const data = JSON.parse(localStorage.getItem("data"));
    const handleClick = () => {
        history.push("/create");
    };
    if (!data) {
        return (
            <div className="container mt-5 mr-5">
                <h2>Карточка студента</h2>
                <div>Нет данных</div>
                <button
                    onClick={handleClick}
                    className="btn btn-primary mt-3"
                    type="submit"
                >
                    Добавить
                </button>
            </div>
        );
    } else {
        return (
            <div className="container mt-5 mr-5">
                <h1>Карточка студента </h1>
                <div>
                    <b>Имя: </b>
                    {data.name}
                </div>

                <div>
                    <b>Фамилия: </b>
                    {data.surname}
                </div>
                <div>
                    <b>Год рождения: </b> {data.birthYear}
                    {` (${renderPharse(
                        new Date().getFullYear() - data.birthYear
                    )})`}
                </div>
                <div>
                    <b>Портфолио: </b>
                    <Link to={data.portfolio} type="submit">
                        {data.portfolio}
                    </Link>
                </div>
                <button
                    className="btn btn-primary mt-3"
                    type="submit"
                    onClick={handleClick}
                >
                    Редактировать
                </button>
            </div>
        );
    }
};

export default MainPage;
