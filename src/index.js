import * as d3 from 'd3'
import * as topojson from 'topojson'

import 'reset-css'
import './style/main.css'

const data = require('./assets/ga_htax.csv')
const switzerlandTopoJson = require('./assets/ch-plz.json')

async function main() {
    // converts CSV string to array
    const ga_htax = d3.csvParse(data, row => {
        row.GA = parseFloat(row.GA)
        row.PLZ = +row.PLZ
        row.Jahr = +row.Jahr
        row.HTA = parseFloat(row.HTA)
        return row
    })
    
    const switzerlandGeoJson = topojson.feature(switzerlandTopoJson, switzerlandTopoJson.objects.plz)
    const ga_htax_2017 = ga_htax.filter(d => d.Jahr === 2017)

    console.log(switzerlandGeoJson)
    console.log(ga_htax_2017)
}

main()