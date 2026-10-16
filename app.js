const STORAGE_KEY = "l4d2-mod-tracker-v1";
const EXPORT_FORMAT = "l4d2-mod-tracker";
const SCHEMA_VERSION = 4;

const steamScreenshots = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_6ec4ee04d4924b099e25ce79f3d6571c3b623b3b.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_73ad69168a263ce585e4823d9607d901719ca3c5.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_a9c1227ffe8a1968e234b3ebda08e773fc619e37.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_ba2ea2eda245f89626277457ae2ab76ba997f46a.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_7098be159cfe3cc524fb68b2585f643324cc1078.1920x1080.jpg?t=1772742214",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_67275710127ce20b62015718dbf84147fde7fc17.1920x1080.jpg?t=1772742214"
];

const specificItemImages = {
  bill: "https://static.wikia.nocookie.net/left4dead/images/4/4e/Bill_Profile.png/revision/latest/scale-to-width-down/325?cb=20091214031343",
  zoey: "https://static.wikia.nocookie.net/left4dead/images/3/37/Zoey_Profile.png/revision/latest/scale-to-width-down/234?cb=20091214031344",
  francis: "https://static.wikia.nocookie.net/left4dead/images/3/3c/Francis_Profile.png/revision/latest?cb=20220918064846",
  louis: "https://static.wikia.nocookie.net/left4dead/images/c/c1/Louis_profile.png/revision/latest?cb=20091214031342",
  coach: "https://static.wikia.nocookie.net/left4dead/images/f/f3/CoachWeaponsRender.jpg/revision/latest/scale-to-width-down/312?cb=20091114030350",
  ellis: "https://static.wikia.nocookie.net/left4dead/images/1/14/EllisWeaponsRender.jpg/revision/latest/scale-to-width-down/258?cb=20091114030411",
  nick: "https://static.wikia.nocookie.net/left4dead/images/7/77/NickWeaponsRender.jpg/revision/latest/scale-to-width-down/248?cb=20091114030425",
  rochelle: "https://static.wikia.nocookie.net/left4dead/images/5/5f/RochelleWeaponsRender.jpg/revision/latest/scale-to-width-down/265?cb=20091114030448",
  boomer: "https://static.wikia.nocookie.net/left4dead/images/8/8c/Boomer-left4dead2.jpg/revision/latest?cb=20091029040800",
  smoker: "https://static.wikia.nocookie.net/left4dead/images/f/f7/Smoker2.png/revision/latest?cb=20250618023726",
  hunter: "https://static.wikia.nocookie.net/left4dead/images/7/78/Hunter-artwork.gif/revision/latest?cb=20081028131238",
  witch: "https://static.wikia.nocookie.net/left4dead/images/f/f3/Witch.jpg/revision/latest?cb=20250227092627",
  tank: "https://static.wikia.nocookie.net/left4dead/images/9/9d/Tank.png/revision/latest?cb=20200814220130",
  spitter: "https://static.wikia.nocookie.net/left4dead/images/e/ed/Spitter.jpg/revision/latest?cb=20091122224054",
  jockey: "https://static.wikia.nocookie.net/left4dead/images/c/c1/Jockey.png/revision/latest?cb=20250618103804",
  charger: "https://static.wikia.nocookie.net/left4dead/images/e/e8/Charger.png/revision/latest?cb=20110705012106",
  magnum: "https://static.wikia.nocookie.net/left4dead/images/2/2f/Magnum.jpg/revision/latest?cb=20101024052614",
  melee: "https://static.wikia.nocookie.net/left4dead/images/c/cc/Chainsaw.png/revision/latest?cb=20101021024714",
  medkit: "https://static.wikia.nocookie.net/left4dead/images/e/e8/First_aid_kit.png/revision/latest?cb=20081115194406"
};

const categories = [
  {
    id: "survivors",
    name: "Supervivientes",
    image: steamScreenshots[0],
    items: [
      ["bill", "Bill — modelo, ropa o textura"],
      ["zoey", "Zoey — modelo, ropa o textura"],
      ["francis", "Francis — modelo, ropa o textura"],
      ["louis", "Louis — modelo, ropa o textura"],
      ["coach", "Coach — modelo, ropa o textura"],
      ["ellis", "Ellis — modelo, ropa o textura"],
      ["nick", "Nick — modelo, ropa o textura"],
      ["rochelle", "Rochelle — modelo, ropa o textura"],
      ["survivor-arms", "Brazos / modelos en primera persona"],
      ["survivor-voice", "Voces o sonidos de supervivientes"]
    ]
  },
  {
    id: "infected",
    name: "Infectados",
    image: steamScreenshots[5],
    items: [
      ["common-infected", "Infectados comunes"],
      ["boomer", "Boomer"],
      ["smoker", "Smoker"],
      ["hunter", "Hunter"],
      ["witch", "Witch"],
      ["tank", "Tank"],
      ["spitter", "Spitter"],
      ["jockey", "Jockey"],
      ["charger", "Charger"]
    ]
  },
  {
    id: "weapons",
    name: "Armas",
    image: steamScreenshots[1],
    items: [
      ["pistols", "Pistolas / duales"],
      ["magnum", "Pistola Magnum"],
      ["smgs", "Subfusiles"],
      ["shotguns", "Escopetas"],
      ["rifles", "Rifles de asalto"],
      ["snipers", "Rifles de francotirador"],
      ["special-weapons", "M60, lanzagranadas y otras armas especiales"],
      ["melee", "Armas cuerpo a cuerpo"],
      ["throwables", "Lanzables: molotov, bomba casera y bile jar"],
      ["weapon-animations", "Animaciones de armas"]
    ]
  },
  {
    id: "items",
    name: "Objetos y equipamiento",
    image: steamScreenshots[2],
    items: [
      ["medkit", "Botiquín"],
      ["pills-adrenaline", "Píldoras y adrenalina"],
      ["defibrillator", "Desfibrilador"],
      ["ammo-upgrades", "Munición incendiaria / explosiva"],
      ["laser-sight", "Mira láser"],
      ["world-items", "Modelos de objetos y suministros"]
    ]
  },
  {
    id: "maps",
    name: "Mapas y campañas",
    image: steamScreenshots[7],
    items: [
      ["custom-campaigns", "Campañas personalizadas"],
      ["custom-maps", "Mapas individuales"],
      ["environment", "Entornos, cielo y decoración"]
    ]
  },
  {
    id: "gameplay",
    name: "Jugabilidad",
    image: steamScreenshots[3],
    items: [
      ["mutations", "Mutaciones"],
      ["scripts", "Scripts y reglas de juego"],
      ["bots", "Comportamiento de bots"],
      ["balance", "Dificultad, daño y balance de armas"]
    ]
  },
  {
    id: "audio",
    name: "Audio y música",
    image: steamScreenshots[4],
    items: [
      ["weapon-sounds", "Sonidos de armas"],
      ["infected-sounds", "Sonidos de infectados"],
      ["music", "Música y ambiente"],
      ["sound-effects", "Otros efectos de sonido"]
    ]
  },
  {
    id: "visuals",
    name: "Interfaz y efectos visuales",
    image: steamScreenshots[8],
    items: [
      ["hud", "HUD e interfaz"],
      ["menus", "Menús e iconos"],
      ["crosshair", "Miras y retícula"],
      ["loading-screens", "Pantallas de carga"],
      ["textures", "Texturas y materiales"],
      ["particles", "Partículas y efectos visuales"]
    ]
  },
  {
    id: "extras",
    name: "Animaciones y extras",
    image: steamScreenshots[6],
    items: [
      ["character-animations", "Animaciones de personajes"],
      ["sprays", "Sprays"],
      ["other-cosmetics", "Otros cambios cosméticos"]
    ]
  }
];

const knownItemIds = new Set(
  categories.flatMap((category) => category.items.map(([id]) => id))
);
const categoryIds = new Set(categories.map((category) => category.id));

const categoryList = document.querySelector("#category-list");
const customList = document.querySelector("#custom-list");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const statusMessage = document.querySelector("#status-message, #summary-status");
const state = { checked: {}, notes: {}, customItems: [] };
const expandedCategories = new Set(["survivors"]);
let summaryLoaded = false;
let statusTimer;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function setStatus(message, isError = false) {
  if (!statusMessage) return;
  window.clearTimeout(statusTimer);
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-error", isError);
  if (message) {
    statusTimer = window.setTimeout(() => {
      statusMessage.textContent = "";
      statusMessage.classList.remove("is-error");
    }, 6000);
  }
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      format: EXPORT_FORMAT,
      version: SCHEMA_VERSION,
      mods: createModRecords(),
      customMods: state.customItems.map(({ id, name, categoryId, done, note }) => ({
        id,
        name,
        categoryId,
        done,
        note: note ?? ""
      }))
    }));
    return true;
  } catch (error) {
    console.error("No se pudo guardar el progreso en este navegador.", error);
    setStatus("No se pudo guardar en este navegador. Descarga un JSON para no perder los cambios.", true);
    return false;
  }
}

function createModRecords() {
  return Object.fromEntries(
    categories.flatMap((category) => category.items.map(([id]) => [
      id,
      { done: Boolean(state.checked[id]), note: state.notes[id] ?? "" }
    ]))
  );
}

function validateProgress(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("El archivo no contiene un objeto JSON válido.");
  }
  if (data.format !== EXPORT_FORMAT || ![1, 2, 3, SCHEMA_VERSION].includes(data.version)) {
    throw new Error("El archivo no es de L4D2 Mod Tracker o usa una versión no compatible.");
  }
  const checked = {};
  const notes = {};
  if (data.version >= 3) {
    if (!data.mods || typeof data.mods !== "object" || Array.isArray(data.mods)) {
      throw new Error("El archivo no contiene la lista completa de mods.");
    }
    for (const [id, record] of Object.entries(data.mods)) {
      const done = data.version === SCHEMA_VERSION ? record?.done : record?.status;
      if (!knownItemIds.has(id) || !record || typeof record !== "object" ||
          typeof done !== "boolean" || typeof record.note !== "string" || record.note.length > 2000) {
        throw new Error("El archivo contiene un mod marcado o nota con formato inválido.");
      }
      checked[id] = done;
      if (record.note) notes[id] = record.note;
    }
    for (const id of knownItemIds) {
      if (!Object.hasOwn(data.mods, id)) {
        throw new Error("El archivo no incluye todos los elementos del checklist.");
      }
    }
  } else {
    if (!data.checked || typeof data.checked !== "object" || Array.isArray(data.checked)) {
      throw new Error("El archivo no contiene una lista de progreso válida.");
    }
    for (const [id, value] of Object.entries(data.checked)) {
      if (!knownItemIds.has(id) || typeof value !== "boolean") {
        throw new Error("El archivo contiene datos de checklist no reconocidos.");
      }
      checked[id] = value;
    }
    if (data.notes !== undefined && (!data.notes || typeof data.notes !== "object" || Array.isArray(data.notes))) {
      throw new Error("Las notas del archivo no tienen un formato válido.");
    }
    for (const [id, value] of Object.entries(data.notes ?? {})) {
      if (!knownItemIds.has(id) || typeof value !== "string" || value.length > 2000) {
        throw new Error("El archivo contiene una nota no válida.");
      }
      if (value) notes[id] = value;
    }
  }
  for (const id of knownItemIds) checked[id] = Boolean(checked[id]);
  const importedCustomItems = data.version >= 3 ? data.customMods : data.customItems;
  if (!Array.isArray(importedCustomItems) || importedCustomItems.length > 500) {
    throw new Error("La lista de mods personalizados no es válida.");
  }
  const ids = new Set();
  const customItems = importedCustomItems.map((item) => {
    const done = data.version === SCHEMA_VERSION ? item?.done : data.version === 3 ? item?.status : item?.done;
    if (!item || typeof item !== "object" || Array.isArray(item) ||
        typeof item.id !== "string" || item.id.length > 100 || ids.has(item.id) ||
        typeof item.name !== "string" || !item.name.trim() || item.name.length > 120 ||
        !categoryIds.has(item.categoryId) || typeof done !== "boolean" ||
        (data.version >= 3 && typeof item.note !== "string") ||
        (item.note !== undefined && (typeof item.note !== "string" || item.note.length > 2000))) {
      throw new Error("El archivo contiene un mod personalizado inválido.");
    }
    ids.add(item.id);
    return {
      id: item.id,
      name: item.name.trim(),
      categoryId: item.categoryId,
      done,
      note: item.note ?? ""
    };
  });
  return { checked, notes, customItems };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    if (data.format !== EXPORT_FORMAT || ![1, 2, 3, SCHEMA_VERSION].includes(data.version)) {
      throw new Error("Los datos guardados pertenecen a una versión no compatible.");
    }
    const progress = validateProgress(data);
    state.checked = progress.checked;
    state.notes = progress.notes;
    state.customItems = progress.customItems;
    if (data.version !== SCHEMA_VERSION) persistState();
  } catch (error) {
    console.error("No se pudo cargar el progreso guardado.", error);
    setStatus("No se pudieron cargar los datos guardados. Puedes intentar recuperar una copia JSON.", true);
  }
}

function populateFilters() {
  const customCategory = document.querySelector("#custom-category");
  const summaryFilter = document.querySelector("#summary-filter");
  for (const category of categories) {
    for (const select of [categoryFilter, customCategory, summaryFilter]) {
      if (select) select.add(new Option(category.name, category.id));
    }
  }
}

function itemImage(categoryIndex, itemIndex, id) {
  return specificItemImages[id] ?? steamScreenshots[(categoryIndex + itemIndex) % steamScreenshots.length];
}

function makeItemCard({ id, label, category, categoryIndex, itemIndex, isCustom = false, customItem }) {
  const card = createElement("article", "item-card");
  const art = createElement("div", "item-art");
  const image = document.createElement("img");
  image.src = isCustom ? category.image : itemImage(categoryIndex, itemIndex, id);
  image.alt = "";
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.hidden = true;
    art.classList.add("image-missing");
  }, { once: true });
  art.append(image, createElement("span", "item-monogram", label.slice(0, 2).toUpperCase()));

  const content = createElement("div", "item-content");
  const checkLine = createElement("label", "item-check");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCustom ? customItem.done : Boolean(state.checked[id]);
  checkbox.addEventListener("change", () => {
    if (isCustom) customItem.done = checkbox.checked;
    else state.checked[id] = checkbox.checked;
    card.classList.toggle("is-checked", checkbox.checked);
    persistState();
    renderProgress();
    updateCategoryCounts();
  });
  checkLine.append(checkbox, createElement("span", "item-name", label));
  content.append(checkLine);

  const note = document.createElement("textarea");
  note.className = "item-note";
  note.maxLength = 2000;
  note.rows = 2;
  note.placeholder = "Tu nota: nombre del mod, reemplazo, enlace...";
  note.value = isCustom ? customItem.note : (state.notes[id] ?? "");
  note.setAttribute("aria-label", `Nota para ${label}`);
  note.addEventListener("input", () => {
    if (isCustom) customItem.note = note.value;
    else state.notes[id] = note.value;
    persistState();
  });
  content.append(note);

  if (checkbox.checked) card.classList.add("is-checked");
  card.append(art, content);
  if (isCustom) {
    const removeButton = createElement("button", "remove-custom", "×");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Eliminar ${label}`);
    removeButton.addEventListener("click", () => {
      state.customItems = state.customItems.filter((item) => item.id !== customItem.id);
      persistState();
      render();
      setStatus("Mod personalizado eliminado.");
    });
    card.append(removeButton);
  }
  return card;
}

function updateCategoryCounts() {
  categories.forEach((category) => {
    const count = category.items.reduce((total, [id]) => total + (state.checked[id] ? 1 : 0), 0);
    const countElement = categoryList.querySelector(`[data-category-count="${category.id}"]`);
    if (countElement) countElement.textContent = `${count} / ${category.items.length}`;
  });
}

function renderCategories(customMatchCount = 0) {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  const selectedCategory = categoryFilter.value;
  categoryList.replaceChildren();
  let visibleCategories = 0;

  categories.forEach((category, index) => {
    if (selectedCategory !== "all" && selectedCategory !== category.id) return;
    const categoryMatchesQuery = category.name.toLocaleLowerCase("es").includes(query);
    const matchingItems = category.items.filter(([, label]) =>
      !query || categoryMatchesQuery || label.toLocaleLowerCase("es").includes(query)
    );
    if (query && !matchingItems.length) return;

    visibleCategories += 1;
    const card = document.createElement("details");
    card.className = "category-card";
    card.open = query ? true : expandedCategories.has(category.id);
    const header = document.createElement("summary");
    header.className = "category-header";
    const headerId = `category-heading-${category.id}`;
    header.id = headerId;
    header.setAttribute("aria-label", category.name);
    const title = createElement("span", "category-title", category.name);
    const count = category.items.reduce((total, [id]) => total + (state.checked[id] ? 1 : 0), 0);
    const categoryCount = createElement("span", "category-count", `${count} / ${category.items.length}`);
    categoryCount.dataset.categoryCount = category.id;
    header.append(
      createElement("span", "category-index", String(index + 1).padStart(2, "0")),
      Object.assign(createElement("img", "category-image"), {
        src: category.image,
        alt: "",
        loading: "lazy"
      }),
      title,
      categoryCount,
      createElement("span", "category-chevron", "")
    );
    header.querySelector(".category-image").addEventListener("error", (event) => {
      event.currentTarget.hidden = true;
    }, { once: true });
    card.addEventListener("toggle", () => {
      if (searchInput.value.trim()) return;
      if (card.open) expandedCategories.add(category.id);
      else expandedCategories.delete(category.id);
    });

    const items = createElement("div", "category-items");
    items.setAttribute("aria-labelledby", headerId);
    matchingItems.forEach(([id, label]) => {
      const itemIndex = category.items.findIndex(([itemId]) => itemId === id);
      items.append(makeItemCard({ id, label, category, categoryIndex: index, itemIndex }));
    });
    card.append(header, items);
    categoryList.append(card);
  });
  document.querySelector("#empty-message").hidden = visibleCategories > 0 || customMatchCount > 0;
}

function renderCustomItems() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  customList.replaceChildren();
  const matchedItems = state.customItems.filter((item) =>
    item.name.toLocaleLowerCase("es").includes(query) &&
    (categoryFilter.value === "all" || item.categoryId === categoryFilter.value)
  );
  matchedItems.forEach((item, index) => {
    const category = categories.find((entry) => entry.id === item.categoryId);
    const categoryIndex = categories.indexOf(category);
    customList.append(makeItemCard({
      id: item.id,
      label: item.name,
      category,
      categoryIndex,
      itemIndex: index,
      isCustom: true,
      customItem: item
    }));
  });
  return matchedItems.length;
}

function renderProgress() {
  const countElement = document.querySelector("#progress-count");
  const progressBar = document.querySelector(".progress-track");
  const progressFill = document.querySelector(".progress-fill");
  if (!countElement || !progressBar || !progressFill) return;
  const total = knownItemIds.size + state.customItems.length;
  const completed = Object.values(state.checked).filter(Boolean).length +
    state.customItems.filter((item) => item.done).length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;
  countElement.textContent = `${completed} / ${total}`;
  progressBar.setAttribute("aria-valuenow", String(percentage));
  progressBar.setAttribute("aria-valuetext", `${percentage}% completado`);
  progressFill.style.width = `${percentage}%`;
}

function render() {
  const customMatchCount = renderCustomItems();
  renderCategories(customMatchCount);
  renderProgress();
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() ??
    `custom-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function exportProgress() {
  const data = {
    format: EXPORT_FORMAT,
    version: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    mods: createModRecords(),
    customMods: state.customItems.map(({ id, name, categoryId, done, note }) => ({
      id,
      name,
      categoryId,
      done,
      note: note ?? ""
    }))
  };
  const blob = new Blob([`${JSON.stringify(data, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mi-progreso-l4d2.json";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus("Copia JSON descargada. Guárdala en un lugar seguro.");
}

function getCompletedMods() {
  const completed = [];
  categories.forEach((category, categoryIndex) => {
    category.items.forEach(([id, label], itemIndex) => {
      if (state.checked[id]) {
        completed.push({
          id,
          label,
          category,
          categoryIndex,
          itemIndex,
          note: state.notes[id] ?? ""
        });
      }
    });
  });
  state.customItems.forEach((item, itemIndex) => {
    if (!item.done) return;
    const category = categories.find((entry) => entry.id === item.categoryId);
    completed.push({
      id: item.id,
      label: item.name,
      category,
      categoryIndex: categories.indexOf(category),
      itemIndex,
      note: item.note ?? "",
      isCustom: true,
      customItem: item
    });
  });
  return completed;
}

function getAllMods() {
  const items = [];
  categories.forEach((category, categoryIndex) => {
    category.items.forEach(([id, label], itemIndex) => {
      items.push({
        id,
        label,
        category,
        categoryIndex,
        itemIndex,
        done: Boolean(state.checked[id]),
        note: state.notes[id] ?? ""
      });
    });
  });
  state.customItems.forEach((item, itemIndex) => {
    const category = categories.find((entry) => entry.id === item.categoryId);
    items.push({
      id: item.id,
      label: item.name,
      category,
      categoryIndex: categories.indexOf(category),
      itemIndex,
      done: item.done,
      note: item.note ?? "",
      isCustom: true
    });
  });
  return items;
}

function renderSummary() {
  const summaryList = document.querySelector("#summary-list");
  const search = document.querySelector("#summary-search");
  const filter = document.querySelector("#summary-filter");
  const statusFilter = document.querySelector("#summary-status-filter");
  const summaryControls = document.querySelector("#summary-controls");
  const summaryUnloaded = document.querySelector("#summary-unloaded");
  const summaryEmpty = document.querySelector("#summary-empty");
  summaryControls.hidden = !summaryLoaded;
  summaryUnloaded.hidden = summaryLoaded;
  summaryEmpty.hidden = true;
  if (!summaryLoaded) {
    summaryList.replaceChildren();
    document.querySelector("#summary-count").textContent = "0 MODIFICADOS · 0 SIN MODIFICAR";
    return;
  }
  const allMods = getAllMods();
  const completedCount = allMods.filter((item) => item.done).length;
  const untouchedCount = allMods.length - completedCount;
  const query = search.value.trim().toLocaleLowerCase("es");
  const selectedCategory = filter.value;
  const selectedStatus = statusFilter.value;
  const results = allMods.filter((item) =>
    (selectedCategory === "all" || item.category.id === selectedCategory) &&
    (selectedStatus === "all" || (selectedStatus === "done" ? item.done : !item.done)) &&
    `${item.label} ${item.note} ${item.category.name}`.toLocaleLowerCase("es").includes(query)
  );
  summaryList.replaceChildren();
  const grouped = new Map();
  results.forEach((item) => {
    if (!grouped.has(item.category.id)) grouped.set(item.category.id, []);
    grouped.get(item.category.id).push(item);
  });
  grouped.forEach((items, categoryId) => {
    const category = items[0].category;
    const section = createElement("section", "summary-group");
    const heading = createElement("div", "summary-group-heading");
    const image = document.createElement("img");
    image.src = category.image;
    image.alt = "";
    image.loading = "lazy";
    image.addEventListener("error", () => { image.hidden = true; }, { once: true });
    const categoryDone = items.filter((item) => item.done).length;
    heading.append(
      image,
      createElement("h3", "", category.name),
      createElement("span", "", `${categoryDone} modificados · ${items.length - categoryDone} sin modificar`)
    );
    const cards = createElement("div", "summary-cards");
    items.forEach((item) => {
      const card = createElement("article", "summary-card");
      const picture = createElement("div", "summary-picture");
      const pictureImage = document.createElement("img");
      pictureImage.src = specificItemImages[item.id] ?? steamScreenshots[(item.categoryIndex + item.itemIndex) % steamScreenshots.length];
      pictureImage.alt = "";
      pictureImage.loading = "lazy";
      pictureImage.addEventListener("error", () => { pictureImage.hidden = true; }, { once: true });
      picture.append(pictureImage, createElement("span", "", item.label.slice(0, 2).toUpperCase()));
      const content = createElement("div", "summary-content");
      content.append(createElement("h4", "", item.label));
      content.append(createElement("span", `summary-state${item.done ? " is-done" : ""}`, item.done ? "Mod instalado" : "Sin modificar"));
      content.append(createElement("p", "summary-note", item.note || "Sin nota añadida."));
      card.classList.toggle("is-done", item.done);
      card.append(picture, content);
      cards.append(card);
    });
    section.append(heading, cards);
    section.dataset.category = categoryId;
    summaryList.append(section);
  });
  document.querySelector("#summary-count").textContent = `${completedCount} MODIFICADOS · ${untouchedCount} SIN MODIFICAR`;
  summaryEmpty.hidden = results.length > 0;
}

function renderLanding() {
  const completed = getCompletedMods().length;
  const total = knownItemIds.size + state.customItems.length;
  document.querySelector("#landing-progress").textContent = `${completed} / ${total}`;
}

function renderCurrentPage() {
  const page = document.body.dataset.page;
  if (page === "modify") render();
  if (page === "summary") renderSummary();
  if (page === "home") renderLanding();
}

populateFilters();
if (document.body.dataset.page !== "summary") {
  try {
    loadState();
  } catch (error) {
    console.error("No se pudo acceder al almacenamiento local.", error);
    setStatus("El almacenamiento local no está disponible. Exporta un JSON para guardar tus cambios.", true);
  }
}
renderCurrentPage();

if (searchInput) searchInput.addEventListener("input", render);
if (categoryFilter) categoryFilter.addEventListener("change", render);
if (document.querySelector("#summary-search")) {
  document.querySelector("#summary-search").addEventListener("input", renderSummary);
  document.querySelector("#summary-filter").addEventListener("change", renderSummary);
  document.querySelector("#summary-status-filter").addEventListener("change", renderSummary);
  document.querySelector("#summary-file").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const progress = validateProgress(parsed);
      state.checked = progress.checked;
      state.notes = progress.notes;
      state.customItems = progress.customItems;
      summaryLoaded = true;
      renderSummary();
      setStatus(`Configuración cargada: ${file.name}. Este archivo no se guardó en GitHub ni en el navegador.`);
    } catch (error) {
      console.error("No se pudo cargar la configuración para el resumen.", error);
      setStatus(error instanceof SyntaxError ? "El archivo no contiene JSON válido." : error.message, true);
    } finally {
      event.target.value = "";
    }
  });
}
const customForm = document.querySelector("#custom-form");
if (customForm) customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("#custom-name");
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }
  state.customItems.push({
    id: makeId(),
    name,
    categoryId: document.querySelector("#custom-category").value,
    done: false,
    note: ""
  });
  const saved = persistState();
  renderCurrentPage();
  nameInput.value = "";
  nameInput.focus();
  if (saved) setStatus("Mod personalizado añadido al checklist.");
});
const exportButton = document.querySelector("#export-button");
if (exportButton) exportButton.addEventListener("click", exportProgress);
const resetButton = document.querySelector("#reset-button");
if (resetButton) resetButton.addEventListener("click", () => {
  if (!window.confirm("Esto borrará todas las marcas y mods personalizados guardados en este navegador. ¿Continuar?")) return;
  state.checked = {};
  state.notes = {};
  state.customItems = [];
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("No se pudo borrar el progreso guardado.", error);
    setStatus("No se pudo borrar el progreso del almacenamiento del navegador.", true);
    return;
  }
  renderCurrentPage();
  setStatus("Se borró el progreso guardado en este navegador.");
});
