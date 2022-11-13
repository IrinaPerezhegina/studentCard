export const renderPharse = (number) => {
    if (
        ["2", "3", "4"].some((item) => {
            return (
                item === number.toString().slice(number.toString().length - 1)
            );
        }) &&
        !["12", "13", "14"].some((item) => {
            return (
                item ===
                number
                    .toString()
                    .slice(
                        number.toString().length - 2,
                        number.toString().length
                    )
            );
        })
    ) {
        return number + " года";
    } else if (
        ["1"].some((item) => {
            return (
                item === number.toString().slice(number.toString().length - 1)
            );
        }) &&
        !["11"].some((item) => {
            return (
                item ===
                number
                    .toString()
                    .slice(
                        number.toString().length - 2,
                        number.toString().length
                    )
            );
        })
    ) {
        return number + " год";
    } else {
        return number + " лет";
    }
};
