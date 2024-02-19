export function removeEmptyFields(obj:any) {
    const filteredObj:any = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value !== '' && value !== undefined) {
            filteredObj[key] = value;
        }
    }
    
    return filteredObj;
}