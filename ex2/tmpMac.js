import tambons from './data/tambons.json' assert {type: 'json'}

let ids = amphures.map(val=>val.id)

let tambonjud = tambons.filter(tambon=>ids.includes( tambon.amphure_id))


console.log(JSON.stringify(tambonjud, null, 4))
