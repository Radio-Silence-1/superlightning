		
	
elements.anysizelightning = {
    color: "#ffffed",
    tick: function(pixel) {
        if (!pixel.stage) { // create bolt
            var y = pixel.y;
            var xoffset = 0;
            var last = [pixel.x,pixel.y]
            for (var i = 0; i < 100; i++) {
                y++;
                // randomly go back and forth
                if (Math.random() > 0.5) { xoffset++; }
                else { xoffset--; }
                var x = pixel.x + xoffset;
                if (isEmpty(x, y)) {
                    createPixel("lightning",x,y);
                    pixelMap[x][y].stage = 1;
                    pixelMap[x][y].color = pixel.color;
                    last = [x,y];
                }
                else if (outOfBounds(x,y) || !elements[pixelMap[x][y].element].isGas) {
                    //strike
                    if (Math.random() < 0.01) { // BALL LIGHTNING
                        pixelMap[last[0]][last[1]].stage = 9;
                    }
                    if (!outOfBounds(x,y)) { pixelMap[x][y].temp = 27760 }
                    explodeAt(x, y, 13, ["plasma","plasma","plasma","electric"]);
                    break;
                }
            }
            doDefaults(pixel);
            deletePixel(pixel.x, pixel.y);
        }
        else if (pixel.stage === 9) { // BALL LIGHTNING
            // move either left or right randomly
            if (Math.random() > 0.5) { tryMove(pixel, pixel.x + 1, pixel.y) }
            else { tryMove(pixel, pixel.x - 1, pixel.y) }
            // create electric in a 3x3 area around pixel
            for (var x = pixel.x - 1; x <= pixel.x + 1; x++) {
                for (var y = pixel.y - 1; y <= pixel.y + 1; y++) {
                    if (isEmpty(x, y)) {
                        createPixel("electric",x,y);
                        pixelMap[x][y].color = pixel.color;
                    }
                }
            }
            doDefaults(pixel);
            if (pixelTicks - pixel.start >= 250) { deletePixel(pixel.x, pixel.y); }
        }
        else if (pixelTicks - pixel.start >= 4) {
            doDefaults(pixel);
            //deletePixel(pixel.x, pixel.y);
            changePixel(pixel, "electric")
        }
        else { doDefaults(pixel); }
    },
    temp: 27760,
    tempLow: -273,
    stateLow: ["liquid_light",null],
    category: "customLightning",
    state: "gas",
    cooldown: defaultCooldown,
    density: 1000,
    hardness: 1,
    excludeRandom: true,
    noMix: true
}
	
	
elements.ultraLightning = {
    color: "#ffffed",
    tick: function(pixel) {
        if (!pixel.stage) { // create bolt
            var y = pixel.y;
            var xoffset = 0;
            var last = [pixel.x,pixel.y]
            for (var i = 0; i < 100; i++) {
                y++;
                // randomly go back and forth
                if (Math.random() > 0.5) { xoffset++; }
                else { xoffset--; }
                var x = pixel.x + xoffset;
                if (isEmpty(x, y)) {
                    createPixel("lightning",x,y);
                    pixelMap[x][y].stage = 1;
                    pixelMap[x][y].color = pixel.color;
                    last = [x,y];
                }
                else if (outOfBounds(x,y) || !elements[pixelMap[x][y].element].isGas) {
                    //strike
                    if (Math.random() < 0.01) { // BALL LIGHTNING
                        pixelMap[last[0]][last[1]].stage = 9;
                    }
                    if (!outOfBounds(x,y)) { pixelMap[x][y].temp = 27760 }
                    explodeAt(x, y, 13*2, ["plasma","plasma","plasma","electric"]);
                    break;
                }
            }
            doDefaults(pixel);
            deletePixel(pixel.x, pixel.y);
        }
        else if (pixel.stage === 9) { // BALL LIGHTNING
            // move either left or right randomly
            if (Math.random() > 0.5) { tryMove(pixel, pixel.x + 1, pixel.y) }
            else { tryMove(pixel, pixel.x - 1, pixel.y) }
            // create electric in a 3x3 area around pixel
            for (var x = pixel.x - 1; x <= pixel.x + 1; x++) {
                for (var y = pixel.y - 1; y <= pixel.y + 1; y++) {
                    if (isEmpty(x, y)) {
                        createPixel("electric",x,y);
                        pixelMap[x][y].color = pixel.color;
                    }
                }
            }
            doDefaults(pixel);
            if (pixelTicks - pixel.start >= 250) { deletePixel(pixel.x, pixel.y); }
        }
        else if (pixelTicks - pixel.start >= 4) {
            doDefaults(pixel);
            //deletePixel(pixel.x, pixel.y);
            changePixel(pixel, "electric")
        }
        else { doDefaults(pixel); }
    },
    temp: 27760,
    tempLow: -273,
    stateLow: ["liquid_light",null],
    category: "customLightning",
    state: "gas",
    cooldown: defaultCooldown,
    density: 1000,
    hardness: 1,
    excludeRandom: true,
    noMix: true
}
	
