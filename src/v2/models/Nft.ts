export interface Metadata {
  name: string;
  description: string;
  externalUri?: string;
  mediaUri?: string;
  image: string;
  properties: {
    [key: string]: Property;
  };
}

export interface Property {
  type: string;
  value: string;
}

export class Dummy {}
