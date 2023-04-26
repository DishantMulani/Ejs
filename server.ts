import express, { Request, Response } from "express";
// import ejs from "ejs"
import mustacheExpress from "mustache-express";

const app: express.Application = express();

const hostName: string = "127.0.0.1";
const port = 2508;

// app.set("view engine", "ejs");


app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

// app.get("/", (req: Request, res: Response) => {
//     let model = { x: 100, y: 20 };
//     res.render("index", model);
// })

// app.get("/login", (req: Request, res: Response) => {
//     let model = { uname: "dishant", upwd: "123456" };
//     res.render("login", model);
// })

app.get("/student", (req: Request, res: Response) => {
    let model = {
        sutdentId: "S001",
        studentName: "Dishant",
        studentMarks: 50,
        subjects: [
            { name: "math", marks: "80" },
            { name: "science", marks: "70" },
            { name: "english", marks: "60" },
        ]
    };
    res.render("student", model);
})


if (hostName && port) {
    app.listen(port, hostName, () => {
        console.log(`server start at http://${hostName}:${port}`);
    })
}