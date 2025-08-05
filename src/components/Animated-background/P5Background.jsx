import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Background = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                const canvas = p.createCanvas(800, 600);
                canvas.parent(canvasRef.current);
                p.noLoop();
            };
            p.draw = () => {
                p.background(26, 0, 0); 
                
                // Calculate center position
                const centerX = p.width / 2;
                const centerY = p.height / 2;
                
                // Canvas dimensions - much larger
                const canvasWidth = 700;
                const canvasHeight = 500;
                
                // Draw black filter/shadow behind the white canvas
                p.push();
                p.fill(0, 0, 0, 100); // Semi-transparent black
                p.noStroke();
                p.rect(centerX - canvasWidth/2 + 12, centerY - canvasHeight/2 + 12, canvasWidth, canvasHeight, 15);
                p.pop();
                
                // Draw white canvas
                p.push();
                p.fill(255, 255, 255, 255); // Solid white
                p.stroke(200, 200, 200, 100); // Light gray border
                p.strokeWeight(2);
                p.rect(centerX - canvasWidth/2, centerY - canvasHeight/2, canvasWidth, canvasHeight, 15);
                p.pop();
            };
        };

        const p5Instance = new p5(sketch);

        return () => {
            p5Instance.remove();
        };
    }, []);

    return <div ref={canvasRef} />;
};

export default P5Background;