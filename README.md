
## Getting Started

First, create the .env.local file and input the following
```bash
MONGO_URI="YOUR_URI"
NODE_ENV="developemnt" 
```
NODE_ENV="production" if deployed somewhere

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
