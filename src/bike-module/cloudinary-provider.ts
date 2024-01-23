import { v2 } from "cloudinary";

export const CLOUDINARY = "Cloudinary";

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: "dp8rotqol",
      api_key: "999722141329929",
      api_secret: "D5Wb-OH5r43bCiHAWnnyeVfFh8I",
    });
  },
};
