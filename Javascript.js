function calculateRest(hoursFlown, hoursRested) {
  const maxDutyHours = 8;
  const minRestHours = 10;
  const maxFlightHours = 9;
  const minOffDutyHours = 11;

  if (hoursFlown > maxFlightHours) {
    return "Cannot exceed maximum flight hours of " + maxFlightHours;
  }

  const dutyHours = hoursFlown + hoursRested;

  if (dutyHours > maxDutyHours) {
    return "Cannot exceed maximum duty hours of " + maxDutyHours;
  }

  const offDutyHours = minRestHours - hoursRested;

  if (offDutyHours < minOffDutyHours) {
    return "Cannot have less than minimum off-duty hours of " + minOffDutyHours;
  }

  return "You have " + offDutyHours + " hours of rest time.";
}

const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const hoursFlown = Number(document.getElementById('hoursFlown').value);
  const hoursRested = Number(document.getElementById('hoursRested').value);
  const restTime = calculateRest(hoursFlown, hoursRested);
  result.textContent = restTime;
});