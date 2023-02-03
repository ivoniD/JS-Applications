import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteOffer, getOfferById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (offer, isOwner, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <!--Edit and Delete are only for creator-->
            ${bookControlsTemplate(offer, isOwner, onDelete)}
          </div>
        </section>
`

let bookControlsTemplate = (offer, isOwner, onDelete) => {
 
    if (isOwner) {
        return html`
 <div id="action-buttons">
              <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="" id="apply-btn">Apply</a>
            </div>
     `
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    let userData = getUserData();

    let offer = await getOfferById(ctx.params.id)
    let isOwner = userData && userData.id == offer._ownerId;
    ctx.render(detailsTemplate(offer, isOwner, onDelete))


    async function onDelete() {
        await deleteOffer(ctx.params.id);
        ctx.page.redirect('/catalog')
    }


}