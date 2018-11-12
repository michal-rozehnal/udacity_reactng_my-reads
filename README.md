# MyReads Project

App representing personal book library.


This is my first project done at [Udacity](https://eu.udacity.com/) [REACT Nanodegree program](https://eu.udacity.com/course/react-nanodegree--nd019).
I have used prepared [template](https://github.com/udacity/reactnd-project-myreads-starter) and implement functionality to meet rubic requirements.

## Install

1. Run `npm install` - installs all project's dependencies
2. Run `npm start` - runs project - web browser window with running app is opened

## Usage

There are 2 pages:
* Library
* Search

**Library** - root page of app. It contains all books stored in virtual library sorted to 3 different shelves. You can move books between shelves by selecting shelf from book's menu. Remove book from library by selecting option _none_. New book is added to library via **Search** page. Go to this page by click on button in right downer corner.

**Search** - allows search books by search term. Books in result can be added to library by selecting shelf from book's menu. If result contains book already in library then proper shelf is selected in book's menu. You can select different option to move book into different shelf or select _none_ for removing book from library. For navigation back to **Library** page use button in left upper corner.

NOTE:
Because of performance search result is limited to maximum
 books. There is also list of predefined search terms in `SEARCH_TERMS.md` file. Different terms are not processed.

## Services

App uses API from `BooksAPI.js` for managing library content and searching books.

Available methods:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

NOTE:
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## License
I don't expect any contribution or massive sharing. But feel free to use this code as you wish (I also used template created by somebody else :) ).
