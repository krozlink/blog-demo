const testPosts = [
    {
        id: 'dc33a5ac-8072-432c-ac06-adaa95361435',
        date: '2018-11-01 11:02:33.433',
        title: 'Cupcake ipsum dolor',
        avatar: 'https://api.adorable.io/avatars/96/joe.png',
        name: 'Joe Citizen',
        email: 'joe@example.com',
        body: 'Toffee sesame snaps danish candy tootsie roll biscuit jelly beans. Chocolate tiramisu lemon drops chocolate jelly-o biscuit bonbon jelly-o. Marshmallow pastry chocolate cake jelly liquorice tiramisu powder fruitcake. Ice cream gummies gummies.\nCheesecake cheesecake chocolate brownie liquorice soufflé soufflé. Toffee cotton candy jelly-o. Gingerbread marzipan gingerbread liquorice danish tiramisu icing.\nDessert chocolate jujubes topping marshmallow. Lemon drops cake biscuit carrot cake bonbon carrot cake biscuit macaroon brownie. Jelly-o jelly beans marzipan.\nJelly beans halvah lollipop tootsie roll tiramisu danish sesame snaps chocolate bar. Lemon drops liquorice marzipan brownie cheesecake powder brownie gummi bears sugar plum. Caramels marshmallow soufflé pudding marzipan fruitcake tart lemon drops. Halvah oat cake marshmallow.',
        num_comments: 4,
    },
    {
        id: '7619e10c-927e-413b-9148-621b55835115',
        date: '2018-11-02 05:23:12.433',
        title: 'Caramels wafer pastry croissant',
        avatar: 'https://api.adorable.io/avatars/96/jane.png',
        name: 'Jane Citizen',
        email: 'jane@example.com',
        body: 'Sesame snaps candy canes chupa chups cake. Marshmallow tiramisu chocolate cake candy canes jujubes cheesecake. Powder candy jelly liquorice icing.\nIce cream tiramisu croissant. Chocolate cake fruitcake cheesecake candy donut jujubes cotton candy gummi bears. Sweet chocolate bar caramels gummi bears sesame snaps.\nBonbon chupa chups jelly-o danish carrot cake jujubes cake. Jujubes pastry jelly gingerbread caramels topping croissant. Pudding powder carrot cake sesame snaps cake cake.',
        num_comments: 0,
    },   
    {
        id: 'b86752b0-cc9a-4ce6-92f1-cd41a1b9f9f5',
        date: '2018-11-02 00:23:00.000',
        title: 'Ad pancetta pork belly',
        avatar: 'https://api.adorable.io/avatars/96/joe.png',
        name: 'Joe Citizen',
        email: 'joe@example.com',
        body: 'Bacon ipsum dolor amet veniam prosciutto meatball magna aute. In bresaola filet mignon alcatra enim incididunt short ribs. Veniam ball tip dolore officia jowl. Dolore exercitation tail deserunt sint. Ut turducken adipisicing, meatloaf biltong tri-tip et proident esse beef id in.\nVelit adipisicing irure excepteur frankfurter fatback in turducken shank nisi ullamco sausage pork chop porchetta. Enim beef voluptate, cupidatat dolore chuck nisi ea veniam aliqua picanha. Meatloaf shank aliqua venison alcatra. Pig sed anim sunt est kielbasa commodo bacon pariatur landjaeger. Irure eu reprehenderit swine venison adipisicing ut. Excepteur dolor prosciutto, veniam sausage buffalo pork chop beef sirloin ut tongue shank ullamco. Duis beef aute est.',
        num_comments: 1,
    }, 
    {
        id: '29df9261-a0a9-4aee-8f8a-d283de7a42a5',
        date: '2018-11-03 19:18:55.002',
        title: 'You don\'t win friends with salad.',
        avatar: 'https://api.adorable.io/avatars/96/joe.png',
        name: 'Joe Citizen',
        email: 'joe@example.com',
        body: 'Last night\'s "Itchy and Scratchy Show" was, without a doubt, the worst episode *ever.* Rest assured, I was on the Internet within minutes, registering my disgust throughout the world. Homer no function beer well without.\nSlow down, Bart! My legs don\'t know how to be as long as yours. Inflammable means flammable? What a country. Dear Mr. President, There are too many states nowadays. Please, eliminate three. P.S. I am not a crackpot.\nI like my beer cold, my TV loud and my homosexuals flaming. I\'ll be back. You can\'t keep the Democrats out of the White House forever, and when they get in, I\'m back on the streets, with all my criminal buddies.\nYour guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! I\'m a Spalding Gray in a Rick Dees world.\nWhen I held that gun in my hand, I felt a surge of power…like God must feel when he\'s holding a gun. Kids, kids. I\'m not going to die. That only happens to bad people. Inflammable means flammable? What a country.',
        num_comments: 2,
    },    
    {
        id: 'bbbd2372-f1e5-45df-854e-73c8536def75',
        date: '2018-11-04 20:04:35.486',
        title: 'Me fail English? That\'s unpossible.',
        avatar: 'https://api.adorable.io/avatars/96/jane.png',
        name: 'Jane Citizen',
        email: 'jane@example.com',
        body: 'Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! How is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home winemaking course, and I forgot how to drive?\nKids, we need to talk for a moment about Krusty Brand Chew Goo Gum Like Substance. We all knew it contained spider eggs, but the hantavirus? That came out of left field. So if you\'re experiencing numbness and/or comas, send five dollars to antidote, PO box… Books are useless! I only ever read one book, "To Kill A Mockingbird," and it gave me absolutely no insight on how to kill mockingbirds! Sure it taught me not to judge a man by the color of his skin…but what good does *that* do me?\nJesus must be spinning in his grave! But, Aquaman, you cannot marry a woman without gills. You\'re from two different worlds… Oh, I\'ve wasted my life. Lisa, vampires are make-believe, like elves, gremlins, and Eskimos.',
        num_comments: 0,
    },    
];

// helper function to make an awaitable delay
function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function LatestPosts() {
    await delay(1000); // mimic api call delay
    return testPosts;
}

export default {
    LatestPosts,
}