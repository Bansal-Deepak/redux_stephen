import React from 'react';

import DropDown from './DropDown';

const options=[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'A shade of blue',
        value:'blue'
    },
]
const App=()=>{
    const [selected,setSelected]=React.useState(options[0]);
    const [showDropdown,setShowDropdown]=React.useState(true);
    return(
    
    <div><button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
    {showDropdown?
        <DropDown selected={selected} onSelectedChange={setSelected} options={options}/>:null}</div>)
}

export default App;