require("colors");
/**
 *
 * @param {*} msg Mensaje a decorar
 * @returns
 */
const consoleHeader = (msg) => {
    const decorLength = msg.length;
    let decorString = "====";

    for (let i = 0; i < decorLength; i++) {
        decorString += "=";
    }

    return `${decorString.green}\n  ${msg.bold}  \n${decorString.green}`;
};

module.exports = { consoleHeader };
