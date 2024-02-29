// api.ts
async function fetchFooterData() {
    try {
        const response = await fetch('http://localhost:3001/footerData');
        
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

async function fetchFooterDataShared() {
    try {
        const response = await fetch('http://localhost:3001/footerDataShared');
        
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

export { fetchFooterData, fetchFooterDataShared };
