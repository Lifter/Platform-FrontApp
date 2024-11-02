export interface Application {
    id: number;
    name: string;
    status: 'Created' | 'Project' | 'Testing' | 'PreProd' | 'Prod';
    author: string;
  }