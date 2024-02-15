import { TypedObject } from "@portabletext/types";

export interface Car {
  model: string;
  slug: string;
  parameters: { parameterName: string; parameterValue: string }[];
}

export interface SingleCar extends Car {
  content: TypedObject | TypedObject[];
  gallery: string[];
}
