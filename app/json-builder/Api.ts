export class Api { 
    name:string;
    context:string;
    description:string;
    version:number;
    provider:string;
    tags:string[];
    transport:string[];
    visibility:string;
    tiers:string[];
    cacheTimeout:number;
    visibleRoles:string[];
    visibleTenants:string[];
    sequences:string[];
    subscriptionAvailability:string;
    technicalOwner:string;
    technicalOwnerEmail:string;
    businessOwner:string;
    businessOwnerEmail:string;
    destinationStatsEnabled:boolean;
    responseCaching:boolean;
    defaultVersion:boolean;
    gatewayEnvironments:string;
}

// https://docs.wso2.com/display/AM1100/Create+and+Publish+an+API