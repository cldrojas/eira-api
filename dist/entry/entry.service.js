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
exports.EntryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../user/entities");
const typeorm_2 = require("typeorm");
const entities_2 = require("./entities");
let EntryService = class EntryService {
    constructor(entryRepository) {
        this.entryRepository = entryRepository;
    }
    async get(author) {
        return await this.entryRepository
            .createQueryBuilder('entry')
            .where({ author })
            .getMany();
    }
    async getOne(id, author) {
        const entry = await this.entryRepository
            .findOne(id)
            .then((e) => (!author ? e : !!e && author.id === e.author.id ? e : null));
        if (!author && !entry)
            throw new common_1.NotFoundException("There's no entry with that id");
        if (author && !entry)
            throw new common_1.UnauthorizedException("You're not allowed to see that!");
        return entry;
    }
    async create(dto, author) {
        const entry = this.entryRepository.create(Object.assign(Object.assign({}, dto), { author }));
        return await this.entryRepository.save(entry);
    }
    async update(id, dto, author) {
        const entry = await this.getOne(id, author);
        const editedEntry = Object.assign(entry, dto);
        return await this.entryRepository.save(editedEntry);
    }
    async delete(id, author) {
        const entry = await this.getOne(id, author);
        return await this.entryRepository.remove(entry);
    }
};
EntryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_2.Entry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntryService);
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map