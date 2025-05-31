function codeCipher(message, n) {
    let decryptedMessage = message.split('').map( ch => String.fromCharCode(ch.charCodeAt(0)-n) );
    console.log(decryptedMessage.join(''));
}

codeCipher(
    'Uifsf!jt!b!tfdsfu"', 1
);
codeCipher(
    'vvhhdkdvkkdvvhh$', 3
);
codeCipher(
    'Ibssz!Qpuufs', 1
);