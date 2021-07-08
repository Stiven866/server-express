const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/add", (req, res, next) => {
	const { num1, num2 } = req.query;
	res.json({
		result: parseFloat(num1) + parseFloat(num2),
		status: "ok",
	});
	next();
});
app.get("/sub", (req, res, next) => {
	const { num1, num2 } = req.query;
	res.json({
		result: parseFloat(num1) - parseFloat(num2),
		status: "ok",
	});
	next();
});

app.get("/mult", (req, res, next) => {
	const { num1, num2 } = req.query;
	res.json({
		result: parseFloat(num1) * parseFloat(num2),
		status: "ok",
	});
	next();
});

app.get("/div", (req, res, next) => {
	const { num1, num2 } = req.query;
	if (num2 === "0") {
		res.json({
			result: 0,
			status: "error",
		});
		next();
	} else {
		res.json({
			result: parseFloat(num1) / parseFloat(num2),
			status: "ok",
		});
		next();
	}
});

app.listen(9090, () => {
	console.log("Server on port 9090");
});
