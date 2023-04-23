import { Flow } from "flow-launcher-helper";
import { IFlow, MethodsObjGeneric } from "flow-launcher-helper/lib/types";

type DefaultSettings = Record<string, string>;
type Function = (...args: unknown[]) => unknown;

type Methods = {
    [key: string]: Function
}

export class FlowPlugin<TMethods extends { [key: string]: any }, TSettings = DefaultSettings> extends Flow<keyof TMethods extends string ? string : never, TSettings> {
    
}
