

export const rederPotoIngrit = (data) => {
    const imgGrids = imgGrid.children;
    const imgGridArry = Array.from(imgGrids);
    let index = 0;
    let chengLimit = Math.floor(data.length /4);
    imgGridArry.forEach((imgGridContainer) => {
        const imagDataGroup = data.slice(index, index + chengLimit)
        const imageFragment = document.createDocumentFragment();
        imagDataGroup.forEach((images) => {
            const a = document.createElement("a");
            a.href = `./imag.html?image-id=${images.id}`
            a.className = "imag-item";
            a.innerHTML = `
              <img src="${images.src.original}"?auto=compress&cs=tinysrgb&w=400" alt="${images.alt}"/>
            `
             imageFragment.appendChild(a)
        })
        index += chengLimit;
        imgGridContainer.appendChild(imageFragment)
    })
}


export const renderPrevImg = (data) => {

}