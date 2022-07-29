import express from "express";
import morgan from "morgan";
import cors from "cors";
import { AuthRouter } from "./routes/auth.router";
import { UserRouter } from "./routes/user.router";
import { ConfigServer } from "./config/config";

class Server extends ConfigServer{
    public app:express.Application = express();
    private port:number = this.getNumberEnv("PORT");;

    constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    
        this.connectionDB();

        this.app.use(morgan("dev"));
        this.app.use(cors());

        this.app.use("/api", this.routers());
        this.listen();
    }//constructor

    routers(): Array<express.Router> {
        return [
          new AuthRouter().router,
          new UserRouter().router
        ];
    }//routers

    async connectionDB(){
      try {
        const AppDataSource = this.typeORMConfig;
        await AppDataSource.initialize();
        console.log("Successful db connection");
      } catch (error) {
        console.error(error);
      }
    }//connectionDB

    public listen() {
        this.app.listen(this.port, () => {
          console.log("Server listening on port =>" + this.port);
        });
    }//listen

}//Server

new Server();