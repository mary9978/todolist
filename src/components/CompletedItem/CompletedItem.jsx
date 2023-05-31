import React,{useState} from 'react';
import Select from 'react-select';
function CompletedItem({selectedOption,onChangeFilterList,status,setStatus,filterTodos,remaining,favorite}) {
    const option=[
        {value:'All',label:'All'},
        {value:'complete',label:'complete'},
        {value:'ucomplete',label:'ucomplete'}
    ]
    if(!remaining) return <h1>no item</h1>
    return (
        <div>
           <h6>you have {remaining} task to do</h6>
           <h6>you have {favorite} Favorite task</h6>
           <Select 
           onChange={onChangeFilterList}
           options={option}
           value={status}
           />
        </div>
    )
}

export default CompletedItem
