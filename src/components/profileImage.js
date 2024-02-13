import React from "react";

const ProfileImage = ({ name , available}) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <div>
        <span style={{color:'#ffffff'}} className="user-profile-image">
            {firstNameInitial}
            {lastNameInitial}
        </span>
        {available && (<span className="available" style={{fontSize : '2rem' , color: '#ffc400'}}>•</span>)}
        
    </div>
  );
};

export default ProfileImage;