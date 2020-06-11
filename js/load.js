let load = {
    
    createNodeIMG(type, nameImg,num) {
        let imgWord = document.createElement("img");

        imgWord.setAttribute('src', `img/${type}/${nameImg}.jpg`);
        imgWord.setAttribute('id', `id${type}${num}`);
        imgWord.setAttribute('class', `option`);
        return imgWord;
    },
    generateWords(words1,words2) {
        let poolLeft = document.getElementById('pool1');
        let poolRight = document.getElementById('pool3');

        for (let wordIndex in words1) {
            poolLeft.appendChild(this.createNodeIMG(LANGUAGE1, words1[wordIndex]),wordIndex);
            poolRight.appendChild(this.createNodeIMG(LANGUAGE2, words2[wordIndex]),wordIndex);
        }
    }
};