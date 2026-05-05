# Ice Age Earth

This is just one inaccurate imagining of the planet during the ice age. There are many things that are wrong. On the other hand, it does give one an idea of how things might have been.

What's wrong:

- Ocean levels. This just assumes the current ocean levels dropped 140m. To get a better idea, we'd have to model the ice and the ocean surface equation. With that solution, the levels of water on each coastline would be much more accurate. The actual changes would range `from 150 m below to over 200 m above present-day sea level (Figure 1: A-D), with considerable variation within relatively small distances.` (McLaren, Fedje, Mackie, Davis, Erlandson, Gauvreau, & Vogelaar, 2020)
- Snow/Glaciers. There currently are none. "But what about the Himalayas?" Oh, just colored above a certain altitude as white. It has nothing to de with there being glaciers. One day, I'll have to model the climate and glaciation process.
- Pre-deglaciation topography. This is probably what would be the hardest thing to model. Running time backwards from sedimentary deposits where deltas open into the ocean back to where the melt water/glacial lakes eroded it from.
- ???

## Methodology

In the year 2019, I simply grabbed the best topgraphical and bathymetery data I could fit on my laptop from 2014. It was a GEBCO model. I imported that into QGIS and created a hillshade rendering layer. Then I added a color gradient that went from blue for ocean, to brown for beach, to green for above the beach, to dark green for altitudes that can have pine trees, to high altitudes being white.

That's it.

I exported the rendering as tiles, which are what I inlcuded in `./public/ice-age-tiles`.

In the intervening years, I have since lost the QGIS project. However, I have noticed some people are making some wonderfully detailed topography & bathymetery layers. Those will be good starting points for future work.

## Sources

[Burrows Sosa, J. A. (2024) Earth Science, Megafuana, Horses, Population Growth, & Economics. Cuauhtlatoatzin.](https://github.com/Cuauhtlatoatzin/indigenous-peoples-history/blob/master/earth_science.md)
