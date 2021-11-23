import React from 'react';


const DropDown=({options,selected,onSelectedChange})=>{
    React.useEffect(()=>{
        const onBodyClick=(event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            console.log('body click');
        }
        document.body.addEventListener('click',onBodyClick,
        {
            capture:true
        })
        return ()=>{
            document.body.removeEventListener('click',onBodyClick,{capture:true});
        }
    },[]);
    const ref=React.useRef();
    console.log(ref.current);
return(<div ref={ref}>
    <h3>Select a Color</h3>
    <h4>{selected.label}</h4>
    {options.map(option=>{
        if(option===selected){
            return null;
        }
        return (<div key={option.label} onClick={()=>{onSelectedChange(option)}}>{option.label}</div>)
    })}
</div>)
}
export default DropDown;