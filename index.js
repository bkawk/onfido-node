var request = require('request');
var unirest = require('unirest');


var url = 'https://api.onfido.com/v2/applicants';
var method = 'POST';
var headers = {'Authorization': 'Token token=<YOUR TOKEN IN HERE>'};    
var body = {first_name:"Will",last_name:"Hill"};


//Try with request
function callback(error, response, body) {
    console.log(body);
    console.log(response);
    console.log(error);
}
request({url, method, headers, body}, callback)


// Try with unirest
unirest.post(url)
.headers(headers)
.send(body)
.end((response)=> {
    console.log(response.body);
  });

