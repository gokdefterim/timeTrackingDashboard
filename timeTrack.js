var classes = {
    divBig: 'div-big',
    divLeft: 'div-left',
    divLeftTop: 'div-left-top',
    avatar: 'avatar',
    nameHtmlh1: 'name-html-h1',
    nameHtmlh5: 'name-html-h5',
    divLeftBottom: 'div-left-bottom',
    normalText: 'normal-text',
    weeklyText: 'weekly-text',
    divRight: 'div-right',
    inside: 'inside',
    insideTop: 'inside-top',
    insideBottom: 'inside-bottom',
    activity: 'activity',
    activityText: 'activity-text',
    threeDots: 'three-dots',
    hourText: 'hour-text',
    lastText: 'last-text'
}

var selectors = {};

Object.keys(classes).forEach(function (key) {
    selectors[key] = '.' + classes[key];
});

function setStyle () {
    $(selectors.myCustomStyleClass).remove();

    var css =
    '*{' +
        'margin: 0;' +
        'padding: 0;' +
        'box-sizing: border-box;' +
        'text-decoration: none;' +
        'list-style-type: none;'+
        'font-family: "Nunito Sans", sans-serif;' +
        '}' +
    'body{' +
        'display: flex;'+
        'justify-content: center;'+
        'align-items: center;'+
        'background-color: hsl(226, 43%, 5%)'+
        '}' +
    selectors.divBig + ' {'+
        'margin-top: 100px;' +
        'display: flex;' +
        'width: 1035px;' +
        '}' + 
    selectors.divLeft + ' {'+
        'margin-right: 25px;' +
        'height: 480px;' +
        'width: 240px;' +
        'background-color: hsl(235, 46%, 20%);' +
        'border-radius: 5%;' +
        '}' + 
    selectors.divLeftTop + ' {'+
        'margin-right: 25px;' +
        'height: 335px;' +
        'width: 240px;' +
        'padding: 25px;' +
        'background-color: hsl(246, 80%, 60%);' +
        'border-radius: 5%;' +
        '}' + 
    selectors.avatar + ' {'+
        'margin-right: 25px;' +
        'height: 80px;' +
        'width: 80px;' +
        'margin-bottom: 30px;' +
        'border: solid 2px #FFFFFF;' +
        'border-radius: 50%;' +
        'background-image: url("images/jeremy.png");' +
        'background-position: center;' +
        'background-size: cover;' +
        '}' + 
    selectors.nameHtmlh1 + ' {'+
        'color: #FFFFFF;' +
        'font-weight: 400;' +
        'font-size: 40px;' +
        '}' + 
    selectors.nameHtmlh5 + ' {'+
        'color: hsl(236, 100%, 87%);' +
        'font-weight: 600;' +
        '}' + 
    selectors.divLeftBottom + ' {'+
        'height: 145px;' +
        'width: 240px;' +
        '}' + 
    selectors.divRight + ' {'+
        'height: 505px;' +
        'width: 770px;' +
        'display: flex;' +
        'flex-wrap: wrap;' +
        'justify-content: space-between;' +
        '}' + 
    selectors.inside + ' {'+
        'height: 227.5px;' +
        'width: 240px;' +
        'margin-bottom: 25px;' +
        'border-radius: 5%;' +
        'background-color: hsl(235, 46%, 20%);' +
        '}' + 
    selectors.insideTop + ' {'+
        'height: 40px;' +
        'width: 240px;' +
        '}' +
    selectors.insideBottom + ' {'+
        'height: 187.5px;' +
        'width: 240px;' +
        'padding: 25px;' +
        'border-radius: 5%;' +
        'background-color: hsl(235, 46%, 20%);' +
        '}' +
    selectors.normalText + ' {'+
        'color: hsl(236, 100%, 87%);' +
        'font-weight: 300;' +
        'font-size: 16px;' +
        'margin-bottom: 10px;' +
        '}' + 
    selectors.weeklyText + ' {'+
        'color: #FFFFFF;' +
        'font-weight: 300;' +
        'font-size: 16px;' +
        'margin-bottom: 10px;' +
        '}' + 
    selectors.divLeftBottom + ' {'+
        'padding: 25px;' +
        '}' + 
    selectors.activity + ' {'+
        'display: flex;' +
        'justify-content: space-between;' +
        'align-items: center;' +
        'margin-bottom: 25px' +
        '}' + 
    selectors.activityText + ' {'+
        'color: #FFFFFF;' +
        '}' + 
    selectors.threeDots + ' {'+
        'height: 4px;' +
        '}' +
    selectors.hourText + ' {'+
        'color: #FFFFFF;' +
        'font-weight: 400;' +
        'font-size: 40px;' +
        'margin-bottom: 10px;' +
        '}' +
    selectors.lastText + ' {'+
        'color: hsl(236, 100%, 87%);' +
        'font-weight: 300;' +
        'font-size: 12px;' +
        '}';

    $('<style/>').html(css).addClass(classes.myCustomStyleClass).appendTo('head');
}

function setHtml () {
    $(selectors.bigDiv).remove();

    $('<div/>').attr('id', 'divBig').addClass(classes.divBig).appendTo('body');
    $('<div/>').attr('id', 'divLeft').addClass(classes.divLeft).appendTo('#divBig');
    $('<div/>').attr('id', 'divLeftTop').addClass(classes.divLeftTop).appendTo('#divLeft');
    $('<div/>').attr('id', 'avatar').addClass(classes.avatar).appendTo('#divLeftTop');

    var nameHtml = '<h5 class="'+ classes.nameHtmlh5 +'">Report for</h5>'+
                    '<h1 class="'+ classes.nameHtmlh1 +'">Jeremy Robson</h1>';
    $('#divLeftTop').append(nameHtml);

    $('<div/>').attr('id', 'divLeftBottom').addClass(classes.divLeftBottom).appendTo('#divLeft');
    $(divLeftBottom).append('<p class="normal-text">Daily</p>'+
                            '<p class="weekly-text">Weekly</p>'+
                            '<p class="normal-text">Monthly</p>');

    $('<div/>').attr('id', 'divRight').addClass(classes.divRight).appendTo('#divBig');

    var activityInfo = {
        'activity': ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'],
        'hour': ['32hrs', '10hrs', '4hrs', '4hrs', '5hrs', '2hrs'],
        'last': ['Last Week - 36hrs', 'Last Week - 8hrs', 'Last Week - 7hrs', 'Last Week - 5hrs', 'Last Week - 10hrs', 'Last Week - 2hrs'],
        'color': ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']
    }

    for (let i=1; i < 7; i++){

        $('<div/>').attr('id', 'inside'+i).addClass(classes.inside).css('background-color',activityInfo.color[i-1]).appendTo('#divRight');
        $('<div/>').attr('id', 'insideTop'+i).addClass(classes.insideTop).css({background: 'url("images/icon-' + i + '.svg")', backgroundRepeat: 'no-repeat', backgroundSize: '75px', backgroundPosition: 'top -10px right 18px'}).appendTo('#inside'+i);     
        $('<div/>').attr('id', 'insideBottom'+i).addClass(classes.insideBottom).appendTo('#inside'+i);

        var activity = '<div class="activity">' + 
                            '<p class="activity-text">' + activityInfo.activity[i-1] + '</p>' +
                            '<img class="three-dots" src="images/icon-ellipsis.svg">'+
                        '</div>' +
                        '<h1 class="hour-text">' + activityInfo.hour[i-1] + '</h1>' +
                        '<p class="last-text">' + activityInfo.last[i-1] + '</p>'

        $('<div/>').html(activity).appendTo('#insideBottom'+i);

    }
}

(function initialize(){
    setStyle();
    setHtml();
})();