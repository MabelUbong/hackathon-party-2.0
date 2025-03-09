// src/components/Game.js
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import MainScene from '../scenes/MainScene';

const Game = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            parent: 'game-container',
            width: 800,
            height: 600,
            backgroundColor: '#000000', // Added black background
            scene: MainScene
        };

        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="game-container" style={{ height: '600px' }} />;
};

export default Game;
