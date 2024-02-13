import React from 'react'
import Card from '../cards'
import ProfileImage from '../profileImage'

export default function Users({filterr , tickets , users}) {

  let newSortedTickets;
  let tempSortTickets = [...tickets];

  if(filterr.ordering === "priority"){
      newSortedTickets = tempSortTickets.sort((a, b) => { return (b.priority - a.priority)});
  }else if(filterr.ordering === "title"){
      newSortedTickets =  tempSortTickets.sort((a , b) => {
          return (a.title.localeCompare(b.title));
      });
  }

  const user_s = Object.values(users);
  const mapping = {};
  user_s?.forEach((ele , i) => {
    let temp = [];

    for(let i in newSortedTickets){
      if(newSortedTickets[i].userId == ele.id){
        temp.push(newSortedTickets[i]);
      }
    }
    
    mapping[ele.id] = temp;
  })

  return (
    <>
      {user_s?.map((ele , i) => {
        return (
          <div key={i} className='grid-col'>
            <div className='grid-col-head'>
              <div style={{display:'flex' , alignItems : 'center'}}>
                <ProfileImage key={i} name={ele.name} available={true} />
                <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>{ele.name}</span>
                <span>{mapping[ele.id]?.length}</span>
              </div>
              <div>
                <i className='bx bx-plus bx-rotate-90 curp' ></i>
                <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
              </div>
            </div>
            {mapping[ele.id]?.map((ele , ii)=>{
              return (<Card key={ii} filterr={filterr} obj={ele} user={users}/>);
            })}
            
          </div>
        );
      })}
      
    </>  
  )
}
