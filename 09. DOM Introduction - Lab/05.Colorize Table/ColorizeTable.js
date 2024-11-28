function colorize() {
    let trElements = document.querySelectorAll( 'tr:nth-child(2n)' );

    // for (const tr of trElements) {
    //     tr.style.backgroundColor = "teal";
    // }

    trElements.forEach(x => x.style.backgroundColor = "teal")

    // console.log(trElements);
}