# AWS TS services example

### Overview
This project works with a express server to simulate the AWS Lambda functions.

```
 ├──src
    ├──public
    │   ├──routes
    │   │   └──hello-world.ts // routes example.
    │   ├──server 
    │   │   └──ExampleServer.ts // express server
    │   └──start.ts // express server launcher
    │
    └──services
        └──hello-world.ts // this is a lambda function example.
```

you should install the dependencies running:
```bash
npm install
```
or
```bash
yarn install
```

to run the server to test your services run:

```bash
yarn start-dev
```

to build your services run: 
```bash
yarn build
```
