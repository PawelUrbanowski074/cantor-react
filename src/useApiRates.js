import { useEffect, useState } from "react";

export const useApiRates = () => {
    const [ratesData, setRatesData] = useState({ state: "loading", base: null, date: null, rates: null, });

    useEffect(() => {
        const getApi = () => {
            const response = fetch("https://api.exchangerate.host/latest?base=PLN");
            response.then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            }).then((response) => response.json())
                .then(({ base, date, rates,  }) => setRatesData({ base , date, rates, }))
                .catch((error) => {
                    setRatesData({ state: "error" })
                    console.error("Sorry, something goes happened... Please try later.", error);
                });
        };
        setTimeout(getApi, 1000);
    }, []);
    return ratesData;
};