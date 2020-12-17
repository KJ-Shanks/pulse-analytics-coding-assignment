export default function uniqueBy(data, key) {
  /* NOTE: I misread and thought you had to return the first instance of each
  const values = new Set()
  const output = []

  data.forEach(obj => {
    if (!values.has(obj[key])) {
      values.add(obj[key])
      output.push(obj)
    }
  })

  return output
  */

  const order = []
  const map = {}

  data.forEach(obj => {
    const val = obj[key]
    if (!map[val]) order.push(val)
    map[val] = obj
  })

  return order.map(val => map[val])
}
