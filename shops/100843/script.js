/* ========== MODULES ========== */
import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import LikeInCard from '../../modules/LikeInCard/LikeInCard.js';

/* ========== FIXED BUGS ========== */
import { ChangeAgreement, ChangeErrorMessage, TranslateAboutUs } from '../../fixes/fixes.js';

/* ========== CONSTANTS ========== */
import content from './content/content.js';

/* =============================== */

const contentArea = document.querySelector('.common-home .content-area');
const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-6',
  'col-md-6',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
];

const translateAbout = new TranslateAboutUs();

translateAbout.translate();

if (
  location.href === 'https://internokids.ru/' ||
  location.href === 'https://internokids.ru/?from_admin'
) {
  const productItem = document.querySelectorAll('.product-item');

  const gridBannerGallery = new GridBannerGallery(contentArea, content);
  const deleteClasses = new DeleteClasses(productItem, bootstrapClasses);

  gridBannerGallery.render();
  deleteClasses.findAndDelete();
}

if (document.querySelector('body').classList.contains('product-category')) {
  const productItem = document.querySelectorAll('.product-item');
  const deleteClasses = new DeleteClasses(productItem, bootstrapClasses);

  deleteClasses.findAndDelete();
}

if (document.querySelector('body').classList.contains('product-product')) {
  const btnPrice = document.querySelector('.btn-price');
  const price = document.querySelector('.product-price');
  const buttonAddCart = document.querySelector('#button-cart');

  const changeError = new ChangeErrorMessage();

  const deleteClasses = new DeleteClasses(productItem, bootstrapClasses);

  btnPrice.insertAdjacentElement('afterbegin', price);
  btnPrice.insertAdjacentElement('beforeend', buttonAddCart);

  changeError.change();
  deleteClasses.findAndDelete();
}

if (location.href.includes('checkout')) {
  const changeAgree = new ChangeAgreement(document);
  changeAgree.change();
}

if (document.querySelector('.product-item')) {
  const addToCart = document.querySelectorAll('.add_to_cart');
  const addToWishlist = document.querySelectorAll('.add_to_wishlist');

  const likeInCard = new LikeInCard(addToCart, addToWishlist);

  likeInCard.transport();
}

/* ******* REMOVE PLACEHOLDER ******* */
document.querySelector('.search_field > input').removeAttribute('placeholder');
/* ***************** */
