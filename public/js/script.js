window.addEventListener('DOMContentLoaded', function() {
    var effectsKey,
        video,
        index,
        target,
        effects,
        seriously;

    index = 0;

    ////////////////////////////////////////////////////////////////////////////////////
    // SET UP SERIOUSLYJS ENV
    seriously = new Seriously();
    video = seriously.source('#sorpresa');
    target = seriously.target('#canvas');

    ////////////////////////////////////////////////////////////////////////////////////
    // SET UP ALL EFFECTS WE NEED
    effects = {};
    effects['filmgrain'] = seriously.effect('filmgrain');
    effects['noise'] = seriously.effect('noise');
    effects['blur'] = seriously.effect('blur');
    effects['chroma'] = seriously.effect('chroma');
    effects['hue-saturation'] = seriously.effect('hue-saturation');
    effects['directionblur'] = seriously.effect('directionblur');
    effects['freeze'] = seriously.effect('freeze');
    effects['tvglitch'] = seriously.effect('tvglitch');
    effects['vibrance'] = seriously.effect('vibrance');

    // Add video's source to each effect
    for (var effect in effects) {
        effects[effect].source = video;
    }
    // Create a keys Object to get effect by index
    effectsKey = Object.keys(effects);

    ////////////////////////////////////////////////////////////////////////////////////
    // LAUNCH SERIOUSLY WITH AN EFFECT
    target.source = effects['filmgrain'];
    seriously.go();

    ////////////////////////////////////////////////////////////////////////////////////
    // ADD KEY LISTENER TO CHANGE EFFECT WITH LEFT AND RIGHT ARROWS
    $(window).keydown(function(e) {
        // console.log(e.keyCode);
        var effect = effects[effectsKey[index]];

        if (e.keyCode == 38 || e.keyCode == 40) {
            if (e.keyCode == 38) {
                if (index < effectsKey.length - 1)
                    index++;
                else
                    index = 0;
            } else if (e.keyCode == 40) {
                if (index >= 0)
                    index--;
                else
                    index = effectsKey.length - 1;
            }
            changeEffect(index);
        }

        /*A*/
        if (e.keyCode == 65) {
            if ((effect.amount == undefined) || (e.shiftKey && effect.amount == 0) || (!e.shiftKey && effect.amount == 1))
                return;
            effect.amount += e.shiftKey ? -0.1 : 0.1;
            console.log("Amount : " + effect.amount);
        }
        /*Z*/
        if (e.keyCode == 90) {
            if ((effect.clipBlack == undefined) || (e.shiftKey && effect.clipBlack == 0) || (!e.shiftKey && effect.clipBlack == 1))
                return;
            effect.clipBlack += e.shiftKey ? -0.1 : 0.1;
            console.log("Clip black : " + effect.clipBlack);
        }
        /*E*/
        if (e.keyCode == 69) {

        }
        /*R*/
        if (e.keyCode == 82) {

        }
        /*T*/
        if (e.keyCode == 84) {
            if ((!effect.time == undefined) || (e.shiftKey && effect.time == 0) || (!e.shiftKey && effect.time == 10))
                return;
            effect.time += e.shiftKey ? -1 : 1;
            console.log('Time : ' + effect.time);
        }
        /*Y*/
        if (e.keyCode == 89) {
            if ((effect.scanlines == undefined) || (e.shiftKey && effect.scanlines == 0) || (!e.shiftKey && effect.scanlines == 1))
                return;
            effect.scanlines += e.shiftKey ? -0.1 : 0.1;
            console.log("Scan lines : " + effect.scanlines);
        }
        /*I*/
        if (e.keyCode == 72) {
            if ((effect.frameShape == undefined) || (e.shiftKey && effect.frameShape == 0) || (!e.shiftKey && effect.frameShape == 2))
                return;
            effect.frameShape += e.shiftKey ? -0.1 : 0.1;
            console.log("Frame shape : " + effect.frameShape);
        }
        /*O*/
        if (e.keyCode == 79) {
            if ((effect.overlay == undefined))
                return;
            effect.overlay = !effect.overlay;
            console.log("Overlay : " + effect.overlay);
        }
        /*P*/
        if (e.keyCode == 80) {
            if ((effect.angle == undefined))
                return;
            if (e.shiftKey && effect.angle == 0) {
                effect.angle = 360;
                return;
            } else if (!e.shiftKey && effect.angle == 360) {
                effect.angle = 0;
                return;
            }

            effect.angle += e.shiftKey ? -1 : 1;
            console.log("Angle : " + effect.angle);
        }
        /*H*/
        if (e.keyCode == 72) {
            if ((effect.hue == undefined) || (e.shiftKey && effect.hue == -1) || (!e.shiftKey && effect.hue == 1))
                return;
            effect.hue += e.shiftKey ? -0.1 : 0.1;
            console.log("Hue : " + effect.hue);
        }
        /*J*/
        if (e.keyCode == 74) {
            if ((effect.frameSharpness == undefined) || (e.shiftKey && effect.frameSharpness == 0) || (!e.shiftKey && effect.frameSharpness == 40))
                return;
            effect.frameSharpness += e.shiftKey ? -1 : 1;
            console.log("Frame sharpness : " + effect.frameSharpness);
        }
        /*S*/
        if (e.keyCode == 83) {
            if ((effect.saturation == undefined) || (e.shiftKey && effect.saturation == -1) || (!e.shiftKey && effect.saturation == 1))
                return;
            effect.saturation += e.shiftKey ? -0.1 : 0.1;
            console.log('Saturation : ' + effect.saturation);
        }
        /*D*/
        if (e.keyCode == 68) {
            if ((effect.distortion == undefined) || (e.shiftKey && effect.distortion == 0) || (!e.shiftKey && effect.distortion == 1))
                return;
            effect.distortion += e.shiftKey ? -0.1 : 0.1;
            console.log("Distortion : " + effect.distortion);
        }
        /*F*/
        if (e.keyCode == 70) {
            if ((effect.frozen == undefined))
                return;
            effect.frozen = !effect.frozen;
            console.log("Frozen : " + effect.frozen);
        }
        /*L*/
        if (e.keyCode == 76) {
            if ((effect.lineSync == undefined) || (e.shiftKey && effect.lineSync == 0) || (!e.shiftKey && effect.lineSync == 1))
                return;
            effect.lineSync += e.shiftKey ? -0.1 : 0.1;
            console.log("Line sync : " + effect.lineSync);
        }
        /*M*/
        if (e.keyCode == 77) {
            if ((effect.mask == undefined))
                return;
            effect.mask = !effect.mask;
            console.log("Mask : " + effect.mask);
        }
        /*W*/
        if (e.keyCode == 87) {
            console.log(effect.clipWhite);
            if ((effect.clipWhite == undefined) || (e.shiftKey && effect.clipWhite == 0) || (!e.shiftKey && effect.clipWhite == 1))
                return;
            effect.clipWhite += e.shiftKey ? -0.1 : 0.1;
            console.log("Clip white : " + effect.clipWhite);
        }
        /*C*/
        if (e.keyCode == 67) {
            if ((effect.colored == undefined))
                return;
            effect.colored = !effect.colored;
            console.log("Colored : " + effect.colored);
        }
        /*V*/
        if (e.keyCode == 86) {
            if ((effect.verticalSync == undefined) || (e.shiftKey && effect.verticalSync == 0) || (!e.shiftKey && effect.verticalSync == 1))
                return;
            effect.verticalSync += e.shiftKey ? -0.1 : 0.1;
            console.log("Vertical sync : " + effect.verticalSync);
        }
        /*B*/
        if (e.keyCode == 66) {
            if ((effect.bars == undefined && effect.balance == undefined))
                return;
            var currentEffect = effect.balance == undefined ? effect.bar : effect.balance;
            if ((e.shiftKey && currentEffect == 0) || (!e.shiftKey && currentEffect == 1))
                return;
            currentEffect += e.shiftKey ? -0.1 : 0.1;
            var currentName = effect.balance == undefined ? "Bars : " : "Balance : ";
            console.log(currentName + currentEffect);
        }
    });

    ////////////////////////////////////////////////////////////////////////////////////
    // FUNCTIONS
    var changeEffect = function(index) {
        var effect = effectsKey[index];
        console.log(effect);
        target.source = effects[effect];
    };
});