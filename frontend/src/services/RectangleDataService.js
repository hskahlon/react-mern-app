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
        // width=5&height=10&color=Green&name=Leah
        // return http.post(`users&width=${width}&height=${height}&color=${color}&name=${name}`);
        // return http.post('users/',
        // {
        //     width: mwidth,
        //     height: mheight,
        //     color: mcolor,
        //     name: mname
        // });

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
    


    
}

export default new RectangleDataService();

// route.post("/api/users",controller.create);
// route.get("/api/users", controller.find);
// route.put("/api/users/:id", controller.update);
// route.delete("/api/users/:id", controller.delete);