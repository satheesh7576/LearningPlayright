
function checkElementState(isPresent, isDisplayed, isEnabled) {
  let status, severity, action;

  if (isPresent === false) {
    status = "NOT FOUND";
    severity = "CRITICAL";
    action = "Element is not present in DOM. Investigate locator or page load.";
  } else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
    severity = "WARNING";
    action = "Element is present but hidden. Check visibility conditions or wait.";
  } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
    severity = "WARNING";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
  } else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
    severity = "OK";
    action = "Element is ready for interaction.";
  }

  console.log(`Status: ${status}, Severity: ${severity}, Action: ${action}`);
}
checkElementState(true, true, false);
