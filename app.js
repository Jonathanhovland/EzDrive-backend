const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require('morgan')
const cors = require("cors")
const port = process.env.PORT || 3005

const userRoutes = require("./routes/users")
const vehicleRoutes = require("./routes/vehicle")
const maintenanceRoutes = require("./routes/maintenance")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors())

app.get("/", (req, res) => res.json({
    "Vehicles": "https://ezzdrive.herokuapp.com/vehicle",
    "Gas History": "https://ezzdrive.herokuapp.com/maintenance/id/1",
    "Oil Change History": "https://ezzdrive.herokuapp.com/maintenance/id/2",
    "Tire Rotation History": "https://ezzdrive.herokuapp.com/maintenance/id/3",
    "Other Maintenance History": "https://ezzdrive.herokuapp.com/maintenance/id/4",
    "Complete Vehicle History": "https://ezzdrive.herokuapp.com/maintenance"
}));

app.use("/users", userRoutes)
app.use("/vehicle", vehicleRoutes)
app.use("/maintenance", maintenanceRoutes)

app.use(notFound)

app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => console.log("server is running on port 3005"))