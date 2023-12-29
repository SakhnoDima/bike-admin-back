import { HttpException } from "@nestjs/common";

export const HttpErrors = (status: number, message: string): Error => {
  throw new HttpException(
    {
      status: status,
      message: message,
    },
    status
  );
};
