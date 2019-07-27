var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
};

var Links = {
    setColor: function(color) {
        var aList = document.querySelectorAll('a');
        aList.forEach(element => {
            element.style.color = color;
        });
    }
};

function nightDayHandler(self) {
    if (self.value === 'night') {
        self.value = 'day';
        Body.setBackgroundColor('black');
        Body.setColor('ivory');
        Links.setColor('powderblue');
    } else {
        self.value = 'night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
    }
}