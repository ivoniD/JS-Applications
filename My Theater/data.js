import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllBooks(){
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
}

 export async function getBookById(id){
     return api.get('/data/theaters/' + id)
 }

  export async function getMyBooks(userId){
      return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)

  } 

 export async function createBook(book){
     return api.post('/data/theaters', book)
 }

 export async function editBook(id, book){
    return api.put('/data/theaters/' + id, book)
 }

 export async function deleteBook(id){
     return api.del('/data/theaters/' + id)
 }

// export  async function likeBook(bookId){
//     return api.post('/data/likes', {
//         bookId
//     })
// }
// export async function searchBooks(query){
//     return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
// }
// export async function getLikesByBookId(bookId){
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
// }

// export async function getMyLikesByBookId(bookId, userId){
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
// }