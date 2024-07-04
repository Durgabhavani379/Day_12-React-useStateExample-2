import React, { useState, useEffect } from 'react';
import './UseEffectExample.css';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffectExample2 = () => {
    const [drinkData, setDrinkData] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: "" });

    const fetchDataUrl = async (apiUrl) => {
        setLoading(true);
        setIsError({ status: false, msg: "" });
        try {
            const response = await fetch(apiUrl);
            const { drinks } = await response.json();
            setDrinkData(drinks || []);
            setLoading(false);
            if (drinks == null) {
                throw new Error('Data not found');
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setIsError({ status: true, msg: error.message || "Something went wrong" });
        }
    };

    useEffect(() => {
        const correctURL = `${URL}${searchItem}`;
        fetchDataUrl(correctURL);
    }, [searchItem]);

    return (
        <div className="Cocks">
            <h1>Drinks count: {drinkData.length}</h1>
            <form>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search something"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </form>
            {loading && <h3>Loading...</h3>}
            {!loading && isError.status && <h3>{isError.msg}</h3>}
            {!loading && !isError.status && (
                <ul className="cocktail">
                    {drinkData.map((eachDrink) => {
                        const { idDrink, strDrink, strDrinkThumb } = eachDrink;
                        return (
                            <li key={idDrink}>
                                <div>
                                    <img src={strDrinkThumb} alt={strDrink} />
                                </div>
                                <div>
                                    <h1>{strDrink}</h1>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default UseEffectExample2;
