export interface Observation {
    id: string;
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'In Progress' | 'Closed';
}
