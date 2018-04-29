window.onload = function () {

            var domNode = anime({
                targets: '#boni-pic',
                translateX: -500,
                direction: 'reverse',
                delay: 3000,
                duration: 1500,
                easing: 'easeInOutExpo'
            });

            var domNode2 = anime({
                targets: '#boni-text',
                translateX: 600,
                direction: 'reverse',
                delay: 3000,
                duration: 1500,
                easing: 'easeInOutExpo'
            });

            var domNode_nav = anime({
                targets: '.navbar',
                translateY: -400,
                direction: 'reverse',
                delay: 3000,
                duration: 1500,
                easing: 'easeInOutExpo'
            });
        }