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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntryDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums/");
class CreateEntryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userID: { required: true, type: () => Number }, content: { required: true, type: () => String }, category: { required: true, enum: require("../enums/entry-category.enum").EntryCategory }, intensity: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateEntryDto.prototype, "userID", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "content", void 0);
__decorate([
    class_validator_1.IsEnum(enums_1.EntryCategory, {
        message: 'Invalid category, only listed categories are allowed',
    }),
    __metadata("design:type", Number)
], CreateEntryDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateEntryDto.prototype, "intensity", void 0);
exports.CreateEntryDto = CreateEntryDto;
//# sourceMappingURL=create-entry.dto.js.map