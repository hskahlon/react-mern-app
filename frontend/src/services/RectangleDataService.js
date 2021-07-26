import http from "../http-common"
var axios = require('axios');


class RectangleDataService {
    // get all
    getAll() {
        return http.get('users');
    }
    getID(id) {
        return http.get(`users?id=${id}`)
    }
    deleteRectangle(id) {
        return http.delete(`users/${id}`);
    }
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
            url: 'http://localhost:3000/api/users',
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
    modifyRectangle(id, width, height, color, name) {
      var axios = require('axios');
      var qs = require('qs');
      var data = qs.stringify({
        'width': width,
        'height': height,
        'color': color,
        'name': name
      });
      let ID_URL = `http://localhost:3000/api/users/${id}`
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

// route.post("/api/users",controller.create);
// route.get("/api/users", controller.find);
// route.put("/api/users/:id", controller.update);
// route.delete("/api/users/:id", controller.delete);