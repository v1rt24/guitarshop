class Error {
  #$error = document.querySelector('#error');

  render () {
    const html = `
      <div class="error">
          <h3>Нет доступа</h3>
          <p>Попробуйте зайти позже</p>
      </div>
    `;

    this.#$error.innerHTML = html;
  }
}

export default new Error();