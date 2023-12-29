"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrors = void 0;
const common_1 = require("@nestjs/common");
const HttpErrors = (status, message) => {
    throw new common_1.HttpException({
        status: status,
        message: message,
    }, status);
};
exports.HttpErrors = HttpErrors;
//# sourceMappingURL=handleErrors.js.map