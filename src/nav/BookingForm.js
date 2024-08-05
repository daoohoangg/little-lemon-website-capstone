import React from 'react';
import {useState} from 'react';

const formStyle ={
    display: 'grid', 
    width: '200px', 
    gap: '20px'
};
function BookingForm(){
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
    return(
        
        // eslint-disable-next-line react/style-prop-object
        <form style={formStyle} onSubmit={clearForm}>
        {/* <h1>BookingForm</h1> */}
        <label for="res-date">Choose date</label>
        <input type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}/>

        <label for="res-time">Choose time</label>
        <select id="res-time" value={restime} onChange={(e) => setRestTime(e.target.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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
        <input type="submit" value="Make Your reservation"/>
        </form>
    )
}
export default BookingForm;