import React from 'react';
import {useState} from 'react';

const formStyle ={
    display: 'grid', 
    width: '200px', 
    gap: '20px'
};

function BookingForm(props){
    const [date,setDate] = useState("");
    const [restime, setRestTime] = useState("");
    const [guests,setGuests] = useState ("");
    const [occasion,setOccasion] = useState("");

    const clearForm = (e)=>{
        e.preventDefault();
        setDate('');
        setGuests('');
        setOccasion('');
        setRestTime('');
        console.log("succesfully");
    }
    const handleSubmit = (e) =>{    
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
            <form style={formStyle} onSubmit={handleSubmit}>
            {/* <h1>BookingForm</h1> */}
            <label for="res-date">Choose date</label>
            <input type="date" 
            id="res-date" 
            value={date} 
            onChange={(e) => handleChange(e.target.value)}/>

            <label for="res-time">Choose time:</label>
            <select id="res-time" value={restime} onChange={(e) => setRestTime(e.target.value)}>
                <option value="" >Select a Time</option>
                {
                    props.availableTimes.availableTimes.map(availableTimes => {return <option key = 
                    {availableTimes}>
                        {availableTimes}
                    </option>})
                }
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}/>
            <label for="occasion">Occasion</label>
            <select id="occasion"
            value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onChange={(e)=>clearForm}/>
            </form>
            </section>
        </header>
        // eslint-disable-next-line react/style-prop-object
        
    )
}
export default BookingForm;