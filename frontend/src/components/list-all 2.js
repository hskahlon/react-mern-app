import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import RectangleDataService from '../services/RectangleDataService'
function Canvas(props) {

    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = props.color
        context.fillRect(0, 0, props.width, props.height)
    }, [])

    return <canvas ref={canvasRef} {...props} />
}
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
                        <div>
                          <div class="rectangle" style={rectangleStyle}>

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
