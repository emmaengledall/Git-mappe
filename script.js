let = footer = document.createElement("footer") 
footer.innerHTML = "Det her står i bunden" 

document.querySelector('body').append(footer); 







let brødtekst = 'Mennesket har altid brugt kunst til at udtrykke sig og fortælle historier. Alt fra cave paintings og kalkmalerier, til portrætter og grafisk kunst.'
const brødEL = document.querySelector('#brødtekst') 
brødEL.innerHTML = brødtekst



let cavepaintings = {
tidsalder: '38.000 bc.', 
Lokation: 'grotte',
Tool: 'haeneder',
} 

let kalkmalerier = {
tidsalder: '1500',
Lokation: 'kirke',
Tool: 'pensel',
} 

let Grafiskkunst = { 
tidsalder: '1990',
Lokation: 'overalt', 
Tool: 'computer', 
}
 console.log (cavepaintings.Lokation, cavepaintings.Tool) 

 // let kunstformer = ['cavepaintings', 'kalkmalerier', 'grafiskkunst'];
 // console.log(`Af alle kunstformer finder du denne i en ${kalkmalerier.Lokation}`); 

 let kunstLinksEl = document.querySelector
 ('#linkTilAndetKunst'); 
 console.log(kunstLinksEl) 

 let kunstLinks1 = {
    title: 'press photo - prisvindende billeder',
    url: 'https://www.worldpressphoto.org/collection',
 }

 let kunstLinks2 = {
    title: 'Art de vivre - Top 10 bedste skulpturer',
    url: 'https://artdevivre.com/articles/ten-of-the-most-famous-sculptures-of-all-time/',
 } 

 let kunstLinks3 = {
    title: 'Creative bloq - Best street art'
    url: 'https://www.creativebloq.com/street-art/examples-street-art-612334',
 }
 
 let kunstLinks = [kunstLinks1, kunstLinks2, kunstLinks3];
 console.log(kunstLinks)
  




 




 

