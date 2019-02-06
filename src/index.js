import * as d3 from 'd3'

import 'reset-css'
import './style/main.css'

const data = require('./assets/ga_htax.csv')

async function main() {
    // converts CSV string to array
    const ga_htax = d3.csvParse(data)

    // do stuff with data
}

main()