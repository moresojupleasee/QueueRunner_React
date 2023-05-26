import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title:'Everything in one place',
    text:'Save and find all your favourites clips at one place'},
  {
    title:'Everything in one place',
  text:'Save and find all your favourites clips at one place'},
  {
    title:'Everything in one place',
  text:'Save and find all your favourites clips at one place'},
  {
    title:'Everything in one place',
  text:'Save and find all your favourites clips at one place'},
];

const Features = () =>(
    <div className="qr__features section__padding">
      <div className="qr__features-heading"> 
      <h1 className='gradient__text'> FUTURE IS NOW SAVE AND WATCH YOUR CLIPS ON ANY DEVICES</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic doloremque excepturi exercitationem commodi</p>
       </div>
       <div className="qr__features-containers">
        {featuresData.map((item,index)=> (
          <Feature title={item.title} text={item.text} key = {item.title+index}/>
        ))}
       </div>
      </div>

)

export default Features
