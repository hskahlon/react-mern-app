import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import RectangleDataService from '../services/RectangleDataService'
function Canvas(props) {

    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
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
                    return (
                        // column
                        <ListGroup >
                            <a href={"/rectangles/" + rectangles._id} class="list-group-item">{rectangles.name}</a>
                            <Canvas color={rectangles.color}
                                width={rectangles.width} height={rectangles.height}
                            />
                        </ListGroup>
                    );
                })}


            </div>
        </div>
    );
}
export default ListAll;
