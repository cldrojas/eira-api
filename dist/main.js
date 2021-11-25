"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_fastify_1 = require("@nestjs/platform-fastify");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_swagger_1 = require("./app.swagger");
const app_module_1 = require("./app.module");
const scripts_1 = require("./scripts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const logger = new common_1.Logger();
    const config = app.get(config_1.ConfigService);
    app_swagger_1.initSwagger(app);
    scripts_1.setDefaultUser(config);
    scripts_1.generateTypeormConfigFile(config);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    await app.listen(process.env.PORT || 5000, '0.0.0.0');
    logger.verbose(`Server running on ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map