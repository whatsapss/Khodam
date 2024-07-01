document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const resultDiv = document.getElementById('result');

    // Generate a random khodam
    const khodam = generateRandomKhodam();

    resultDiv.textContent = `Your khodam is: ${khodam}`;
});

function generateRandomKhodam() {
    const khodamNames = [
        'Aquila', 'Draco', 'Phoenix', 'Leo', 'Pegasus', 'Hydra', 'Orion', 'Lyra', 'Andromeda', 'Cygnus',
        'Cassiopeia', 'Taurus', 'Aries', 'Gemini', 'Cancer', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus',
        'Aquarius', 'Pisces', 'Centaurus', 'Vulpecula', 'Auriga', 'Cepheus', 'Delphinus', 'Equuleus', 'Hercules', 'Lacerta',
        'Perseus', 'Serpens', 'Triangulum', 'Ursa Major', 'Ursa Minor', 'Boötes', 'Corona Borealis', 'Corvus', 'Crater', 'Crux',
        'Eridanus', 'Grus', 'Horologium', 'Hydrus', 'Indus', 'Lupus', 'Lynx', 'Mensa', 'Microscopium', 'Norma',
        'Octans', 'Pavo', 'Phoenix', 'Pictor', 'Puppis', 'Pyxis', 'Reticulum', 'Sagitta', 'Scutum', 'Telescopium',
        'Tucana', 'Volans', 'Apus', 'Ara', 'Canes Venatici', 'Columba', 'Coma Berenices', 'Dorado', 'Fornax', 'Musca',
        'Scorpius', 'Sculptor', 'Chamaeleon', 'Circinus', 'Hydra', 'Lepus', 'Lynx', 'Monoceros', 'Pictor', 'Vela',
        'Leo Minor', 'Antlia', 'Caelum', 'Camelopardalis', 'Canis Major', 'Canis Minor', 'Capricornus', 'Carina', 'Corona Australis', 'Crux'
    ];

    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    return khodamNames[randomIndex];
}
