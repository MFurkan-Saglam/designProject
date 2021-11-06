import React from "react";
import { Container } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";


const PhotoGrid = ({ setSelectedPhoto }) => {
  const { docs } = useFirestore("photos");

  return (
    <div className="photo-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="photo-wrap"
            key={doc.id}
            onClick={() => setSelectedPhoto(doc.url)}
          >
            <img src={doc.url} alt="uploaded photo" />
            
           
          </div>
        ))}
    </div>
  );
};

export default PhotoGrid;
