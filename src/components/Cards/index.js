import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import "./styles.css"
import instance from '../../axios'

function Cards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await instance.get('/sofista/cards')
            setPeople(req.data)
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return (
        <div className="cards">
            <div className="cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name, person.coach, person.price)}
                        onCardLeftScreen={() => outOfFrame(person.name, person.coach, person.price)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card" >
                            <h3>{person.name}</h3>
                            <h2>€{person.price}/h</h2>
                            <p>{person.coach}</p>
                        </div>
                    </TinderCard>                   
                ))}
            </div>
            
        </div>
        
    )
}

export default Cards
