import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const production = 'production'
let Data;
let prodURL
if (publicRuntimeConfig) {

    if (publicRuntimeConfig.ENV === production) {
        console.log('---------production url---------------')
        Data = {
            "baseAPIEndpoint": prodURL
        };

    } else {
        console.log(process.env.ENV, '-----dev url-----')
        Data = {
            "baseAPIEndpoint": "http://localhost:4000"
        };
    }
}
export default Data;