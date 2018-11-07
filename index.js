var request = require('request');
    var headers = {'Authorization': 'Token token=<ENTER YOUR TOKEN HERE>'};    
    var dataString = ['first_name=John','last_name=Smith'];
    var options = {
        url: 'https://api.onfido.com/v2/applicants',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataString)
    };
    function callback(error, response, body) {
        console.log(body);
    }
    request(options, callback)

