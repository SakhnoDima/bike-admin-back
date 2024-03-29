export declare const CLOUDINARY = "Cloudinary";
export declare const CloudinaryProvider: {
    provide: string;
    useFactory: () => import("cloudinary").ConfigOptions;
};
