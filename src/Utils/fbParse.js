export default function fbParse(results) {
    let p = {};
    results.forEach(d => {
        const fields = d._document.proto.fields;
        p[d.id] = helperParser(fields);
    })
    return p;
}

function helperParser(fields) {
    let p = {};
    
    Object.keys(fields).map(fieldKey => {
        const k = Object.keys(fields[fieldKey])[0];
        const v = fields[fieldKey][k];
        switch(k) {
            case 'stringValue':
                p[fieldKey] = v.split('\\n').join('\n');
                break;
            case 'integerValue':
                p[fieldKey] = parseInt(v);
                break;
            case 'arrayValue':
                p[fieldKey] = Object.values(helperParser(v.values));
                break;
            case 'mapValue':
                p[fieldKey] = helperParser(v.fields);
                break;

            default:
                p[fieldKey] = v;
        }
        return;
    })
    return p;
}