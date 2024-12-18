console.log("WORKING");

let Colors = {
  HIGHLIGHT: "#DBF226",
};

class Logo {
  constructor(src) {
    this.src = src;
    this.logo;
  }

  init() {
    console.log(this.src);
    this.logo = this._mount();
  }

  _mount() {
    let logo = document.getElementById("logo");
    let letters = Array.from(document.getElementsByClassName("logo_letter"));
    console.log(letters);
    // letters.forEach(letter => {
    // 	letter.classList.add("swirl");
    // 	letter.setAttribute("stroke-dasharray", letter.getTotalLength());
    // 	letter.setAttribute("stroke-dashoffset", letter.getTotalLength());
    // });
    return {
      logo,
      letters,
    };
  }

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async swirl(count) {
    if (count < this.logo.letters.length) {
      console.log(count);
      this.logo.letters[count].classList.add("swirl");
      this.logo.letters[count].setAttribute(
        "stroke-dasharray",
        this.logo.letters[count].getTotalLength()
      );
      this.logo.letters[count].setAttribute(
        "stroke-dashoffset",
        this.logo.letters[count].getTotalLength()
      );
      await this.delay(500);
      await this.swirl(count + 1);
    } else {
      return new Promise((res) => {
        return res();
      });
    }
  }

  async swirlOut() {
    this.logo.letters.forEach(async (letter) => {
      letter.classList.add("swirl-off");
    });
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }
}

async function main() {
  let logo = new Logo("./images/logo/logo.svg");
  console.log("calling main");
  logo.init();
  console.log("START.....");
  await logo.swirl(0);
  await logo.swirlOut();
  console.log("........END");
}

main();
