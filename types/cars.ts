import { TypedObject } from "@portabletext/types";

export interface Car {
  model: string;
  slug: string;
  coverImage: string;
}

export interface SingleCar extends Car {
  content: TypedObject | TypedObject[];
  parameters: { parameterName: string; parameterValue: string }[];
  gallery: any[];
}
