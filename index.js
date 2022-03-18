const nomorLantai = (loket) => {
    let result = 0
    let lantai = loket * (3/18)
    if (lantai % 1 === 0 && loket % 18 === 0) result = lantai // untuk lantai kelipatan 3 kelas bawah dan non desimal
    if (lantai % 1 === 0 && loket % 18 !== 0) result = lantai + 1 // untuk lantai kelipatan 3 kelas atas dan non desimal
    if (lantai % 1 !== 0) result = Math.ceil(lantai) // untuk lantai desimal dibulatkan keatas
    
    return `Loket nomor ${loket} ada di Lt. ${result}`
}