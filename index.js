var request = require('request');
var unirest = require('unirest');


// Try with request

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
    console.log(response);
    console.log(error);
}
request(options, callback)



// Try with unirest


function callback(error, response, body) {
        console.log(body);
        console.log(response);
        console.log(error);
}

unirest
.post('https://api.onfido.com/v2/applicants')
.headers({'Authorization': 'Token token=<ENTER YOUR TOKEN HERE>'})
.send({first_name:"Will",last_name:"Hill"})
.end(callback)

