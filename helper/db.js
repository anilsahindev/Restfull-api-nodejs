const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://root:root123@ds217099.mlab.com:17099/restfull-api-node', {useNewUrlParser:true, useUnifiedTopology:true})
    mongoose.connection.on('open', ()=>{
       console.log('MongoDB: connected')
    });
    mongoose.connection.on('error', (err)=>{
        console.log('MongoDB: connected error', err)
    });
};