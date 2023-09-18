import { useEffect, useState } from "react";
import Cards from "../Card/Cards";


const Home = () => {
    const [cards, setcard] = useState([])
    const [selectcard, setselectcard] = useState([])
    const [remainingHours, setRemainingHours] = useState(20)
    const [totalCreditHours, setTotalCreditHours] = useState(0);
    useEffect(() => {
        fetch('datas.json')
            .then((res) => res.json())
            .then((data) => setcard(data))
    }, [])
    const handleselectcart = (card) => {
        
        const isexist =selectcard.find(item=>item.course_name==card.course_name)
        console.log(isexist)
        if(isexist){
          return  alert("You already selected this item")
        }else{
            setselectcard([...selectcard, card])
        }
        const newRemainingHours = remainingHours - card.credit_hours;

       
        if (newRemainingHours >= 0) {
          
            setselectcard([...selectcard, card]);
            setRemainingHours(newRemainingHours);
        } else {
            
            alert("You do not have enough credit hours for this course.");
        }
        const newTotalCreditHours = totalCreditHours + card.credit_hours;

       
        if (newTotalCreditHours <= 20) {
            
            setselectcard([...selectcard, card]);
            setRemainingHours(remainingHours - card.credit_hours);
            setTotalCreditHours(newTotalCreditHours);
        } else {
            
            alert("You cannot exceed a total of 20 credit hours.");
        }
       

    }
    console.log(selectcard)
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-4xl font-bold">Course Registration</h1>
            <div className="flex gap-10">
                <div className="flex-1">
                    <div className="grid grid-cols-3 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="p-5 shadow-lg">
                                <img src={card.img} alt="" />
                                <h2>{card.course_name}</h2>
                                <p>
                                    <small>{card.course_detail}</small>
                                </p>
                                <div className="flex gap-5">
                                    <h1>Price: ${card.price}</h1>
                                    <h1>Hours: {card.credit_hours} hours</h1>
                                </div>
                                <button onClick={() => handleselectcart(card)} className="rounded-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-lg shadow-md">
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="shadow-xl p-12">
                    <h1 className="text-[#2F80ED] font-bold">Credit Hour Remaining {remainingHours} hr </h1>
                    <Cards selectcard={selectcard}></Cards>
                    <hr />
                    <h1>Total Credit Hour : {totalCreditHours}</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
