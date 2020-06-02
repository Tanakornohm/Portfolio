const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://narongded:champ1234@cluster0-t6abg.mongodb.net/data2', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose;