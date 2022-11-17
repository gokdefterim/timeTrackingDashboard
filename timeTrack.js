const style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;

    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(226, 43%, 10%);
     }
     
    `
document.getElementsByTagName('head')[0].appendChild(style);


const head = document.getElementsByTagName('head')[0];
head.style.innerHTML = "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap' rel='stylesheet'></link>" 

const divBig = document.createElement('div');
divBig.id = 'divBig';
divBig.style.marginTop = '100px';
divBig.style.display = 'flex';
divBig.style.width = '1035px';
document.getElementsByTagName('body')[0].appendChild(divBig);

const divLeft = document.createElement('div');
divLeft.id = 'divLeft';
divLeft.style.marginRight = '25px';
divLeft.style.height = '480px';
divLeft.style.width = '240px';
divLeft.style.backgroundColor = 'hsl(235, 46%, 20%)';
divLeft.style.borderRadius = '20px';
document.getElementById('divBig').appendChild(divLeft);

const divLeftTop = document.createElement('div');
divLeftTop.id = 'divLeftTop';
divLeftTop.style.height = '335px';
divLeftTop.style.width = '240px';
divLeftTop.style.padding = '25px'
divLeftTop.style.backgroundColor = 'hsl(246, 80%, 60%)';
divLeftTop.style.borderRadius = '20px';
document.getElementById('divLeft').appendChild(divLeftTop);

const avatar = document.createElement('div');
avatar.id = 'avatar';
avatar.style.height = '80px';
avatar.style.width = '80px';
avatar.style.backgroundImage = 'url("images/jeremy.png")';
avatar.style.backgroundPosition = 'center';
avatar.style.backgroundSize = 'cover';
avatar.style.borderRadius = '50%';
avatar.style.border = 'solid 2px #FFFFFF';
document.getElementById('divLeftTop').appendChild(avatar);

const divLeftBottom = document.createElement('div');
divLeftBottom.id = 'divLeftTop';
divLeftBottom.style.height = '145px';
divLeftBottom.style.width = '240px';
document.getElementById('divLeft').appendChild(divLeftBottom);

const divRight = document.createElement('div');
divRight.id = 'divRight';
divRight.style.display = 'flex';
divRight.style.flexWrap = 'wrap';
divRight.style.justifyContent = 'space-between';
divRight.style.height = '505px';
divRight.style.width = '770px'
document.getElementById('divBig').appendChild(divRight);

for (let i=1; i < 7; i++){

    var inside = document.createElement('div');
    inside.style.cssText = 'width: 240px; height: 227.5px; margin-bottom: 25px; border-radius: 20px; background-color: hsl(235, 46%, 20%);';
    inside.id = 'inside'+i;
    document.getElementById('divRight').appendChild(inside);

    var insideTop = document.createElement('div');
    insideTop.style.cssText = 'width: 240px; height: 40px; background: url("images/icon-' + i + '.svg"); background-repeat: no-repeat; background-position: right';
    insideTop.id = 'insideTop'+i;
    document.getElementById('inside'+i).appendChild(insideTop);

    var insideBottom = document.createElement('div');
    insideBottom.style.cssText = 'width: 240px; height: 187.5px; background-color: hsl(235, 46%, 20%);';
    insideBottom.id = 'insideBottom'+i;
    insideBottom.style.borderRadius = '20px';
    document.getElementById('inside'+i).appendChild(insideBottom);

}

document.getElementById('inside1').style.backgroundColor = 'hsl(15, 100%, 70%)'
document.getElementById('inside2').style.backgroundColor = 'hsl(195, 74%, 62%)'
document.getElementById('inside3').style.backgroundColor = 'hsl(348, 100%, 68%)'
document.getElementById('inside4').style.backgroundColor = 'hsl(145, 58%, 55%)'
document.getElementById('inside5').style.backgroundColor = 'hsl(264, 64%, 52%)'
document.getElementById('inside6').style.backgroundColor = 'hsl(43, 84%, 65%)'