import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.prisma.appUser.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
    }

    
    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { token };
  }

  async create(createUserDto: CreateUserDto) {
    
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.appUser.create({ data: { ...createUserDto, password: hashedPassword } });
  }

  async findOne(id: string) {
    return this.prisma.appUser.findUnique({ where: { id: Number(id) } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.appUser.update({ where: { id: Number(id) }, data: updateUserDto });
  }

  async remove(id: string) {
    return this.prisma.appUser.delete({ where: { id: Number(id) } });
  }

  async findAll() {
    return this.prisma.appUser.findMany();
  }
}
