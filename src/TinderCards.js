import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:"https://bsmedia.business-standard.com/_media/bs/img/article/2019-11/22/full/1574363408-796.jpg"

        },
        {
            name: 'Jeff Bezos',
            url:"https://realestatemarket.com.mx/images/influencers/jeff-bezos-r.jpg"

        }
    ]);
    
    const swiped=(direction, nameToDelete)=>{
        console.log("removing"+ nameToDelete);
        //setLastDirection(direction);
    }
    const outOfFrame=(name)=>{
        console.log(name +"left the scren!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person)=>(
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=> outOfFrame(person.name)}
                    >
                    <div
                        style={{backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards 
