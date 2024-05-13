import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function CPaint() {
    const [color, setColor] = useState("black");
    const signatureRef = useRef(null);

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    const handleClear = () => {
        signatureRef.current.clear();
    };

    const handleUndo = () => {
        signatureRef.current.undo();
    };

    const handleSave = () => {
        const imageDataUrl = signatureRef.current.toDataURL();
        console.log("ImageDataUrl:", imageDataUrl);
    };

    return (
        <div>
            <SignatureCanvas
                ref={signatureRef}
                penColor={color}
                canvasProps={{ width: 500, height: 300 }}
            />
            <div>
                <button onClick={() => handleColorChange("black")} style={{ backgroundColor: "black", color: "white" }}>Black</button>
                <button onClick={() => handleColorChange("red")} style={{ backgroundColor: "red", color: "white" }}>Red</button>
                <button onClick={() => handleColorChange("blue")} style={{ backgroundColor: "blue", color: "white" }}>Blue</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}