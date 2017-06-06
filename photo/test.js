var request = require('request');
var fs = require('fs');
var option = {
    url: 'http://localhost:3000/upload',
    headers: {
        'User-Agent': 'request'
    }
};
var formData = {
    my_file: fs.createReadStream(__dirname + '/sample.csv')
};
request.post(option, function(err, res, body){
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});
