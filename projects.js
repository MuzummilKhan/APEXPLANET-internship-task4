document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');

    function loadProjects() {
        let projects = JSON.parse(localStorage.getItem('projects'));
        if (!projects) {
            projects = [
                {
                    title: 'Project 1',
                    description: 'APEXPLANET internship task-1',
                    link: '#'
                },
                {
                    title: 'Project 2',
                    description: 'APEXPLANET internship task-2',
                    link: '#'
                },
                {
                    title: 'Project 3',
                    description: 'APEXPLANET internship task-3',
                    link: '#'
                }
            ];
            localStorage.setItem('projects', JSON.stringify(projects));
        }

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'bg-gray-50 rounded-md shadow-md p-4 hover:shadow-lg transition duration-300';
            projectCard.innerHTML = `
                <h3 class="text-xl font-semibold text-blue-600 mb-2">${project.title}</h3>
                <p class="text-gray-700 leading-relaxed mb-4">${project.description}</p>
                <a href="${project.link}" target="_blank" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">View Project</a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    loadProjects();
});