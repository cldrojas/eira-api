"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditEntryDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entry_dto_1 = require("./create-entry.dto");
class EditEntryDto extends mapped_types_1.PartialType(mapped_types_1.OmitType(create_entry_dto_1.CreateEntryDto, ['userID'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditEntryDto = EditEntryDto;
//# sourceMappingURL=edit-entry.dto.js.map