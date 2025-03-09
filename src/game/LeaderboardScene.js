// src/game/LeaderboardScene.js
import Phaser from 'phaser';

class LeaderboardScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LeaderboardScene'
        });
    }

    create() {
        // Add title
        this.add.text(
            this.sys.game.config.width / 2,
            50,
            'LEADERBOARD', {
                fontSize: '48px',
                fill: '#FFD700',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        // Add some sample scores (you can replace these with real scores later)
        const sampleScores = [{
            name: 'Player 1',
            score: 1000
        }, {
            name: 'Player 2',
            score: 800
        }, {
            name: 'Player 3',
            score: 600
        }, {
            name: 'Player 4',
            score: 400
        }, {
            name: 'Player 5',
            score: 200
        }];

        // Display scores
        sampleScores.forEach((scoreData, index) => {
            this.add.text(
                this.sys.game.config.width / 2,
                150 + (index * 60),
                `${index + 1}. ${scoreData.name}: ${scoreData.score}`, {
                    fontSize: '32px',
                    fill: '#FFFFFF'
                }
            ).setOrigin(0.5);
        });

        // Add back button
        const backButton = this.add.text(
                this.sys.game.config.width / 2,
                this.sys.game.config.height - 100,
                'Back to Game', {
                    fontSize: '32px',
                    fill: '#FFD700',
                    backgroundColor: '#000000',
                    padding: {
                        x: 20,
                        y: 10
                    }
                }
            ).setOrigin(0.5)
            .setInteractive();

        backButton.on('pointerup', () => {
            this.scene.start('Example');
        });

        backButton.on('pointerover', () => {
            backButton.setStyle({
                fill: '#FFFFFF'
            });
        });

        backButton.on('pointerout', () => {
            backButton.setStyle({
                fill: '#FFD700'
            });
        });
    }
}

export default LeaderboardScene;
