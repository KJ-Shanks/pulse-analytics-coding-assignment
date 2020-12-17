export default function filterBy(data, searchTerm, keys) {
  const regex = new RegExp(searchTerm, 'i')

  return data.filter(obj => {
    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]].match(regex)) return true
    }

    return false
  })
}
