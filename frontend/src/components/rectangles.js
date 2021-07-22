import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RectangleDataService from '../services/RectangleDataService'
const Rectangles = props => {
    const intialRectangleState = {
        id: null,
        name: "",
        address: {},
        cuisine: "",
        reviews: []
    };
    const [rectangle, setRectangle] = useState(intialRectangleState);
    const getRectangle = id => {
        RectangleDataService.getID(id)
            .then(response => {
                setRectangle(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        getRectangle(props.match.params.id);
    }, [props.match.params.id]);
    const deleteRectangle = (rectangleID) => {
        RectangleDataService.deleteRectangle(rectangleID)
        .then(response => {
            window.location.href = "/rectangle-list"
        
        })
    .catch(e => {
        console.log(e);
    });
    };
    return (
        <div className="App">
            <div className="col-lg-4 pb-1">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{rectangle.name}</h5>
                        <p className="card-text">
                            <strong>Color: </strong>{rectangle.color}<br />
                            <strong>Width: </strong>{rectangle.width}<br />
                            <strong>Height: </strong>{rectangle.height}
                        </p>
                        <a onClick={() => deleteRectangle(rectangle._id)} className="btn btn-danger btn-lg btn-block">Delete</a>
                        
                        <div className="row">
                            {/* <Link to={"/rectangle/:" + rectangle._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                                View Details
                            </Link> */}
                            {/* <Link to={"/delete-rectangle/" + rectangle._id} className="btn btn-danger btn-lg btn-block">
                                DELETE RECTANGLE
                            </Link> */}
                            {/* <a target="" href={"https://www.google.com/maps/place/" + id} className="btn btn-danger col-lg-5 mx-1 mb-1">Delete Rectangle</a> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Rectangles;
