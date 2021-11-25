"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const nest_access_control_1 = require("nest-access-control");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const entry_module_1 = require("./entry/entry.module");
const user_module_1 = require("./user/user.module");
require("dotenv");
const auth_module_1 = require("./auth/auth.module");
const app_roles_1 = require("./app.roles");
const constants_1 = require("./config/constants");
const database_config_1 = require("./config/database.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [database_config_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => config.get(constants_1.TYPEORM_CONFIG),
            }),
            nest_access_control_1.AccessControlModule.forRoles(app_roles_1.roles),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            entry_module_1.EntryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map