import http from "../http-common"
var axios = require('axios');


class RectangleDataService {
    // get all rectangles
    getAll() {
        return http.get('users');
    }
    // Get individual rectangle
    getID(id) {
        return http.get(`users?id=${id}`)
    }
    // delete individual rectangle
    deleteRectangle(id) {
        return http.delete(`users/${id}`);
    }
    // add rectangle
    addRectangle(width,height,color,name){

        var qs = require('qs');
        var data = qs.stringify({
            'width': width,
            'height': height,
            'color': color,
            'name': name
        });
        var config = {
            method: 'post',
            url: 'http://localhost:3001/api/users',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
      // Post request to add Rectangle
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

        
        
    }
    // modify rectangle
    modifyRectangle(id, width, height, color, name) {
      var axios = require('axios');
      var qs = require('qs');
      var data = qs.stringify({
        'width': width,
        'height': height,
        'color': color,
        'name': name
      });
      let ID_URL = `http://localhost:3001/api/users/${id}`
      var config = {
        method: 'put',
        url: ID_URL,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    


    
}

export default new RectangleDataService();
