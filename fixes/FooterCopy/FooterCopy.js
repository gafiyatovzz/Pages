export default class FooterCopy {

  constructor() {
    this.container = document.querySelector('.footer_content_text');
  }
  setTemplae() {
    return `
    <div class="footer_content_container">
      <img src="https://cdn.sellavi.com/image/upload/v1596529397/ru/clients/100811/d41bae9c4d0f9d8bf39ff7fb1e287bbab44baffb.png">
      <img src="https://cdn.sellavi.com/image/upload/v1598535073/ru/clients/101099/ebd33cc3432dd0babcceb05c8a9a987378a8ee12.png">
      <img src="https://cdn.sellavi.com/image/upload/v1598535458/ru/clients/101099/da7e01c5a1ed2198f2a4ddd0bc132e32a037454b.png">
      <img src="https://cdn.sellavi.com/image/upload/v1598535170/ru/clients/101099/33de6d709eff8493e926d0a6d842bb6bcaacfe22.png">
      <img src="https://cdn.sellavi.com/image/upload/v1598535311/ru/clients/101099/f439ceb06e20a4025ea77b4ef1c5e3973514dc25.png">
    </div>

    <div class="">
      <div class="copyright">
        <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_logo" role="link">
          <img data-src="https://ru.sellavi.com/assets/images/logo.svg" alt="" class="img-fluid" src="https://ru.sellavi.com/assets/images/logo.svg">
        </a>
      </div>
    </div>`;
  }

  render() {
    this.container.insertAdjacentHTML('afterbegin', this.setTemplae());
  }
}

const footer = new FooterCopy();

footer.render();