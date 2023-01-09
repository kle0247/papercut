const express = require('express'); 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use("/dist", express.static("dist"));
app.use("/public", express.static("public"));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));