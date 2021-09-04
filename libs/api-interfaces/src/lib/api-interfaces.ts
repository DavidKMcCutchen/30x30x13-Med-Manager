export interface Med {
  id: string;
  name: string;
  genericName: string;
  dosage: string;
  halfLife: string;
  indication: string;
  stock: string;
  rx: boolean;
};

export const emptyMed = {
  id: '',
  name: '',
  genericName: '',
  dosage: '',
  halfLife: '',
  indication: '',
  stock: '',
  rx: false
};
