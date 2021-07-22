import React, {useState, useEffect} from 'react';
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
    const refreshList = () => {
    retriveRectangles();
    };
    const deleteRectangle = (id) => {
        RectangleDataService.deleteRectangle(id);
        refreshList();
    }
    return (
        <div>
           
                
                
                
            <div className="row">
                {/* for each rectangle return this */}
                {rectangles.map((rectangles) => {
                    const id = `${rectangles._id}`;
                    return (
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{rectangles.name}</h5>
                                    <p className="card-text">
                                        <strong>Color: </strong>{rectangles.color}<br />
                                        <strong>Width: </strong>{rectangles.width}<br />
                                        <strong>Height: </strong>{rectangles.height}
                                    </p>
                                    <div className="rectangle">
                                        hey
                                    </div>
                                    <div className="row">
                                        <Link to={"/rectangles/" + rectangles._id} className="btn btn-primary btn-lg btn-block">
                                            View Details
                                        </Link>
                                        {/* <Link to={"/delete-rectangle/" + rectangles._id} className="btn btn-danger col-lg-5 mx-1 mb-1">
                                            DELETE RECTANGLE
                                        </Link> */}
                                        {/* <a target="" href={"https://www.google.com/maps/place/" + id} className="btn btn-danger col-lg-5 mx-1 mb-1">Delete Rectangle</a> */}
                                        
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
