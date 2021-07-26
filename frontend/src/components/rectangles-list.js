import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RectangleDataService from '../services/RectangleDataService'

const RectangleList = props => {
    const [rectangles, setRectangles] = useState([]);
    useEffect(() => {
        retriveRectangles();
    },[]);
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
        // refresh if needed


  const handleClick = (val) => {
    let rect_id = val.target.id;
    window.location.href = `/rectangles/${rect_id}`

  }
    return (
        <div>
           
                
                
                
            <div className="row">
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
                        <div className="col-lg-4 pb-1" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{rectangles.name}</h5>
                                    <p className="card-text">
                                        <strong>Color: </strong>{rectangles.color}<br />
                                        <strong>Width: </strong>{rectangles.width}<br />
                                        <strong>Height: </strong>{rectangles.height}
                                        
                                    </p>
                                    
                                    <div className="rectangle">
                                        <div className="rectangle" style={rectangleStyle} onClick={handleClick} id={id}>

                                        </div>
                                        <br></br>
                                        
                                    </div>
                                    {/* row */}
                                    <div className="row">
                                        <Link to={"/rectangles/" + rectangles._id} className="btn btn-primary btn-lg btn-block">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    );
}
export default RectangleList;
