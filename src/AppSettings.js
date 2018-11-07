const shelves = [
  {
    name: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    name: 'Want to Read',
    value: 'wantToRead'
  },
  {
    name: 'Read',
    value: 'read'
  },
  {
    name: 'None',
    value: 'none'
  }
]

const libraryShelves = shelves.filter(shelf => shelf.value !== 'none')

export { shelves, libraryShelves }
