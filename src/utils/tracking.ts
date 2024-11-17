import axios from 'axios';

export interface TrackingUpdate {
    timestamp: string;
    status: string;
    location: string;
    details?: string;
}

export interface TrackingResult {
    trackingNumber: string;
    carrier: string;
    status: string;
    estimatedDelivery?: string;
    currentLocation?: string;
    updates: TrackingUpdate[];
    lastUpdated: string;
}

export interface CarrierConfig {
    name: string;
    pattern: RegExp;
    endpoint: string;
    apiKey: string;
}


const carriers: CarrierConfig[] = [
    /*{
        name: 'USPS',
        pattern: /^(94|93|92|94|95)[0-9]{20}$/,
        endpoint: 'https://secure.shippingapis.com/ShippingAPI.dll',
        apiKey: import.meta.env.VITE_USPS_API_KEY
    },
    {
        name: 'FedEx',
        pattern: /^(\d{12}|\d{15})$/,
        endpoint: 'https://apis.fedex.com/track/v1/trackingnumbers',
        apiKey: import.meta.env.VITE_FEDEX_API_KEY
    },
    {
        name: 'DHL',
        pattern: /^[0-9]{10}$/,
        endpoint: 'https://api-eu.dhl.com/track/shipments',
        apiKey: import.meta.env.VITE_DHL_API_KEY
    }*/
];

export class TrackingService {
    private static instance: TrackingService;
    private cache: Map<string, { result: TrackingResult; timestamp: number }>;
    private cacheExpiration = 5 * 60 * 1000; // 5 minutes

    private constructor() {
        this.cache = new Map();
    }

    public static getInstance(): TrackingService {
        if (!TrackingService.instance) {
            TrackingService.instance = new TrackingService();
        }
        return TrackingService.instance;
    }

    private detectCarrier(trackingNumber: string): CarrierConfig | null {
        return carriers.find(carrier => carrier.pattern.test(trackingNumber)) || null;
    }

    private async fetchUSPSTracking(trackingNumber: string, apiKey: string): Promise<TrackingResult> {
        const response = await axios.get(
            `https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<TrackRequest><TrackID>${trackingNumber}</TrackID></TrackRequest>`,
            {
                headers: { 'X-API-Key': apiKey }
            }
        );
        // Transform USPS response to TrackingResult
        return this.transformUSPSResponse(response.data);
    }

    private async fetchFedExTracking(trackingNumber: string, apiKey: string): Promise<TrackingResult> {
        const response = await axios.post(
            'https://apis.fedex.com/track/v1/trackingnumbers',
            {
                trackingInfo: [{ trackingNumberInfo: { trackingNumber } }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        // Transform FedEx response to TrackingResult
        return this.transformFedExResponse(response.data);
    }

    private async fetchDHLTracking(trackingNumber: string, apiKey: string): Promise<TrackingResult> {
        const response = await axios.get(
            `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'application/json'
                }
            }
        );
        // Transform DHL response to TrackingResult
        return this.transformDHLResponse(response.data);
    }

    private transformUSPSResponse(data: any): TrackingResult {
        // Implementation would parse USPS XML response
        throw new Error('USPS transformation not implemented');
    }

    private transformFedExResponse(data: any): TrackingResult {
        // Implementation would parse FedEx JSON response
        throw new Error('FedEx transformation not implemented');
    }

    private transformDHLResponse(data: any): TrackingResult {
        // Implementation would parse DHL JSON response
        throw new Error('DHL transformation not implemented');
    }

    public async track(trackingNumber: string): Promise<TrackingResult> {
        // Check cache first
        const cached = this.cache.get(trackingNumber);
        if (cached && Date.now() - cached.timestamp < this.cacheExpiration) {
            return cached.result;
        }

        const carrier = this.detectCarrier(trackingNumber);
        if (!carrier) {
            throw new Error('Invalid tracking number format');
        }

        try {
            let result: TrackingResult;

            switch (carrier.name) {
                case 'USPS':
                    result = await this.fetchUSPSTracking(trackingNumber, carrier.apiKey);
                    break;
                case 'FedEx':
                    result = await this.fetchFedExTracking(trackingNumber, carrier.apiKey);
                    break;
                case 'DHL':
                    result = await this.fetchDHLTracking(trackingNumber, carrier.apiKey);
                    break;
                default:
                    throw new Error('Unsupported carrier');
            }

            // Update cache
            this.cache.set(trackingNumber, {
                result,
                timestamp: Date.now()
            });

            return result;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Tracking request failed: ${error.message}`);
            }
            throw error;
        }
    }

    public validateTrackingNumber(trackingNumber: string): boolean {
        return carriers.some(carrier => carrier.pattern.test(trackingNumber));
    }
}