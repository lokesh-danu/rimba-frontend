export interface ContractDetails {
    id: string;
    contractNumber: string;
    month: string;
    year: string;
    buyer: string;
    seller: string;
    quantity: number;
    product: string;
    billOfLading: string;
    documentId: string;
    portOfLoading: string;
    portOfDischarge: string;
    isAllocated: boolean;
    isINS: boolean;
}
  
export interface Allocation {
    id: string;
    contractId: string;
    contractNumber: string;
    month: string;
    warehouse: string;
    allocatedQuantity: number;
    ghg: number;
    groupId: string;
    outgoingSD: string;
    outgoingSDUrl: string;
    outgoingSDDocId: string;
}
  
export interface Warehouse {
    id: string;
    name: string;
} 
  