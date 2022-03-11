import "./App.scss";
import React, { useState, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import ColorPicker from "./components/ColorPicker";
import { exportComponentAsPNG } from "react-component-export-image";

function App() {
    const [mathString, setMathString] = useState("");
    const [color, setColor] = useState("gray");
    useEffect(() => {}, [mathString]);
    let resultBox = React.createRef();

    return (
        <div className="App-wrapper">
            <div className="App">
                <textarea
                    spellcheck="false"
                    id="equation-input"
                    onChange={(e) => setMathString(e.target.value)}
                ></textarea>
                <div id="result" className={color} ref={resultBox}>
                    <div className="control-overflow">
                        <MathComponent tex={mathString}></MathComponent>
                    </div>
                </div>
                <div className="row space-between">
                    <ColorPicker color={color} setColor={setColor}></ColorPicker>
                    <button
                        onClick={() =>
                            exportComponentAsPNG(resultBox, {
                                fileName: "equation",
                                html2CanvasOptions: {
                                    allowTaint: false,
                                    useCORS: true,
                                    backgroundColor: null,
                                },
                            })
                        }
                        id="download"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6 13h4v-7h4v7h4l-6 6-6-6zm16-1c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm2 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z" />
                        </svg>
                    </button>
                </div>
            </div>
            <footer>
                Built by{" "}
                <a href="https://hoffmanjoshua.dev" target="_blank" rel="noreferrer">
                    Joshua Hoffman
                </a>
                .
            </footer>
        </div>
    );
}

export default App;
