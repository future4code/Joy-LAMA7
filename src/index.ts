import app from "./controller/app";
import { bandRouter } from "./controller/routes/bandRouter";
import { showRouter } from "./controller/routes/show";
import { userRouter } from "./controller/routes/userRouter";

app.use("/user", userRouter)
app.use("/band", bandRouter)
app.use("/show", showRouter)