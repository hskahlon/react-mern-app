import React from 'react';
import { Form, Button} from 'react-bootstrap';
import RectangleDataService from '../services/RectangleDataService'
class AddRectangle extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        let height = event.target[0].value
        let width = event.target[1].value
        let color = event.target[2].value
        let name = event.target[3].value
        
        if (height.length === 0 || width.length === 0 || color.length === 0 || name.length === 0){
            alert('Please enter valid values')
        }
        else {
            console.log(height,width,color,name);
            RectangleDataService.addRectangle(width, height, color, name);
        }
        // redirect to home
        window.location.href = "/rectangle-list"

    }
    render() {
        return (
                <div className="App">

                    <Form onSubmit={this.handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" placeholder="Enter Height"  />
                            <Form.Control.Feedback type="invalid">
                                Please enter a number
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formWidth">
                            <Form.Label>Width</Form.Label>
                            <Form.Control type="number" placeholder="Enter Width" />
                        </Form.Group>

                        <Form.Label htmlFor="exampleColorInput">Color</Form.Label>
                        <Form.Control
                            type="color"
                            id="formColor"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="string" placeholder="Enter Name" />
                        </Form.Group>
                    
                    
                        <Button variant="primary" type="submit">
                            Add Rectangle
                        </Button>
                    </Form>

                </div>
        )
}};

export default AddRectangle;
