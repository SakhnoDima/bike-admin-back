import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/user-schema";
import { Model } from "mongoose";
import { HttpErrors } from "src/helpers/handleErrors";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.userModel.findById(payload.id);
    if (!user || !user.token) {
      throw HttpErrors(HttpStatus.UNAUTHORIZED, `Login first please`);
    }

    return user;
  }
}
