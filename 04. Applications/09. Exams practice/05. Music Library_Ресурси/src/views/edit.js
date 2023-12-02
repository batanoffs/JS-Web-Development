import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../dataService.js';

const temp = (data) => html `
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" value=${data.singer} name="singer" id="album-singer" placeholder="Singer/Band" />
      <input type="text" value=${data.album} name="album" id="album-album" placeholder="Album" />
      <input type="text" value=${data.imageUrl} name="imageUrl" id="album-img" placeholder="Image url" />
      <input type="text" value=${data.release} name="release" id="album-release" placeholder="Release date" />
      <input type="text" value=${data.label} name="label" id="album-label" placeholder="Label" />
      <input type="text" value=${data.sales} name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`

let context;
export async function editPage(ctx) {
  context = ctx;
  const id = context.params.id;
  const item = await dataService.getById(id);
  ctx.render(temp(item));
}

async function onSubmit(event) {
  event.preventDefault();
  const id = context.params.id;
  const formData = new FormData(event.target);
  const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);
  if (!singer || !album || !imageUrl || !release || !label || !sales) {
    return alert('All fields are required!');
  }
  await dataService.put(id, { singer, album, imageUrl, release, label, sales });
  context.goTo('/details/' + id);
}