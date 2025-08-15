import React from 'react';
function UserForm(){
    const [name,setName]= React.useState('');
    const [box,setSelect]= React.useState('')
    return(
        <div>
        <input type="text" placeholder="enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <select value={box} onChange={(b)=>setSelect(b.target.value)}>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
        </select>
        </div>
    )
}
export default UserForm