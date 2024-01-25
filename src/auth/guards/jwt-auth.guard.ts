import { HttpStatus, Injectable } from "@nestjs/common";
import { JsonWebTokenError } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { HttpErrors } from "src/helpers/handleErrors";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (info instanceof JsonWebTokenError) {
      throw HttpErrors(HttpStatus.UNAUTHORIZED, `Expire token`);
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
