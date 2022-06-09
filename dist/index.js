"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
require("reflect-metadata");
//variables
const app = (0, express_1.default)();
const port = 3000; // default port to listen
//midleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
// define a route handler for the default home page
app.use('/api-test', user_routes_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map