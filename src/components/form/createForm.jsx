import React, { useState, useEffect } from "react";
import * as yup from "yup";
import FormInput from "./formInput";
import { useHistory } from "react-router-dom";
import ModalWindow from "../modalWindow";

const validateSchema = yup.object().shape({
    portfolio: yup
        .string()
        .required(`Поле 'Портфолио' обязательно для заполнения`)
        .url("Поле 'Портфолио' должно быть ссылкой"),
    birthYear: yup
        .string()
        .required(`Поле 'Год рождения' обязательно для заполнения`)
        .test(
            "birthYear",
            "Поле 'Год рождения' заполнено некорректно",
            (value) =>
                Number(value) < new Date().getFullYear() && Number(value) > 1900
        ),
    surname: yup.string().required(`Поле 'Фамилия' обязательно для заполнения`),
    name: yup.string().required(`Поле 'Имя' обязательно для заполнения`)
});

const CreatePage = () => {
    const LastData = JSON.parse(localStorage.getItem("data"));
    const [data, setData] = useState({
        name: LastData?.name || "",
        surname: LastData?.surname || "",
        birthYear: LastData?.birthYear || "",
        portfolio: LastData?.portfolio || ""
    });
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({});
    const history = useHistory();
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));

        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("data", JSON.stringify(data));
        setShow(true);
    };
    const handleIncrement = () => {
        setData((prevState) => ({
            ...prevState,
            birthYear: (Number(prevState.birthYear) + 1).toString()
        }));
    };
    const handleDecrement = () => {
        setData((prevState) => ({
            ...prevState,
            birthYear: (Number(prevState.birthYear) - 1).toString()
        }));
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleClick = () => {
        history.push("/");
    };
    return (
        <div className="container-xxl mt-5">
            <div className="row">
                <div className="col-md-10 offset-md-1 shadow p-4">
                    <h1 className="mb-3">Создать</h1>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            value={data.name}
                            labelTitle="Имя"
                            type="text"
                            name="name"
                            error={errors.name}
                            onChange={handleChange}
                        />
                        <FormInput
                            value={data.surname}
                            labelTitle="Фамилия"
                            type="text"
                            name="surname"
                            error={errors.surname}
                            onChange={handleChange}
                        />
                        <FormInput
                            value={data.birthYear}
                            onChange={handleChange}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            labelTitle="Год рождения"
                            type="text"
                            name="birthYear"
                            error={errors.birthYear}
                        />
                        <FormInput
                            value={data.portfolio}
                            labelTitle="Портфолио"
                            type="text"
                            name="portfolio"
                            error={errors.portfolio}
                            onChange={handleChange}
                        />
                        {LastData && (
                            <>
                                <input
                                    onClick={handleClick}
                                    type="submit"
                                    className="btn btn-secondary me-2 mt-3 mb-4"
                                    value="Назад"
                                />
                                <input
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary mt-3 mb-4"
                                    value="Обновить"
                                />
                            </>
                        )}

                        {!LastData && (
                            <input
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary mt-3 mb-4"
                                value="Создать"
                            />
                        )}
                    </form>
                    <ModalWindow onClose={() => setShow(false)} show={show} />
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
