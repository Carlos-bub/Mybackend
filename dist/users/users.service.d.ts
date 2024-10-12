import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        ins_user: number;
        upd_user: number;
        type: number;
        last_password_change: Date | null;
        ins_date: Date;
        upd_date: Date;
        password_validity: number | null;
        password_expires: boolean | null;
        is_active: boolean;
    }>;
    findOne(id: string): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        ins_user: number;
        upd_user: number;
        type: number;
        last_password_change: Date | null;
        ins_date: Date;
        upd_date: Date;
        password_validity: number | null;
        password_expires: boolean | null;
        is_active: boolean;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        ins_user: number;
        upd_user: number;
        type: number;
        last_password_change: Date | null;
        ins_date: Date;
        upd_date: Date;
        password_validity: number | null;
        password_expires: boolean | null;
        is_active: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        ins_user: number;
        upd_user: number;
        type: number;
        last_password_change: Date | null;
        ins_date: Date;
        upd_date: Date;
        password_validity: number | null;
        password_expires: boolean | null;
        is_active: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        ins_user: number;
        upd_user: number;
        type: number;
        last_password_change: Date | null;
        ins_date: Date;
        upd_date: Date;
        password_validity: number | null;
        password_expires: boolean | null;
        is_active: boolean;
    }[]>;
}
