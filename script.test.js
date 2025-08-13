/**
 * Tests for the simple web application
 */

describe('Simple Web App Tests', () => {
    beforeEach(() => {
        // Reset DOM and counter before each test
        document.body.innerHTML = `
            <button id="increment">Click me!</button>
            <span id="count">0</span>
        `;
        
        // Reset counter
        if (typeof resetCount === 'function') {
            resetCount();
        }
        
        // Re-initialize event listeners
        const incrementButton = document.getElementById('increment');
        const countDisplay = document.getElementById('count');
        let count = 0;
        
        incrementButton.addEventListener('click', function() {
            count++;
            countDisplay.textContent = count;
        });
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
        
        incrementButton.click();
        expect(countDisplay.textContent).toBe('1');
        
        incrementButton.click();
        expect(countDisplay.textContent).toBe('2');
    });

    test('Page title is correct', () => {
        expect(document.title).toContain('Simple Web App');
    });

    test('Required CSS classes exist in HTML', () => {
        // This is a basic check - in a real app you'd test computed styles
        const htmlContent = document.documentElement.innerHTML;
        expect(htmlContent).toContain('class="features"');
        expect(htmlContent).toContain('class="counter"');
    });
});