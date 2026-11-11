const services = [
  { name: 'user-service', owner: 'MS1', url: 'http://localhost:8081/hello' },
  { name: 'report-service', owner: 'MS2', url: 'http://localhost:8082/hello' },
  { name: 'media-service', owner: 'MS3', url: 'http://localhost:8083/api/media/hello' },
  { name: 'geo-service', owner: 'MS4', url: 'http://localhost:8084/hello' },
  { name: 'case-service', owner: 'MS5', url: 'http://localhost:8085/hello' },
  { name: 'notification-service', owner: 'MS6', url: 'http://localhost:8086/hello' },
  { name: 'analytics-service', owner: 'MS7', url: 'http://localhost:8087/hello' }
];

const container = document.getElementById('services');

function createCard(service) {
  const card = document.createElement('article');
  card.className = 'service-card';

  const top = document.createElement('div');
  top.className = 'card-top';

  const icon = document.createElement('span');
  icon.className = 'service-icon';
  icon.textContent = service.owner;

  const titles = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = service.name;
  const endpoint = document.createElement('code');
  endpoint.textContent = `GET ${service.url}`;
  titles.append(title, endpoint);
  top.append(icon, titles);

  const response = document.createElement('p');
  response.className = 'response';
  response.textContent = 'En attente de la réponse…';

  const status = document.createElement('span');
  status.className = 'status';
  status.textContent = 'Non testé';

  card.append(top, response, status);
  container.append(card);

  service.responseElement = response;
  service.statusElement = status;
}

async function testService(service) {
  const { responseElement, statusElement } = service;

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

services.forEach(createCard);

const testButton = document.getElementById('testButton');
testButton.addEventListener('click', async () => {
  testButton.disabled = true;
  testButton.textContent = 'Test en cours…';
  await Promise.all(services.map(testService));
  testButton.disabled = false;
  testButton.textContent = 'Tester les microservices';
});

testButton.click();
