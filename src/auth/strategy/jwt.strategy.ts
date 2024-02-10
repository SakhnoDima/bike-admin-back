import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/user-schema";
import { Model } from "mongoose";
import { HttpErrors } from "src/helpers/handleErrors";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const accessToken = req.headers["authorization"].split(" ")[1];

    const user = await this.userModel.findById(payload.id);

    if (!user || !user.token || accessToken !== user.token) {
      throw HttpErrors(
        HttpStatus.UNAUTHORIZED,
        "The token does not belong to this user"
      );
    }

    return user._id;
  }
}
