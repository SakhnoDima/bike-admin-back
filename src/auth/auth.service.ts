import { HttpStatus, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { User } from "src/schemas/user-schema";
import {
  UserRegisterRequestDTO,
  UserRegisterResponseDTO,
  UserWithTokenDTO,
} from "./dto/register-dto";
import { HttpErrors } from "src/helpers/handleErrors";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register({
    email,
    password,
  }: UserRegisterRequestDTO): Promise<UserRegisterResponseDTO> {
    const user = await this.userModel.findOne({ email });

    if (user) {
      HttpErrors(HttpStatus.FORBIDDEN, `Email - ${email} is already in use`);
    }

    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await this.userModel.create({ email, password: hashPass });
    return newUser;
  }
  async logIn({
    email,
    password,
  }: UserRegisterRequestDTO): Promise<UserWithTokenDTO> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      HttpErrors(HttpStatus.FORBIDDEN, `Email or Password is wrong`);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      HttpErrors(HttpStatus.FORBIDDEN, `Email or Password is wrong`);
    }

    const payload = { email: user.email, id: user._id };
    const token = this.jwtService.sign(payload);

    await this.userModel.findByIdAndUpdate(user._id, {
      token,
    });

    return {
      email: user.email,
      token,
    };
  }
  async logOut(id: string) {
    await this.userModel.findByIdAndUpdate(id, {
      token: null,
    });
    return {
      message: "User successfully logout",
    };
  }
}
