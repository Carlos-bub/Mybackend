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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(loginUserDto) {
        const { email, password } = loginUserDto;
        const user = await this.prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
        }
        const payload = { id: user.id, email: user.email };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    async create(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        return this.prisma.appUser.create({ data: { ...createUserDto, password: hashedPassword } });
    }
    async findOne(id) {
        return this.prisma.appUser.findUnique({ where: { id: Number(id) } });
    }
    async update(id, updateUserDto) {
        return this.prisma.appUser.update({ where: { id: Number(id) }, data: updateUserDto });
    }
    async remove(id) {
        return this.prisma.appUser.delete({ where: { id: Number(id) } });
    }
    async findAll() {
        return this.prisma.appUser.findMany();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map