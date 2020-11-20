class Spinner {
  #$spinner = document.querySelector('#spinner');

  constructor () {
    this.render();
  }

  render () {
    const html = `
        <div class="spin">
                <div class="windows8">
                    <div class="wBall" id="wBall_1">
                        <div class="wInnerBall"></div>
                    </div>
                    <div class="wBall" id="wBall_2">
                        <div class="wInnerBall"></div>
                    </div>
                    <div class="wBall" id="wBall_3">
                        <div class="wInnerBall"></div>
                    </div>
                    <div class="wBall" id="wBall_4">
                        <div class="wInnerBall"></div>
                    </div>
                    <div class="wBall" id="wBall_5">
                        <div class="wInnerBall"></div>
                    </div>
                </div>
        </div>
    `;

    this.#$spinner.insertAdjacentHTML('beforeend', html);
  }

  closeSpinner () {
    this.#$spinner.textContent = '';
  }
}

export default new Spinner();