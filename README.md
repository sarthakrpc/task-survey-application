
## Getting Started

First, create the `.env.local` file and input the following
```bash
MONGO_URI={YOUR_MONGODB_URI}
NODE_ENV="development" 
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Check at what port the next js is running at

Go to `src/components/checkEnvironment.tsx` and change the port or URL as needed

Next open the localhost or hosted webpage in web browser to see the result

The data is loaded from database. According to the given schema in the mongoose model more insertion of survey question is possible. The API to that is also built and stored in api folder.

The APIs for survey data insertion is built and working properly.

The session is entirely controlled by frontend in this web-app.

The web app is built over Next JS for front-end as well as back-end APIs and Mongoose (MongoDB Atlas) is used to store the customer survey data. 
