import React from 'react';

// Define the type for each cube object
interface Cube {
    x: number;
    y: number;
    key: string;
}

// Define the props for the AbstractBackground component (empty in this case)
interface AbstractBackgroundProps { }

// Generate isometric cube grid for left or right side
const generateCubes = (startCol: number, endCol: number, rows: number): Cube[] => {
    const cubes: Cube[] = [];
    const cubeWidth = 60;
    const cubeHeight = 35;
    const offsetX = cubeWidth / 2;
    const offsetY = cubeHeight;

    for (let row = 0; row < rows; row++) {
        for (let col = startCol; col < endCol; col++) {
            const x = col * cubeWidth + (row % 2) * offsetX;
            const y = row * offsetY;
            const key = `${row}-${col}`;

            cubes.push({ x, y, key });
        }
    }
    
return cubes;
};

const AbstractBackground: React.FC<AbstractBackgroundProps> = () => {
    const rows = 20;
    const leftCubes = generateCubes(-5, 0, rows);
    const rightCubes = generateCubes(0, 5, rows);

    return (
        <div className="absolute w-full inset-0 pointer-events-none overflow-hidden">
            {/* Left side cubes */}
            <svg
                className="absolute -left-14 inset-y-0 w-1/2 h-full opacity-10"
                viewBox="0 0 400 600"
                preserveAspectRatio="xMaxYMid slice"
            >
                <defs>
                    <g id="iso-cube-left">
                        <path
                            d="M 30 0 L 60 17.5 L 30 35 L 0 17.5 Z"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 0 17.5 L 0 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 30 35 L 30 70"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 60 17.5 L 60 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 0 52.5 L 30 70 L 60 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                    </g>
                </defs>

                <g transform="translate(200, 50)">
                    {leftCubes.map((cube) => (
                        <use key={cube.key} xlinkHref="#iso-cube-left" x={cube.x} y={cube.y} />
                    ))}
                </g>
            </svg>

            {/* Right side cubes (mirrored) */}
            <svg
                className="absolute right-0 inset-y-0 w-1/2 h-full opacity-10"
                viewBox="0 0 400 600"
                preserveAspectRatio="xMinYMid slice"
            >
                <defs>
                    <g id="iso-cube-right">
                        <path
                            d="M 30 0 L 60 17.5 L 30 35 L 0 17.5 Z"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 0 17.5 L 0 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 30 35 L 30 70"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 60 17.5 L 60 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                        <path
                            d="M 0 52.5 L 30 70 L 60 52.5"
                            fill="none"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                        />
                    </g>
                </defs>

                <g transform="translate(200, 50)">
                    {rightCubes.map((cube) => (
                        <use key={cube.key} xlinkHref="#iso-cube-right" x={cube.x} y={cube.y} />
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default AbstractBackground;