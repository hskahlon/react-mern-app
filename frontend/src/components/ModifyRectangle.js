import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import RectangleDataService from '../services/RectangleDataService'
const ModifyRectangle = props => {
  // intially fill with current values
  const intialRectangleState = {
    id: null,
    name: "",
    height: "",
    width: "",
    color: "",
  };
  // 
  const [currentInfo, updateInfo] = useState(intialRectangleState);
  const getRectangle = id => {
    RectangleDataService.getID(id)
      .then(response => {
        updateInfo(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getRectangle(props.match.params.id);
  }, [props.match.params.id]);
  const handleSubmit = (event) => {
    event.preventDefault()
    let height = event.target[0].value
    let width = event.target[1].value
    let color = event.target[2].value
    let name = event.target[3].value
    if (height.length === 0 ) {
      height = event.target[0].placeholder
    }
    if (width.length === 0) {
      width = event.target[1].placeholder
    }
    if (color.length === 0) {
      color = event.target[2].placeholder
    }
    if (name.length === 0) {
      name = event.target[3].placeholder
    }
    // if (height.length === 0 || width.length === 0 || color.length === 0 || name.length === 0) {
    //   alert('Please enter valid values')
    // }
    else {
      console.log(height, width, color, name);
      RectangleDataService.modifyRectangle(props.match.params.id, width, height, color, name);
      window.location.href = "/rectangle-list"
    }


  }
  return (
    <div className="App">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formHeight">
          <Form.Label>Height</Form.Label>
          <Form.Control type="number" placeholder={currentInfo.height} />
          <Form.Control.Feedback type="invalid">
            Please enter a number
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formWidth">
          <Form.Label>Width</Form.Label>
          <Form.Control type="number" placeholder={currentInfo.width} />
        </Form.Group>

        <Form.Label htmlFor="exampleColorInput">Color</Form.Label>
        <Form.Control
          type="color"
          id="formColor"
          defaultValue={currentInfo.color}
          title="Choose your color"
        />
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="string" placeholder={currentInfo.name} />
        </Form.Group>


        <Button variant="primary" type="submit">
          Add Rectangle
        </Button>
      </Form>

    </div>
  );

}
// class ModifyRectangle extends React.Component {
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     let height = event.target[0].value
//     let width = event.target[1].value
//     let color = event.target[2].value
//     let name = event.target[3].value

//     if (height.length === 0 || width.length === 0 || color.length === 0 || name.length === 0) {
//       alert('Please enter valid values')
//     }
//     else {
//       console.log(height, width, color, name);
//       RectangleDataService.addRectangle(width, height, color, name);
//     }
//     // redirect to home
//     window.location.href = "/rectangle-list"

//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div className="App">
        
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group className="mb-3" controlId="formHeight">
//             <Form.Label>Height</Form.Label>
//             <Form.Control type="number" placeholder={this.props.height} />
//             <Form.Control.Feedback type="invalid">
//               Please enter a number
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formWidth">
//             <Form.Label>Width</Form.Label>
//             <Form.Control type="number" placeholder={this.props.width}  />
//           </Form.Group>

//           <Form.Label htmlFor="exampleColorInput">Color</Form.Label>
//           <Form.Control
//             type="color"
//             id="formColor"
//             defaultValue={this.props.color}
//             title="Choose your color"
//           />
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="string" placeholder={this.props.name}  />
//           </Form.Group>


//           <Button variant="primary" type="submit">
//             Add Rectangle
//           </Button>
//         </Form>

//       </div>
//     )
//   }
// };

export default ModifyRectangle;
