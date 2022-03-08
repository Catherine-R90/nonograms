import React, { useState } from "react";
import Level from "./Level";

export default function Game() {

    const [levels, setLevels] = useState('');

    const Tutorial = () => {
        const raw = [
            [true, true, true, true, true],
            [true, false, false, false, false],
            [true, false, false, false, false],
            [true, false, false, false, false],
            [true, true, true, true, true],
        ];

        return (
            <Level rawRows={raw}  />
        );
    }

    const level1 = () => {
        const raw = [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, true, false, false, false, false, false, false],
            [false, false, true, false, false, false, true, false, false, false],
            [false, false, false, true, false, true, false, false, false, false],
            [false, false, true, true, true, true, true, false, false, false],
            [false, false, true, false, false, false, true, true, true, false],
            [false, false, true, false, false, false, true, false, true, false],
            [false, false, true, false, false, false, true, true, true, false],
            [false, false, true, true, true, true, true, false, false, false],
            [true, true, true, true, true, true, true, true, true, true]
        ];

        return (
            <Level rawRows={raw} />
        );
    }

    const level2 = () => {

        const raw = [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
            [false, false, false, false, false, true, true, false, true, true, false, false, false, false, false],
            [false, false, false, true, true, false, false, false, false, false, true, true, false, false, false],
            [false, true, true, false, false, false, false, false, false, false, false, false, true, true, false],
            [true, false, false, false, false, false, false, true, true, false, false, false, false, false, true],
            [false, true, true, false, false, false, true, false, false, false, false, false, true, true, false],
            [false, false, false, true, true, true, false, false, false, false, true, true, false, false, false],
            [false, false, false, true, true, false, true, false, true, true, true, false, false, false, false],
            [false, false, true, false, true, false, false, true, false, false, true, false, false, false, false],
            [false, false, true, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, true, false, false, true, true, true, true, true, true, true, false, false, false, false],
            [false, true, false, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
        ];
        
        return (
            <Level rawRows={raw} />
        )
    }

    return (
        <div>
            {Tutorial()}
        </div>
    );
}