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
const dtos_1 = require("./dtos");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    constructor(entryService) {
        this.entryService = entryService;
    }
    async getMany() {
        return await this.entryService.getMany();
    }
    getOne(id) {
        return this.entryService.getOne(id);
    }
    create(dto) {
        return this.entryService.create(dto);
    }
    update(id, dto) {
        return this.entryService.update(id, dto);
    }
    delete(id) {
        return this.entryService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/entry.entity").Entry] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getMany", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/entry.entity").Entry }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntryController.prototype, "getOne", null);
__decorate([
    common_1.Post(':id'),
    openapi.ApiResponse({ status: 201, type: [require("./entities/entry.entity").Entry] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateEntryDto]),
    __metadata("design:returntype", void 0)
], EntryController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.EditEntryDto]),
    __metadata("design:returntype", void 0)
], EntryController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntryController.prototype, "delete", null);
EntryController = __decorate([
    common_1.Controller('entries'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
exports.EntryController = EntryController;
//# sourceMappingURL=entry.controller.js.map