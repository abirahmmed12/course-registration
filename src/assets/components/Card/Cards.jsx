/* eslint-disable react/prop-types */


const Cards = ({selectcard}) => {
    // console.log(props.selectcard)
    return (
        <div>
            
             {
                selectcard.map(card=>(
                    <li key={card.course_name}>{card.course_name}</li>

                ))
             }
             

        </div>
    );

};

export default Cards;