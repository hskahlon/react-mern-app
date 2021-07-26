import React, { useState, useEffect, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import RectangleDataService from '../services/RectangleDataService'

const ListAll = props => {
    const [rectangles, setRectangles] = useState([]);
    
    useEffect(() => {
        retriveRectangles();
    }, []);
    const retriveRectangles = () => {
        RectangleDataService.getAll()
            .then(response => {
                console.log(response.data);
                setRectangles(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    // Get the id of the clicked element
    const handleClick = (val) => {
      let rect_id = val.target.id;
      window.location.href = `/rectangles/${rect_id}`

    }

    return (
        <div>
            
            <div>
                {/* for each rectangle return this */}
                {rectangles.map((rectangles) => {
                    const id = `${rectangles._id}`;
                    const rectangleStyle = {
                      height: rectangles.height,
                      width: rectangles.width,
                      backgroundColor: rectangles.color
                    }

                    return (
                        // column
                        <div key={id}>
                          <div className="rectangle" style={rectangleStyle} onClick={handleClick} id={id}>

                          </div>
                          <br></br>
                        </div>
                    );
                })}


            </div>
        </div>
    );
}
export default ListAll;
