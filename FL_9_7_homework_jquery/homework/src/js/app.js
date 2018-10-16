const $gallery = $('#container');
const addMoreLimit = 6
let loadLimit = 12;

$(window).on('load', function () {
  $.getJSON("data/media.json", (data) => {
    addToGallery(0, loadLimit, data);
    const add = $(`<p class = 'addMore'> Add more </p>`).insertAfter($gallery);
    add.click(() => {
      addToGallery(loadLimit, loadLimit + addMoreLimit, data);
      if (loadLimit <= 21) {
        loadLimit += addMoreLimit;
      }
    });
  });
});

function addToGallery(start, end, data) {
  for (let i = start; i < end; i++) {
    if (!data.media[i]) {
      return
    }
    const el = $(`<div data-id="${data.media[i].id}"> <img src = '${data.media[i].display_url}'></div>`);
    el.click((e) => {
      target = $(e.currentTarget);
      createPopUp(target.data('id'), target, data);
    });
    const hover = $(`<div class='hover'>
    <span class = "like"></span>
    <span>${data.media[i].edge_liked_by.count}</span>
    <span class = "comment"></span>
    <span>${data.media[i].edge_media_to_comment.count}</span>
    </div>`);
    el.mouseover(() => {
      el.append(hover);
    });
    el.mouseout(() => {
      hover.remove();
    });
    $gallery.append(el);
  }
}

function createPopUp(id, elem, data) {
  if (typeof id === 'undefined') {
    return
  }

  const allPopUp = $(`<div class = 'allPopUp'>
    <span class = 'next'></span>
    <span class = 'prev'></span>
    <span class = 'close' alt='Close Popup'>X</span>
  </div>`);

  const infoPopUp = $(`<div class = 'infoPopUp'><img src = 'picture/${id}.jpg'>
  <div class = 'info'>
  <div class = 'follow'><img src = 'picture/user.jpg' class = 'userImg'><p class = 'followText'>epamsystems</p>
  <p class = 'followText'>Follow</p></div>
  <div class = 'caption'>${data.media[id].edge_media_to_caption}</div>
  <div class = 'like'>${data.media[id].edge_liked_by.count}</div>
  <div class = 'comment'>Add a comment</div>
  </div></div>`);

  $('body').append($(allPopUp).append(infoPopUp));
  $('.close').click(closePopup);
  $('.next').click(() => switchImage(elem.next().data('id'), $(elem).next(), data));
  $('.prev').click(() => switchImage(elem.prev().data('id'), $(elem).prev(), data));

}

function closePopup() {
  $('.allPopUp').remove();
}

function switchImage(id, elem, data) {
  closePopup();
  createPopUp(id, elem, data);
}