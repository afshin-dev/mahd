"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const computer_module_1 = require("./computer/computer.module");
const CookieSession = require("cookie-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(computer_module_1.ComputerModule);
    app.use(new CookieSession({ keys: ["afshin dev mahd"] }));
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map