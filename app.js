const express = require('express');
const ProductController = require('./controller/ProductController'); // Move this line here
const AppRouting = require('./routes/AppRouting');
const app = express();

app.use("/", AppRouting);

const PORT = 3050;
app.listen(PORT, () => {
    console.log('Server is running on Port', PORT);
});
