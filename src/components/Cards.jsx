import React from 'react';
import '../App.css';

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Cards() {
  const data = [
    { id: 1, title: 'title 1', description: 'description 1', imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300' },
    { id: 2, title: 'title 2', description: 'description 2', imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300' },
    { id: 3, title: 'title 3', description: 'description 3', imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=300' },
    { id: 4, title: 'title 4', description: 'description 4', imageUrl: 'https://images.unsplash.com/photo-1557682224-5b859029ba54?w=300' },
    { id: 5, title: 'title 5', description: 'description 5', imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300' },
  ];

  return (
    <div className="cards-container">
      {data.map((item) => (
        <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          imageUrl={item.imageUrl} 
        />
      ))}
    </div>
  );
}

export default Cards;