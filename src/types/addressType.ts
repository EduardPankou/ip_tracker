export interface addressType {
    latitude: number;
    longitude: number;
    success: boolean;
    city: string;
    country: string;
    postal: string;
    ip: string;
    connection: {
        isp: string;
    };
}
