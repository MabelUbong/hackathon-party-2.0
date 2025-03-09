// src/scenes/MainScene.js
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
        this.pacman = null;
        this.cursors = null;
        this.speed = 160;
        this.currentDirection = null;
        this.nextDirection = null;
        this.map = null;
        this.tileSize = null;
        this.ghosts = [];
        this.dots = [];
        this.score = 0;
        this.scoreText = null;
        this.lives = 3;
        this.livesText = null;
        this.gameOver = false;
        this.gameOverText = null;
        this.level = 1;
        this.levelText = null;
        this.stations = [];
    }

    preload() {
        // Load image assets
        this.load.image('pacman', 'assets/pacman.webp');
        this.load.image('block', 'assets/block.webp');
        this.load.image('blinky', 'assets/blinky.webp');
        this.load.image('clyde', 'assets/clyde.webp');
        this.load.image('inky', 'assets/inky.webp');
        this.load.image('strawberry', 'assets/strawberry.webp');
        this.load.image('pinky', 'assets/pinky.webp');
        this.load.image('blue_ghost', 'assets/blue_ghost.webp');
        this.load.image('dot', 'assets/dot.png');
    }

// src/scenes/MainScene.js
// ... (previous imports and constructor remain the same)

    createMaze() {
        // Create walls based on the map
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === '#') {
                    const wall = this.add.sprite(
                        x * this.tileSize + this.tileSize / 2,
                        y * this.tileSize + this.tileSize / 2,
                        'block'
                    );
                    wall.setDisplaySize(this.tileSize, this.tileSize);
                }
            }
        }
    }


    create() {
        this.cameras.main.setBackgroundColor('#000000');


        

        // Initialize the map
        this.map = [
            '############################',
            '#............##............#',
            '#.####.#####.##.#####.####.#',
            '#.####.#####.##.#####.####.#',
            '#..........................#',
            '#.####.##.########.##.####.#',
            '#......##....##....##......#',
            '######.##### ## #####.######',
            '     #.##          ##.#     ',
            '     #.## ######## ##.#     ',
            '######.## ######## ##.######',
            '      .   P           .     ',
            '######.## ######## ##.######',
            '     #.## ######## ##.#     ',
            '     #.##          ##.#     ',
            '######.## ######## ##.######',
            '#............##............#',
            '#.####.#####.##.#####.####.#',
            '#...##................##...#',
            '###.##.##.########.##.##.###',
            '#......##....##....##......#',
            '#.##########.##.##########.#',
            '#..........................#',
            '############################'
        ];

        this.tileSize = Math.min(
            this.sys.game.config.width / this.map[0].length,
            this.sys.game.config.height / this.map.length
        );

        // Create game elements
        this.createMaze(this.map);
        this.createPacman();
        this.createGhosts();
        this.createDots();
        this.setupStations();
        
        // Set up keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();


        // Create UI elements
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff'
        });

        this.livesText = this.add.text(16, 56, 'Lives: ' + this.lives, {
            fontSize: '32px',
            fill: '#fff'
        });

        this.levelText = this.add.text(16, 96, 'Level: ' + this.level, {
            fontSize: '32px',
            fill: '#fff'
        });

            
    }

    setupStations() {
        this.stations = [];  // Initialize stations array
        
        const stationConfigs = [
            { x: 3, y: 4, name: 'Social Media', url: '/social-media' },
            { x: 24, y: 4, name: 'Meet Sponsors', url: '/meet-recruiters' },
            { x: 14, y: 4, name: 'Success Stories', url: '/success-stories' },
            { x: 3, y: 20, name: 'Hackathon Community', url: '/community' },
            { x: 24, y: 20, name: 'Incentives', url: '/incentives' }
        ];
    
        stationConfigs.forEach(config => {
            // Create station sprite
            const sprite = this.add.sprite(
                config.x * this.tileSize + this.tileSize / 2,
                config.y * this.tileSize + this.tileSize / 2,
                'strawberry'  // Using inky ghost sprite for stations
            ).setScale(1.2);
    
            // Add station label
            const text = this.add.text(
                config.x * this.tileSize + this.tileSize / 2,
                (config.y + 1) * this.tileSize,
                config.name,
                {
                    fontSize: '16px',
                    fill: '#FFD700',
                    align: 'center'
                }
            ).setOrigin(0.5);
    
            // Add station to array
            this.stations.push({
                sprite,
                text,
                name: config.name,
                url: config.url
            });
        });
    }
    


    createPacman() {
        // Find Pacman's starting position
        let startX = 14; // Default position
        let startY = 11; // Default position

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 'P') {
                    startX = x;
                    startY = y;
                    break;
                }
            }
        }

        // Create Pacman sprite
        this.pacman = this.add.sprite(
            startX * this.tileSize + this.tileSize / 2,
            startY * this.tileSize + this.tileSize / 2,
            'pacman'
        );
        this.pacman.setScale(1.0);
        this.pacman.setDepth(1); // Ensure Pacman appears above dots
    }

    createGhosts() {
        const ghostTypes = ['blinky', 'pinky', 'inky', 'clyde'];
        const ghostStartPositions = [
            { x: 1, y: 1 },
            { x: this.map[0].length - 2, y: 1 },
            { x: 1, y: this.map.length - 2 },
            { x: this.map[0].length - 2, y: this.map.length - 2 }
        ];

        this.ghosts = ghostStartPositions.map((pos, index) => {
            const ghost = this.add.sprite(
                pos.x * this.tileSize + this.tileSize / 2,
                pos.y * this.tileSize + this.tileSize / 2,
                ghostTypes[index]
            );
            ghost.setScale(0.9);
            return {
                sprite: ghost,
                startX: pos.x * this.tileSize + this.tileSize / 2,
                startY: pos.y * this.tileSize + this.tileSize / 2,
                direction: 'right'
            };
        });
    }

    createDots() {
        this.dots = [];
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === '.') {
                    const dot = this.add.circle(
                        x * this.tileSize + this.tileSize / 2,
                        y * this.tileSize + this.tileSize / 2,
                        this.tileSize / 8,
                        0xFFFFFF
                    );
                    this.dots.push(dot);
                }
            }
        }
    }

    update() {
        if (this.gameOver) return;

        // Handle Pacman movement
        this.movePacman();
        
        // Move ghosts
        this.moveGhosts();
        
        // Check collisions
        this.checkDotCollisions();
        this.checkGhostCollisions();
        this.checkStationCollisions();
    }

    movePacman() {
        let velocityX = 0;
        let velocityY = 0;
        const speed = 3; // Adjust this value to change Pacman's speed

        // Handle keyboard input
        if (this.cursors.left.isDown) {
            velocityX = -speed;
            this.pacman.angle = 180;
        } else if (this.cursors.right.isDown) {
            velocityX = speed;
            this.pacman.angle = 0;
        } else if (this.cursors.up.isDown) {
            velocityY = -speed;
            this.pacman.angle = 270;
        } else if (this.cursors.down.isDown) {
            velocityY = speed;
            this.pacman.angle = 90;
        }

        // Calculate new position
        const newX = this.pacman.x + velocityX;
        const newY = this.pacman.y + velocityY;

        // Check if the new position would hit a wall
        if (!this.hitWall(newX, newY)) {
            this.pacman.x = newX;
            this.pacman.y = newY;
        }
    }

    hitWall(x, y) {
        // Convert pixel position to grid position
        const gridX = Math.floor(x / this.tileSize);
        const gridY = Math.floor(y / this.tileSize);

        // Check if the position is within bounds
        if (gridX < 0 || gridX >= this.map[0].length || gridY < 0 || gridY >= this.map.length) {
            return true;
        }

        // Check if there's a wall at this position
        return this.map[gridY][gridX] === '#';
    }

    moveGhosts() {
        this.ghosts.forEach(ghost => {
            const speed = 1; // Reduced from 2 to 1 for slower movement
            
            // Add randomness to ghost movement
            if (!ghost.direction || Math.random() < 0.02) { // 2% chance to change direction
                ghost.direction = this.getRandomDirection();
            }
            
            // Move based on current direction
            switch (ghost.direction) {
                case 'left':
                    ghost.sprite.x -= speed;
                    break;
                case 'right':
                    ghost.sprite.x += speed;
                    break;
                case 'up':
                    ghost.sprite.y -= speed;
                    break;
                case 'down':
                    ghost.sprite.y += speed;
                    break;
            }
    
            // Keep ghosts within bounds
            ghost.sprite.x = Phaser.Math.Clamp(
                ghost.sprite.x, 
                this.tileSize, 
                this.sys.game.config.width - this.tileSize
            );
            ghost.sprite.y = Phaser.Math.Clamp(
                ghost.sprite.y, 
                this.tileSize, 
                this.sys.game.config.height - this.tileSize
            );
    
            // Occasionally move towards Pacman (less aggressive chasing)
            if (Math.random() < 0.005) { // 0.5% chance to chase Pacman
                const dx = this.pacman.x - ghost.sprite.x;
                const dy = this.pacman.y - ghost.sprite.y;
                
                if (Math.abs(dx) > Math.abs(dy)) {
                    ghost.direction = dx > 0 ? 'right' : 'left';
                } else {
                    ghost.direction = dy > 0 ? 'down' : 'up';
                }
            }
        });
    }
    
    // Helper method for random direction
    getRandomDirection() {
        const directions = ['left', 'right', 'up', 'down'];
        return directions[Math.floor(Math.random() * directions.length)];
    }
    

    checkDotCollisions() {
        this.dots = this.dots.filter(dot => {
            if (Phaser.Geom.Intersects.CircleToRectangle(
                new Phaser.Geom.Circle(dot.x, dot.y, dot.radius),
                this.pacman.getBounds()
            )) {
                dot.destroy();
                this.score += 10;
                this.scoreText.setText('Score: ' + this.score);
                return false;
            }
            return true;
        });

        // Check if all dots are collected
        if (this.dots.length === 0) {
            this.levelComplete();
        }
    }

    checkGhostCollisions() {
        this.ghosts.forEach(ghost => {
            if (Phaser.Geom.Intersects.RectangleToRectangle(
                this.pacman.getBounds(),
                ghost.sprite.getBounds()
            )) {
                this.handleDeath();
            }
        });
    }

    checkStationCollisions() {
        this.stations.forEach(station => {
            if (this.checkOverlap(this.pacman, station.sprite)) {
                window.location.href = station.url;
            }
        });
    }
    

    checkOverlap(spriteA, spriteB) {
        const boundsA = spriteA.getBounds();
        const boundsB = spriteB.getBounds();
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
    }
    

    handleDeath() {
        this.lives--;
        this.livesText.setText('Lives: ' + this.lives);

        if (this.lives <= 0) {
            this.gameOver = true;
            this.showGameOver();
        } else {
            this.resetPositions();
        }
    }

    resetPositions() {
        // Reset Pacman position
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 'P') {
                    this.pacman.x = x * this.tileSize + this.tileSize / 2;
                    this.pacman.y = y * this.tileSize + this.tileSize / 2;
                    break;
                }
            }
        }

        // Reset ghost positions
        this.ghosts.forEach(ghost => {
            ghost.sprite.x = ghost.startX;
            ghost.sprite.y = ghost.startY;
        });
    }

    showGameOver() {
        this.gameOver = true;
        // Store the reference to gameOverText in the class property
        this.gameOverText = this.add.text(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            'GAME OVER\nScore: ' + this.score + '\nClick to restart',
            {
                fontSize: '48px',
                fill: '#ff0000',
                align: 'center'
            }
        ).setOrigin(0.5);

        this.input.on('pointerdown', () => {
            if (this.gameOver) {
                // Clean up the game over text before restarting
                this.gameOverText.destroy();
                this.scene.restart();
            }
        });
    }

    cleanup() {
        if (this.gameOverText) {
            this.gameOverText.destroy();
        }
    }

    
    

    levelComplete() {
        this.level++;
        this.levelText.setText('Level: ' + this.level);
        this.resetLevel();
    }

    resetLevel() {
        this.createDots();
        this.resetPositions();
    }
}

export default MainScene;
