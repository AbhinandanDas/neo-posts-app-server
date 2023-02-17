const express = require('express'); // express server initialised.
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models");

//routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter) // middleware

const commentsRouter = require("./routes/Comments");
app.use("/comments",commentsRouter); 

const usersRouter = require("./routes/Users")
app.use("/auth",usersRouter);

const likesRouter = require("./routes/Likes")
app.use("/like",likesRouter)

db.sequelize.sync().then((req)=>{
app.listen(process.env.PORT || 3001,() => {
    console.log("Server running on port 3001");
    });
}).catch((err) =>{
    console.log(err)
})


