export function update(inputs: any, name: string, newValue: any){
    return {...inputs, [name]:{...inputs[name], value: newValue}}
}

export function toValues(inputs:any){
    const data:any = {};
    for (var name in inputs){
        data[name] = inputs[name].value;
    }
    return data;
}

export function updateAll(inputs: any, newValues: any){
    const newInputs: any ={};
    for (var name in inputs ){
        newInputs[name] = {...inputs[name], value: newValues[name]};
    }
    return newInputs;
}

export function validate(inputs: any, name: string){
    if (!inputs[name].validation){
        return inputs;
    }
    const isInvalid = !inputs[name].validation(inputs[name].value);
    return{...inputs,[name]:{...inputs[name], invalid: isInvalid.toString()}}
}

export function toDirty(inputs: any, name: string){
return {...inputs, [name]:{...inputs[name], dirty: "true" } };
}

export function updateAndValidate(inputs: any, name: string, newValue:any){
    const dataUpdated = update(inputs, name, newValue);
    const dataValidate = validate(dataUpdated,name);
    return dataValidate;
}

export function dirtyAndValidate(inputs: any, name: string){
    const dataDirty = toDirty(inputs, name);
    return validate(dataDirty, name);
}

export function toDirtyAll(inputs: any){
    const newInpusts: any = {};
    for (var name in inputs){
        newInpusts [name] = {...inputs[name], dirty: "true"};
    }
    return newInpusts;
    }
export function validateAll(inputs: any){
    const newInpusts: any = {};
    for (var name in inputs){
        if(inputs[name].validation){
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newInpusts [name] ={...inputs[name], invalid: isInvalid.toString()};
        }
        else{
            newInpusts [name] ={...inputs[name]}
        }
    }
    return newInpusts;
}

export function dirtyAndValidateAll(inputs: any){
return validateAll(toDirtyAll(inputs));
}
export function hasAnyInvalid(inputs:any){
    for (var name in inputs){
        if(inputs[name].dirty === "true" && inputs[name].invalid === "true" ){
            return true;
        }
    }
    return false;
}

export function setBackendErrors(inputs: any, errors:any[]){
   const newInpusts = {...inputs};
   errors.forEach(item => {
    newInpusts[item.fieldName].message = item.message;
    newInpusts[item.fieldName].dirty = "true";
    newInpusts[item.fieldName].invalid = "true";
   });
   return newInpusts;
}