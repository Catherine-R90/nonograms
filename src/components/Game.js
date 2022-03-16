import React from "react";
import Level from "./Level";
import rawTutorial from './rawRows/tutorial';
import rawLevel1 from "./rawRows/level1";
import rawLevel2 from "./rawRows/level2";

export default function Game() {
    const tutorial = <Level rawRows={rawTutorial} />;

    const level1 = <Level rawRows={rawLevel1} />;

    const level2 = <Level rawRows={rawLevel2} />

    return (
        <div className="game">
            {tutorial}
            {/* {level1} */}
        </div>
    );
}