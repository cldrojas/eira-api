"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nest_access_control_1 = require("nest-access-control");
const app_roles_1 = require("../app.roles");
const decorators_1 = require("../common/decorators");
const entities_1 = require("../user/entities");
const dtos_1 = require("./dtos");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    constructor(entryService, rolesBuilder) {
        this.entryService = entryService;
        this.rolesBuilder = rolesBuilder;
    }
    async get(author) {
        const data = await this.entryService.get(author);
        return { data };
    }
    async getOne(id) {
        const data = await this.entryService.getOne(id);
        return { data };
    }
    async create(dto, author) {
        const data = await this.entryService.create(dto, author);
        return { message: 'Entry created', data };
    }
    async update(id, dto, author) {
        let data;
        if (this.rolesBuilder.can(author.roles).updateAny(app_roles_1.AppResources.ENTRY).granted) {
            data = await this.entryService.update(id, dto);
        }
        else {
            data = await this.entryService.update(id, dto, author);
        }
        return { message: 'Entry updated', data };
    }
    async delete(id, author) {
        const data = await this.entryService.delete(id, author);
        return { message: 'Entry deleted', data };
    }
};
__decorate([
    decorators_1.Auth({ action: 'read', possession: 'own', resource: app_roles_1.AppResources.ENTRY }),
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "get", null);
__decorate([
    decorators_1.Auth({ action: 'read', possession: 'own', resource: app_roles_1.AppResources.ENTRY }),
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getOne", null);
__decorate([
    decorators_1.Auth({ action: 'create', possession: 'own', resource: app_roles_1.AppResources.ENTRY }),
    common_1.Post(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __param(1, decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateEntryDto, entities_1.User]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "create", null);
__decorate([
    decorators_1.Auth({ action: 'update', possession: 'own', resource: app_roles_1.AppResources.ENTRY }),
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.EditEntryDto,
        entities_1.User]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "update", null);
__decorate([
    decorators_1.Auth({ action: 'delete', possession: 'own', resource: app_roles_1.AppResources.ENTRY }),
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __param(1, decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, entities_1.User]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "delete", null);
EntryController = __decorate([
    common_1.Controller('entries'),
    __param(1, nest_access_control_1.InjectRolesBuilder()),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        nest_access_control_1.RolesBuilder])
], EntryController);
exports.EntryController = EntryController;
//# sourceMappingURL=entry.controller.js.map