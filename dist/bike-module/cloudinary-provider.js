"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = exports.CLOUDINARY = void 0;
const cloudinary_1 = require("cloudinary");
exports.CLOUDINARY = "Cloudinary";
exports.CloudinaryProvider = {
    provide: exports.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: "dp8rotqol",
            api_key: "999722141329929",
            api_secret: "D5Wb-OH5r43bCiHAWnnyeVfFh8I",
        });
    },
};
//# sourceMappingURL=cloudinary-provider.js.map