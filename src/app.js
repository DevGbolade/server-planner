import { config } from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import Router from "./routes";

config();

// Create global app object
const app = express();

app.use(cors());

const isProduction = process.env.NODE_ENV === "production";

// Normal express config defaults
app.use(morgan(isProduction ? "combined" : "dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Base Route Response
app.use("/api/v1", Router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/**
 * development error handler
   will print stacktrace
*/
if (!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message:
        err.message == "Not Found"
          ? "No such route on this server"
          : "Internal Server Error",
      status: "error",
      data: null,
    });
  });
}
/**
 *
   production error handler
   no stacktraces leaked to user
*/

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message:
      err.message == "Not Found"
        ? "No such route on this server"
        : "Internal Server Error",
    status: 500,
    data: null,
  });
});

export default app;
