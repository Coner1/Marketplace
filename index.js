import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(cors());

// Routes
import routes from "./routes/productRoutes.js";
app.use("/", routes);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
