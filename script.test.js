/**
 * Tests for the simple web application
 */

describe('Simple Web App Tests', () => {
    beforeEach(() => {
        // Set up a clean DOM for each test
        document.body.innerHTML = `
            <header>
                <h1>Welcome to My Simple Web App</h1>
                <p>This app demonstrates CI/CD pipeline deployment</p>
            </header>
            
            <main>
                <section class="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Responsive design</li>
                        <li>Automated testing</li>
                        <li>Continuous deployment</li>
                    </ul>
                </section>
                
                <section class="counter">
                    <h2>Interactive Counter</h2>
                    <button id="increment">Click me!</button>
                    <p>Count: <span id="count">0</span></p>
                </section>
            </main>
            
            <footer>
                <p>&copy; 2025 CI/CD Demo App</p>
            </footer>
        `;

        // Set up the counter functionality for testing
        let testCount = 0;
        const incrementButton = document.getElementById('increment');
        const countDisplay = document.getElementById('count');

        if (incrementButton && countDisplay) {
            incrementButton.addEventListener('click', function () {
                testCount++;
                countDisplay.textContent = testCount;
            });
        }
    });

    test('HTML structure contains required elements', () => {
        expect(document.getElementById('increment')).toBeTruthy();
        expect(document.getElementById('count')).toBeTruthy();
    });

    test('Counter starts at 0', () => {
        const countDisplay = document.getElementById('count');
        expect(countDisplay.textContent).toBe('0');
    });

    test('Counter increments when button is clicked', () => {
        const incrementButton = document.getElementById('increment');
        const countDisplay = document.getElementById('count');

        // Simulate click events
        incrementButton.click();
        expect(countDisplay.textContent).toBe('1');

        incrementButton.click();
        expect(countDisplay.textContent).toBe('2');
    });

    test('Page title is correct', () => {
        // Set the title for testing
        document.title = 'Simple Web App - CI/CD Demo';
        expect(document.title).toContain('Simple Web App');
    });

    test('Required CSS classes exist in HTML', () => {
        expect(document.querySelector('.features')).toBeTruthy();
        expect(document.querySelector('.counter')).toBeTruthy();
    });

    test('Required HTML elements exist', () => {
        expect(document.querySelector('header')).toBeTruthy();
        expect(document.querySelector('main')).toBeTruthy();
        expect(document.querySelector('footer')).toBeTruthy();
        expect(document.querySelector('.features')).toBeTruthy();
        expect(document.querySelector('.counter')).toBeTruthy();
    });

    test('Button has correct text', () => {
        const button = document.getElementById('increment');
        expect(button.textContent).toBe('Click me!');
    });

    test('Features list contains expected items', () => {
        const features = document.querySelector('.features ul');
        expect(features.children.length).toBe(3);
        expect(features.textContent).toContain('Responsive design');
        expect(features.textContent).toContain('Automated testing');
        expect(features.textContent).toContain('Continuous deployment');
    });
});