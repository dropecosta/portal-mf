// api.ts
async function fetchDummyData() {
    try {
        const response = await fetch('http://localhost:3001/dummyData');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { fetchDummyData };
