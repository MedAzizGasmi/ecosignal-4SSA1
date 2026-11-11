const services = [
  {
    name: 'user-service',
    url: 'http://localhost:8081/hello',
    responseId: 'userResponse',
    statusId: 'userStatus'
  },
  {
    name: 'report-service',
    url: 'http://localhost:8082/hello',
    responseId: 'reportResponse',
    statusId: 'reportStatus'
  }
];

async function testService(service) {
  const responseElement = document.getElementById(service.responseId);
  const statusElement = document.getElementById(service.statusId);

  responseElement.textContent = 'Appel en cours…';
  statusElement.textContent = 'Connexion…';
  statusElement.className = 'status';

  try {
    const response = await fetch(service.url);
    const body = await response.text();

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${body}`);
    }

    responseElement.textContent = body;
    statusElement.textContent = `Disponible · HTTP ${response.status}`;
    statusElement.className = 'status ok';
  } catch (error) {
    responseElement.textContent = 'Impossible de contacter le service.';
    statusElement.textContent = error.message;
    statusElement.className = 'status error';
  }
}

const testButton = document.getElementById('testButton');
testButton.addEventListener('click', async () => {
  testButton.disabled = true;
  testButton.textContent = 'Test en cours…';
  await Promise.all(services.map(testService));
  testButton.disabled = false;
  testButton.textContent = 'Tester les deux API';
});

testButton.click();
