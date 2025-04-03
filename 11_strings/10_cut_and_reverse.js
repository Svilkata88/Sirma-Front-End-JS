function cutAndReverse(text) {
    let piovt = Math.ceil(text.length / 2);
    let text1 = text.slice(0, piovt);
    let text2 = text.slice(piovt);

    console.log(text1.split('').reverse().join(''))
    console.log(text2.split('').reverse().join(''))
}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')