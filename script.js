var mobile = window.innerWidth < 850;

fetch('games.json')
    .then(response => response.json())
    .then(games => {
        games.forEach(game => {
            document.getElementById('games').innerHTML += '<div class="game"><div class="img" loading="lazy" style="background: url(' + game.imageURL + ') 0% 0% / cover;" onclick="play(' + "'" + game.name + "', " + "'" + game.url + "'" + ')"><div class="cover"></div></div><div id="game-content" class="game-content" ><h1>' + game.name + '</h1><p>' + game.description + '</p><button class="install" onclick="play(' + "'" + game.name + "', " + "'" + game.url + "'" + ')">Play</button></div></div>'
        });
    });

function play(game, url) {
    localStorage.setItem('game', game);
    if (document.getElementById('game-frame').style.display === 'block') {
        document.getElementById('game-frame').style.display = 'none';
        document.getElementById('iframe').src = '';
        document.body.style.overflowY = 'visible';
    } else {
        document.getElementById('game-frame').style.display = 'block';
        document.getElementById('iframe').src = url;
        document.body.style.overflowY = 'hidden';
    }
}

function gamesPerspective() {
    const gameContent = Array.from(document.getElementsByClassName('game-content'));
    const games = Array.from(document.getElementsByClassName('game'));
    const images = Array.from(document.getElementsByClassName('img'));
    
    if (document.getElementById('games').style.gridTemplateColumns === 'repeat(9, 9.5vw)') {
        gameContent.forEach(game => {
            games.forEach(gameTab => {
                gameTab.style.backgroundColor = '#222222';
                gameTab.style.padding = '1.2vw';
                gameTab.style.display = 'flex';
            })
            game.style.display = 'block';
            document.getElementById('games').style.gridTemplateColumns = '.1fr .1fr';
            document.getElementById('games').style.marginLeft = '.6vw';
        })
    } else {    
        gameContent.forEach(game => {
            games.forEach(gameTab => {
                gameTab.style.backgroundColor = 'transparent';
                gameTab.style.padding = '0px';
                gameTab.style.display = 'block';
            })
            game.style.display = 'none';
            document.getElementById('games').style.gridTemplateColumns = 'repeat(9, 9.5vw)';
            document.getElementById('games').style.marginLeft = '1vw';
        })
        images.forEach(image => {
            image.style.width = '10vw';
            image.style.height = '10vw';
        })
    }
}

document.getElementById('start-button').addEventListener('click', function(e) {
    var scrollDiv = document.getElementById("games").offsetTop - 110;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
});

window.addEventListener("scroll", function(){
    var main = document.getElementById("main");
    if (window.scrollY > main.offsetTop + main.offsetHeight - 110) {
        // something after the first content passed
    }
})

function search() {
    var games = document.getElementsByClassName('game');
    var scrollDiv = document.getElementById("games").offsetTop - 140;
    var scrollDiv2 = document.getElementById("main").offsetTop;
    var gamesLeft = 0;
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("games");
    li = ul.getElementsByClassName('game');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style display = "none";
        }
    }

    for (i = 0; i < games.length; i++) {
        if (games[i].style.display === 'none') {
            gamesLeft += 1;
        }
    }

    if (gamesLeft === games.length) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('footer').style.display = 'none';
        window.scrollTo({ top: scrollDiv2, behavior: 'instant'});
        document.getElementById('games').style.display = 'none';
    } else {
        window.scrollTo({ top: scrollDiv, behavior: 'instant'});
        document.getElementById('error').style.display = 'none';
        document.getElementById('games').style.display = 'grid';
    }
    window.scrollTo({ top: scrollDiv, behavior: 'instant'});
}

document.getElementById('search').addEventListener('focus', () => {
    document.getElementById('games').style.marginBottom = '28.8vw';
    document.getElementById('footer').style.display = 'none';
});

document.getElementById('search').addEventListener('focusout', () => {
    document.getElementById('games').style.marginBottom = '1.5vw';
    if the document.getElementById('error').style.display === 'none') {
        if (!mobile) {
            document.getElementById('footer').style.display = 'block';
        }
    }
}

function checkScreenWidth() {
    var mobile = window.innerWidth < 850;

    if (mobile) {
        document.getElementById('navigation').classList.add("mobile");
        document.getElementById('footer').classList.add("mobile");
        document.getElementById('top').style.display = 'none';
        document.getElementById('games').classList.add("mobile");
        document.getElementById('controls').classList.add("mobile");
    } else {
        document.getElementById('navigation').classList.remove("mobile");
        document.getElementById('footer').classList.remove("mobile");
        document.getElementById('top').style.display = '';
        document.getElementById('games').classList.remove("mobile");
        document.getElementById('controls').classList.remove("mobile");
    }
}

setInterval(checkScreenWidth, 1);

window.onload = function() {
    var isMobileSafari = /iP(ad|od|hone)/i.test(navigator.platform) && /WebKit/i.test(navigator.userAgent) && !(/(CriOS|FxiOS)/i.test(navigator.userAgent));
    if (!CSS.supports('backdrop-filter', 'blur(18px)') || isMobileSafari) {
        var navigation = document.querySelector('#navigation');
        if (navigation) {
            navigation.style.backdropFilter = '';
            navigation.style.backgroundColor = '#2b2b2bf1';
        }
    }
}
