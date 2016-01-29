// var reposForUser = function(username) {
//     let url = 'https://api.github.com/users/' + username + '/repos';
//     return fetch(url).then(response => response.json());
// }

//export {reposForUser}


var httpService = new HttpService();

function HttpService() {

    var service = {
        get: get
    };

    ///////////////////

    return service;
    // TODO: return a promise
    function get(url, callback) {
        var xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(JSON.parse(xhr.responseText));
            }
        }

        xhr.open("GET", url, true);
        xhr.send(null);
    }

    //////////////
};

export {httpService}
