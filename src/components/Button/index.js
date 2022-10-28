import React from 'react';
import "./style.css"

export default function Button (props) {
    const value = props.value
    const theme = props.theme
    const action = props.action
    const set = props.set
    const state = props.state

    const styles = {
        clear: {
            color: "red"
        },
        operation: {
            color: "#233ba4"
        },
        his: {
            color: "#bcbe11"
        },
        num: {
            backgroundColor: "#FFF"
        },
        github: {
            color: "#FFF",
            backgroundColor: "#000"
        }
    }

    const change = () => {

        switch (action) {
            case "":
                set("0")
                break;
            case "=":
                try {
                    const pre = state.toLowerCase()
                        .replace("x", "*")
                        .replace(",", ".")

                    let res = eval(pre)
                    if (res != parseInt(String(res))) {
                        res = res.toFixed(2)
                    }
                    let result = String(res).replace(".", ",")

                    if (result == "Infinity") {
                        result = "0"
                        alert("Não há divisão por zero animal")
                    }

                    set(result)

                } catch (err) {
                    set("DEU RUIM :(")
                    console.log(state)
                    console.log(err)
                }
                break;
            case "G":
                window.open("https://github.com/josh662");
                break;
            default:
                if (state == "0") set(action)
                else if (state.length < 10) {
                    set(`${state}${action}`)
                }
        }
    }

    return (
        <button style={styles[theme]} onClick={() => change()}>{value}</button>
    )
}
