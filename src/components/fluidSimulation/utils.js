export function generateColor(colorTheme = []) {
  const c = HSVtoRGB(Math.random(), 1.0, 1.0, colorTheme)

  c.r *= 0.15
  c.g *= 0.15
  c.b *= 0.15

  return c
}

// prettier-ignore
function HSVtoRGB(h, s, v, colorTheme) {
    const i = Math.floor(h * 6)
    const j = 0.7
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)
    
    let r, g, b
    
    // red, orange, yellow, green, blue, violet, white
    // r, o, y, g, b, v, w
    let selectedColor = colorTheme[Math.floor(Math.random()*colorTheme.length)]
    switch(selectedColor) {
        case 'r':
            (r = v); (g = p); (b = q);
            break
        case 'o':
            (r = v); (g = t); (b = p);
            break
        case 'y':
            (r = q); (g = v); (b = p);
            break
        case 'g':
            (r = p); (g = v); (b = t);
            break
        case 'b':
            (r = p); (g = q); (b = v);
            break
        case 'v':
            (r = t); (g = p); (b = v);
            break
        case 'w':
            (r = j); (g = j); (b = j);
            break
        default:
            switch(i % 6) {
                case 0:
                    (r = v); (g = t); (b = p); //brightish orange/yellow
                    break
                case 1:
                    (r = q); (g = v); (b = p); //neon green/yellow
                    break
                case 2:
                    (r = p); (g = v); (b = t); //bright green/torquoise
                    break
                case 3:
                    (r = p); (g = q); (b = v); //brightish blue/light-blue
                    break
                case 4:
                    (r = t); (g = p); (b = v); //bright magenta
                    break
                case 5:
                    (r = v); (g = p); (b = q); //bright red/pink
                    break
                default:
                    (r = j); (g = j); (b = j);
            }
    }

    return { r, g, b }
}
