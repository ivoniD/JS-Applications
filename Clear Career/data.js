import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllOffers(){
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}

 export async function getOfferById(id){
    return api.get('/data/offers/' + id)
}

 export async function createNewOffer(book){
    return api.post('/data/offers', book)
}


 export async function editOffer(id, book){
    return api.put('/data/offers/' + id, book)
 }

 export async function deleteOffer(id){
    return api.del('/data/offers/' + id)
}


// export async function getAllBooks(){
//     return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
// }

//  export async function getMyBooks(userId){
//      return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
//  } 

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