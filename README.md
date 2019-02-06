# d3-playground

## Exercise 0 - Convert to suitable format (already done)

* CSV data: Convert to numbers

## Exercise 1 - Filter out unneeded data

* We are only interested in entries from year 2017
* Filter the entries using Array.prototype.filter

## Exercise 2 - Draw Circles

* Think about UX: What are good sizes for circles? Min size? Max size?

* Scales in D3js
 * d3.scaleLinear().domain().range()
 * support for numbers, colors
 * d3.extent, d3.max, d3.min

Explain:

* d3.forceSimulation()
 * forces: d3.forceCenter()
 * d3.forceCollision()
 * d3.forceManyBody()
 * d3.forceLinks()
 * d3.forceX()
 * d3.forceY()
 * d3.forceSimulation().on('tick')

Explain:

* How to insert data into DOM

## Exercise 3 - Basic Mouse interactions
SELECTION.on('click', d => console.log(d))

## Exercise 4 - Map

Explain TopoJSON, GeoJSON

* Inject our data into GeoJSON data
* Choose a suitable projection: d3.geoIdentity()
* Draw the map using d3.geoPath() into attribute "d" of SvgPath