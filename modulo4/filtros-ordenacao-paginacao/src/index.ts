import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByName } from "./endpoints/getUsersByName"
import { getUsersByType } from "./endpoints/getUsersByType"

app.get("/users", getUsersByName)
app.get("/users/:type", getUsersByType)
// app.get("/users", getAllUsers)