function ColorPicker({ color, setColor }) {
    const handleColorChange = (color) => {
        setColor(color);
    };

    return (
        <div className="row">
            <div className="picker" onClick={() => handleColorChange("grey")}>
                <div className="color-display grey"></div>
            </div>
            <div className="picker" onClick={() => handleColorChange("white")}>
                <div className="color-display white"></div>
            </div>
            <div className="picker" onClick={() => handleColorChange("black")}>
                <div className="color-display black"></div>
            </div>
            <div className="picker" onClick={() => handleColorChange("blue")}>
                <div className="color-display blue"></div>
            </div>
        </div>
    );
}

export default ColorPicker;
