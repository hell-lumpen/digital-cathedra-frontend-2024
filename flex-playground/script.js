function updateFlexbox() {
    const flexContainer = document.getElementById("flex-container");

    // Получение значений из select
    const flexDirection = document.getElementById("flex-direction").value;
    const justifyContent = document.getElementById("justify-content").value;
    const alignItems = document.getElementById("align-items").value;
    const flexWrap = document.getElementById("flex-wrap").value;
    const alignContent = document.getElementById("align-content").value;

    // Применение стилей
    flexContainer.style.flexDirection = flexDirection;
    flexContainer.style.justifyContent = justifyContent;
    flexContainer.style.alignItems = alignItems;
    flexContainer.style.flexWrap = flexWrap;
    flexContainer.style.alignContent = alignContent;
}
