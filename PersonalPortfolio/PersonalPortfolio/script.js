const api_url = 'https://api.github.com/repos/nevashangounder/demos/contents'
const products = document.querySelector('.products');


async function getUrls(){
    let data = await fetch(api_url);
    let urls = await data.json();
    return urls;
    
}


getUrls().then(urls => {
    let urlArr = [];
   
    urls.forEach(element => {
        urlArr.push(["https://htmlpreview.github.io/?"+element['html_url']+"/index.html",element['html_url']+"/Assets/Screenshot_Bcg.jpg", element['name']]);
    });
    return urlArr
}).then(
    
    urlArr => {
    let urlArr2 = urlArr.map(item => {
        let subarr = item.map(nestedarr => {
            return nestedarr.replace('/tree','')
        })
        
        return subarr;
        //
    })
    return urlArr2;
   
}).then(urlArr2 => {
    let urlArr3 = [];
    for(let i = 0; i < urlArr2.length; i++){
        urlArr3.push([urlArr2[i][0], urlArr2[i][1].replace('github.com', 'raw.githubusercontent.com'), urlArr2[i][2]])
    }
    return urlArr3;
}).then(urlArr3 => {
    let childElement = '';
    urlArr3.forEach(subarr2 => {
        if(subarr2[2] !== "README.md"){
        childElement += 
        `<div class="single-product">
            <div class="product-title">
                <h3>${subarr2[2]}</h3>
            </div>
                <a href=${subarr2[0]} target="_blank">
                <img src=${subarr2[1]} alt="">
            </a>
        </div>`
        }
    })
    return childElement;
    
   
}).then(childElement => products.innerHTML = childElement )




























