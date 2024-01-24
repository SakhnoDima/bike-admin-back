import { HttpStatus, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";

import { User } from "src/schemas/user-schema";
import { UserRegisterDTO } from "./dto/register-dto";
import { HttpErrors } from "src/helpers/handleErrors";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async register({
    email,
    password,
  }: UserRegisterDTO): Promise<UserRegisterDTO> {
    const user = await this.userModel.findOne({ email });

    if (user) {
      HttpErrors(HttpStatus.FORBIDDEN, `Email - ${email} is already exist`);
    }

    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await this.userModel.create({ email, password: hashPass });
    return newUser;
  }
}
