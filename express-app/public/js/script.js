document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = data.map(item => `
            <div class="item">
                <h3 class='title'>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading data:', error);
    }
});
