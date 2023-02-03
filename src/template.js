// Create the team cards to render text to page
function addTeamCards(teamArray) {

    // add the manager html card
    function addManagerCard(emp) {
        return `    <!-- Manager Card -->
    <div class="card border-primary text-bg-light m-3" style="width: 20rem;">
        <div class="card-header">${emp.getRole()} 💼</div>
        <div class="card-body">
            <h3 class="display-6 mb-3">${emp.getName()}</h3>
            <p class="card-text">ID: ${emp.getId()}</p>
            <p class="card-text">email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
            <p class="card-text">Office Number: ${emp.getOfficeNumber()}</p>
        </div>
    </div>
    `
    }

    // add the Engineer html card
    function addEngineerCard(emp) {
        return `    <!-- Engineer Card -->
    <div class="card text-bg-light m-3" style="width: 20rem;">
        <div class="card-header">${emp.getRole()} 💻</div>
        <div class="card-body">
            <h3 class="display-6 mb-3">${emp.getName()}</h3>
            <p class="card-text">ID: ${emp.getId()}</p>
            <p class="card-text">email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
            <p class="card-text">GitHub: ${emp.getGithub()}</p>
        </div>
    </div>
    `
    }
  
    // add the Intern html card
    function addInternCard(emp) {
        return `    <!-- Intern Card -->
    <div class="card text-bg-dark m-3" style="width: 20rem;">
        <div class="card-header">${emp.getRole()} 📖</div>
        <div class="card-body">
            <h3 class="display-6 mb-3">${emp.getName()}</h3>
            <p class="card-text">ID: ${emp.getId()}</p>
            <p class="card-text">email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
            <p class="card-text">School: ${emp.getSchool()}</p>
        </div>
    </div>
    `
    }

    const finalText = []

    // We'll do these one role at a time to keep the page organized in case they added team members in a random order
    finalText.push(teamArray.filter(emp => emp.getRole() == 'Manager').map(emp => addManagerCard(emp)));
    finalText.push(teamArray.filter(emp => emp.getRole() == 'Engineer').map(emp => addEngineerCard(emp)));
    finalText.push(teamArray.filter(emp => emp.getRole() == 'Intern').map(emp => addInternCard(emp)));

    return finalText.join('');
}

// Need to pass the team in with the export/require
module.exports = (teamArray) => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>My Team Profile</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    <!-- Top Heading or Navbar -->
    <nav class="navbar bg-primary" data-bs-theme="dark">
        <div class="container-fluid justify-content-center">
            <h1 class="display-1 py-2">My Awesome Team</h1>
        </div>
    </nav>

    <!-- Employee Cards Section -->
    <div class="container-fluid d-inline-flex flex-wrap justify-content-evenly">

    ${addTeamCards(teamArray)}

    <!-- End of Employee Card Section -->
    </div>

    <!-- Footer -->
    <div></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>`
}