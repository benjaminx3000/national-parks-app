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
        console.log('Getting ', url);
        var xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('success', JSON.parse(xhr.responseText));
                callback(JSON.parse(xhr.responseText));
            }
        }

        xhr.open("GET", url, true);
        xhr.send(null);
    }

    //////////////
};

export {httpService}
