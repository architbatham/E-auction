// "dev": "nodemon --exec babel-node", Add in package json in scrpipt

// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import fileUpload from 'express-fileupload';

// const app = express();

// // Import routers
// import UserRouter from './routes/user.router.js';
// import CategoryRouter from './routes/category.router.js';
// import SubCategoryRouter from './routes/subcategory.router.js';
// import ProductRouter from './routes/product.router.js';
// import BidRouter from './routes/bid.router.js';

// // Configuration to fetch request body content: body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // To extract binary content
// app.use(fileUpload());

// // To allow cross-origin requests
// app.use(cors());

// // Route level middleware to load routes
// app.use("/user", UserRouter);
// app.use("/category", CategoryRouter);
// app.use("/subcategory", SubCategoryRouter);
// app.use("/product", ProductRouter);
// app.use("/bid", BidRouter);

// // Set the port dynamically from environment variables or default to 3001
// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

// Import routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import ProductRouter from './routes/product.router.js';
import BidRouter from './routes/bid.router.js';

// Configuration to fetch request body content: body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// To extract binary content
app.use(fileUpload());

// To allow cross-origin requests
app.use(cors());

// Route level middleware to load routes
app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.use("/product", ProductRouter);
app.use("/bid", BidRouter);

// Set the port dynamically from environment variables or default to 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
