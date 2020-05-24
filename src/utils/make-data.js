import namor from 'namor'

const generateName = () => {
  const name = namor.generate({ words: 1, saltLength: 0 })
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const newPerson = () => {
  const statusChance = Math.random()

  return {
    firstName: generateName(),
    lastName: generateName(),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

const makeData = (length) =>
  Array(length)
    .fill(null)
    .map((_) => ({ ...newPerson() }))

export default makeData
