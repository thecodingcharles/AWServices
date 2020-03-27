import ExampleServer from './server/ExampleServer';
import IndexRoutes from './routes/hello-world';

const exampleServer = new ExampleServer();
exampleServer.addRoutes("/", IndexRoutes);
exampleServer.start(3000);
