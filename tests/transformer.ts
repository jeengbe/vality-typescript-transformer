import { Transformer } from "ts-transformer-testing-library";
import valityTransformer from "../src";

export const transformer = new Transformer().addTransformer(valityTransformer);
