import React from 'react';

import './about.css';

export function About(props) {

   console.log(props);
   

   const name = props.data.name;
   const profilepic= 'images/' + props.data.image;
   const bio = props.data.bio;
   const street = props.data.address.street;
   const city = props.data.address.city;
   const state = props.data.address.state;
   const zip = props.data.address.zip;
   const phone = props.data.phone;
   const email = props.data.email;

    return ( 
        <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    )
}