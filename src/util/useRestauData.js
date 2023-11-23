

const useRestauData = () =>{
    const [filtredRestaurant, setFiltredRestaurant] = useState(null);
    const [allrestaurant, setAllRestaurant] = useState(null);

    // Api call to get the restaurant data
    useEffect(() => {
        getRestaurant();
    }, []);

    async function getRestaurant() {
        try {
            const data = await fetch(URL);
            const json = await data.json();
            setFiltredRestaurant(
                json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
                    ?.restaurants
            );
            setAllRestaurant(
                json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
                    ?.restaurants
            );
            // console.log(allrestaurant);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return {allrestaurant,filtredRestaurant};



}

export default useRestauData;