module.exports = {
    params: {
        class: 'PAD', // for Button
	from: undefined,
	to: undefined
    },
    body: p => `
    
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
	  (pad 1 thru_hole circle (at 0 -0.75 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.from.str}) 
	  (pad 2 thru_hole circle (at 0 0.75 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.to.str})
     )

    `
}
