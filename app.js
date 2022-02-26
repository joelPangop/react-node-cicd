const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors({
    allowedOrigins: [
        '*'
    ]
}));

app.get('/names', (req, res) => {
    res.send("Telmo");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
