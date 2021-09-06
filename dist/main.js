"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const logger = new common_1.Logger();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(process.env.PORT || 3000);
    logger.verbose(`Server running on ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map